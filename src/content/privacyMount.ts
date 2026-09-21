import { mountSiteHeader } from "./siteHeaderMount";
import { mountMobileNav } from "./homeMobile";
import { mountHomeFooter } from "./homeFooter";

export function mountPrivacy(): () => void {
  const cleanups: Array<() => void> = [];

  cleanups.push(mountSiteHeader());
  cleanups.push(mountMobileNav());
  cleanups.push(mountHomeFooter());

  // reveal on scroll
  const reveals = Array.from(document.querySelectorAll<HTMLElement>(".pp-reveal"));
  if (reveals.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );
    reveals.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i, 3) * 60}ms`;
      io.observe(el);
    });
    cleanups.push(() => io.disconnect());
  }

  // contents highlight follows the section in view
  const secs = Array.from(document.querySelectorAll<HTMLElement>("[data-pp-sec]"));
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-pp-toc]"));
  const bar = document.querySelector<HTMLElement>(".pp-toc-bar");
  if (secs.length && links.length) {
    let active = "";
    const setActive = (id: string) => {
      if (id === active) return;
      active = id;
      links.forEach((a) => {
        const on = a.getAttribute("data-pp-toc") === id;
        a.setAttribute("aria-current", on ? "true" : "false");
        if (on && bar) {
          bar.style.top = `${a.offsetTop}px`;
          bar.style.height = `${a.offsetHeight}px`;
        }
      });
    };
    const onScroll = () => {
      const line = window.innerHeight * 0.32;
      let current = secs[0].getAttribute("data-pp-sec") || "";
      secs.forEach((s) => {
        if (s.getBoundingClientRect().top <= line) current = s.getAttribute("data-pp-sec") || current;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    cleanups.push(() => window.removeEventListener("scroll", onScroll));
    cleanups.push(() => window.removeEventListener("resize", onScroll));
  }

  return () => cleanups.forEach((fn) => fn());
}
