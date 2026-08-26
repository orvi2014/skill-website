import { mountSiteHeader } from "./siteHeaderMount";
import { mountMobileNav } from "./homeMobile";
import { mountPhotoMobile } from "./photoMobile";
import { mountHomeFooter } from "./homeFooter";

declare global {
  interface Window {
    SGToolCursor?: { mount: () => () => void };
  }
}

const ALBUM_BRANDS = Array.from({ length: 8 }, () => "The North Face");
const COLOUR_NAMES = ["Coral", "Yellow", "Olive", "Blue"];

function inView(el: Element | null): boolean {
  if (!el) return false;
  const r = el.getBoundingClientRect();
  const vh = window.innerHeight || 1;
  return r.top < vh * 0.85 && r.bottom > vh * 0.15;
}

function makeKeyboardActivatable(
  el: HTMLElement,
  label: string,
  onActivate: () => void,
  cleanups: Array<() => void>
) {
  el.setAttribute("role", "button");
  el.setAttribute("tabindex", "0");
  el.setAttribute("aria-label", label);
  const onKeydown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onActivate();
    }
  };
  el.addEventListener("click", onActivate);
  el.addEventListener("keydown", onKeydown);
  cleanups.push(() => {
    el.removeEventListener("click", onActivate);
    el.removeEventListener("keydown", onKeydown);
  });
}

