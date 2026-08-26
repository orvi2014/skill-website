import { AI_STUDIO_HTML } from "./aiStudio";
import { headerHtml } from "./siteHeader";
import {
  MOBILE_SERVICES_HTML,
  MOBILE_WHY_HTML,
  mobileAiStudioHtml,
  mobileNavHtml,
} from "./homeMobile";
import { homeDesktopFooterHtml } from "./homeFooter";

const BRAND_MARQUEE_ITEMS = [
  "Nike",
  "Adidas",
  "Prada",
  "Guess",
  "Replay",
  "DKNY",
  "Tommy&nbsp;Hilfiger",
  "KappAhl",
  "CMP",
  "Amazon",
  "Walmart",
  "Uniqlo",
  "The&nbsp;North&nbsp;Face",
  "Burberry",
  "FTKR",
  "Avi&nbsp;&amp;&nbsp;Co",
  "Champion",
  "Vans",
  "Mango",
].map(
  (n) =>
    `<span style="font:600 13px 'Space Grotesk';letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.92);padding:0 34px;">${n}</span><span style="width:4px;height:4px;border-radius:50%;background:#7B2C8E;"></span>`
).join("");

const CASES_MARQUEE = [
  { slug: "nike", name: "Nike", src: "/assets/cases-nike.webp" },
  { slug: "prada", name: "Prada", src: "/assets/cases-prada.webp", pos: "22% 40%" },
  { slug: "dkny", name: "DKNY", src: "/assets/cases-dkny.webp" },
  { slug: "cmp", name: "CMP", src: "/assets/cases-cmp.webp", pos: "32% 48%" },
  { slug: "adidas", name: "Adidas", src: "/assets/cases-adidas.webp", pos: "38% 58%" },
  { slug: "tommy-hilfiger", name: "Tommy Hilfiger", src: "/assets/cases-tommy.webp", pos: "78% 18%" },
  { slug: "replay", name: "Replay", src: "/assets/cases-replay.webp" },
  { slug: "elvine", name: "Elvine", src: "/assets/cases-elvine.webp" },
  { slug: "kappahl", name: "KappAhl", src: "/assets/cases-kappahl.webp" },
  { slug: "guess", name: "Guess", src: "/assets/cases-guess.webp" },
  { slug: "amazon", name: "Amazon", src: "/assets/cases-amazon.webp" },
  { slug: "walmart", name: "Walmart", src: "/assets/cases-walmart.webp" },
  { slug: "uniqlo", name: "Uniqlo", src: "/assets/cases-uniqlo.webp" },
  { slug: "the-north-face", name: "The North Face", src: "/assets/cases-the-north-face.webp", pos: "78% 42%" },
  { slug: "burberry", name: "Burberry", src: "/assets/cases-burberry.webp" },
  { slug: "ftkr", name: "FTKR", src: "/assets/cases-ftkr.webp", pos: "22% 55%" },
  { slug: "avi-co", name: "Avi & Co", src: "/assets/cases-avi-co.webp" },
  { slug: "champion", name: "Champion", src: "/assets/cases-champion.webp" },
  { slug: "vans", name: "Vans", src: "/assets/cases-vans.webp" },
  { slug: "mango", name: "Mango", src: "/assets/cases-mango.webp" },
]
  .map(
    (c) => `
          <a class="cases-card" href="/cases/${c.slug}" aria-label="${c.name}" style="flex:0 0 auto;width:clamp(300px,20vw,380px);height:83%;position:relative;overflow:hidden;background:#e7e7e4;transition:transform .55s cubic-bezier(.2,.72,.2,1),box-shadow .55s ease;will-change:transform;cursor:pointer;display:block;">
            ${
              "src" in c
                ? `<img src="${c.src}" alt="${c.name} e-com shot" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:${"pos" in c && c.pos ? c.pos : "center"};" loading="lazy">`
                : `<div style="position:absolute;inset:0;background:linear-gradient(135deg,#1c1c1c,#0c0c0e);"></div>`
            }
            <div style="position:absolute;inset:0;z-index:3;pointer-events:none;background:linear-gradient(180deg,rgba(0,0,0,0) 55%,rgba(0,0,0,.55) 100%);"></div>
            <div class="cases-card-logo" aria-hidden="true" style="position:absolute;right:24px;bottom:24px;z-index:5;pointer-events:none;display:flex;align-items:center;justify-content:flex-end;height:32px;">
              <img src="/assets/brand-logos/${c.slug}.png" alt="" loading="lazy" style="height:32px;width:auto;max-width:160px;object-fit:contain;object-position:right center;${c.slug === "tommy-hilfiger" ? "" : "filter:brightness(0) invert(1);"}display:block;" onerror="this.style.display='none';">
            </div>
          </a>`
  )
  .join("");

const OPS_NODES = [
  {
    i: 0,
    left: "50%",
    top: "12%",
    color: "#7B2C8E",
    tag: "01 / Support",
    t: "24/6 Global Support",
    d: "A responsive team across time zones, whenever you need us.",
    dur: "5s",
    icon: `<circle cx="12" cy="12" r="9" stroke="#fff" stroke-width="1.5"/><path d="M12 7 V12 L15.5 14" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  {
    i: 1,
    left: "86.1%",
    top: "38.3%",
    color: "#5b8def",
    tag: "02 / People",
    t: "Dedicated Account Manager",
    d: "One point of contact who owns your delivery end to end.",
    dur: "5.4s",
    icon: `<circle cx="12" cy="8.5" r="3.6" stroke="#fff" stroke-width="1.5"/><path d="M5 20 C5 15.8 8 13.6 12 13.6 C16 13.6 19 15.8 19 20" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>`,
  },
  {
    i: 2,
    left: "72.3%",
    top: "80.7%",
    color: "#22c9d8",
    tag: "03 / Security",
    t: "Secure Server Infrastructure",
    d: "Enterprise-grade, access-controlled, confidential by default.",
    dur: "5.8s",
    icon: `<path d="M12 3 L19 6 V11.5 C19 16 16 19.4 12 21 C8 19.4 5 16 5 11.5 V6 Z" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/><circle cx="12" cy="11" r="2" stroke="#fff" stroke-width="1.4"/><path d="M12 13 V15.5" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/>`,
  },
  {
    i: 3,
    left: "27.7%",
    top: "80.7%",
    color: "#c848d8",
    tag: "04 / Finance",
    t: "Finance & Billing Team",
    d: "Transparent invoicing and dedicated billing support.",
    dur: "6.2s",
    icon: `<rect x="3" y="6" width="18" height="12" rx="2.2" stroke="#fff" stroke-width="1.5"/><path d="M3 10 H21" stroke="#fff" stroke-width="1.5"/><path d="M6.5 14.5 H11" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>`,
  },
  {
    i: 4,
    left: "13.9%",
    top: "38.3%",
    color: "#E0222E",
    tag: "05 / Ops",
    t: "Internal Production System",
    d: "Every asset live-tracked through our management system.",
    dur: "6.6s",
    icon: `<circle cx="6" cy="12" r="2.3" stroke="#fff" stroke-width="1.5"/><circle cx="18" cy="6" r="2.3" stroke="#fff" stroke-width="1.5"/><circle cx="18" cy="18" r="2.3" stroke="#fff" stroke-width="1.5"/><path d="M8 11 L16 6.8 M8 13 L16 17.2" stroke="#fff" stroke-width="1.5"/>`,
  },
]
  .map(
    (n) => `
      <div class="ops-node" data-i="${n.i}" data-t="${n.t}" data-d="${n.d}" data-a="${n.color}" data-tag="${n.tag}" style="position:absolute;left:${n.left};top:${n.top};transform:translate(-50%,-50%);z-index:4;display:flex;flex-direction:column;align-items:center;gap:12px;cursor:pointer;animation:sg-nfloat ${n.dur} ease-in-out infinite;">
        <div class="ops-chip" style="position:relative;width:66px;height:66px;border-radius:50%;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.16);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;">
          <span style="position:absolute;width:9px;height:9px;border-radius:50%;top:-3px;right:8px;background:${n.color};box-shadow:0 0 12px ${n.color};"></span>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">${n.icon}</svg>
        </div>
        <span class="ops-lab" style="font:600 12px 'Space Grotesk';letter-spacing:.04em;color:#9a9aa2;text-align:center;max-width:130px;line-height:1.25;">${n.t}</span>
      </div>`
  )
  .join("");

