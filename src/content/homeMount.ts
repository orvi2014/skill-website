import { mountAiStudio } from "./aiStudio";
import { mountSiteHeader } from "./siteHeaderMount";
import { mountHomeMobile } from "./homeMobile";
import { mountHomeFooter } from "./homeFooter";

declare global {
  interface Window {
    SGVHero?: { mount: (clips: string[]) => () => void };
    SGToolCursor?: { mount: () => () => void };
  }
}

function vSmooth(a: number, b: number, t: number) {
  t = Math.min(Math.max((t - a) / (b - a), 0), 1);
  return t * t * (3 - 2 * t);
}

function fixVideos() {
  document.querySelectorAll<HTMLVideoElement>("video").forEach((v) => {
    if (v.id === "sg-fs-player" || v.closest("#sg-fs-overlay")) return;
    v.muted = true;
    v.defaultMuted = true;
    v.setAttribute("muted", "");
    v.playsInline = true;
    v.setAttribute("playsinline", "");
    if (v.closest(".sg-vhero")) return;
    if (v.closest(".mobile-layout")) return; // hidden on desktop viewports; don't waste bandwidth
    if (v.offsetParent === null) return; // hidden via display:none (e.g. mobile-layout toggled off)
    if (v.paused) {
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
    }
  });
}