export function mountPhoto(): () => void {
  const cleanups: Array<() => void> = [];

  // ---- shared header (nav scroll behavior + mobile menu) ----
  cleanups.push(mountSiteHeader());

  // ---- mobile-specific layout ----
  cleanups.push(mountMobileNav());
  cleanups.push(mountPhotoMobile());

  const intro = document.getElementById("ph-intro");
  const introH = document.getElementById("ph-intro-h");
  const introP = document.getElementById("ph-intro-p");
  const onmSec = document.getElementById("onm-gallery");
  const onmL = document.getElementById("onm-colL");
  const onmR = document.getElementById("onm-colR");
  let onmTravelL = 0;
  let onmTravelR = 0;

  const layoutOnm = () => {
    if (!onmSec || !onmL || !onmR || window.innerWidth <= 640) return;
    const vhh = window.innerHeight || 1;
    const imgsBox = onmSec.querySelector(".onm-imgs") as HTMLElement | null;
    const viewH = imgsBox?.clientHeight || vhh;
    onmTravelL = Math.max(0, onmL.scrollHeight - viewH);
    onmTravelR = Math.max(0, onmR.scrollHeight - viewH);
    const needPx = Math.max(onmTravelL, onmTravelR, vhh * 0.8);
    (onmSec as HTMLElement).style.height = `${Math.round(vhh + needPx)}px`;
  };

  const onScroll = () => {
    if (window.innerWidth <= 640) return; // desktop-only parallax; hidden on mobile
    if (intro && introH && introP) {
      const r = intro.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      let prog = (r.top + r.height / 2 - vh / 2) / vh;
      prog = Math.max(-1.3, Math.min(1.3, prog));
      const travel = Math.max(320, (window.innerWidth || 1) * 0.55);
      const fade = Math.max(0, 1 - Math.abs(prog) * 1.15);
      (introH as HTMLElement).style.transform = `translateX(${(prog * travel).toFixed(1)}px)`;
      (introH as HTMLElement).style.opacity = fade.toFixed(3);
      (introP as HTMLElement).style.transform = `translateX(${(prog * -travel).toFixed(1)}px)`;
      (introP as HTMLElement).style.opacity = fade.toFixed(3);
    }

    if (onmSec && onmL && onmR) {
      const g = onmSec.getBoundingClientRect();
      const vhh = window.innerHeight || 1;
      let p = -g.top / Math.max(1, g.height - vhh);
      p = Math.max(0, Math.min(1, p));
      // Opposite directions; each column stays flush (no empty start/end gap).
      const yL = -p * onmTravelL;
      const yR = -onmTravelR + p * onmTravelR;
      (onmL as HTMLElement).style.transform = `translateY(${yL.toFixed(1)}px)`;
      (onmR as HTMLElement).style.transform = `translateY(${yR.toFixed(1)}px)`;
    }
  };
  let scrollTicking = false;
  const onScrollThrottled = () => {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(() => {
      onScroll();
      scrollTicking = false;
    });
  };
  layoutOnm();
  onScroll();
  window.addEventListener("scroll", onScrollThrottled, { passive: true });
  cleanups.push(() => window.removeEventListener("scroll", onScrollThrottled));
  const onOnmResize = () => {
    layoutOnm();
    onScroll();
  };
  window.addEventListener("resize", onOnmResize, { passive: true });
  cleanups.push(() => window.removeEventListener("resize", onOnmResize));
  // Recalc after images load (scrollHeight may change).
  [onmL, onmR].forEach((col) => {
    if (!col) return;
    col.querySelectorAll("img").forEach((img) => {
      if (img.complete) return;
      img.addEventListener(
        "load",
        () => {
          layoutOnm();
          onScroll();
        },
        { once: true }
      );
    });
  });

  // ---- Still-life carousel ----
  const carouselImgs = Array.from(
    document.querySelectorAll<HTMLImageElement>("#ph-carousel img")
  );
  const dots = Array.from(document.querySelectorAll<HTMLElement>(".ph-dot"));
  let carouselIdx = 0;
  const setCarousel = (i: number) => {
    carouselIdx = i;
    carouselImgs.forEach((img, k) => {
      img.style.opacity = k === i ? "1" : "0";
      img.style.zIndex = k === i ? "2" : "1";
    });
    dots.forEach((d, k) => {
      d.style.background = k === i ? "#7B2C8E" : "#c4c4be";
      d.style.width = k === i ? "26px" : "8px";
    });
  };
  dots.forEach((d, i) =>
    makeKeyboardActivatable(d, `View slide ${i + 1}`, () => setCarousel(i), cleanups)
  );
  const stillEl = document.getElementById("ph-still");
  const carouselTimer = window.setInterval(() => {
    if (inView(stillEl)) setCarousel((carouselIdx + 1) % carouselImgs.length);
  }, 3800);
  cleanups.push(() => window.clearInterval(carouselTimer));

  // ---- Consistency album ----
  const albumThumbs = Array.from(
    document.querySelectorAll<HTMLElement>("#ph-album-rail .ph-thumb")
  );
  const albumImgs = Array.from(
    document.querySelectorAll<HTMLImageElement>("#ph-album-main img")
  );
  const albumBrand = document.getElementById("ph-album-brand");
  let albumIdx = 0;
  const setAlbum = (i: number) => {
    albumIdx = i;
    albumThumbs.forEach((t, k) => {
      t.classList.toggle("active", k === i);
      t.style.outline = `2px solid ${k === i ? "#161616" : "transparent"}`;
    });
    albumImgs.forEach((img, k) => {
      img.style.opacity = k === i ? "1" : "0";
      img.style.zIndex = k === i ? "2" : "1";
    });
    if (albumBrand) albumBrand.textContent = ALBUM_BRANDS[i] ?? "";
  };
  albumThumbs.forEach((t, i) =>
    makeKeyboardActivatable(t, `View look ${i + 1}`, () => setAlbum(i), cleanups)
  );
  const consistEl = document.getElementById("ph-consist");
  const albumTimer = window.setInterval(() => {
    if (inView(consistEl)) setAlbum((albumIdx + 1) % albumThumbs.length);
  }, 3000);
  cleanups.push(() => window.clearInterval(albumTimer));

  // ---- Colour picker ----
  const colourImgs = Array.from(
    document.querySelectorAll<HTMLImageElement>("#ph-colour-stage img")
  );
  const colourDots = Array.from(
    document.querySelectorAll<HTMLElement>(".ph-colour-dot")
  );
  const colourName = document.getElementById("ph-colour-name");
  const setColour = (i: number) => {
    colourImgs.forEach((img, k) => {
      img.style.opacity = k === i ? "1" : "0";
      img.style.zIndex = k === i ? "2" : "1";
    });
    colourDots.forEach((d, k) => {
      const on = k === i;
      d.style.width = on ? "36px" : "26px";
      d.style.height = on ? "36px" : "26px";
      d.style.boxShadow = on
        ? "0 0 0 3px rgba(20,20,20,.82)"
        : "0 0 0 1px rgba(20,20,20,.25)";
    });
    if (colourName) colourName.textContent = COLOUR_NAMES[i] ?? "";
  };
  colourDots.forEach((d, i) => {
    makeKeyboardActivatable(
      d,
      `View in ${COLOUR_NAMES[i] ?? `colour ${i + 1}`}`,
      () => setColour(i),
      cleanups
    );
    d.addEventListener("mouseenter", () => setColour(i));
  });

  // ---- scroll reveal ----
  let io: IntersectionObserver | undefined;
  if ("IntersectionObserver" in window) {
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.target.classList.toggle("in", e.isIntersecting));
      },
      { threshold: 0.42, rootMargin: "-14% 0px -14% 0px" }
    );
    document.querySelectorAll(".sg-reveal").forEach((el) => io!.observe(el));
    cleanups.push(() => io?.disconnect());
  } else {
    document.querySelectorAll(".sg-reveal").forEach((el) => el.classList.add("in"));
  }

  document.body.setAttribute("data-tool", "pen");
  let cursorCleanup: (() => void) | undefined;
  if (window.SGToolCursor) {
    cursorCleanup = window.SGToolCursor.mount();
  } else {
    let cursorTries = 0;
    const waitForCursor = window.setInterval(() => {
      if (window.SGToolCursor) {
        window.clearInterval(waitForCursor);
        cursorCleanup = window.SGToolCursor.mount();
      } else if (++cursorTries > 40) {
        window.clearInterval(waitForCursor);
      }
    }, 125);
    cleanups.push(() => window.clearInterval(waitForCursor));
  }
  cleanups.push(() => {
    document.body.removeAttribute("data-tool");
    cursorCleanup?.();
  });

  cleanups.push(mountHomeFooter());

  const closer = Array.from(
    document.querySelectorAll(".desktop-layout #contact, .desktop-layout footer")
  );
  if (closer.length) {
    const visible = new Set<Element>();
    const applySnap = () => {
      document.documentElement.style.scrollSnapType = visible.size ? "none" : "";
    };
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
        });
        applySnap();
      },
      { threshold: 0.01 }
    );
    closer.forEach((el) => io.observe(el));
    cleanups.push(() => {
      io.disconnect();
      document.documentElement.style.scrollSnapType = "";
    });
  }

  return () => cleanups.forEach((fn) => fn());
}
