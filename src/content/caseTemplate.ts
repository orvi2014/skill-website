import type { CaseStudy } from "@/data/cases";
import { getCase } from "@/data/cases";
import { HEADER_CSS, headerHtml } from "./siteHeader";
import { mountSiteHeader } from "./siteHeaderMount";
import { HOME_MOBILE_CSS, mobileNavHtml, mountMobileNav } from "./homeMobile";

export const CASE_CSS = `
${HEADER_CSS}
${HOME_MOBILE_CSS}
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;background:#EDEDEB;}
a{color:#7B2C8E;} a:hover{color:#5c1f6d;}
.sg-reveal{opacity:0;transform:translateY(34px);transition:opacity .9s cubic-bezier(.2,.72,.2,1),transform .9s cubic-bezier(.2,.72,.2,1);}
.sg-reveal.in{opacity:1;transform:none;}
.cta-mail::after{content:"";position:absolute;left:0;right:0;bottom:-.14em;height:2px;background:#141414;transform:scaleX(0);transform-origin:left;transition:transform .45s cubic-bezier(.2,.72,.2,1);}
.cta-link:hover .cta-mail::after{transform:scaleX(1);}
.cta-link:hover .cta-arw{transform:translateX(8px) rotate(-45deg);}
.ncase-slot img{display:block;width:100%;height:100%;transition:transform 1.1s cubic-bezier(.2,.72,.2,1);}
.ncase-slot:hover img{transform:scale(1.04);}
.ncase-tag{transition:background .3s ease,color .3s ease,border-color .3s ease;}
.ncase-tag:hover{background:#7B2C8E;color:#fff;border-color:#7B2C8E;}
@keyframes ncase-bob{0%,100%{transform:translate(-50%,0)}50%{transform:translate(-50%,7px)}}
.ng-thumb:focus-visible{outline:2px solid #7B2C8E !important;outline-offset:-2px;}

@media (max-width:1024px){
  .nc-bar-inner{flex-wrap:wrap !important;}
}

@media (max-width:768px){
  .nc-bar-inner{flex-wrap:wrap !important;border-radius:14px !important;}
  .nc-bar-inner > div{flex:1 1 50% !important;}
  .nc-bar-inner > a{flex:1 1 100% !important;padding:14px 0 !important;}
  #ng-rail{flex-direction:row !important;width:100% !important;height:clamp(64px,12vh,110px) !important;overflow-x:auto !important;}
  #ng-stage{height:min(70vh,560px) !important;}
  .sg-reveal[style*="grid-template-columns:clamp(84px"]{grid-template-columns:1fr !important;}
}
`;

function tagsHtml(tags: string[]): string {
  return tags
    .map(
      (t) =>
        `<span class="ncase-tag" style="font:600 clamp(13px,1.1vw,15px) 'Space Grotesk';color:#161616;border:1.5px solid #cfcfca;padding:12px 22px;border-radius:100px;">${t}</span>`
    )
    .join("");
}

function metricsHtml(metrics: CaseStudy["metrics"]): string {
  if (!metrics || !metrics.length) return "";
  const cells = metrics
    .map(
      (m) =>
        `<div><div style="font-family:'Archivo';font-weight:900;font-size:clamp(2.2rem,4.4vw,3.6rem);line-height:1;color:#7B2C8E;">${m.value}</div><div style="font:600 11px 'Space Grotesk';letter-spacing:.14em;text-transform:uppercase;color:#9a9a95;margin-top:10px;">${m.label}</div></div>`
    )
    .join("");
  return `
  <!-- RESULT METRICS -->
  <section class="sg-reveal" style="background:#fff;padding:0 40px clamp(64px,11vh,140px);">
    <div style="max-width:1180px;margin:0 auto;display:grid;grid-template-columns:repeat(${metrics.length},1fr);gap:clamp(16px,2vw,28px);border-top:1px solid #e7e4e0;padding-top:clamp(40px,6vh,72px);">${cells}</div>
  </section>`;
}

