import { homeMobileFooterHtml } from "./homeFooter";
import { mobileNavHtml } from "./homeMobile";

const ALBUM = [
  { src: "/assets/sku-1.webp", brand: "The North Face" },
  { src: "/assets/sku-2.webp", brand: "The North Face" },
  { src: "/assets/sku-3.webp", brand: "The North Face" },
  { src: "/assets/sku-4.webp", brand: "The North Face" },
  { src: "/assets/sku-5.webp", brand: "The North Face" },
  { src: "/assets/sku-6.webp", brand: "The North Face" },
  { src: "/assets/sku-7.webp", brand: "The North Face" },
  { src: "/assets/sku-8.webp", brand: "The North Face" },
];
const CAROUSEL = [
  "/assets/sl-sunglasses.webp",
  "/assets/sl-belt.webp",
  "/assets/sl-shoes.webp",
  "/assets/sl-watch.webp",
  "/assets/sl-backpack.webp",
  "/assets/sl-new-1.webp",
  "/assets/sl-new-2.webp",
];
const ONMODEL = [
  "/assets/photo-onm-1.webp",
  "/assets/photo-onm-2.webp",
  "/assets/photo-onm-3.webp",
  "/assets/photo-onm-4.webp",
  "/assets/photo-onm-5.webp",
  "/assets/photo-onm-6.webp",
  "/assets/photo-onm-7.webp",
];
const COLOURS = [
  { name: "Coral", dot: "#FC3E2C", src: "/assets/dress-coral.webp" },
  { name: "Yellow", dot: "#F9EB84", src: "/assets/dress-yellow.webp" },
  { name: "Olive", dot: "#9E9339", src: "/assets/dress-olive.webp" },
  { name: "Blue", dot: "#83A3C6", src: "/assets/dress-blue.webp" },
  { name: "Cyan", dot: "#45B2C6", src: "/assets/dress-cyan.webp" },
  { name: "Purple", dot: "#B26AFE", src: "/assets/dress-purple.webp" },
];

