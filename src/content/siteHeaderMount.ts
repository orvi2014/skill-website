export function mountSiteHeader(): () => void {
  const cleanups: Array<() => void> = [];

  const menu = document.getElementById("sg-menu");
  const burger = document.getElementById("sg-burger");
  const closeBtn = document.getElementById("sg-menu-close");

  const getFocusable = (): HTMLElement[] =>
    menu
      ? Array.from(
          menu.querySelectorAll<HTMLElement>(
            'a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])'
          )
        )
      : [];

  const setMenu = (open: boolean) => {
    if (menu) menu.setAttribute("data-open", open ? "1" : "0");
    burger?.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.style.overflow = open ? "hidden" : "";
    if (open) {
      window.setTimeout(() => (closeBtn ?? getFocusable()[0])?.focus(), 10);
    } else {
      burger?.focus();
    }
    navScroll();
  };
  const onBurger = () => setMenu(menu?.getAttribute("data-open") !== "1");
  const onClose = () => setMenu(false);
  burger?.addEventListener("click", onBurger);
  closeBtn?.addEventListener("click", onClose);
  const menuLinks = Array.from(document.querySelectorAll(".sg-menu-link"));
  menuLinks.forEach((a) => a.addEventListener("click", onClose));

  const onKeydown = (e: KeyboardEvent) => {
    if (menu?.getAttribute("data-open") !== "1") return;
    if (e.key === "Escape") {
      onClose();
      return;
    }
    if (e.key !== "Tab") return;
    const focusable = getFocusable();
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };
  document.addEventListener("keydown", onKeydown);

  cleanups.push(() => {
    burger?.removeEventListener("click", onBurger);
    closeBtn?.removeEventListener("click", onClose);
    menuLinks.forEach((a) => a.removeEventListener("click", onClose));
    document.removeEventListener("keydown", onKeydown);
    document.body.style.overflow = "";
  });

  // ---- open the contact modal from any "contact" link on the page ----
  const onContactClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement | null;
    const link = target?.closest<HTMLAnchorElement>('a[href="#contact"], a[href="/#contact"]');
    if (!link) return;
    e.preventDefault();
    window.__openContactModal?.();
  };
  document.addEventListener("click", onContactClick);
  cleanups.push(() => document.removeEventListener("click", onContactClick));

  // ---- open the careers application modal from any "apply" link ----
  const onApplyClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement | null;
    const link = target?.closest<HTMLAnchorElement>('a[href="#apply"], a[href="/#apply"]');
    if (!link) return;
    e.preventDefault();
    window.__openCareerModal?.();
  };
  document.addEventListener("click", onApplyClick);
  cleanups.push(() => document.removeEventListener("click", onApplyClick));

  // ---- open the Calendly popup from any "Book a Meeting" link ----
  const onBookClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement | null;
    const link = target?.closest<HTMLAnchorElement>('a[href="#book"], a[href="/#book"]');
    if (!link) return;
    e.preventDefault();
    window.__openCalendly?.();
  };
  document.addEventListener("click", onBookClick);
  cleanups.push(() => document.removeEventListener("click", onBookClick));

  // ---- scroll to whichever Cases section is actually rendered ----
  // Desktop and mobile layouts both live in the DOM (one hidden via CSS).
  // Cases uses id="cases" on desktop and id="mm-cases-section" on mobile.
  function scrollToVisible(ids: string[]) {
    const el = ids
      .flatMap((id) => Array.from(document.querySelectorAll<HTMLElement>(`#${id}`)))
      .find((c) => c.offsetHeight > 0);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  const onHashSectionClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement | null;
    const link = target?.closest<HTMLAnchorElement>(
      'a[href="#cases"], a[href="/#cases"]'
    );
    if (!link) return;
    const href = link.getAttribute("href") || "";
    // Only intercept when this resolves to staying on the current page —
    // otherwise let the browser navigate there first (handled on arrival
    // by the home page's own mount script).
    if (location.pathname !== "/" && !href.startsWith("#")) return;
    e.preventDefault();
    scrollToVisible(["cases", "mm-cases-section"]);
  };
  document.addEventListener("click", onHashSectionClick);
  cleanups.push(() => document.removeEventListener("click", onHashSectionClick));

  // Reused 1x1 canvas for sampling real pixel colour out of <img>/<video>
  // elements — a plain backgroundColor check is blind to image- and
  // video-based sections, which is most of this site, and was silently
  // defaulting to the wrong logo colour on every one of them.
  let sampleCanvas: HTMLCanvasElement | null = null;
  let sampleCtx: CanvasRenderingContext2D | null = null;
  function pixelLuminance(el: Element, x: number, y: number): number | null {
    const src = el as HTMLImageElement | HTMLVideoElement;
    const naturalW = (src as HTMLVideoElement).videoWidth || (src as HTMLImageElement).naturalWidth;
    const naturalH = (src as HTMLVideoElement).videoHeight || (src as HTMLImageElement).naturalHeight;
    if (!naturalW || !naturalH) return null;
    const rect = el.getBoundingClientRect();
    if (!rect.width || !rect.height) return null;
    // account for object-fit:cover scaling+cropping so the sampled pixel
    // matches what's actually visible, not the raw image coordinate space
    const scale = Math.max(rect.width / naturalW, rect.height / naturalH);
    const renderedW = naturalW * scale;
    const renderedH = naturalH * scale;
    const offsetX = (renderedW - rect.width) / 2;
    const offsetY = (renderedH - rect.height) / 2;
    const srcX = (x - rect.left + offsetX) / scale;
    const srcY = (y - rect.top + offsetY) / scale;
    if (srcX < 0 || srcY < 0 || srcX >= naturalW || srcY >= naturalH) return null;
    if (!sampleCanvas) {
      sampleCanvas = document.createElement("canvas");
      sampleCanvas.width = 1;
      sampleCanvas.height = 1;
      sampleCtx = sampleCanvas.getContext("2d", { willReadFrequently: true });
    }
    if (!sampleCtx) return null;
    try {
      sampleCtx.clearRect(0, 0, 1, 1);
      sampleCtx.drawImage(src as CanvasImageSource, srcX, srcY, 1, 1, 0, 0, 1, 1);
      const d = sampleCtx.getImageData(0, 0, 1, 1).data;
      return (0.2126 * d[0] + 0.7152 * d[1] + 0.0722 * d[2]) / 255;
    } catch (e) {
      return null; // cross-origin taint or not yet decoded — fall through
    }
  }
  function sampleLuminance(x: number, y: number): number {
    const stack = (document.elementsFromPoint?.(x, y) || []) as Element[];
    // Composite front-to-back like the browser actually paints this pixel:
    // a semi-transparent dark scrim over a bright hero photo should read as
    // dark, not get skipped in favour of the brighter image underneath it.
    let accR = 0,
      accG = 0,
      accB = 0;
    let remaining = 1; // how much "reveal budget" is left to paint through
    for (const el of stack) {
      if (remaining < 0.02) break;
      // Nav chrome sits on top of the page; skip it so we sample the canvas
      // behind the header, not the logos / Book a Meeting pill.
      if (el.closest("#sg-nav, #sg-menu, .sg-contact-tab")) continue;
      // Section authors can declare the nav treatment so a light child
      // (e.g. the white Skill Academy card on the black Join Us canvas)
      // cannot flip logos to black-on-black.
      const marked = el.closest("[data-nav-bg]");
      if (marked) return marked.getAttribute("data-nav-bg") === "light" ? 0.85 : 0.12;
      if (el.closest(".sa-card")) continue;
      const cs = getComputedStyle(el);
      if (cs.visibility === "hidden" || parseFloat(cs.opacity) === 0) continue;
      if (el.tagName === "IMG" || el.tagName === "VIDEO") {
        const lum = pixelLuminance(el, x, y);
        if (lum !== null) {
          const v = lum * 255;
          accR += remaining * v;
          accG += remaining * v;
          accB += remaining * v;
          remaining = 0;
          break;
        }
      }
      const bg = cs.backgroundColor;
      const mm = bg && bg.match(/rgba?\(([^)]+)\)/);
      if (mm) {
        const pp = mm[1].split(",").map(parseFloat);
        const aa = (pp[3] === undefined ? 1 : pp[3]) * (parseFloat(cs.opacity) || 1);
        if (aa > 0.02) {
          accR += remaining * aa * pp[0];
          accG += remaining * aa * pp[1];
          accB += remaining * aa * pp[2];
          remaining *= 1 - aa;
        }
      }
    }
    // Whatever's left unaccounted for (nothing conclusive found through the
    // whole stack) — assume dark, the site's default tone.
    accR += remaining * 26;
    accG += remaining * 26;
    accB += remaining * 26;
    return (0.2126 * accR + 0.7152 * accG + 0.0722 * accB) / 255;
  }

  function navScroll() {
    const nav = document.getElementById("sg-nav");
    // Both the desktop and mobile layouts can have a [data-nav-hero]
    // element in the DOM at once (one hidden via CSS depending on
    // viewport) — a hidden ancestor makes offsetHeight read 0, so pick
    // whichever candidate is actually rendered.
    const hero = Array.from(document.querySelectorAll<HTMLElement>("[data-nav-hero]")).find(
      (el) => el.offsetHeight > 0
    );
    if (!nav || !hero) return;
    const menuEl = document.getElementById("sg-menu");
    const menuOpen = menuEl && menuEl.getAttribute("data-open") === "1";
    const y = window.scrollY;
    const solid = y > hero.offsetHeight - 90;
    // Sample the real background behind the nav on every call, not just once
    // "solid" — pages with a light-colored hero (e.g. case studies fall back
    // to a pale gray) need the correct logo color from the very first paint,
    // not just after scrolling past the hero.
    const lum = sampleLuminance(Math.round(innerWidth * 0.5), 74);
    const darkBg = lum < 0.5;

    const key = `${solid ? "s" : "t"}${menuOpen ? "m" : ""}${darkBg ? "d" : "l"}`;
    if (nav.dataset.navstate === key) return;
    nav.dataset.navstate = key;
    if (nav.style.transition.indexOf("transform") < 0) {
      nav.style.transition = "background .3s ease,padding .3s ease,transform .45s cubic-bezier(.4,0,.2,1)";
    }
    nav.style.transform = "translateY(0)";
    const bars = nav.querySelectorAll<HTMLElement>(".sg-bar");
    nav.style.background = "transparent";
    nav.style.backdropFilter = "none";
    nav.style.borderBottom = "none";
    nav.style.padding = "26px 40px";
    nav.dataset.logobg = darkBg ? "dark" : "light";
    const darkBars = !menuOpen && !darkBg;
    bars.forEach((b) => {
      b.style.background = darkBars ? "#141414" : "#fff";
    });
  }

  // Run navScroll() at most once per animation frame, only while the user
  // is actually scrolling/resizing — not continuously forever. The previous
  // free-running rAF loop called an expensive elementFromPoint+getComputedStyle
  // probe up to 60x/sec even when idle, which showed up as scroll jank on
  // lower-end mobile hardware.
  let ticking = false;
  const onScrollOrResize = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      navScroll();
      ticking = false;
    });
  };
  navScroll();
  window.addEventListener("scroll", onScrollOrResize, { passive: true });
  window.addEventListener("resize", onScrollOrResize);
  cleanups.push(() => {
    window.removeEventListener("scroll", onScrollOrResize);
    window.removeEventListener("resize", onScrollOrResize);
  });

  return () => cleanups.forEach((fn) => fn());
}