function galleryHtml(gallery: string[] | undefined): string {
  if (!gallery || !gallery.length) return "";
  const firstReal = gallery.find((src) => src);
  const thumbs = gallery
    .map((src, i) =>
      src
        ? `
      <div class="ng-thumb" data-i="${i}" data-src="${src}" role="button" tabindex="0" aria-label="View gallery image ${i + 1}" style="position:relative;flex:1 1 0;min-height:0;overflow:hidden;background:#e2e2de;cursor:pointer;outline:2px solid ${
            src === firstReal ? "#7B2C8E" : "transparent"
          };outline-offset:-2px;">
        <img class="ng-thumb-img" src="${src}" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;">
      </div>`
        : `
      <div class="ng-thumb" aria-hidden="true" title="More looks coming soon" style="position:relative;flex:1 1 0;min-height:0;overflow:hidden;background:transparent;border:1.5px dashed rgba(20,20,20,.25);"></div>`
    )
    .join("");
  return `
  <!-- STAGED GALLERY -->
  <div class="sg-reveal" style="display:grid;grid-template-columns:clamp(84px,9vw,140px) 1fr;gap:clamp(8px,1.4vw,18px);padding:clamp(40px,6vh,80px) clamp(8px,1.4vw,18px) clamp(56px,9vh,120px);align-items:stretch;background:#EDEDEB;">
    <div id="ng-rail" style="display:flex;flex-direction:column;gap:clamp(8px,1.2vw,14px);">${thumbs}</div>
    <div id="ng-stage" style="position:relative;height:min(88vh,940px);overflow:hidden;background:#e2e2de;display:flex;align-items:center;justify-content:center;">
      ${
        firstReal
          ? `<img id="ng-main" src="${firstReal}" alt="Selected gallery image" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:contain;transition:opacity .55s ease;">`
          : `<img id="ng-main" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:contain;transition:opacity .55s ease;display:none;"><span style="font:600 12px 'Space Grotesk';letter-spacing:.1em;text-transform:uppercase;color:#a7a7a1;">Looks coming soon</span>`
      }
    </div>
  </div>`;
}

function videoHtml(videoSrc: string | undefined): string {
  if (!videoSrc) {
    return `
  <div class="sg-reveal" style="background:#EDEDEB;padding:clamp(40px,7vh,90px) 40px;display:flex;justify-content:center;">
    <div style="width:min(420px,72vw);aspect-ratio:9/16;max-height:min(78vh,720px);overflow:hidden;background:#dcdcd7;border-radius:4px;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;color:#8f8f8a;text-align:center;padding:24px;">
      <span style="font-size:30px;line-height:1;">&#9658;</span>
      <span style="font:600 13px 'Space Grotesk';letter-spacing:.02em;">Case video</span>
      <span style="font:400 12px 'Space Grotesk';color:#a7a7a1;">Coming soon</span>
    </div>
  </div>`;
  }
  return `
  <div class="sg-reveal" style="background:#EDEDEB;padding:clamp(40px,7vh,90px) 40px;display:flex;justify-content:center;">
    <div data-sg-fs-host data-sg-fs-fit="contain" style="width:min(420px,72vw);aspect-ratio:9/16;max-height:min(78vh,720px);overflow:hidden;background:#111;border-radius:6px;position:relative;">
      <video src="${videoSrc}" playsinline preload="metadata" style="width:100%;height:100%;object-fit:contain;display:block;background:#111;"></video>
    </div>
  </div>`;
}

export function caseHtml(data: CaseStudy): string {
  const next = getCase(data.nextSlug);
  return `
<div class="mobile-layout">${mobileNavHtml(true)}</div>

