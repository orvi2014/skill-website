import { mountSiteHeader } from "./siteHeaderMount";
import { mountMobileNav } from "./homeMobile";
import { mountVideoMobile } from "./videoMobile";
import { mountHomeFooter } from "./homeFooter";

declare global {
  interface Window {
    SGVHero?: { mount: (clips: string[]) => () => void };
    SGToolCursor?: { mount: () => () => void };
  }
}

function fixVideos() {
  document.querySelectorAll<HTMLVideoElement>("video").forEach((v) => {
    if (v.id === "sg-fs-player" || v.getAttribute("data-sg-fs") || v.closest("#sg-fs-overlay")) return;
    v.muted = true;
    v.defaultMuted = true;
    v.setAttribute("muted", "");
    v.playsInline = true;
    v.setAttribute("playsinline", "");
    if (v.closest(".sg-vhero")) return;
    if (v.closest(".mobile-layout")) return; // hidden on desktop viewports
    if (v.offsetParent === null) return;
    if (v.paused) {
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
    }
  });
}

export function mountVideo(): () => void {
  const cleanups: Array<() => void> = [];

  // ---- shared header (nav scroll behavior + mobile menu) ----
  cleanups.push(mountSiteHeader());

  // ---- mobile-specific layout ----
  cleanups.push(mountMobileNav());
  cleanups.push(mountVideoMobile());

  let n = 0;
  const iv = window.setInterval(() => {
    fixVideos();
    if (++n > 30) window.clearInterval(iv);
  }, 350);
  cleanups.push(() => window.clearInterval(iv));
  fixVideos();

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

  document.body.setAttribute("data-tool", "wheel");
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

  const intro = document.getElementById("vp-intro");
  const introH = document.getElementById("vp-intro-h");
  const introP = document.getElementById("vp-intro-p");
  const onScroll = () => {
    if (window.innerWidth <= 640) return; // desktop-only parallax; hidden on mobile
    if (!intro || !introH || !introP) return;
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
  onScroll();
  window.addEventListener("scroll", onScrollThrottled, { passive: true });
  cleanups.push(() => window.removeEventListener("scroll", onScrollThrottled));

  cleanups.push(mountHomeFooter());

  return () => cleanups.forEach((fn) => fn());
}