export const MOBILE_PHOTO_HTML = `
<div class="mobile-layout" style="font-family:'Space Grotesk',sans-serif;background:#EDEDEB;color:#141414;position:relative;overflow-x:clip;">
  ${mobileNavHtml(true)}

  <!-- HERO -->
  <header data-nav-hero style="position:relative;height:100svh;min-height:560px;display:flex;align-items:center;justify-content:center;overflow:hidden;background:#c9c9c4;">
    <img src="/assets/photo-hero.webp" alt="Editorial fashion" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 18%;">
    <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(18,18,20,.5),rgba(18,18,20,.22) 42%,rgba(18,18,20,.6));"></div>
    <div style="position:relative;z-index:2;text-align:center;padding:0 18px;">
      <p style="font:600 13px 'Space Grotesk';letter-spacing:.32em;text-transform:uppercase;color:rgba(255,255,255,.94);margin:0 0 16px;text-shadow:0 2px 20px rgba(0,0,0,.35);">AI-Powered</p>
      <h1 style="margin:0;font-family:'Archivo';font-weight:800;font-size:clamp(3.2rem,20vw,6rem);text-transform:uppercase;color:transparent;-webkit-text-stroke:1.6px rgba(255,255,255,.97);line-height:.84;">Image<br>Editing</h1>
    </div>
    <div style="position:absolute;bottom:24px;left:50%;transform:translateX(-50%);z-index:5;display:flex;flex-direction:column;align-items:center;gap:6px;animation:pm-bob 2.4s ease-in-out infinite;">
      <span style="font:500 10px 'Space Grotesk';letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.8);">Scroll</span>
      <span style="color:#fff;font-size:16px;line-height:1;">&#8964;</span>
    </div>
  </header>

  <!-- INTRO -->
  <section class="pm-reveal" style="padding:64px 22px 52px;text-align:center;">
    <h2 style="font-family:'Archivo';font-weight:800;font-size:32px;line-height:1.06;margin:0 0 18px;color:#161616;letter-spacing:-.015em;">Designed for<br>Modern Commerce</h2>
    <p style="font:400 15px/1.65 'Space Grotesk';color:#5b5b58;margin:0;">Helping brands create faster product launches, stronger visual identities and better customer experiences through persistent content post-production.</p>
  </section>

  <!-- 01 GHOST MANNEQUIN -->
  <section class="pm-reveal" style="padding:40px 18px 56px;">
    <div style="display:flex;align-items:baseline;gap:12px;margin:0 0 20px;">
      <span style="font:800 13px 'Archivo';color:#7B2C8E;">01</span>
      <h3 style="font-family:'Archivo';font-weight:800;font-size:30px;line-height:1;text-transform:uppercase;color:#161616;letter-spacing:-.015em;margin:0;">Ghost<br>Mannequin</h3>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
      <div style="border-radius:6px;overflow:hidden;background:#e2e2de;aspect-ratio:3/4;"><img src="/assets/ghost-1.webp" alt="Ghost mannequin sample" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;"></div>
      <div style="border-radius:6px;overflow:hidden;background:#e2e2de;aspect-ratio:3/4;"><img src="/assets/ghost-2.webp" alt="Ghost mannequin sample" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;"></div>
    </div>
  </section>

  <!-- EVERY PIXEL PERFECTED -->
  <section style="background:#111;padding:88px 22px;text-align:center;overflow:hidden;">
    <h3 style="margin:0;font-family:'Archivo';font-weight:800;font-size:clamp(2.2rem,13vw,4.2rem);text-transform:uppercase;color:transparent;-webkit-text-stroke:1.3px #f4f4f2;line-height:1;letter-spacing:-.01em;">Every<br><span class="pm-px" style="font-family:'Press Start 2P';font-size:.36em;-webkit-text-stroke:0;color:#f4f4f2;vertical-align:middle;display:inline-block;">Pixel</span><br>Perfected</h3>
  </section>

  <!-- 02 STILL LIFE -->
  <section class="pm-reveal" style="padding:56px 18px;">
    <div style="display:flex;align-items:baseline;gap:12px;margin:0 0 20px;">
      <span style="font:800 13px 'Archivo';color:#7B2C8E;">02</span>
      <h3 style="font-family:'Archivo';font-weight:800;font-size:28px;line-height:1;text-transform:uppercase;color:#161616;letter-spacing:-.015em;margin:0;">Still Life<br>&amp; Flat Lay</h3>
    </div>
    <div id="pm-carousel" style="position:relative;width:100%;aspect-ratio:4/5;border-radius:8px;overflow:hidden;background:#e6e6e3;">
      ${CAROUSEL.map(
        (src, i) =>
          `<img class="pm-cimg" data-i="${i}" src="${src}" alt="Still life" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:opacity .7s cubic-bezier(.2,.72,.2,1);opacity:${i === 0 ? 1 : 0};z-index:${i === 0 ? 2 : 1};">`
      ).join("")}
    </div>
    <div id="pm-dots" style="display:flex;justify-content:center;gap:9px;margin-top:16px;">
      ${CAROUSEL.map(
        (_, i) =>
          `<span class="pm-dot" data-i="${i}" role="button" tabindex="0" aria-label="View slide ${i + 1}" style="height:8px;border-radius:100px;cursor:pointer;background:${i === 0 ? "#7B2C8E" : "#c4c4be"};width:${i === 0 ? "26px" : "8px"};transition:width .3s ease,background .3s ease;"></span>`
      ).join("")}
    </div>
  </section>

  <!-- 3 MILLION -->
  <section style="position:relative;overflow:hidden;height:70svh;min-height:420px;display:flex;align-items:center;justify-content:center;">
    <img src="/assets/million-bg.webp" alt="Editorial fashion" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;">
    <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(12,12,14,.42),rgba(12,12,14,.28) 45%,rgba(12,12,14,.5));"></div>
    <h3 style="position:relative;z-index:2;margin:0;text-align:center;font-family:'Archivo';font-weight:800;font-size:clamp(2.6rem,14vw,4.6rem);text-transform:uppercase;color:transparent;-webkit-text-stroke:1.4px rgba(255,255,255,.96);line-height:.9;">3 Million<br>Images In<br>One Year</h3>
  </section>

  <!-- 03 STYLED ON MODEL -->
  <section class="pm-reveal" style="padding:56px 0;">
    <div style="display:flex;align-items:baseline;gap:12px;margin:0 0 22px;padding:0 18px;">
      <span style="font:800 13px 'Archivo';color:#7B2C8E;">03</span>
      <h3 style="font-family:'Archivo';font-weight:800;font-size:34px;line-height:.9;text-transform:uppercase;color:#161616;letter-spacing:-.015em;margin:0;">Styled<br>On Model</h3>
    </div>
    <div id="pm-onm" style="display:flex;gap:12px;overflow-x:auto;padding:0 18px;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;">
      ${ONMODEL.map(
        (src) =>
          `<div style="position:relative;flex:0 0 72%;aspect-ratio:2/3;border-radius:8px;overflow:hidden;background:#e2e2de;scroll-snap-align:center;"><img src="${src}" alt="On model" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center top;display:block;"></div>`
      ).join("")}
    </div>
  </section>

  <!-- CONSISTENCY ACROSS SKU -->
  <section class="pm-reveal" style="padding:56px 18px;">
    <h3 style="font-family:'Archivo';font-weight:800;font-size:24px;line-height:1.08;margin:0 0 18px;color:#161616;letter-spacing:-.01em;">Consistency across<br>every SKU.</h3>
    <div id="pm-album-main" style="position:relative;width:100%;aspect-ratio:4/5;border-radius:8px;overflow:hidden;background:#e2e2de;">
      ${ALBUM.map(
        (a, i) =>
          `<img class="pm-aimg" data-i="${i}" src="${a.src}" alt="${a.brand}" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:opacity .55s cubic-bezier(.2,.72,.2,1);opacity:${i === 0 ? 1 : 0};z-index:${i === 0 ? 2 : 1};">`
      ).join("")}
      <span id="pm-album-brand" style="position:absolute;left:18px;bottom:16px;z-index:6;font:700 12px 'Space Grotesk';letter-spacing:.14em;text-transform:uppercase;color:#fff;text-shadow:0 2px 10px rgba(0,0,0,.5);">${ALBUM[0].brand}</span>
    </div>
    <div id="pm-album-rail" style="display:flex;gap:8px;overflow-x:auto;margin-top:12px;padding-bottom:4px;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;">
      ${ALBUM.map(
        (a, i) =>
          `<div class="pm-athumb" data-i="${i}" role="button" tabindex="0" aria-label="View look ${i + 1}" style="flex:0 0 54px;height:66px;border-radius:5px;background:#d7d7d2 url('${a.src}') center/cover;cursor:pointer;border:2px solid ${i === 0 ? "#7B2C8E" : "transparent"};scroll-snap-align:center;"></div>`
      ).join("")}
    </div>
  </section>

  <!-- 04 COLOUR CORRECTION -->
  <section class="pm-reveal" style="background:#0C0C0E;padding:56px 18px 64px;">
    <div style="border-radius:14px;overflow:hidden;background:#141416;padding:34px 22px 30px;display:flex;flex-direction:column;align-items:center;gap:20px;">
      <div style="text-align:center;">
        <span style="display:block;font:800 12px 'Archivo';color:#7B2C8E;letter-spacing:.14em;margin:0 0 8px;">04</span>
        <div class="cc-lockup">
          <h3 class="cc-line" style="font-family:'Archivo';font-weight:800;font-size:22px;line-height:1;text-transform:uppercase;color:#fff;letter-spacing:-.01em;margin:0;">Colour Correction</h3>
          <p class="cc-line" style="font-family:'Archivo';font-weight:800;font-size:16px;line-height:1;letter-spacing:-.01em;margin:6px 0 0;background:linear-gradient(90deg,#7B2C8E,#E0222E,#2A6FDB,#1F8A5B,#7B2C8E);background-size:300% 100%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;animation:pm-textshift 8s linear infinite;">Colour changes with mood</p>
        </div>
      </div>
      <div id="pm-colour-stage" style="position:relative;width:100%;max-width:300px;aspect-ratio:3/4;overflow:hidden;border-radius:8px;">
        ${COLOURS.map(
          (c, i) =>
            `<img class="pm-colimg" data-i="${i}" src="${c.src}" alt="${c.name}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:opacity .5s cubic-bezier(.2,.72,.2,1);opacity:${i === 0 ? 1 : 0};z-index:${i === 0 ? 2 : 1};">`
        ).join("")}
      </div>
      <div style="display:flex;gap:16px;align-items:center;">
        ${COLOURS.map(
          (c, i) =>
            `<span class="pm-coldot" data-i="${i}" role="button" tabindex="0" aria-label="View in ${c.name}" title="${c.name}" style="width:${i === 0 ? "34px" : "26px"};height:${i === 0 ? "34px" : "26px"};border-radius:50%;cursor:pointer;background:${c.dot};box-shadow:0 0 0 ${i === 0 ? "3px rgba(20,20,20,.82)" : "1px rgba(20,20,20,.25)"};transition:all .3s ease;"></span>`
        ).join("")}
      </div>
      <span id="pm-colour-name" style="font:600 12px 'Space Grotesk';letter-spacing:.14em;text-transform:uppercase;color:#fff;">${COLOURS[0].name}</span>
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact" style="background:#EDEDEB;color:#141414;padding:72px 22px 56px;">
    <p style="font:700 12px 'Space Grotesk';letter-spacing:.28em;text-transform:uppercase;color:#9a9a95;margin:0 0 22px;">Get in touch</p>
    <h3 style="font-family:'Archivo';font-weight:900;font-size:clamp(28px,8.8vw,40px);line-height:1.05;margin:0 0 30px;letter-spacing:-.02em;white-space:normal;">Let's Begin a<br>Conversation</h3>
    <a href="mailto:support@skill.ventures" class="mtap" style="display:inline-flex;align-items:center;gap:12px;font-family:'Archivo';font-weight:800;font-size:20px;color:#141414;border-bottom:2px solid #141414;padding-bottom:4px;">support@skill.ventures <span aria-hidden="true" style="display:inline-flex;align-items:center;justify-content:center;width:38px;height:38px;border-radius:50%;background:#7B2C8E;color:#fff;font-size:15px;">&#8594;</span></a>
    ${homeMobileFooterHtml("on-light")}
  </section>