<div style="font-family:'Space Grotesk',sans-serif;color:#141414;background:#EDEDEB;overflow-x:clip;position:relative;">

  <div class="desktop-layout">${headerHtml({ subpage: true })}</div>

  <!-- HERO / COVER -->
  <header id="main-content" tabindex="-1" data-nav-hero style="position:relative;height:min(58vh,680px);min-height:380px;overflow:hidden;background:${data.comingSoon ? "linear-gradient(135deg,#1c1c1c,#0c0c0e)" : "#d7d7d2"};">
    ${
      data.comingSoon
        ? `<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;text-align:center;padding:0 24px;"><span style="font-family:'Archivo';font-weight:800;font-size:clamp(2.4rem,7vw,6rem);text-transform:uppercase;color:transparent;-webkit-text-stroke:1.6px rgba(255,255,255,.8);line-height:.95;">${data.name}</span></div>`
        : `<div class="ncase-slot" style="position:absolute;inset:0;overflow:hidden;">
      <img src="${data.heroImg}" alt="${data.name}" style="width:100%;height:100%;object-fit:cover;object-position:${data.coverPos ?? "center center"};display:block;">
    </div>`
    }
    <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(18,18,20,.42),rgba(18,18,20,0) 34%);pointer-events:none;"></div>
    <div style="position:absolute;left:40px;bottom:34px;z-index:3;">
      <span style="display:inline-block;background:rgba(255,255,255,.16);backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,.4);color:#fff;font:600 11px 'Space Grotesk';letter-spacing:.22em;text-transform:uppercase;padding:8px 16px;border-radius:100px;">${data.comingSoon ? "Coming Soon" : "Case Study"}</span>
    </div>
    <div style="position:absolute;bottom:26px;left:50%;transform:translateX(-50%);z-index:5;animation:ncase-bob 2.4s ease-in-out infinite;color:#fff;font-size:22px;">&#8595;</div>
  </header>

  <!-- TITLE + INTRO -->
  <section class="sg-reveal" style="background:#fff;padding:clamp(64px,11vh,140px) 40px;">
    <div style="max-width:760px;margin:0 auto;text-align:center;">
      ${
        data.comingSoon
          ? `<p style="font:600 12px 'Space Grotesk';letter-spacing:.28em;text-transform:uppercase;color:#7B2C8E;margin:0 0 22px;">${data.name}</p>`
          : `<div style="display:flex;justify-content:center;margin:0 0 22px;"><img src="/assets/brand-logos/${data.slug}.png" alt="${data.name}" style="height:32px;width:auto;max-width:180px;object-fit:contain;display:block;" onerror="this.outerHTML='<p style=\\'font:600 12px Space Grotesk;letter-spacing:.28em;text-transform:uppercase;color:#7B2C8E;margin:0\\'>${data.name}</p>'"></div>`
      }
      <h1 style="font-family:'Archivo';font-weight:800;font-size:clamp(1.9rem,4.4vw,3.4rem);line-height:1.06;letter-spacing:-.02em;margin:0 0 26px;color:#161616;">${data.title}</h1>
      <p style="font:400 clamp(15px,1.25vw,18px)/1.8 'Space Grotesk';color:#5b5b58;margin:0;">${data.intro}</p>
    </div>
  </section>

  ${videoHtml(data.videoSrc)}

  ${galleryHtml(data.gallery)}

  ${metricsHtml(data.metrics)}

  <!-- STICKY INFO BAR -->
  <div id="nc-bar" style="position:sticky;bottom:0;z-index:55;display:flex;justify-content:center;padding:0 clamp(12px,3vw,40px) clamp(12px,3vw,28px);pointer-events:none;">
    <div class="nc-bar-inner" style="pointer-events:auto;display:flex;align-items:stretch;background:#fff;border-radius:10px;box-shadow:0 18px 50px rgba(0,0,0,.16);overflow:hidden;max-width:920px;width:100%;">
      <div style="flex:1;padding:16px clamp(16px,2vw,28px);">
        <p style="font:600 10px 'Space Grotesk';letter-spacing:.2em;text-transform:uppercase;color:#9a9a95;margin:0 0 5px;">Customer</p>
        <p style="font:600 clamp(13px,1.1vw,15px) 'Space Grotesk';color:#161616;margin:0;">${data.customer}</p>
      </div>
      <div style="flex:1;padding:16px clamp(16px,2vw,28px);border-left:1px solid #ececE7;">
        <p style="font:600 10px 'Space Grotesk';letter-spacing:.2em;text-transform:uppercase;color:#9a9a95;margin:0 0 5px;">Project</p>
        <p style="font:600 clamp(13px,1.1vw,15px) 'Space Grotesk';color:#161616;margin:0;">${data.project}</p>
      </div>
      <div style="flex:1;padding:16px clamp(16px,2vw,28px);border-left:1px solid #ececE7;">
        <p style="font:600 10px 'Space Grotesk';letter-spacing:.2em;text-transform:uppercase;color:#9a9a95;margin:0 0 5px;">Category</p>
        <p style="font:600 clamp(13px,1.1vw,15px) 'Space Grotesk';color:#161616;margin:0;">${data.category}</p>
      </div>
      <a href="/#cases" style="display:flex;align-items:center;justify-content:center;background:#161616;color:#fff;text-decoration:none;font:700 clamp(13px,1.1vw,15px) 'Space Grotesk';padding:0 clamp(22px,2.4vw,38px);white-space:nowrap;transition:background .3s ease;" onmouseenter="this.style.background='#7B2C8E'" onmouseleave="this.style.background='#161616'">More cases</a>
    </div>
  </div>

  <!-- HOW WE STAGED THE BRAND -->
  <section class="sg-reveal" style="background:#fff;padding:clamp(70px,12vh,150px) 40px;">
    <div style="max-width:1180px;margin:0 auto;display:grid;grid-template-columns:1fr 1.2fr;gap:clamp(30px,5vw,80px);align-items:start;">
      <h2 style="font-family:'Archivo';font-weight:800;font-size:clamp(1.7rem,3.4vw,2.7rem);line-height:1.05;letter-spacing:-.015em;margin:0;color:#161616;">${data.comingSoon ? "Coming<br>soon" : "How we<br>staged the brand"}</h2>
      <p style="font:400 clamp(15px,1.3vw,19px)/1.85 'Space Grotesk';color:#5b5b58;margin:0;max-width:52ch;">${data.staged}</p>
    </div>
  </section>

  ${
    data.tags.length
      ? `<!-- HIGHLIGHTS -->
  <section class="sg-reveal" style="background:#EDEDEB;padding:clamp(60px,10vh,130px) 40px;">
    <div style="max-width:1180px;margin:0 auto;">
      <p style="font:600 12px 'Space Grotesk';letter-spacing:.22em;text-transform:uppercase;color:#7B2C8E;margin:0 0 28px;">What we delivered</p>
      <div style="display:flex;flex-wrap:wrap;gap:12px;">${tagsHtml(data.tags)}</div>
    </div>
  </section>`
      : ""
  }

  <!-- NEXT CASE -->
  <a href="/cases/${data.nextSlug}" class="sg-reveal" style="display:block;background:#fff;text-decoration:none;padding:clamp(48px,7vh,90px) 40px;border-top:1px solid #e4e4df;">
    <div style="max-width:1180px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:24px;">
      <div>
        <p style="font:600 11px 'Space Grotesk';letter-spacing:.22em;text-transform:uppercase;color:#9a9a95;margin:0 0 8px;">Next case</p>
        <span style="font-family:'Archivo';font-weight:800;font-size:clamp(1.6rem,3.4vw,2.6rem);color:#161616;letter-spacing:-.015em;">${next?.name ?? ""}</span>
      </div>
      <span style="font-size:clamp(28px,4vw,44px);color:#7B2C8E;">&#8594;</span>
    </div>
  </a>

  <!-- CONTACT CTA -->
  <section id="contact" style="background:#EDEDEB;color:#141414;padding:clamp(90px,18vh,200px) 40px;">
    <div style="max-width:1300px;margin:0 auto;">
      <p style="font:700 13px 'Space Grotesk';letter-spacing:.32em;text-transform:uppercase;color:#9a9a95;margin:0 0 clamp(24px,4vh,44px);">Get in touch</p>
      <h2 style="font-family:'Archivo';font-weight:900;font-size:clamp(2.6rem,10vw,9rem);line-height:1.12;margin:0 0 clamp(40px,6vh,72px);letter-spacing:-.02em;">Let's<br>Begin a<br>Conversation</h2>
      <a href="mailto:support@skill.ventures" class="cta-link" style="text-decoration:none;color:#141414;display:inline-flex;align-items:center;gap:clamp(12px,1.4vw,20px);font-family:'Archivo';font-weight:800;font-size:clamp(1.4rem,4vw,3rem);letter-spacing:-.01em;">
        <span class="cta-mail" style="position:relative;color:transparent;-webkit-text-stroke:1.1px #141414;">support@skill.ventures</span>
        <span class="cta-arw" style="display:inline-flex;align-items:center;justify-content:center;width:clamp(46px,5vw,74px);height:clamp(46px,5vw,74px);border-radius:50%;background:#7B2C8E;color:#fff;font-size:.6em;transition:transform .4s cubic-bezier(.2,.72,.2,1);">&#8594;</span>
      </a>
    </div>
  </section>

