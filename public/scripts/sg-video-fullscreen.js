/* Skill Graphics — tap any content video to fill the device with sound.

   Mobile/iOS: do NOT move the in-page <video> (Safari keeps compositing it
   in the original card). Do NOT request native fullscreen on the video
   (letterboxed system player). Instead clone the source into a body-level
   overlay sized to the visual viewport, object-fit:cover.

   Desktop: same overlay; optionally fullscreen the overlay element. */
(function () {
  var OVERLAY_Z = "2147483646";

  function eligible(v) {
    if (!v || v.tagName !== "VIDEO") return false;
    if (v.id === "sg-fs-player") return false;
    if (v.hasAttribute("data-no-fullscreen")) return false;
    if (v.classList.contains("ais-video") || v.classList.contains("sg-vhero-v")) return false;
    if (v.closest(".sg-vhero")) return false;
    // Ambient hero loops and cards that are themselves links — tapping
    // those must navigate / scroll, not open fullscreen.
    if (v.closest("a, header, [data-nav-hero]")) return false;
    return true;
  }

  function isMobile() {
    try {
      if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return true;
      if (window.matchMedia("(max-width: 1024px)").matches) return true;
    } catch (e) {}
    var ua = navigator.userAgent || "";
    if (/iP(hone|ad|od)/.test(ua)) return true;
    if (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) return true;
    return "ontouchstart" in window;
  }

  function srcOf(v) {
    if (v.currentSrc) return v.currentSrc;
    if (v.getAttribute("src")) return v.getAttribute("src");
    if (v.dataset && v.dataset.lazySrc) return v.dataset.lazySrc;
    var s = v.querySelector("source[src], source");
    return s ? s.getAttribute("src") || s.src : "";
  }

  var overlay = null;
  var closeBtn = null;
  var player = null;
  var sourceVideo = null;
  var overlayNative = false;
  var lastOpen = 0;
  var vvCleanup = null;
  var lockedY = 0;

  (function injectFsCss() {
    if (document.getElementById("sg-fs-css")) return;
    var s = document.createElement("style");
    s.id = "sg-fs-css";
    s.textContent =
      "html.sg-video-fs,html.sg-video-fs body{overflow:hidden!important;overscroll-behavior:none;touch-action:none}" +
      "html.sg-video-fs .sg-contact-tab,html.sg-video-fs #sg-nav,html.sg-video-fs #mnav-bar,html.sg-video-fs #mnav-menu,html.sg-video-fs #sg-menu,html.sg-video-fs #mm-sticky-cta{visibility:hidden!important;pointer-events:none!important;opacity:0!important}" +
      "#sg-fs-overlay{display:none;position:fixed;top:0;left:0;width:100%;height:100%;padding:0;margin:0;overflow:hidden;z-index:" +
      OVERLAY_Z +
      ";background:#000;-webkit-transform:translateZ(0);transform:translateZ(0)}" +
      "#sg-fs-overlay video,#sg-fs-player{position:absolute;top:0;left:0;width:100%!important;height:100%!important;max-width:none!important;max-height:none!important;object-fit:cover!important;object-position:center!important;background:#000;border:0}" +
      "#sg-fs-player.sg-fs-rotate{top:50%!important;left:50%!important;transform:translate(-50%,-50%) rotate(90deg);object-fit:cover!important}" +
      ".sg-fs-hit{position:absolute;inset:0;z-index:6;border:0;padding:0;margin:0;background:transparent;cursor:pointer;-webkit-tap-highlight-color:transparent;appearance:none;-webkit-appearance:none;-webkit-transform:translateZ(1px);transform:translateZ(1px);pointer-events:auto;touch-action:pan-y}";
    document.head.appendChild(s);
  })();

  function hideChrome() {
    document.documentElement.classList.add("sg-video-fs");
  }

  function showChrome() {
    document.documentElement.classList.remove("sg-video-fs");
  }

  function forceMenusClosed() {
    var mnav = document.getElementById("mnav-menu");
    if (mnav) {
      mnav.setAttribute("data-open", "0");
      mnav.style.opacity = "0";
      mnav.style.transform = "translateY(-14px)";
      mnav.style.pointerEvents = "none";
    }
    var burger = document.getElementById("mnav-burger");
    if (burger) burger.setAttribute("aria-expanded", "false");
    [].forEach.call(document.querySelectorAll(".mnav-bar"), function (b, i) {
      b.style.transform = "none";
      if (i === 1) b.style.opacity = "1";
    });
    var sg = document.getElementById("sg-menu");
    if (sg) sg.setAttribute("data-open", "0");
    var sgBurger = document.getElementById("sg-burger");
    if (sgBurger) sgBurger.setAttribute("aria-expanded", "false");
  }

  var eatClicksUntil = 0;
  function armClickEater() {
    eatClicksUntil = Date.now() + 600;
  }
  function eatGhost(e) {
    if (Date.now() > eatClicksUntil) return;
    e.preventDefault();
    e.stopPropagation();
    if (e.stopImmediatePropagation) e.stopImmediatePropagation();
  }
  document.addEventListener("click", eatGhost, true);
  document.addEventListener("touchend", eatGhost, true);
  document.addEventListener("touchstart", eatGhost, true);

  function lockScroll() {
    lockedY = window.scrollY || window.pageYOffset || 0;
    document.body.style.position = "fixed";
    document.body.style.top = "-" + lockedY + "px";
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
  }

  function unlockScroll() {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
    document.body.style.overflow = "";
    window.scrollTo(0, lockedY);
  }

  function sizeOverlay() {
    if (!overlay) return;
    var vv = window.visualViewport;
    var w = window.innerWidth;
    var h = window.innerHeight;
    var t = 0;
    var l = 0;
    if (vv && vv.width && vv.height) {
      w = vv.width;
      h = vv.height;
      t = typeof vv.offsetTop === "number" ? vv.offsetTop : 0;
      l = typeof vv.offsetLeft === "number" ? vv.offsetLeft : 0;
    }
    overlay.style.top = t + "px";
    overlay.style.left = l + "px";
    overlay.style.width = w + "px";
    overlay.style.height = h + "px";
    applyPlayerFit();
  }

  function bindViewport() {
    unbindViewport();
    sizeOverlay();
    var onVV = function () {
      sizeOverlay();
    };
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", onVV);
      window.visualViewport.addEventListener("scroll", onVV);
    }
    window.addEventListener("resize", onVV);
    window.addEventListener("orientationchange", onVV);
    vvCleanup = function () {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", onVV);
        window.visualViewport.removeEventListener("scroll", onVV);
      }
      window.removeEventListener("resize", onVV);
      window.removeEventListener("orientationchange", onVV);
    };
  }

  function unbindViewport() {
    if (vvCleanup) {
      vvCleanup();
      vvCleanup = null;
    }
  }

  function videoSize() {
    if (player && player.videoWidth && player.videoHeight) {
      return { w: player.videoWidth, h: player.videoHeight };
    }
    if (sourceVideo && sourceVideo.videoWidth && sourceVideo.videoHeight) {
      return { w: sourceVideo.videoWidth, h: sourceVideo.videoHeight };
    }
    var host = sourceVideo && sourceVideo.closest("[data-sg-fs-host]");
    if (host) {
      var cs = window.getComputedStyle(host);
      var ar = (cs.aspectRatio || "").replace(/\s+/g, "");
      if (ar === "16/9") return { w: 16, h: 9 };
      if (ar === "9/16") return { w: 9, h: 16 };
      var n = parseFloat(cs.aspectRatio);
      if (n > 1.2) return { w: 16, h: 9 };
      if (n > 0 && n < 0.85) return { w: 9, h: 16 };
    }
    return { w: 0, h: 0 };
  }

  function tryLockLandscape() {
    try {
      var o = screen.orientation;
      if (o && o.lock) {
        var r = o.lock("landscape");
        if (r && r.catch) r.catch(function () {});
      }
    } catch (e) {}
  }

  function unlockOrientation() {
    try {
      var o = screen.orientation;
      if (o && o.unlock) o.unlock();
    } catch (e) {}
  }

  function applyPlayerFit() {
    if (!player) return;
    var size = videoSize();
    var landscapeVid = size.w > 0 && size.w >= size.h;
    var vw = overlay ? overlay.clientWidth : window.innerWidth;
    var vh = overlay ? overlay.clientHeight : window.innerHeight;
    var portraitScreen = vh > vw;
    player.style.setProperty("object-fit", "cover", "important");
    player.style.setProperty("object-position", "center", "important");
    if (landscapeVid && portraitScreen) {
      player.classList.add("sg-fs-rotate");
      player.style.setProperty("width", vh + "px", "important");
      player.style.setProperty("height", vw + "px", "important");
      tryLockLandscape();
    } else {
      player.classList.remove("sg-fs-rotate");
      player.style.removeProperty("width");
      player.style.removeProperty("height");
    }
  }

  function ensureOverlay() {
    if (overlay && overlay.parentNode === document.body) return overlay;
    if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
    overlay = document.createElement("div");
    overlay.id = "sg-fs-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Video playback");
    overlay.style.zIndex = OVERLAY_Z;
    closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.setAttribute("aria-label", "Close video");
    closeBtn.innerHTML = "&times;";
    closeBtn.style.cssText =
      "position:absolute;top:max(12px,env(safe-area-inset-top));right:max(12px,env(safe-area-inset-right));z-index:3;width:44px;height:44px;border:0;border-radius:50%;background:rgba(255,255,255,.16);color:#fff;font:300 32px/1 sans-serif;cursor:pointer;-webkit-appearance:none;";
    var onClose = function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (e.stopImmediatePropagation) e.stopImmediatePropagation();
      exitFs();
    };
    closeBtn.addEventListener("click", onClose);
    closeBtn.addEventListener("touchend", onClose, { passive: false });
    overlay.appendChild(closeBtn);
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) exitFs();
    });
    document.body.appendChild(overlay);
    return overlay;
  }

  function makePlayer() {
    if (player && player.parentNode) player.parentNode.removeChild(player);
    player = document.createElement("video");
    player.id = "sg-fs-player";
    player.setAttribute("playsinline", "");
    player.setAttribute("webkit-playsinline", "");
    player.setAttribute("data-no-fullscreen", "");
    player.setAttribute("data-no-lazy", "");
    player.playsInline = true;
    player.setAttribute("controlsList", "nodownload noremoteplayback noplaybackrate nofullscreen");
    player.setAttribute("x-webkit-airplay", "deny");
    try {
      player.disablePictureInPicture = true;
      player.disableRemotePlayback = true;
    } catch (e) {}
    player.addEventListener("click", function (e) {
      e.stopPropagation();
      if (player.paused) {
        var p = player.play();
        if (p && p.catch) p.catch(function () {});
      } else {
        player.pause();
      }
    });
    return player;
  }

  function requestOverlayNative(el) {
    if (!el || isMobile()) return;
    var fn = el.requestFullscreen || el.webkitRequestFullscreen || el.msRequestFullscreen;
    if (!fn) return;
    try {
      var r = fn.call(el);
      if (r && r.catch) r.catch(function () {});
    } catch (e) {}
  }

  function exitNative() {
    var fn =
      document.exitFullscreen ||
      document.webkitExitFullscreen ||
      document.msExitFullscreen;
    if (!fn) return;
    try {
      var r = fn.call(document);
      if (r && r.catch) r.catch(function () {});
    } catch (e) {}
  }

  function enterOverlay(v) {
    if (!v) return;
    if (sourceVideo === v && overlay && overlay.style.display === "block") return;
    if (sourceVideo) exitFs();
    var url = srcOf(v);
    if (!url) return;
    sourceVideo = v;
    try {
      v.pause();
    } catch (e) {}
    var ov = ensureOverlay();
    var pl = makePlayer();
    ov.insertBefore(pl, closeBtn);
    ov.style.display = "block";
    pl.src = url;
    var t = v.currentTime;
    if (t && !isNaN(t)) {
      var seek = function () {
        try {
          pl.currentTime = t;
        } catch (e) {}
      };
      pl.addEventListener("loadedmetadata", seek, { once: true });
    }
    pl.addEventListener("loadedmetadata", function () {
      applyPlayerFit();
    });
    pl.muted = false;
    pl.loop = true;
    hideChrome();
    lockScroll();
    bindViewport();
    applyPlayerFit();
    var p = pl.play();
    if (p && p.catch) {
      p.catch(function () {
        pl.muted = true;
        var p2 = pl.play();
        if (p2 && p2.catch) p2.catch(function () {});
      });
    }
    requestOverlayNative(ov);
  }

  function exitFs() {
    if (!sourceVideo && !player) return;
    var src = sourceVideo;
    sourceVideo = null;
    unbindViewport();
    if (player) {
      try {
        player.pause();
      } catch (e) {}
      if (player.parentNode) player.parentNode.removeChild(player);
      player.removeAttribute("src");
      try {
        player.load();
      } catch (e) {}
      player = null;
    }
    if (overlay) {
      overlay.style.display = "none";
      overlay.style.top = "";
      overlay.style.left = "";
      overlay.style.width = "";
      overlay.style.height = "";
    }
    forceMenusClosed();
    showChrome();
    unlockScroll();
    unlockOrientation();
    armClickEater();
    if (src) {
      src.muted = true;
      src.defaultMuted = true;
      src.setAttribute("muted", "");
      var p = src.play();
      if (p && p.catch) p.catch(function () {});
    }
    if (overlayNative) {
      overlayNative = false;
      exitNative();
    }
  }

  function wireHit(v) {
    if (!eligible(v) || v.dataset.sgHit) return;
    var parent = v.parentElement;
    if (!parent) return;
    if (parent.querySelector("a, button:not(.sg-fs-hit)")) return;
    v.dataset.sgHit = "1";
    v.style.pointerEvents = "none";
    var cs = window.getComputedStyle(parent);
    if (cs.position === "static") parent.style.position = "relative";
    var hit = document.createElement("button");
    hit.type = "button";
    hit.className = "sg-fs-hit";
    hit.setAttribute("aria-label", "Watch fullscreen");
    var startX = 0;
    var startY = 0;
    var moved = false;
    var openedFromTouch = false;
    function openIfFresh() {
      var now = Date.now();
      if (now - lastOpen < 400) return;
      lastOpen = now;
      enterOverlay(v);
    }
    hit.addEventListener(
      "touchstart",
      function (e) {
        var t = e.touches && e.touches[0];
        if (!t) return;
        startX = t.clientX;
        startY = t.clientY;
        moved = false;
        openedFromTouch = false;
      },
      { passive: true }
    );
    hit.addEventListener(
      "touchmove",
      function (e) {
        var t = e.touches && e.touches[0];
        if (!t) return;
        var dx = t.clientX - startX;
        var dy = t.clientY - startY;
        if (dx * dx + dy * dy > 144) moved = true;
      },
      { passive: true }
    );
    hit.addEventListener(
      "touchend",
      function (e) {
        if (moved) return;
        e.preventDefault();
        e.stopPropagation();
        openedFromTouch = true;
        openIfFresh();
      },
      { passive: false }
    );
    hit.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (openedFromTouch) {
        openedFromTouch = false;
        return;
      }
      openIfFresh();
    });
    if (v.nextSibling) parent.insertBefore(hit, v.nextSibling);
    else parent.appendChild(hit);
  }

  function passThrough(v) {
    if (!v || v.tagName !== "VIDEO") return;
    if (v.id === "sg-fs-player") return;
    v.style.pointerEvents = "none";
  }

  function scanHits() {
    [].forEach.call(document.querySelectorAll("video"), function (v) {
      if (eligible(v)) wireHit(v);
      else passThrough(v);
    });
  }

  scanHits();
  var mo = new MutationObserver(scanHits);
  mo.observe(document.documentElement, { childList: true, subtree: true });
  setTimeout(scanHits, 400);
  setTimeout(scanHits, 1600);

  document.addEventListener(
    "webkitbeginfullscreen",
    function (e) {
      var v = e.target;
      if (!v || v.tagName !== "VIDEO") return;
      if (v.id === "sg-fs-player") {
        if (v.webkitExitFullscreen) {
          try {
            v.webkitExitFullscreen();
          } catch (err) {}
        }
        return;
      }
      if (!eligible(v)) {
        if (v.webkitExitFullscreen) {
          try {
            v.webkitExitFullscreen();
          } catch (err) {}
        }
        return;
      }
      if (v.webkitExitFullscreen) {
        try {
          v.webkitExitFullscreen();
        } catch (err) {}
      }
      enterOverlay(v);
    },
    true
  );

  document.addEventListener("fullscreenchange", function () {
    var fsEl = document.fullscreenElement || document.webkitFullscreenElement;
    if (fsEl && overlay && fsEl === overlay) overlayNative = true;
    else if (!fsEl && overlayNative) {
      overlayNative = false;
      exitFs();
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && sourceVideo) {
      e.preventDefault();
      exitFs();
    }
  });
})();