</div>
`;

export const PHOTO_MOBILE_CSS = `
@keyframes pm-bob{0%,100%{transform:translate(-50%,0)}50%{transform:translate(-50%,7px)}}
@keyframes pm-glitch{0%{transform:translate(0,0)}25%{transform:translate(1px,-1px)}50%{transform:translate(-1px,1px)}75%{transform:translate(1px,1px)}100%{transform:translate(0,0)}}
@keyframes pm-textshift{0%{background-position:0% 0}100%{background-position:300% 0}}
.pm-reveal{opacity:0;}
.pm-reveal.in{animation:mm-rise .7s cubic-bezier(.2,.7,.2,1) forwards;}
.pm-px{animation:pm-glitch .28s steps(2) infinite;text-shadow:2px 0 #E0222E,-2px 0 #2A6FDB;}
#pm-onm::-webkit-scrollbar,#pm-album-rail::-webkit-scrollbar{display:none;}
#pm-onm,#pm-album-rail{-ms-overflow-style:none;scrollbar-width:none;}
.pm-dot:focus-visible,.pm-athumb:focus-visible,.pm-coldot:focus-visible{outline:2px solid #7B2C8E;outline-offset:2px;}
`;

function inView(el: Element | null): boolean {
  if (!el) return false;
  const r = el.getBoundingClientRect();
  const vh = window.innerHeight || 1;
  return r.top < vh * 0.85 && r.bottom > vh * 0.15;
}

function bindActivatable(el: HTMLElement, onActivate: () => void, cleanups: Array<() => void>) {
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

export function mountPhotoMobile(): () => void {
  const cleanups: Array<() => void> = [];

  const revealEls = Array.from(document.querySelectorAll<HTMLElement>(".pm-reveal"));
  if (revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    revealEls.forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());
  }

  // ---- still-life carousel ----
  const cImgs = Array.from(document.querySelectorAll<HTMLImageElement>(".pm-cimg"));
  const cDots = Array.from(document.querySelectorAll<HTMLElement>(".pm-dot"));
  let carouselIdx = 0;
  const setCarousel = (i: number) => {
    carouselIdx = i;
    cImgs.forEach((img, k) => {
      img.style.opacity = k === i ? "1" : "0";
      img.style.zIndex = k === i ? "2" : "1";
    });
    cDots.forEach((d, k) => {
      d.style.background = k === i ? "#7B2C8E" : "#c4c4be";
      d.style.width = k === i ? "26px" : "8px";
    });
  };
  cDots.forEach((d, i) => bindActivatable(d, () => setCarousel(i), cleanups));
  const carouselEl = document.getElementById("pm-carousel");
  const carouselTimer = window.setInterval(() => {
    if (inView(carouselEl)) setCarousel((carouselIdx + 1) % cImgs.length);
  }, 3800);
  cleanups.push(() => window.clearInterval(carouselTimer));

  // ---- consistency album ----
  const albumThumbs = Array.from(document.querySelectorAll<HTMLElement>(".pm-athumb"));
  const albumImgs = Array.from(document.querySelectorAll<HTMLImageElement>(".pm-aimg"));
  const albumBrand = document.getElementById("pm-album-brand");
  const ALBUM_BRAND = "The North Face";
  let albumIdx = 0;
  const setAlbum = (i: number) => {
    albumIdx = i;
    albumThumbs.forEach((t, k) => {
      t.style.border = `2px solid ${k === i ? "#7B2C8E" : "transparent"}`;
    });
    albumImgs.forEach((img, k) => {
      img.style.opacity = k === i ? "1" : "0";
      img.style.zIndex = k === i ? "2" : "1";
    });
    if (albumBrand) albumBrand.textContent = ALBUM_BRAND;
  };
  albumThumbs.forEach((t, i) => bindActivatable(t, () => setAlbum(i), cleanups));
  const albumMainEl = document.getElementById("pm-album-main");
  const albumTimer = window.setInterval(() => {
    if (inView(albumMainEl)) setAlbum((albumIdx + 1) % albumThumbs.length);
  }, 3000);
  cleanups.push(() => window.clearInterval(albumTimer));

  // ---- colour picker ----
  const colourImgs = Array.from(document.querySelectorAll<HTMLImageElement>(".pm-colimg"));
  const colourDots = Array.from(document.querySelectorAll<HTMLElement>(".pm-coldot"));
  const colourName = document.getElementById("pm-colour-name");
  const COLOUR_NAMES = COLOURS.map((c) => c.name);
  const setColour = (i: number) => {
    colourImgs.forEach((img, k) => {
      img.style.opacity = k === i ? "1" : "0";
      img.style.zIndex = k === i ? "2" : "1";
    });
    colourDots.forEach((d, k) => {
      const on = k === i;
      d.style.width = on ? "34px" : "26px";
      d.style.height = on ? "34px" : "26px";
      d.style.boxShadow = on ? "0 0 0 3px rgba(20,20,20,.82)" : "0 0 0 1px rgba(20,20,20,.25)";
    });
    if (colourName) colourName.textContent = COLOUR_NAMES[i] ?? "";
  };
  colourDots.forEach((d, i) => {
    bindActivatable(d, () => setColour(i), cleanups);
  });

  // ---- on-model row auto-scroll ----
  const onm = document.getElementById("pm-onm");
  if (onm) {
    let paused = false;
    let pt = 0;
    const pause = () => {
      paused = true;
      window.clearTimeout(pt);
      pt = window.setTimeout(() => (paused = false), 2600);
    };
    onm.addEventListener("touchstart", pause, { passive: true });
    onm.addEventListener("wheel", pause, { passive: true });
    const onmTimer = window.setInterval(() => {
      if (paused) return;
      if (onm.scrollLeft >= onm.scrollWidth - onm.clientWidth - 2) {
        onm.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        onm.scrollBy({ left: onm.clientWidth * 0.76, behavior: "smooth" });
      }
    }, 2600);
    cleanups.push(() => {
      window.clearInterval(onmTimer);
      onm.removeEventListener("touchstart", pause);
      onm.removeEventListener("wheel", pause);
    });
  }

  return () => cleanups.forEach((fn) => fn());
}