export function mountHome(): () => void {
  const cleanups: Array<() => void> = [];

  // ---- shared header (nav scroll behavior + mobile menu) ----
  cleanups.push(mountSiteHeader());

  // ---- correct #cases arrivals from other pages. Desktop and mobile
  // trees both live in the DOM (one hidden via CSS); native hash-scroll
  // can land on the hidden copy — re-scroll to the visible one. ----
  if (window.location.hash === "#cases") {
    window.setTimeout(() => {
      const el = ["cases", "mm-cases-section"]
        .flatMap((id) => Array.from(document.querySelectorAll<HTMLElement>(`#${id}`)))
        .find((c) => c.offsetHeight > 0);
      el?.scrollIntoView({ behavior: "instant" as ScrollBehavior, block: "start" });
    }, 50);
  }

  // ---- mobile-specific layout (nav, AI Studio, etc.) ----
  cleanups.push(mountHomeMobile());

  // ---- keep videos playing ----
  let vn = 0;
  const vv = window.setInterval(() => {
    fixVideos();
    if (++vn > 30) window.clearInterval(vv);
  }, 350);
  cleanups.push(() => window.clearInterval(vv));
  fixVideos();

  // ---- photo hero slideshow ----
  let photoIdx = 0;
  const photoTimer = window.setInterval(() => {
    const slides = document.querySelectorAll<HTMLElement>(".sg-photo-slide");
    const dots = document.querySelectorAll<HTMLElement>(".sg-photo-dot");
    if (!slides.length) return;
    photoIdx = (photoIdx + 1) % slides.length;
    slides.forEach((s, i) => {
      s.style.opacity = i === photoIdx ? "1" : "0";
      s.setAttribute("data-active", i === photoIdx ? "1" : "0");
    });
    dots.forEach((d, i) => {
      d.style.opacity = i === photoIdx ? "1" : "0.4";
    });
  }, 5000);
  cleanups.push(() => window.clearInterval(photoTimer));

  // ---- video hero playlist ----
  const vpl = [
    "/assets/video-hero-1.mp4",
    "/assets/video-hero-2.mp4",
    "/assets/video-hero-3.mp4",
    "/assets/video-hero-4.mp4",
  ];
  if (window.SGVHero) {
    cleanups.push(window.SGVHero.mount(vpl));
  } else {
    let tries = 0;
    const waitForVHero = window.setInterval(() => {
      if (window.SGVHero) {
        window.clearInterval(waitForVHero);
        cleanups.push(window.SGVHero.mount(vpl));
      } else if (++tries > 40) {
        window.clearInterval(waitForVHero);
      }
    }, 125);
    cleanups.push(() => window.clearInterval(waitForVHero));
  }

  // ---- AI Studio (embedded) ----
  cleanups.push(mountAiStudio());

  // ---- Future Vision: scroll-zoom globe (after Operations) ----
  function visionZoom() {
    if (window.innerWidth < 820) return;
    const wrap = document.getElementById("vision");
    const pin = document.getElementById("vision-pin");
    const stage = document.getElementById("vision-stage");
    const globe = document.getElementById("vision-globe");
    if (!wrap || !pin || !stage || !globe) return;

    const globeDist = Math.round(window.innerHeight * 2.2);
    const wanted = Math.round(globeDist + window.innerHeight);
    if (wrap.dataset.h !== String(wanted)) {
      wrap.style.height = `${wanted}px`;
      wrap.dataset.h = String(wanted);
    }
    pin.style.position = "sticky";
    pin.style.height = "100vh";

    const rect = wrap.getBoundingClientRect();
    if (rect.bottom < -40 || rect.top > window.innerHeight + 40) return;
    const total = wrap.offsetHeight - window.innerHeight;
    const scrolled = Math.min(Math.max(-rect.top, 0), total);
    const gp = total > 0 ? scrolled / total : 0;
    if (wrap.dataset.gp === gp.toFixed(3)) return;
    wrap.dataset.gp = gp.toFixed(3);

    const head = document.getElementById("vision-head");
    const env = document.getElementById("vision-env");
    const stars = document.getElementById("vision-stars");

    // Zoom in from Operations → hold → soft exit into Join
    const emerge = vSmooth(0.0, 0.28, gp);
    const shrink = vSmooth(0.88, 1, gp);
    const gs = (0.07 + 0.95 * emerge) * (1 - 0.92 * shrink);
    globe.style.transform = `scale(${gs.toFixed(3)})`;
    globe.style.opacity = (
      vSmooth(0.02, 0.12, gp) * (1 - vSmooth(0.92, 1, gp))
    ).toFixed(2);

    const envA = vSmooth(0.3, 0.42, gp) * (1 - vSmooth(0.86, 0.94, gp));
    if (env) env.style.opacity = envA.toFixed(2);
    if (stars) stars.style.opacity = (0.75 * envA).toFixed(2);
    if (head) head.style.opacity = envA.toFixed(2);

    const wins = [
      [0.38, 0.48],
      [0.48, 0.58],
      [0.58, 0.68],
    ];
    const pts = document.querySelectorAll<HTMLElement>("#vision-stage .vpoint");
    const outAll = 1 - vSmooth(0.86, 0.94, gp);
    pts.forEach((el, i) => {
      const w = wins[i] || [0, 0.1];
      const a = vSmooth(w[0], w[1], gp);
      el.style.opacity = (a * outAll).toFixed(2);
      el.style.transform = `translateY(${((1 - a) * 22).toFixed(1)}px)`;
    });
  }

  // ---- cases: infinite marquee ----
  let casesX = 0;
  let casesPaused = false;
  const cwrap = document.getElementById("cases-wrap");
  const onCasesEnter = () => {
    casesPaused = true;
  };
  const onCasesLeave = () => {
    casesPaused = false;
  };
  cwrap?.addEventListener("mouseenter", onCasesEnter);
  cwrap?.addEventListener("mouseleave", onCasesLeave);
  cleanups.push(() => {
    cwrap?.removeEventListener("mouseenter", onCasesEnter);
    cwrap?.removeEventListener("mouseleave", onCasesLeave);
  });
  function casesMarq() {
    if (window.innerWidth <= 640) return; // desktop-only marquee; hidden on mobile
    const track = document.getElementById("cases-track");
    if (!track) return;
    if (!casesPaused) {
      casesX -= 0.85;
      const first = track.firstElementChild as HTMLElement | null;
      if (first) {
        const fw = first.getBoundingClientRect().width;
        if (fw > 0 && -casesX >= fw) {
          track.appendChild(first);
          casesX += fw;
        }
      }
      track.style.transform = `translate3d(${casesX.toFixed(1)}px,0,0)`;
    }
  }

  // ---- rAF loop ----
  let raf = 0;
  const loop = () => {
    casesMarq();
    visionZoom();
    raf = requestAnimationFrame(loop);
  };
  raf = requestAnimationFrame(loop);
  cleanups.push(() => cancelAnimationFrame(raf));

  // ---- cases: chapter-break reveal ----
  (() => {
    const intro = document.getElementById("cases-intro");
    const rule = document.getElementById("cases-rule");
    const head = document.querySelector<HTMLElement>('svg[aria-label="Cases"]');
    if (head) {
      head.style.opacity = "0";
      head.style.transform = "translateY(30px)";
      head.style.transition =
        "opacity 1s cubic-bezier(.2,.7,.2,1) .1s,transform 1s cubic-bezier(.2,.7,.2,1) .1s";
    }
    const sec = intro ? intro.closest("section") : null;
    if (!sec) return;
    const io = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            if (intro) {
              intro.style.opacity = "1";
              (intro as HTMLElement).style.transform = "translateY(0)";
            }
            if (rule) (rule as HTMLElement).style.transform = "scaleX(1)";
            if (head) {
              head.style.opacity = "1";
              head.style.transform = "translateY(0)";
            }
          } else {
            if (intro) {
              intro.style.opacity = "0";
              (intro as HTMLElement).style.transform = "translateY(24px)";
            }
            if (rule) (rule as HTMLElement).style.transform = "scaleX(0)";
            if (head) {
              head.style.opacity = "0";
              head.style.transform = "translateY(30px)";
            }
          }
        });
      },
      { threshold: 0.32 }
    );
    io.observe(sec);
    cleanups.push(() => io.disconnect());
  })();

  // ---- cases: hover reveal (navigation is a native <a href> now) ----
  document.querySelectorAll<HTMLElement>(".cases-card").forEach((card) => {
    const media = card.querySelector<HTMLElement>(":scope > img");
    const logo = card.querySelector<HTMLElement>(".cases-card-logo");
    if (media) {
      media.style.transition = "filter 1.1s cubic-bezier(.2,.7,.2,1),transform 5s linear";
      media.style.filter = "saturate(.7) contrast(.98)";
      media.style.willChange = "filter,transform";
      media.style.transformOrigin = "center";
    }
    const slab = document.createElement("div");
    slab.style.cssText =
      "position:absolute;left:0;right:0;bottom:0;height:42%;z-index:3;pointer-events:none;background:linear-gradient(180deg,rgba(12,12,14,0) 0%,rgba(12,12,14,.78) 46%,rgba(8,8,10,.96) 100%);transform:translateY(101%);transition:transform .6s cubic-bezier(.2,.72,.2,1);";
    card.appendChild(slab);
    const edge = document.createElement("div");
    edge.style.cssText =
      "position:absolute;left:0;width:62%;bottom:42%;height:2px;z-index:5;pointer-events:none;background:#c86ad8;transform:scaleX(0);transform-origin:left;transition:transform .6s cubic-bezier(.2,.72,.2,1);box-shadow:0 0 14px rgba(200,106,216,.75);";
    card.appendChild(edge);
    if (logo) {
      logo.style.transition = "transform .55s cubic-bezier(.2,.72,.2,1)";
      logo.style.zIndex = "6";
    }
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.16)";
      card.style.boxShadow = "0 44px 90px rgba(0,0,0,.42)";
      card.style.zIndex = "8";
      if (media) {
        media.style.filter = "saturate(1.12) contrast(1.03)";
        media.style.transform = "scale(1.08)";
      }
      slab.style.transform = "translateY(0)";
      edge.style.transform = "scaleX(1)";
      if (logo) logo.style.transform = "translateY(-4px)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
      card.style.boxShadow = "";
      card.style.zIndex = "";
      if (media) {
        media.style.filter = "saturate(.7) contrast(.98)";
        media.style.transform = "";
      }
      slab.style.transform = "translateY(101%)";
      edge.style.transform = "scaleX(0)";
      if (logo) logo.style.transform = "";
    });
  });

  // ---- Powering: Operations Core hover wiring ----
  (() => {
    const nodes = document.querySelectorAll<HTMLElement>(".ops-node");
    const readout = document.getElementById("ops-readout");
    if (!nodes.length || !readout) return;
    const def = readout.innerHTML;
    const comet = document.getElementById("ops-comet");
    const cometHead = document.getElementById("ops-comet-head");
    let cometRAF = 0;
    let cometTimer = 0;
    function stopComet() {
      if (cometRAF) {
        cancelAnimationFrame(cometRAF);
        cometRAF = 0;
      }
      if (cometTimer) {
        clearTimeout(cometTimer);
        cometTimer = 0;
      }
      if (comet) (comet as HTMLElement).style.opacity = "0";
    }
    function shootComet(x0: number, y0: number, color: string) {
      if (!comet || !cometHead) return;
      stopComet();
      cometHead.setAttribute("fill", color);
      (comet as HTMLElement).style.filter = `drop-shadow(0 0 7px ${color}) drop-shadow(0 0 16px ${color})`;
      const dur = 520;
      function run() {
        const t0 = performance.now();
        (comet as HTMLElement).style.opacity = "1";
        (function step(now: number) {
          const p = Math.min(1, (now - t0) / dur);
          const e = p * p * (3 - 2 * p);
          cometHead!.setAttribute("cx", String(x0 + (500 - x0) * e));
          cometHead!.setAttribute("cy", String(y0 + (500 - y0) * e));
          (comet as HTMLElement).style.opacity = String(0.25 + 0.75 * (1 - Math.abs(0.5 - p) * 2 * 0.4));
          if (p < 1) {
            cometRAF = requestAnimationFrame(step);
          } else {
            cometTimer = window.setTimeout(run, 240);
          }
        })(t0);
      }
      run();
    }
    nodes.forEach((node) => {
      const i = node.getAttribute("data-i");
      const line = document.getElementById(`ops-line-${i}`);
      const dot = document.getElementById(`ops-dot-${i}`);
      node.addEventListener("mouseenter", () => {
        const a = node.getAttribute("data-a") || "#7B2C8E";
        readout.innerHTML =
          `<p style="font:600 12px 'Space Grotesk';letter-spacing:.2em;text-transform:uppercase;color:${a};margin:0 0 12px;">${node.getAttribute("data-tag")}</p>` +
          `<p style="font-family:'Archivo';font-weight:800;font-size:25px;line-height:1.12;margin:0 0 11px;">${node.getAttribute("data-t")}</p>` +
          `<p style="font:400 14px/1.45 'Space Grotesk';color:#b6b6be;margin:0;">${node.getAttribute("data-d")}</p>`;
        if (line) {
          line.setAttribute("stroke", a);
          line.setAttribute("stroke-width", "2.4");
          (line as unknown as HTMLElement).style.filter = `drop-shadow(0 0 6px ${a})`;
          shootComet(
            parseFloat(line.getAttribute("x2") || "0"),
            parseFloat(line.getAttribute("y2") || "0"),
            a
          );
        }
        if (dot) {
          dot.setAttribute("r", "7");
          dot.setAttribute("opacity", "1");
        }
      });
      node.addEventListener("mouseleave", () => {
        readout.innerHTML = def;
        stopComet();
        if (line) {
          line.setAttribute("stroke", "rgba(255,255,255,.14)");
          line.setAttribute("stroke-width", "1.6");
          (line as unknown as HTMLElement).style.filter = "none";
        }
        if (dot) {
          dot.setAttribute("r", "4");
          dot.setAttribute("opacity", ".7");
        }
      });
    });
  })();

  // ---- Powering: random chip flips ----
  let opsFlip = 0;
  (() => {
    const chips = Array.from(document.querySelectorAll<HTMLElement>(".ops-node .ops-chip"));
    if (!chips.length) return;
    function flipOne() {
      const pool = chips.filter((c) => !c.classList.contains("flipping"));
      if (pool.length) {
        const c = pool[Math.floor(Math.random() * pool.length)];
        c.classList.add("flipping");
        window.setTimeout(() => c.classList.remove("flipping"), 900);
      }
      opsFlip = window.setTimeout(flipOne, 900 + Math.random() * 1600);
    }
    opsFlip = window.setTimeout(flipOne, 1200);
  })();
  cleanups.push(() => window.clearTimeout(opsFlip));

  // ---- Join: rotating discipline word ----
  const rotor = document.getElementById("join-rotor");
  let joinRotor = 0;
  if (rotor) {
    const words = ["Retoucher.", "Video Editor.", "VFX Artist.", "Colourist.", "Creative.", "Storyteller."];
    let i = 0;
    joinRotor = window.setInterval(() => {
      rotor.style.opacity = "0";
      rotor.style.transform = "translateY(-8px)";
      window.setTimeout(() => {
        i = (i + 1) % words.length;
        rotor.textContent = words[i];
        rotor.style.transform = "translateY(8px)";
        requestAnimationFrame(() => {
          rotor.style.opacity = "1";
          rotor.style.transform = "translateY(0)";
        });
      }, 400);
    }, 2200);
    cleanups.push(() => window.clearInterval(joinRotor));
  }

  // ---- custom tool cursor ----
  // sg-tool-cursor.js loads via strategy="lazyOnload" and can still be
  // absent when this mount runs, so poll briefly instead of giving up.
  if (window.SGToolCursor) {
    cleanups.push(window.SGToolCursor.mount());
  } else {
    let cursorTries = 0;
    const waitForCursor = window.setInterval(() => {
      if (window.SGToolCursor) {
        window.clearInterval(waitForCursor);
        cleanups.push(window.SGToolCursor.mount());
      } else if (++cursorTries > 40) {
        window.clearInterval(waitForCursor);
      }
    }, 125);
    cleanups.push(() => window.clearInterval(waitForCursor));
  }

  cleanups.push(mountHomeFooter());

  return () => cleanups.forEach((fn) => fn());
}