export const HOME_HTML = `
<span id="main-content" tabindex="-1"></span>

<div class="mobile-layout" style="font-family:'Space Grotesk',sans-serif;position:relative;overflow-x:clip;">
  ${mobileNavHtml()}
  ${MOBILE_SERVICES_HTML}
  ${mobileAiStudioHtml()}
  ${MOBILE_WHY_HTML}
</div>

<div class="desktop-layout" style="font-family:'Space Grotesk',sans-serif;color:#141414;background:#EBEBE9;overflow-x:clip;position:relative;">

  ${headerHtml()}

  <!-- HERO -->
  <header id="top" data-nav-hero style="position:relative;min-height:100vh;height:100vh;display:flex;flex-direction:column;justify-content:center;background:radial-gradient(120% 100% at 50% 0%,#F3F3F1 0%,#E4E4E1 55%,#D7D7D3 100%);overflow:hidden;padding:0 40px;">
    <video autoPlay muted loop playsInline data-no-lazy data-no-fullscreen poster="/assets/hero-poster.webp" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;"><source src="/assets/hero.mp4" type="video/mp4"></video>
    <div style="position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(12,12,14,.5),rgba(12,12,14,.34) 45%,rgba(12,12,14,.62));"></div>
    <h1 style="position:relative;z-index:3;text-align:center;margin:0;font-family:'Archivo';font-weight:800;text-transform:uppercase;line-height:.95;letter-spacing:-.015em;font-size:clamp(2rem,5.8vw,5.4rem);color:transparent;-webkit-text-stroke:1.6px rgba(255,255,255,.94);">Visual Content for<br>E-commerce by<br>Human and AI</h1>
    <p style="position:relative;z-index:3;text-align:center;margin:22px auto 0;max-width:42ch;font:400 17px/1.5 'Space Grotesk';color:rgba(255,255,255,.82);">AI-powered creativity. Human expertise. Built for scale.</p>
    <div style="position:absolute;left:0;right:0;bottom:0;z-index:6;overflow:hidden;background:rgba(10,10,12,.55);backdrop-filter:blur(6px);border-top:1px solid rgba(255,255,255,.16);">
      <div style="display:flex;width:max-content;animation:sg-marquee 34s linear infinite;">
        <div style="display:flex;align-items:center;padding:15px 0;">${BRAND_MARQUEE_ITEMS}</div>
        <div style="display:flex;align-items:center;padding:15px 0;" aria-hidden="true">${BRAND_MARQUEE_ITEMS}</div>
      </div>
    </div>
  </header>

  <!-- PHOTO (teaser -> sub-page) -->
  <section id="photo" data-screen-label="Photo" style="position:relative;background:#EDEDEB;">
    <a href="/photo" style="display:block;text-decoration:none;color:inherit;">
      <div data-cursor="media" style="position:relative;height:100vh;height:100dvh;min-height:600px;overflow:hidden;background:#d8d8d4;display:flex;align-items:center;justify-content:center;">
        <div class="sg-photo-slides" style="position:absolute;inset:0;">
          <img class="sg-photo-slide" data-active="1" src="/assets/photo-hero-1.webp" alt="AI-powered image post-production" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center top;opacity:1;transition:opacity 1.1s ease;">
          <img class="sg-photo-slide" data-active="0" src="/assets/photo-hero-2.webp" alt="AI-powered image post-production" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center top;opacity:0;transition:opacity 1.1s ease;">
          <img class="sg-photo-slide" data-active="0" src="/assets/photo-hero-3.webp" alt="AI-powered image post-production" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;opacity:0;transition:opacity 1.1s ease;">
          <img class="sg-photo-slide" data-active="0" src="/assets/photo-hero-4.webp" alt="AI-powered image post-production" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;opacity:0;transition:opacity 1.1s ease;">
          <img class="sg-photo-slide" data-active="0" src="/assets/photo-hero-5.webp" alt="AI-powered image post-production" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center top;opacity:0;transition:opacity 1.1s ease;">
          <img class="sg-photo-slide" data-active="0" src="/assets/photo-hero-6.webp" alt="AI-powered image post-production" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center top;opacity:0;transition:opacity 1.1s ease;">
        </div>
        <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(18,18,20,.4),rgba(18,18,20,.22) 45%,rgba(18,18,20,.55));"></div>
        <span style="position:absolute;left:40px;bottom:30px;font:500 12px 'Space Grotesk';letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.82);z-index:3;">Skill Graphics — Photo</span>
        <div style="position:relative;z-index:2;text-align:center;padding:0 24px;">
          <h2 style="margin:0;font-family:'Archivo';font-weight:800;font-size:clamp(2.4rem,7.4vw,7rem);text-transform:uppercase;color:transparent;-webkit-text-stroke:1.4px #fff;line-height:.92;letter-spacing:-.01em;">Image&nbsp;Editing</h2>
          <p style="font:400 clamp(1rem,1.6vw,1.25rem)/1.5 'Space Grotesk';color:rgba(255,255,255,.9);margin:26px auto 0;max-width:52ch;">Increase your sales with high-quality content — from PDP and campaign shots to on-location and luxury imagery.</p>
          <span style="display:inline-flex;align-items:center;gap:12px;margin-top:30px;background:#fff;color:#141414;font:700 15px 'Space Grotesk';padding:15px 30px;border-radius:100px;">Explore image services <span style="font-size:18px;">&#8594;</span></span>
          <div class="sg-photo-dots" style="display:flex;gap:9px;justify-content:center;margin-top:34px;">
            <span class="sg-photo-dot" style="width:26px;height:3px;border-radius:2px;background:#fff;opacity:1;transition:opacity .5s ease;"></span>
            <span class="sg-photo-dot" style="width:26px;height:3px;border-radius:2px;background:#fff;opacity:.4;transition:opacity .5s ease;"></span>
            <span class="sg-photo-dot" style="width:26px;height:3px;border-radius:2px;background:#fff;opacity:.4;transition:opacity .5s ease;"></span>
            <span class="sg-photo-dot" style="width:26px;height:3px;border-radius:2px;background:#fff;opacity:.4;transition:opacity .5s ease;"></span>
            <span class="sg-photo-dot" style="width:26px;height:3px;border-radius:2px;background:#fff;opacity:.4;transition:opacity .5s ease;"></span>
          </div>
        </div>
      </div>
    </a>
  </section>

  <!-- VIDEO (teaser -> sub-page) -->
  <section id="video" data-screen-label="Video" style="position:relative;background:#141414;color:#fff;">
    <a href="/video" style="display:block;text-decoration:none;color:inherit;">
      <div data-cursor="media" style="position:relative;height:100vh;height:100dvh;min-height:600px;overflow:hidden;background:#141414;display:flex;align-items:center;justify-content:center;">
        <div class="sg-vhero" data-op="0.66" style="position:absolute;inset:0;">
          <video class="sg-vhero-v" autoPlay muted playsInline preload="auto" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.66;background:#141414;"></video>
          <video class="sg-vhero-v" muted playsInline preload="auto" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;background:#141414;"></video>
        </div>
        <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,10,12,.44),rgba(10,10,12,.28) 45%,rgba(10,10,12,.58));"></div>
        <span style="position:absolute;left:40px;bottom:30px;font:500 12px 'Space Grotesk';letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.72);z-index:5;">Skill Graphics - Video</span>
        <div style="position:relative;z-index:2;text-align:center;padding:0 24px;">
          <h2 style="margin:0;font-family:'Archivo';font-weight:800;font-size:clamp(2.4rem,7.4vw,7rem);text-transform:uppercase;color:transparent;-webkit-text-stroke:1.4px rgba(255,255,255,.85);line-height:.92;letter-spacing:-.01em;">Video&nbsp;Editing</h2>
          <p style="font:400 clamp(1rem,1.6vw,1.25rem)/1.5 'Space Grotesk';color:rgba(255,255,255,.9);margin:26px auto 0;max-width:54ch;">Motion picture drives your revenue — high-quality video content, faster and at scale, powered by AI and refined by experts.</p>
          <span style="display:inline-flex;align-items:center;gap:12px;margin-top:30px;background:#fff;color:#141414;font:700 15px 'Space Grotesk';padding:15px 30px;border-radius:100px;">Explore video services <span style="font-size:18px;">&#8594;</span></span>
        </div>
      </div>
    </a>
  </section>

  <!-- AI STUDIO -->
  <section id="studio" data-screen-label="AI Studio" style="position:relative;min-height:100vh;display:flex;flex-direction:column;justify-content:center;">
    ${AI_STUDIO_HTML}
  </section>

  <!-- CASES -->
  <section id="cases" data-screen-label="Cases" style="background:#EDEDEB;height:100vh;height:100dvh;padding:clamp(48px,6vh,84px) 0 clamp(40px,5vh,72px);position:relative;overflow:hidden;display:flex;flex-direction:column;justify-content:center;">
    <div id="cases-intro" style="width:100%;padding:0 clamp(24px,4vw,60px);margin-bottom:clamp(10px,1.4vh,18px);flex:0 0 auto;opacity:0;transform:translateY(24px);transition:opacity .8s cubic-bezier(.2,.7,.2,1),transform .8s cubic-bezier(.2,.7,.2,1);">
      <div style="display:flex;align-items:baseline;justify-content:space-between;gap:20px;">
        <span style="font:600 12px 'Space Grotesk';letter-spacing:.22em;text-transform:uppercase;color:#7B2C8E;">Selected work</span>
        <span style="font:400 13px 'Space Grotesk';color:#8a8a86;">Brands we craft content for</span>
      </div>
      <div style="position:relative;height:1px;margin-top:14px;background:rgba(20,20,20,.14);overflow:hidden;">
        <div id="cases-rule" style="position:absolute;inset:0;background:#1c1c1c;transform:scaleX(0);transform-origin:left;transition:transform 1.1s cubic-bezier(.2,.7,.2,1) .15s;"></div>
      </div>
    </div>
    <div style="width:100%;text-align:center;padding:0 clamp(24px,4vw,60px);margin-bottom:clamp(14px,2vh,26px);flex:0 0 auto;">
      <svg viewBox="0 0 1000 250" width="min(46vw,720px)" style="display:inline-block;height:auto;overflow:visible;" preserveAspectRatio="xMidYMid meet" aria-label="Cases">
        <text x="500" y="196" text-anchor="middle" textLength="948" lengthAdjust="spacingAndGlyphs" font-family="Archivo" font-weight="900" font-size="230" fill="none" stroke="#1c1c1c" stroke-width="1.6" vector-effect="non-scaling-stroke">CASES</text>
      </svg>
    </div>
    <div id="cases-wrap" class="cases-marquee-wrap" style="position:relative;margin-top:0;flex:1 1 auto;min-height:0;height:auto;overflow:hidden;">
      <div id="cases-track" style="display:flex;align-items:center;gap:0;height:100%;width:max-content;will-change:transform;">${CASES_MARQUEE}
      </div>
    </div>
  </section>

  <!-- POWERING EVERY PROJECT -->
  <section data-screen-label="Powering" style="background:#000000;color:#fff;padding:clamp(20px,3vh,40px) 40px clamp(56px,7.5vh,104px);position:relative;overflow:hidden;min-height:100vh;display:flex;flex-direction:column;justify-content:center;">
    <div aria-hidden="true" style="position:absolute;top:-10%;left:50%;transform:translateX(-50%);width:70vw;height:70vw;max-width:1000px;max-height:1000px;border-radius:50%;background:radial-gradient(circle,rgba(123,44,142,.16),transparent 60%);filter:blur(50px);"></div>

    <svg aria-hidden="true" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%;z-index:1;pointer-events:none;">
      <defs>
        <linearGradient id="sg-streamL" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#7B2C8E" stop-opacity="0"/><stop offset="1" stop-color="#7B2C8E" stop-opacity=".7"/></linearGradient>
        <linearGradient id="sg-streamR" x1="1" y1="0" x2="0" y2="0"><stop offset="0" stop-color="#5b8def" stop-opacity="0"/><stop offset="1" stop-color="#5b8def" stop-opacity=".7"/></linearGradient>
      </defs>
      <g fill="none" stroke-width="1" opacity=".5">
        <path d="M0,150 C360,150 560,360 800,430" stroke="url(#sg-streamL)"/>
        <path d="M0,450 C380,450 600,450 800,450" stroke="url(#sg-streamL)"/>
        <path d="M0,760 C380,760 580,540 800,470" stroke="url(#sg-streamL)"/>
        <path d="M1600,120 C1240,120 1040,360 800,432" stroke="url(#sg-streamR)"/>
        <path d="M1600,450 C1220,450 1020,450 800,450" stroke="url(#sg-streamR)"/>
        <path d="M1600,800 C1260,800 1040,560 800,472" stroke="url(#sg-streamR)"/>
      </g>
      <g fill="none" stroke-width="1.6" stroke-linecap="round" stroke-dasharray="4 26">
        <path id="sgs0" d="M0,150 C360,150 560,360 800,430" stroke="#a24fbd" style="animation:sg-flowL 3.2s linear infinite;"/>
        <path id="sgs1" d="M0,450 C380,450 600,450 800,450" stroke="#a24fbd" style="animation:sg-flowL 2.6s linear infinite;"/>
        <path id="sgs2" d="M0,760 C380,760 580,540 800,470" stroke="#a24fbd" style="animation:sg-flowL 3.6s linear infinite;"/>
        <path id="sgs3" d="M1600,120 C1240,120 1040,360 800,432" stroke="#7fa8f2" style="animation:sg-flowR 3.0s linear infinite;"/>
        <path id="sgs4" d="M1600,450 C1220,450 1020,450 800,450" stroke="#7fa8f2" style="animation:sg-flowR 2.4s linear infinite;"/>
        <path id="sgs5" d="M1600,800 C1260,800 1040,560 800,472" stroke="#7fa8f2" style="animation:sg-flowR 3.8s linear infinite;"/>
      </g>
      <g>
        <circle cx="0" cy="150" r="4" fill="#7B2C8E" style="animation:sg-streampulse 3s ease-in-out infinite;"/>
        <circle cx="0" cy="450" r="4" fill="#7B2C8E" style="animation:sg-streampulse 3s ease-in-out infinite .6s;"/>
        <circle cx="0" cy="760" r="4" fill="#7B2C8E" style="animation:sg-streampulse 3s ease-in-out infinite 1.2s;"/>
        <circle cx="1600" cy="120" r="4" fill="#5b8def" style="animation:sg-streampulse 3s ease-in-out infinite .3s;"/>
        <circle cx="1600" cy="450" r="4" fill="#5b8def" style="animation:sg-streampulse 3s ease-in-out infinite .9s;"/>
        <circle cx="1600" cy="800" r="4" fill="#5b8def" style="animation:sg-streampulse 3s ease-in-out infinite 1.5s;"/>
      </g>
      <g>
        <circle r="3.4" fill="#c86ad8"><animateMotion dur="3.2s" repeatCount="indefinite"><mpath href="#sgs0"/></animateMotion></circle>
        <circle r="3.4" fill="#c86ad8"><animateMotion dur="2.6s" repeatCount="indefinite"><mpath href="#sgs1"/></animateMotion></circle>
        <circle r="3.4" fill="#c86ad8"><animateMotion dur="3.6s" repeatCount="indefinite"><mpath href="#sgs2"/></animateMotion></circle>
        <circle r="3.4" fill="#8fb4f6"><animateMotion dur="3.0s" repeatCount="indefinite"><mpath href="#sgs3"/></animateMotion></circle>
        <circle r="3.4" fill="#8fb4f6"><animateMotion dur="2.4s" repeatCount="indefinite"><mpath href="#sgs4"/></animateMotion></circle>
        <circle r="3.4" fill="#8fb4f6"><animateMotion dur="3.8s" repeatCount="indefinite"><mpath href="#sgs5"/></animateMotion></circle>
      </g>
    </svg>
    <div style="position:relative;z-index:2;text-align:center;max-width:900px;margin:0 auto;">
      <p style="font:600 13px 'Space Grotesk';letter-spacing:.2em;text-transform:uppercase;color:#b98cd0;margin:0 0 16px;">Powering every project</p>
      <h2 style="font-family:'Archivo';font-weight:800;font-size:clamp(1.9rem,4.4vw,3.3rem);line-height:1.05;margin:0;">An operation built around your content.</h2>
      <div style="display:flex;justify-content:center;gap:14px;margin-top:clamp(18px,2.4vh,30px);flex-wrap:wrap;">
        <div style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:16px;padding:16px 26px;text-align:center;min-width:150px;">
          <div style="font-family:'Archivo';font-weight:900;font-size:clamp(26px,3vw,36px);line-height:1;color:#fff;">10,000<span style="color:#b98cd0;">+</span></div>
          <div style="font:600 10px 'Space Grotesk';letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.55);margin-top:7px;">Images / day</div>
        </div>
        <div style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:16px;padding:16px 26px;text-align:center;min-width:150px;">
          <div style="font-family:'Archivo';font-weight:900;font-size:clamp(26px,3vw,36px);line-height:1;color:#fff;">3M<span style="color:#b98cd0;">+</span></div>
          <div style="font:600 10px 'Space Grotesk';letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.55);margin-top:7px;">Images / year</div>
        </div>
      </div>
    </div>

    <div class="ops-stage" style="position:relative;z-index:2;width:min(760px,92vw,62vh);aspect-ratio:1;margin:0 auto 0;">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid meet" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible;pointer-events:none;">
        <circle cx="500" cy="500" r="300" fill="none" stroke="rgba(255,255,255,.05)" stroke-width="1"/>
        <line id="ops-line-0" x1="500" y1="500" x2="500" y2="120" stroke="rgba(255,255,255,.14)" stroke-width="1.6" stroke-dasharray="5 7" style="animation:sg-dash 1.4s linear infinite;"></line>
        <line id="ops-line-1" x1="500" y1="500" x2="861" y2="383" stroke="rgba(255,255,255,.14)" stroke-width="1.6" stroke-dasharray="5 7" style="animation:sg-dash 1.4s linear infinite;"></line>
        <line id="ops-line-2" x1="500" y1="500" x2="723" y2="807" stroke="rgba(255,255,255,.14)" stroke-width="1.6" stroke-dasharray="5 7" style="animation:sg-dash 1.4s linear infinite;"></line>
        <line id="ops-line-3" x1="500" y1="500" x2="277" y2="807" stroke="rgba(255,255,255,.14)" stroke-width="1.6" stroke-dasharray="5 7" style="animation:sg-dash 1.4s linear infinite;"></line>
        <line id="ops-line-4" x1="500" y1="500" x2="139" y2="383" stroke="rgba(255,255,255,.14)" stroke-width="1.6" stroke-dasharray="5 7" style="animation:sg-dash 1.4s linear infinite;"></line>
        <circle id="ops-dot-0" cx="500" cy="120" r="4" fill="#7B2C8E" opacity=".7"></circle>
        <circle id="ops-dot-1" cx="861" cy="383" r="4" fill="#5b8def" opacity=".7"></circle>
        <circle id="ops-dot-2" cx="723" cy="807" r="4" fill="#22c9d8" opacity=".7"></circle>
        <circle id="ops-dot-3" cx="277" cy="807" r="4" fill="#c848d8" opacity=".7"></circle>
        <circle id="ops-dot-4" cx="139" cy="383" r="4" fill="#E0222E" opacity=".7"></circle>
        <g id="ops-comet" style="opacity:0;">
          <circle id="ops-comet-head" cx="500" cy="500" r="6.5" fill="#fff"></circle>
        </g>
      </svg>
      <div id="ops-core" style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:clamp(180px,24vw,240px);height:clamp(180px,24vw,240px);border-radius:50%;z-index:5;display:flex;align-items:center;justify-content:center;text-align:center;">
        <span aria-hidden="true" style="position:absolute;inset:0;border-radius:50%;border:1px solid rgba(123,44,142,.5);animation:sg-ring 3.2s ease-out infinite;pointer-events:none;"></span>
        <span aria-hidden="true" style="position:absolute;inset:0;border-radius:50%;border:1px solid rgba(123,44,142,.4);animation:sg-ring 3.2s ease-out infinite 1.6s;pointer-events:none;"></span>
        <span aria-hidden="true" style="position:absolute;inset:-2px;border-radius:50%;background:conic-gradient(from 0deg,transparent,rgba(123,44,142,.7),transparent 55%);animation:sg-coreSpin 7s linear infinite;-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - 2px),#000 calc(100% - 2px));mask:radial-gradient(farthest-side,transparent calc(100% - 2px),#000 calc(100% - 2px));pointer-events:none;"></span>
        <div style="position:absolute;inset:8px;border-radius:50%;background:radial-gradient(circle at 50% 38%,#1a1424,#0b0b10 72%);border:1px solid rgba(255,255,255,.09);box-shadow:inset 0 2px 30px rgba(123,44,142,.25);"></div>
        <div id="ops-readout" style="position:relative;z-index:2;padding:26px;">
          <p style="font:600 12px 'Space Grotesk';letter-spacing:.22em;text-transform:uppercase;color:#7B2C8E;margin:0 0 12px;">Operations Core</p>
          <p style="font-family:'Archivo';font-weight:800;font-size:27px;line-height:1.08;margin:0 0 10px;">Built around<br>your content</p>
          <p style="font:400 14px/1.4 'Space Grotesk';color:#8a8a92;margin:0;">Hover a capability</p>
        </div>
      </div>
      ${OPS_NODES}
    </div>
    <p style="position:relative;z-index:2;text-align:center;font:500 14px 'Space Grotesk';color:#6b6b72;margin:clamp(16px,2.5vh,36px) auto 0;">Powered by a state-of-the-art post-production research &amp; management team.</p>
  </section>

  <!-- FUTURE VISION — zoom in after Operations -->
  <section id="vision" data-screen-label="Future Vision" data-nav-bg="dark" style="position:relative;background:#000;">
    <div id="vision-pin" style="position:sticky;top:0;height:100vh;overflow:hidden;background:#000;">
      <div id="vision-stage" style="position:absolute;inset:0;z-index:5;opacity:1;">
        <div id="vision-backdrop" aria-hidden="true" style="position:absolute;inset:0;background:#000000;opacity:1;"></div>
        <div id="vision-env" aria-hidden="true" style="position:absolute;inset:0;background:radial-gradient(circle at 50% 46%,#0a0a16 0%,#050509 55%,#000000 100%);opacity:0;"></div>
        <div id="vision-stars" aria-hidden="true" style="position:absolute;inset:0;opacity:0;background-image:radial-gradient(1.4px 1.4px at 12% 22%,#fff,transparent),radial-gradient(1.2px 1.2px at 82% 16%,#cbe,transparent),radial-gradient(1px 1px at 66% 30%,#fff,transparent),radial-gradient(1.4px 1.4px at 28% 72%,#fff,transparent),radial-gradient(1px 1px at 90% 62%,#dcf,transparent),radial-gradient(1.2px 1.2px at 44% 84%,#fff,transparent),radial-gradient(1px 1px at 8% 54%,#fff,transparent),radial-gradient(1.3px 1.3px at 74% 82%,#bcf,transparent);animation:sg-twinkle 4s ease-in-out infinite;"></div>
        <div id="vision-head" style="position:absolute;top:8vh;left:0;right:0;text-align:center;z-index:6;opacity:0;">
          <p style="font:600 12px 'Space Grotesk';letter-spacing:.28em;text-transform:uppercase;color:#b98cd0;margin:0 0 12px;">The next chapter begins</p>
          <h2 style="font-family:'Archivo';font-weight:900;font-size:clamp(2.2rem,6vw,5rem);line-height:.95;margin:0;letter-spacing:-.01em;color:#fff;">FUTURE <span style="color:#7B2C8E;">VISION</span></h2>
        </div>
        <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:2;display:flex;align-items:center;justify-content:center;">
          <div id="vision-globe" style="position:relative;width:min(60vh,86vw);aspect-ratio:1;transform:scale(.07);opacity:0;">
            <div aria-hidden="true" style="position:absolute;inset:-8%;border-radius:50%;background:radial-gradient(circle,transparent 58%,rgba(123,44,142,.16) 70%,transparent 80%);animation:sg-globepulse 5s ease-in-out infinite;"></div>
            <div aria-hidden="true" style="position:absolute;inset:-13%;border-radius:50%;border:1px solid rgba(123,44,142,.28);transform:scaleY(.34);"></div>
            <div aria-hidden="true" style="position:absolute;inset:-13%;transform:scaleY(.34);animation:sg-orbit 16s linear infinite;"><div style="position:absolute;top:50%;left:-4px;width:9px;height:9px;border-radius:50%;background:#c86ad8;box-shadow:0 0 14px #c86ad8;margin-top:-4px;"></div></div>
            <div aria-hidden="true" style="position:absolute;inset:-13%;border-radius:50%;border:1px solid rgba(91,141,239,.22);transform:rotate(60deg) scaleY(.34);"></div>
            <div aria-hidden="true" style="position:absolute;inset:-13%;transform:rotate(60deg) scaleY(.34);animation:sg-orbit-r 22s linear infinite;"><div style="position:absolute;top:50%;left:-4px;width:8px;height:8px;border-radius:50%;background:#5b8def;box-shadow:0 0 14px #5b8def;margin-top:-4px;"></div></div>
            <div style="position:absolute;inset:0;border-radius:50%;overflow:hidden;background:#0a0a18;">
              <div style="position:absolute;inset:-12%;background-image:radial-gradient(circle,rgba(160,100,220,.95) 1.1px,transparent 1.5px);background-size:20px 20px;animation:sg-globe-rot 18s linear infinite;opacity:.55;"></div>
              <div style="position:absolute;inset:-12%;background-image:radial-gradient(circle,rgba(120,170,255,.7) 1px,transparent 1.4px);background-size:32px 32px;animation:sg-globe-rot 26s linear infinite;opacity:.4;"></div>
            </div>
            <div aria-hidden="true" style="position:absolute;inset:0;border-radius:50%;background:radial-gradient(circle at 34% 28%,rgba(255,255,255,.16),transparent 44%),radial-gradient(circle at 72% 76%,rgba(0,0,0,.72),transparent 60%);box-shadow:inset 10px 12px 44px rgba(123,44,142,.3),inset -34px -34px 90px rgba(0,0,0,.85);"></div>
            <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;z-index:2;">
              <span style="font-family:'Archivo';font-weight:900;font-size:clamp(1.4rem,3vw,2.4rem);letter-spacing:.04em;color:#fff;">SKILL</span>
              <span style="font:500 11px 'Space Grotesk';letter-spacing:.28em;text-transform:uppercase;color:rgba(255,255,255,.7);margin-top:4px;">Global Network</span>
            </div>
          </div>
        </div>
        <div class="vpoint" style="position:absolute;left:6%;top:23%;max-width:270px;z-index:5;opacity:0;">
          <p style="font:700 12px 'Space Grotesk';letter-spacing:.16em;color:#c86ad8;margin:0 0 8px;">01</p>
          <h3 style="font-family:'Archivo';font-weight:800;font-size:clamp(18px,1.8vw,23px);margin:0 0 8px;line-height:1.12;color:#fff;">1,000+ creative professionals</h3>
          <p style="font:400 14px/1.55 'Space Grotesk';color:#d2d2de;margin:0;">A global network of talent. Limitless creativity.</p>
        </div>
        <div class="vpoint" style="position:absolute;right:6%;top:27%;max-width:280px;text-align:right;z-index:5;opacity:0;">
          <p style="font:700 12px 'Space Grotesk';letter-spacing:.16em;color:#8fb4f6;margin:0 0 8px;">02</p>
          <h3 style="font-family:'Archivo';font-weight:800;font-size:clamp(18px,1.8vw,23px);margin:0 0 8px;line-height:1.12;color:#fff;">Global leader in AI-powered image &amp; video production</h3>
          <p style="font:400 14px/1.55 'Space Grotesk';color:#d2d2de;margin:0;">Intelligent technology. Smarter workflows.</p>
        </div>
        <div class="vpoint" style="position:absolute;left:0;right:0;bottom:11%;text-align:center;z-index:5;opacity:0;">
          <p style="font:700 12px 'Space Grotesk';letter-spacing:.16em;color:#5cd6e0;margin:0 0 8px;">03</p>
          <h3 style="font-family:'Archivo';font-weight:800;font-size:clamp(18px,1.8vw,23px);margin:0 auto 8px;line-height:1.12;max-width:26ch;color:#fff;">A fully connected, intelligent production ecosystem</h3>
          <p style="font:400 14px/1.55 'Space Grotesk';color:#d2d2de;margin:0;">Seamless. Scalable. Future-ready.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- JOIN / ACADEMY -->
  <section id="join" data-screen-label="Careers" data-nav-bg="dark" style="background:#000;color:#fff;min-height:100vh;display:flex;align-items:center;padding:clamp(90px,12vh,130px) 40px;position:relative;z-index:2;">
    <div style="max-width:1180px;margin:0 auto;width:100%;">
      <div style="display:grid;grid-template-columns:1.15fr 0.85fr;gap:64px;align-items:center;">
        <div style="position:relative;display:flex;flex-direction:column;">
          <div style="display:flex;align-items:center;gap:14px;margin:0 0 14px;">
            <span style="font:600 13px 'Space Grotesk';letter-spacing:.16em;text-transform:uppercase;color:#b98cd0;">Join us</span>
            <span style="flex:1 1 auto;height:1px;background:linear-gradient(90deg,rgba(185,140,208,.5),transparent);"></span>
          </div>
          <h2 style="font-family:'Archivo';font-weight:800;font-size:clamp(2.1rem,4.6vw,3.6rem);line-height:1.02;margin:0 0 18px;">Grow as a<br><span id="join-rotor" style="color:#b98cd0;display:inline-block;min-height:1.05em;transition:opacity .4s ease,transform .4s ease;">Retoucher.</span></h2>
          <p style="font:400 17px/1.6 'Space Grotesk';color:#adadb2;margin:0 0 30px;max-width:50ch;">Whether you're launching your career or taking the next big step, Skill is where creativity, technology and ambition come together. Create. Innovate. Grow. Together.</p>
          <p style="font:600 12px 'Space Grotesk';letter-spacing:.14em;text-transform:uppercase;color:#7a7a80;margin:0 0 14px;">Open positions</p>
          <div style="display:flex;flex-wrap:wrap;gap:10px;">
            <span class="join-chip" style="font:500 13px 'Space Grotesk';border:1px solid #33333a;padding:9px 16px;border-radius:100px;color:#d8d8dc;transition:border-color .3s ease,color .3s ease,transform .3s ease;">Image Editor</span><span class="join-chip" style="font:500 13px 'Space Grotesk';border:1px solid #33333a;padding:9px 16px;border-radius:100px;color:#d8d8dc;transition:border-color .3s ease,color .3s ease,transform .3s ease;">Video Editor</span><span class="join-chip" style="font:500 13px 'Space Grotesk';border:1px solid #33333a;padding:9px 16px;border-radius:100px;color:#d8d8dc;transition:border-color .3s ease,color .3s ease,transform .3s ease;">VFX Artist</span><span class="join-chip" style="font:500 13px 'Space Grotesk';border:1px solid #33333a;padding:9px 16px;border-radius:100px;color:#d8d8dc;transition:border-color .3s ease,color .3s ease,transform .3s ease;">Quality Controller</span><span class="join-chip" style="font:500 13px 'Space Grotesk';border:1px solid #33333a;padding:9px 16px;border-radius:100px;color:#d8d8dc;transition:border-color .3s ease,color .3s ease,transform .3s ease;">Social Media</span><span class="join-chip" style="font:500 13px 'Space Grotesk';border:1px solid #33333a;padding:9px 16px;border-radius:100px;color:#d8d8dc;transition:border-color .3s ease,color .3s ease,transform .3s ease;">Global Marketing</span><span class="join-chip" style="font:500 13px 'Space Grotesk';border:1px solid #33333a;padding:9px 16px;border-radius:100px;color:#d8d8dc;transition:border-color .3s ease,color .3s ease,transform .3s ease;">Business Development</span><span class="join-chip" style="font:500 13px 'Space Grotesk';border:1px solid #33333a;padding:9px 16px;border-radius:100px;color:#d8d8dc;transition:border-color .3s ease,color .3s ease,transform .3s ease;">Finance &amp; HR</span><span class="join-chip" style="font:500 13px 'Space Grotesk';border:1px solid #33333a;padding:9px 16px;border-radius:100px;color:#d8d8dc;transition:border-color .3s ease,color .3s ease,transform .3s ease;">IT &amp; Development</span>
          </div>
          <a href="#apply" class="join-cta" style="display:inline-flex;align-items:center;gap:10px;align-self:flex-start;margin-top:34px;text-decoration:none;color:#141414;background:#fff;font:600 15px 'Space Grotesk';padding:15px 30px;border-radius:100px;transition:transform .3s ease,box-shadow .3s ease;">Explore open roles <span style="transition:transform .3s ease;">&#8594;</span></a>
        </div>
        <div class="sa-card" style="position:relative;display:flex;flex-direction:column;justify-content:center;background:#fff;border:1px solid #e7e2ec;border-radius:22px;padding:30px 30px;overflow:hidden;box-shadow:0 18px 44px rgba(20,20,20,.08);transition:background .55s ease,border-color .55s ease,box-shadow .55s ease;">
          <img class="sa-logo" src="/assets/skill-academy-mark.png" alt="Skill Academy" loading="lazy" style="width:210px;max-width:66%;height:auto;display:block;margin:0 auto 16px;transition:transform .6s cubic-bezier(.2,.72,.2,1);">
          <p class="sa-desc" style="font:400 14px/1.55 'Space Grotesk';color:#5b5b58;margin:0 auto 20px;text-align:center;max-width:36ch;transition:color .5s ease;">Great talent isn't just hired — it's developed. Real-world training and hands-on production experience with international brands.</p>
          <div style="display:grid;gap:8px;">
            <div class="sa-row" style="display:flex;justify-content:space-between;align-items:center;padding:11px 0;border-top:1px solid #ece9ef;transition:border-color .5s ease;"><span class="sa-t" style="font:500 14px 'Space Grotesk';color:#1c1c1c;transition:color .5s ease;">Image Post-Production</span><span class="sa-arrow" style="color:#f59120;transition:color .5s ease,transform .35s ease;">&#8594;</span></div>
            <div class="sa-row" style="display:flex;justify-content:space-between;align-items:center;padding:11px 0;border-top:1px solid #ece9ef;transition:border-color .5s ease;"><span class="sa-t" style="font:500 14px 'Space Grotesk';color:#1c1c1c;transition:color .5s ease;">Video Editing</span><span class="sa-arrow" style="color:#f59120;transition:color .5s ease,transform .35s ease;">&#8594;</span></div>
            <div class="sa-row" style="display:flex;justify-content:space-between;align-items:center;padding:11px 0;border-top:1px solid #ece9ef;transition:border-color .5s ease;"><span class="sa-t" style="font:500 14px 'Space Grotesk';color:#1c1c1c;transition:color .5s ease;">Visual Effects (VFX)</span><span class="sa-arrow" style="color:#f59120;transition:color .5s ease,transform .35s ease;">&#8594;</span></div>
            <div class="sa-row" style="display:flex;justify-content:space-between;align-items:center;padding:11px 0;border-top:1px solid #ece9ef;border-bottom:1px solid #ece9ef;transition:border-color .5s ease;"><span class="sa-t" style="font:500 14px 'Space Grotesk';color:#1c1c1c;transition:color .5s ease;">AI-Powered Production</span><span class="sa-arrow" style="color:#f59120;transition:color .5s ease,transform .35s ease;">&#8594;</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section id="faq" data-screen-label="FAQ" style="background:#EDEDEB;min-height:100vh;display:flex;align-items:center;padding:clamp(90px,12vh,130px) 40px;">
    <div style="max-width:900px;margin:0 auto;width:100%;">
      <p style="font:600 13px 'Space Grotesk';letter-spacing:.16em;text-transform:uppercase;color:#7B2C8E;margin:0 0 14px;">FAQ</p>
      <h2 style="font-family:'Archivo';font-weight:800;font-size:clamp(1.9rem,4vw,3rem);line-height:1.05;margin:0 0 44px;">Frequently asked questions</h2>
      <div style="display:grid;gap:0;">
        <details style="border-top:1px solid #d7d7d2;padding:6px 0;"><summary style="list-style:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:20px;padding:22px 0;font:600 18px 'Space Grotesk';">Why choose Skill over other post-production companies?<span class="sg-faq-plus" style="transition:transform .25s;color:#7B2C8E;font-size:24px;flex:none;">+</span></summary><p style="font:400 16px/1.6 'Space Grotesk';color:#5b5b58;margin:0 0 22px;max-width:70ch;">We combine smart automation, experienced creative professionals and structured quality control to deliver fast, consistent, scalable production for brands worldwide.</p></details>
        <details style="border-top:1px solid #d7d7d2;padding:6px 0;"><summary style="list-style:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:20px;padding:22px 0;font:600 18px 'Space Grotesk';">How fast can you deliver my projects?<span class="sg-faq-plus" style="transition:transform .25s;color:#7B2C8E;font-size:24px;flex:none;">+</span></summary><p style="font:400 16px/1.6 'Space Grotesk';color:#5b5b58;margin:0 0 22px;max-width:70ch;">Turnaround depends on scope and complexity. From urgent deliveries to large-scale production, our workflow is designed to meet your deadlines without compromising quality.</p></details>
        <details style="border-top:1px solid #d7d7d2;padding:6px 0;"><summary style="list-style:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:20px;padding:22px 0;font:600 18px 'Space Grotesk';">Can you handle high-volume production?<span class="sg-faq-plus" style="transition:transform .25s;color:#7B2C8E;font-size:24px;flex:none;">+</span></summary><p style="font:400 16px/1.6 'Space Grotesk';color:#5b5b58;margin:0 0 22px;max-width:70ch;">Absolutely. Whether you need hundreds or hundreds of thousands of assets, our scalable production ecosystem supports growing brands and enterprise clients.</p></details>
        <details style="border-top:1px solid #d7d7d2;padding:6px 0;"><summary style="list-style:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:20px;padding:22px 0;font:600 18px 'Space Grotesk';">Do you use AI?<span class="sg-faq-plus" style="transition:transform .25s;color:#7B2C8E;font-size:24px;flex:none;">+</span></summary><p style="font:400 16px/1.6 'Space Grotesk';color:#5b5b58;margin:0 0 22px;max-width:70ch;">Yes. We use AI to accelerate production and automate repetitive tasks, while every project is refined and approved by experienced creative professionals for exceptional quality.</p></details>
        <details style="border-top:1px solid #d7d7d2;padding:6px 0;"><summary style="list-style:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:20px;padding:22px 0;font:600 18px 'Space Grotesk';">Will I have a dedicated point of contact?<span class="sg-faq-plus" style="transition:transform .25s;color:#7B2C8E;font-size:24px;flex:none;">+</span></summary><p style="font:400 16px/1.6 'Space Grotesk';color:#5b5b58;margin:0 0 22px;max-width:70ch;">Yes. Every client is assigned a dedicated Key Account Manager who oversees communication, project coordination and delivery from start to finish.</p></details>
        <details style="border-top:1px solid #d7d7d2;border-bottom:1px solid #d7d7d2;padding:6px 0;"><summary style="list-style:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:20px;padding:22px 0;font:600 18px 'Space Grotesk';">How does your pricing work?<span class="sg-faq-plus" style="transition:transform .25s;color:#7B2C8E;font-size:24px;flex:none;">+</span></summary><p style="font:400 16px/1.6 'Space Grotesk';color:#5b5b58;margin:0 0 22px;max-width:70ch;">Flexible and based on complexity, volume, turnaround and workflow. We provide transparent quotations with no hidden costs.</p></details>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  ${homeDesktopFooterHtml()}

</div>`;