</div>`;
}

export function mountCase(): () => void {
  const root = document;
  const cleanups: Array<() => void> = [];

  // ---- shared header (nav scroll behavior + mobile menu) ----
  cleanups.push(mountSiteHeader());

  // ---- mobile-specific nav bar + hamburger menu (matches Photo/Video) ----
  cleanups.push(mountMobileNav());

  // scroll reveal
  let io: IntersectionObserver | undefined;
  if ("IntersectionObserver" in window) {
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io?.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14 }
    );
    root.querySelectorAll(".sg-reveal").forEach((el) => io!.observe(el));
    cleanups.push(() => io?.disconnect());
  } else {
    root.querySelectorAll(".sg-reveal").forEach((el) => el.classList.add("in"));
  }

  // staged gallery: click a thumb to feature it, auto-cycle through looks
  const thumbs = Array.from(root.querySelectorAll<HTMLElement>(".ng-thumb[data-src]"));
  const main = root.querySelector<HTMLImageElement>("#ng-main");
  if (thumbs.length && main) {
    let active = 0;
    const feature = (i: number) => {
      const src = thumbs[i]?.getAttribute("data-src");
      if (!src) return;
      active = i;
      main.style.opacity = "0";
      window.setTimeout(() => {
        main.src = src;
        main.style.opacity = "1";
      }, 180);
      thumbs.forEach((t, k) => {
        t.style.outline = `2px solid ${k === i ? "#7B2C8E" : "transparent"}`;
      });
    };
    thumbs.forEach((t, i) => {
      const onActivate = () => feature(i);
      const onKeydown = (e: KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onActivate();
        }
      };
      t.addEventListener("click", onActivate);
      t.addEventListener("keydown", onKeydown);
      cleanups.push(() => {
        t.removeEventListener("click", onActivate);
        t.removeEventListener("keydown", onKeydown);
      });
    });
    let cycleI = active;
    const timer = window.setInterval(() => {
      cycleI = (cycleI + 1) % thumbs.length;
      feature(cycleI);
    }, 3500);
    cleanups.push(() => window.clearInterval(timer));
  }

  return () => cleanups.forEach((fn) => fn());
}
