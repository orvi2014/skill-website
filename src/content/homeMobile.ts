import { JOURNEY_DATA } from "./journeyData";
import { homeMobileFooterHtml } from "./homeFooter";

const BRAND_LIST = [
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
  "Chanel",
  "Burberry",
  "FTKR",
  "Avi&nbsp;&amp;&nbsp;Co",
  "Champion",
  "Vans",
  "Mango",
];

function tickerHtml(): string {
  return BRAND_LIST.map(
    (n) =>
      `<span style="display:flex;align-items:center;"><span style="font:600 12px 'Space Grotesk';letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.9);padding:0 26px;">${n}</span><span style="width:4px;height:4px;border-radius:50%;background:#7B2C8E;"></span></span>`
  ).join("");
}

const MOBILE_CASES = [
  { slug: "nike", name: "Nike", src: "/assets/cases-nike.webp" },
  { slug: "prada", name: "Prada", src: "/assets/cases-prada.webp" },
  { slug: "dkny", name: "DKNY", src: "/assets/cases-dkny.webp" },
  { slug: "cmp", name: "CMP", src: "/assets/cases-cmp.webp" },
  { slug: "adidas", name: "Adidas", src: "/assets/cases-adidas.webp" },
  { slug: "tommy-hilfiger", name: "Tommy Hilfiger", src: "/assets/cases-tommy.webp" },
  { slug: "replay", name: "Replay", src: "/assets/cases-replay.webp" },
  { slug: "elvine", name: "Elvine", src: "/assets/cases-elvine.webp" },
  { slug: "kappahl", name: "KappAhl", src: "/assets/cases-kappahl.webp" },
  { slug: "guess", name: "Guess", src: "/assets/cases-guess.webp" },
  { slug: "amazon", name: "Amazon" },
  { slug: "walmart", name: "Walmart" },
  { slug: "uniqlo", name: "Uniqlo" },
  { slug: "the-north-face", name: "The North Face" },
  { slug: "chanel", name: "Chanel" },
  { slug: "burberry", name: "Burberry" },
  { slug: "ftkr", name: "FTKR" },
  { slug: "avi-co", name: "Avi & Co" },
  { slug: "champion", name: "Champion" },
  { slug: "vans", name: "Vans" },
  { slug: "mango", name: "Mango" },
];

function caseCardsHtml(): string {
  return MOBILE_CASES.map(
    (c) => `
      <a href="/cases/${c.slug}" class="mtap" aria-label="${c.name}" style="flex:0 0 76%;position:relative;display:block;border-radius:18px;overflow:hidden;height:340px;background:#e0ded9;">
        ${
          "src" in c
            ? `<img src="${c.src}" alt="${c.name} e-commerce" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;">`
            : `<div style="position:absolute;inset:0;background:linear-gradient(135deg,#1c1c1c,#0c0c0e);"></div>`
        }
        <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,0) 55%,rgba(0,0,0,.6));"></div>
        <img src="/assets/brand-logos/${c.slug}.png" alt="" loading="lazy" aria-hidden="true" style="position:absolute;right:16px;bottom:16px;max-width:96px;max-height:32px;width:auto;height:auto;object-fit:contain;filter:brightness(0) invert(1);display:block;opacity:.92;" onerror="this.style.display='none';">
      </a>`
  ).join("");
}

const OPS_DATA = [
  { t: "24/6 Global Support", d: "A responsive team across time zones.", a: "#7B2C8E" },
  { t: "Dedicated Account Manager", d: "One contact who owns your delivery.", a: "#3B82F6" },
  { t: "Secure Server Infrastructure", d: "Enterprise-grade, confidential by default.", a: "#10D9C4" },
  { t: "Finance & Billing Team", d: "Transparent invoicing & billing support.", a: "#F5A623" },
  { t: "Internal Production System", d: "Every asset live-tracked end to end.", a: "#E0222E" },
];

function opsTilesHtml(): string {
  return OPS_DATA.map(
    (o, i) => `
      <div class="ops-row" data-i="${i}" style="position:relative;padding-left:40px;padding-bottom:${i === OPS_DATA.length - 1 ? "2px" : "12px"};">
        <span class="ops-dot" data-i="${i}" style="position:absolute;left:8px;top:22px;width:14px;height:14px;border-radius:50%;background:#0C0C0E;border:2px solid ${o.a};transition:all .4s ease;z-index:2;"></span>
        <div class="ops-card" data-i="${i}" style="position:relative;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:15px 16px;transition:all .4s ease;">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
            <h4 style="font-family:'Archivo';font-weight:800;font-size:15.5px;line-height:1.05;margin:0;color:#fff;">${o.t}</h4>
            <span class="ops-num" data-i="${i}" style="font:800 12px 'Archivo';color:rgba(255,255,255,.22);">${String(i + 1).padStart(2, "0")}</span>
          </div>
          <p style="font:400 12.5px/1.45 'Space Grotesk';color:rgba(255,255,255,.6);margin:0;">${o.d}</p>
        </div>
      </div>`
  ).join("");
}

function storyImgsHtml(): string {
  return JOURNEY_DATA.map(
    (j, i) => `
      <img class="jm-simg" data-i="${i}" src="${j.img}" alt="${j.title}" loading="${i < 2 ? "eager" : "lazy"}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:${i === 0 ? 1 : 0};transition:opacity .6s ease;">`
  ).join("");
}

function storyBarsHtml(): string {
  return JOURNEY_DATA.map(
    (_, i) => `
      <div style="flex:1;height:2.5px;border-radius:3px;background:rgba(255,255,255,.3);overflow:hidden;"><div class="jm-barfill" data-i="${i}" style="height:100%;width:0%;background:#fff;border-radius:3px;"></div></div>`
  ).join("");
}

// `subpage` controls whether the in-page anchors (AI Studio, Why Skill,
// Cases, 10 Years, FAQ) point at sections on THIS page or need a leading
// "/" to first navigate back to the home page where those sections
// actually live — this component is reused as-is on Photo, Video, and
// Case pages, none of which contain those sections themselves.
export function mobileNavHtml(subpage = false): string {
  const home = subpage ? "/" : "#top";
  const hash = (id: string) => (subpage ? `/#${id}` : `#${id}`);
  return `
  <div id="mnav-bar" style="position:fixed;top:0;left:50%;transform:translateX(-50%);width:100%;z-index:80;display:flex;align-items:center;justify-content:space-between;padding:14px 18px;background:linear-gradient(180deg,rgba(12,12,14,.82),rgba(12,12,14,0));backdrop-filter:blur(10px);">
    <div style="display:flex;align-items:center;gap:10px;">
      <a href="${home}" style="display:block;"><img src="/assets/logo-white.png" alt="Skill Graphics" style="height:22px;width:auto;display:block;"></a>
      <a href="https://skill.ventures/" target="_blank" rel="noopener noreferrer" style="display:flex;align-items:center;gap:6px;border-left:1px solid rgba(255,255,255,.22);padding-left:10px;">
        <img src="/assets/skill-ventures-white.png" alt="Skill Ventures" style="height:26px;width:auto;display:block;">
      </a>
    </div>
    <button id="mnav-burger" aria-label="Open menu" aria-expanded="false" aria-controls="mnav-menu" style="border:1px solid rgba(255,255,255,.16);background:rgba(255,255,255,.08);width:44px;height:44px;border-radius:13px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;cursor:pointer;">
      <span class="mnav-bar" style="display:block;width:19px;height:2px;background:#fff;border-radius:2px;transition:transform .3s ease;"></span>
      <span class="mnav-bar" style="display:block;width:19px;height:2px;background:#fff;border-radius:2px;transition:opacity .2s ease;"></span>
      <span class="mnav-bar" style="display:block;width:19px;height:2px;background:#fff;border-radius:2px;transition:transform .3s ease;"></span>
    </button>
  </div>

  <div id="mnav-menu" data-open="0" style="position:fixed;inset:0;z-index:90;background:#0C0C0E;display:flex;flex-direction:column;padding:96px 24px 30px;opacity:0;transform:translateY(-14px);pointer-events:none;transition:opacity .4s ease,transform .5s cubic-bezier(.2,.7,.2,1);overflow-y:auto;">
    <button id="mnav-close" aria-label="Close menu" style="position:absolute;top:22px;right:20px;border:none;background:transparent;color:#fff;font:300 38px 'Space Grotesk';line-height:1;cursor:pointer;">&times;</button>
    <p style="font:600 11px 'Space Grotesk';letter-spacing:.24em;text-transform:uppercase;color:#7B2C8E;margin:0 0 20px;">Menu</p>
    <nav style="display:flex;flex-direction:column;">
      <a class="mnav-link" href="/photo" style="font-family:'Archivo';font-weight:800;font-size:32px;color:#fff;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);">Image Editing</a>
      <a class="mnav-link" href="/video" style="font-family:'Archivo';font-weight:800;font-size:32px;color:#fff;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);">Video Editing</a>
      <a class="mnav-link" href="${hash("studio")}" style="font-family:'Archivo';font-weight:800;font-size:32px;color:#fff;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);">AI Studio</a>
      <a class="mnav-link" href="${hash("usp")}" style="font-family:'Archivo';font-weight:800;font-size:32px;color:#fff;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);">Why Skill</a>
      <a class="mnav-link" href="${hash("cases")}" style="font-family:'Archivo';font-weight:800;font-size:32px;color:#fff;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);">Cases</a>
      <a class="mnav-link" href="${hash("journey")}" style="font-family:'Archivo';font-weight:800;font-size:32px;color:#fff;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);">10 Years</a>
      <a class="mnav-link" href="${hash("faq")}" style="font-family:'Archivo';font-weight:800;font-size:32px;color:#fff;padding:10px 0;">FAQ</a>
    </nav>
    <a href="#book" class="mnav-link" style="margin-top:26px;display:flex;align-items:center;justify-content:center;gap:10px;background:#7B2C8E;color:#fff;font:700 15px 'Space Grotesk';padding:16px;border-radius:14px;text-decoration:none;">Book a Meeting <span aria-hidden="true">&#8594;</span></a>
    <div style="margin-top:auto;padding-top:30px;display:flex;align-items:center;justify-content:space-between;">
      <a href="mailto:support@skill.ventures" style="font:500 13px 'Space Grotesk';color:rgba(255,255,255,.65);">support@skill.ventures</a>
      <a href="https://skill.ventures/" target="_blank" rel="noopener noreferrer" style="font:600 11px 'Space Grotesk';letter-spacing:.14em;text-transform:uppercase;color:#b768c6;">Skill Ventures &#8599;</a>
    </div>
  </div>
`;
}

export const MOBILE_SERVICES_HTML = `
  <!-- ============ HERO (mobile) ============ -->
  <header id="mhero" data-nav-hero style="position:relative;height:100svh;min-height:600px;display:flex;flex-direction:column;justify-content:flex-end;overflow:hidden;background:#0C0C0E;">
    <video autoPlay muted loop playsInline data-no-lazy data-no-fullscreen poster="/assets/hero-poster.webp" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;"><source src="/assets/hero.mp4" type="video/mp4"></video>
    <div style="position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(12,12,14,.55),rgba(12,12,14,.25) 42%,rgba(12,12,14,.9));"></div>
    <div style="position:relative;z-index:3;padding:0 22px 26px;">
      <h1 style="margin:0;font-family:'Archivo';font-weight:800;text-transform:uppercase;line-height:.94;letter-spacing:-.02em;font-size:clamp(2.6rem,13vw,4rem);color:#fff;">AI-Powered<br>Post-Production<br><span style="color:transparent;-webkit-text-stroke:1.4px rgba(255,255,255,.85);">Partner</span></h1>
      <p style="font:400 15px/1.5 'Space Grotesk';color:rgba(255,255,255,.82);margin:18px 0 0;max-width:30ch;">From raw files to final frame &mdash; image &amp; video post-production, refined by experts.</p>
      <div style="display:flex;gap:10px;margin-top:20px;">
        <a href="#usp" class="mtap" style="font:600 12px 'Space Grotesk';letter-spacing:.04em;color:#fff;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.28);backdrop-filter:blur(6px);padding:10px 18px;border-radius:100px;">Why Skill</a>
        <a href="#contact" class="mtap" style="font:600 12px 'Space Grotesk';letter-spacing:.04em;color:#fff;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.28);backdrop-filter:blur(6px);padding:10px 18px;border-radius:100px;">Get in touch</a>
      </div>
    </div>
    <div style="position:relative;z-index:3;overflow:hidden;border-top:1px solid rgba(255,255,255,.14);background:rgba(10,10,12,.5);backdrop-filter:blur(6px);padding:12px 0;">
      <div style="display:flex;width:max-content;animation:mm-ticker 26s linear infinite;">
        <span style="display:flex;">${tickerHtml()}</span><span style="display:flex;" aria-hidden="true">${tickerHtml()}</span>
      </div>
    </div>
  </header>

  <!-- ============ SERVICES ============ -->
  <section style="background:#0C0C0E;padding:56px 18px 20px;">
    <div class="mm-reveal" style="margin-bottom:22px;">
      <p style="font:600 11px 'Space Grotesk';letter-spacing:.22em;text-transform:uppercase;color:#7B2C8E;margin:0 0 8px;">What we do</p>
      <h2 style="font-family:'Archivo';font-weight:800;font-size:30px;line-height:1.05;color:#fff;margin:0;">Every frame,<br>brand-ready.</h2>
    </div>
    <div style="display:flex;flex-direction:column;gap:14px;">
      <a href="/photo" class="mtap mm-reveal" style="position:relative;display:block;border-radius:20px;overflow:hidden;height:230px;">
        <img id="mm-gal" src="/assets/photo-hero-1.webp" alt="Image editing" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;">
        <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.1),rgba(0,0,0,.72));"></div>
        <div style="position:absolute;left:18px;right:18px;bottom:16px;color:#fff;">
          <span style="font:600 10px 'Space Grotesk';letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.7);">01 &mdash; Image</span>
          <h3 style="font-family:'Archivo';font-weight:800;font-size:26px;line-height:1;margin:6px 0 4px;">Image Editing</h3>
        </div>
        <span aria-hidden="true" style="position:absolute;top:16px;right:16px;width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.16);backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;color:#fff;font-size:18px;">&#8599;</span>
      </a>
      <a href="/video" class="mtap mm-reveal" style="position:relative;display:block;border-radius:20px;overflow:hidden;height:230px;background:#141414;">
        <video muted loop playsinline preload="none" data-no-fullscreen poster="/assets/video-hero-1-poster.webp" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.9;"><source src="/assets/video-hero-1.mp4" type="video/mp4"></video>
        <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.12),rgba(0,0,0,.72));"></div>
        <div style="position:absolute;left:18px;right:18px;bottom:16px;color:#fff;">
          <span style="font:600 10px 'Space Grotesk';letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.7);">02 &mdash; Video</span>
          <h3 style="font-family:'Archivo';font-weight:800;font-size:26px;line-height:1;margin:6px 0 4px;">Video Editing</h3>
        </div>
        <span aria-hidden="true" style="position:absolute;top:16px;right:16px;width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.16);backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;color:#fff;font-size:18px;">&#8599;</span>
      </a>
    </div>
  </section>
`;

export function mobileAiStudioHtml(): string {
  return `
  <section id="mm-ais-section" style="background:#0C0C0E;padding:44px 18px 56px;">
    <div class="mm-reveal" style="margin-bottom:20px;">
      <p style="font:600 11px 'Space Grotesk';letter-spacing:.22em;text-transform:uppercase;color:#7B2C8E;margin:0 0 8px;">AI Studio &middot; Styling</p>
      <h2 style="font-family:'Archivo';font-weight:800;font-size:28px;line-height:1.05;color:#fff;margin:0;">The right look for every audience</h2>
      <p id="mm-cap" style="font:400 14px/1.55 'Space Grotesk';color:rgba(255,255,255,.6);margin:12px 0 0;max-width:40ch;min-height:6.2em;"></p>
    </div>

    <div class="mm-reveal" style="position:relative;border-radius:22px;overflow:hidden;background:linear-gradient(150deg,rgba(123,44,142,.12),rgba(12,12,14,0));border:1px solid rgba(255,255,255,.1);padding:16px;">
      <div style="position:relative;display:flex;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:100px;padding:5px;overflow:hidden;margin-bottom:16px;">
        <div id="mm-pill" style="position:absolute;top:5px;bottom:5px;left:5px;width:calc((100% - 10px)/3);border-radius:100px;background:linear-gradient(135deg,#8A34A0,#6C2380);box-shadow:0 6px 18px rgba(123,44,142,.5);transform:translateX(0%);transition:transform .55s cubic-bezier(.65,.05,.2,1);"></div>
        <button type="button" class="mm-cat" data-cat="ecom" aria-pressed="true" style="position:relative;z-index:1;flex:1;border:0;background:transparent;color:#fff;font:700 12px 'Space Grotesk';padding:11px 4px;border-radius:100px;cursor:pointer;transition:color .35s ease;">E-commerce</button>
        <button type="button" class="mm-cat" data-cat="editorial" aria-pressed="false" style="position:relative;z-index:1;flex:1;border:0;background:transparent;color:rgba(255,255,255,.55);font:700 12px 'Space Grotesk';padding:11px 4px;border-radius:100px;cursor:pointer;transition:color .35s ease;">Editorial</button>
        <button type="button" class="mm-cat" data-cat="campaign" aria-pressed="false" style="position:relative;z-index:1;flex:1;border:0;background:transparent;color:rgba(255,255,255,.55);font:700 12px 'Space Grotesk';padding:11px 4px;border-radius:100px;cursor:pointer;transition:color .35s ease;">Campaign</button>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
        <div style="position:relative;aspect-ratio:3/4;border-radius:12px;overflow:hidden;background:#161618;">
          <img id="mm-raw" src="/assets/ecom-raw-1.webp" alt="Raw capture" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;">
          <span style="position:absolute;left:9px;top:9px;font:700 9px 'Space Grotesk';letter-spacing:.14em;text-transform:uppercase;color:#fff;background:rgba(0,0,0,.5);padding:5px 9px;border-radius:100px;">Raw</span>
        </div>
        <div style="position:relative;aspect-ratio:3/4;border-radius:12px;overflow:hidden;background:#f4f2ef;border:1px solid rgba(123,44,142,.25);">
          <img id="mm-edit" src="/assets/ecom-still-2.webp" alt="Edited result" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;">
          <span style="position:absolute;left:9px;top:9px;font:700 9px 'Space Grotesk';letter-spacing:.14em;text-transform:uppercase;color:#fff;background:rgba(0,0,0,.5);padding:5px 9px;border-radius:100px;">Edited</span>
        </div>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px;">
        <div style="position:relative;aspect-ratio:9/16;border-radius:14px;overflow:hidden;background:#161618;">
          <img id="mm-onmodel" src="/assets/ecom-onmodel.webp" alt="On-model result" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;">
          <span style="position:absolute;left:9px;top:9px;font:700 9px 'Space Grotesk';letter-spacing:.12em;text-transform:uppercase;color:#fff;background:rgba(0,0,0,.5);padding:5px 9px;border-radius:100px;">On-model</span>
        </div>
        <div style="position:relative;aspect-ratio:9/16;border-radius:14px;overflow:hidden;background:#161618;">
          <video id="mm-vid" class="ais-video" autoplay muted playsinline preload="metadata" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;"><source id="mm-vid-src" src="/assets/ecom-video.mp4" type="video/mp4"></video>
          <span style="position:absolute;left:9px;top:9px;font:700 9px 'Space Grotesk';letter-spacing:.12em;text-transform:uppercase;color:#fff;background:rgba(0,0,0,.5);padding:5px 9px;border-radius:100px;">Video</span>
        </div>
      </div>
    </div>
  </section>`;
}

export const MOBILE_WHY_HTML = `
  <section id="usp" style="background:#EBEBE9;color:#141414;padding:52px 18px;border-radius:28px 28px 0 0;">
    <div class="mm-reveal">
      <p style="font:600 11px 'Space Grotesk';letter-spacing:.22em;text-transform:uppercase;color:#7B2C8E;margin:0 0 12px;">Why Skill</p>
      <h2 style="font-family:'Archivo';font-weight:800;font-size:26px;line-height:1.18;letter-spacing:-.01em;margin:0 0 26px;">Produce more &mdash; without compromising standards. From <span style="color:#141414;">quality</span> to <span style="color:#141414;">fair pricing</span> and <span style="color:#141414;">rapid delivery</span>, engineered around your brand and enhanced by AI.</h2>
    </div>
    <div style="display:flex;flex-direction:column;gap:12px;">
      <div class="mtap mm-reveal" style="display:flex;align-items:center;gap:16px;background:#fff;border:1px solid #e2e0dc;border-radius:16px;padding:18px 16px;">
        <div style="flex:none;width:52px;height:52px;"><svg viewBox="0 0 100 100" fill="none" style="width:52px;height:52px;"><circle cx="50" cy="50" r="34" stroke="#7B2C8E" stroke-width="4"/><path d="M36 50 L46 60 L66 40" stroke="#7B2C8E" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <div><h4 style="font-family:'Archivo';font-weight:800;font-size:18px;margin:0 0 3px;">Upload-ready, every time</h4><p style="font:400 13px/1.42 'Space Grotesk';color:#5a5a5a;margin:0;">Structured, multi-checkpoint Quality Control &mdash; brand-ready before delivery.</p></div>
      </div>
      <div class="mtap mm-reveal" style="display:flex;align-items:center;gap:16px;background:#fff;border:1px solid #e2e0dc;border-radius:16px;padding:18px 16px;">
        <div style="flex:none;width:52px;height:52px;"><svg viewBox="0 0 100 100" fill="none" style="width:52px;height:52px;"><line x1="16" y1="82" x2="84" y2="82" stroke="#7B2C8E" stroke-width="4" stroke-linecap="round"/><rect x="26" y="52" width="14" height="30" rx="3" fill="#7B2C8E"/><rect x="46" y="38" width="14" height="44" rx="3" fill="#7B2C8E" opacity=".7"/><rect x="66" y="24" width="14" height="58" rx="3" fill="#7B2C8E" opacity=".45"/></svg></div>
        <div><h4 style="font-family:'Archivo';font-weight:800;font-size:18px;margin:0 0 3px;">Competitive pricing</h4><p style="font:400 13px/1.42 'Space Grotesk';color:#5a5a5a;margin:0;">Fair, transparent rates that scale with your volume.</p></div>
      </div>
      <div class="mtap mm-reveal" style="display:flex;align-items:center;gap:16px;background:#fff;border:1px solid #e2e0dc;border-radius:16px;padding:18px 16px;">
        <div style="flex:none;width:52px;height:52px;"><svg viewBox="0 0 100 100" fill="none" style="width:52px;height:52px;"><circle cx="50" cy="50" r="34" stroke="#7B2C8E" stroke-width="4"/><path d="M50 30 V50 L64 60" stroke="#7B2C8E" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <div><h4 style="font-family:'Archivo';font-weight:800;font-size:18px;margin:0 0 3px;">Rapid delivery</h4><p style="font:400 13px/1.42 'Space Grotesk';color:#5a5a5a;margin:0;">Fast turnaround without a drop in quality.</p></div>
      </div>
    </div>
  </section>

  <!-- ============ CASES ============ -->
  <section id="mm-cases-section" style="background:#EBEBE9;color:#141414;padding:20px 0 52px;">
    <div class="mm-reveal" style="padding:0 18px;margin-bottom:18px;">
      <p style="font:600 11px 'Space Grotesk';letter-spacing:.22em;text-transform:uppercase;color:#7B2C8E;margin:0 0 8px;">Cases</p>
      <h2 style="font-family:'Archivo';font-weight:800;font-size:28px;line-height:1;margin:0;">Selected work</h2>
    </div>
    <div id="mm-cases" style="display:flex;gap:12px;overflow-x:auto;padding:0 18px 8px;">
      ${caseCardsHtml()}${caseCardsHtml()}
    </div>
  </section>

  <!-- ============ POWERING ============ -->
  <section style="background:#0C0C0E;color:#fff;padding:52px 18px;border-radius:28px 28px 0 0;">
    <div class="mm-reveal" style="text-align:center;margin-bottom:26px;">
      <p style="font:600 11px 'Space Grotesk';letter-spacing:.22em;text-transform:uppercase;color:#7B2C8E;margin:0 0 10px;">Powering every project</p>
      <h2 style="font-family:'Archivo';font-weight:800;font-size:28px;line-height:1.05;margin:0;">An operation built<br>around your content.</h2>
    </div>
    <div class="mm-reveal" style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:28px;">
      <div style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:16px;padding:18px 16px;text-align:center;">
        <div style="font-family:'Archivo';font-weight:900;font-size:30px;line-height:1;color:#fff;">10,000<span style="color:#b768c6;">+</span></div>
        <div style="font:600 10px 'Space Grotesk';letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.55);margin-top:7px;">Images / day</div>
      </div>
      <div style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:16px;padding:18px 16px;text-align:center;">
        <div style="font-family:'Archivo';font-weight:900;font-size:30px;line-height:1;color:#fff;">3M<span style="color:#b768c6;">+</span></div>
        <div style="font:600 10px 'Space Grotesk';letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.55);margin-top:7px;">Images / year</div>
      </div>
    </div>
    <div class="mm-reveal" style="display:flex;justify-content:center;margin-bottom:28px;">
      <div style="position:relative;width:138px;height:138px;">
        <div style="position:absolute;inset:0;border-radius:50%;background:conic-gradient(from 0deg,#7B2C8E,#5b8def,#22c9d8,#c848d8,#E0222E,#7B2C8E);animation:mm-orbit 7s linear infinite;"></div>
        <div style="position:absolute;inset:5px;border-radius:50%;background:#0C0C0E;"></div>
        <div style="position:absolute;inset:14px;border-radius:50%;background:radial-gradient(circle at 50% 40%,rgba(123,44,142,.35),transparent 70%);animation:mm-corepulse 2.6s ease-in-out infinite;"></div>
        <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;">
          <span style="font:800 13px 'Archivo';color:#fff;line-height:1.05;">Operations</span>
          <span style="font:800 13px 'Archivo';color:#fff;line-height:1.05;">Core</span>
        </div>
        <div style="position:absolute;inset:-2px;animation:mm-orbit 4.5s linear infinite;"><span style="position:absolute;top:-1px;left:50%;width:9px;height:9px;border-radius:50%;background:#fff;box-shadow:0 0 12px #fff;transform:translateX(-50%);"></span></div>
        <div style="position:absolute;inset:10px;animation:mm-orbitR 6s linear infinite;"><span style="position:absolute;top:-1px;left:50%;width:6px;height:6px;border-radius:50%;background:#c848d8;box-shadow:0 0 10px #c848d8;transform:translateX(-50%);"></span></div>
      </div>
    </div>
    <div id="mm-ops-feed" style="position:relative;padding-left:6px;">
      <div style="position:absolute;left:14px;top:6px;bottom:18px;width:2px;background:linear-gradient(180deg,rgba(123,44,142,.6),rgba(255,255,255,.08));"></div>
      ${opsTilesHtml()}
    </div>
    <p style="font:400 12px/1.5 'Space Grotesk';color:rgba(255,255,255,.5);text-align:center;margin:24px 0 0;">Powered by a state-of-the-art post-production research &amp; management team.</p>
  </section>

  <!-- ============ 10 YEARS ============ -->
  <section id="mm-journey-section" style="background:#0C0C0E;color:#fff;padding:44px 0 40px;">
    <div class="mm-reveal" style="padding:0 18px;margin-bottom:20px;">
      <p style="font:600 11px 'Space Grotesk';letter-spacing:.18em;text-transform:uppercase;color:#b768c6;margin:0 0 12px;">Our journey &middot; 2016 &mdash; present</p>
      <h2 style="font-family:'Archivo';font-weight:900;font-size:40px;line-height:.9;margin:0;">10 YEARS OF <span style="color:#b768c6;">SKILL</span></h2>
    </div>
    <div id="jm-story" style="position:relative;margin:0 14px;border-radius:22px;overflow:hidden;background:#000;aspect-ratio:4/5;max-height:58vh;box-shadow:0 30px 70px rgba(0,0,0,.5);">
      ${storyImgsHtml()}
      <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.35) 0%,rgba(0,0,0,0) 32%,rgba(0,0,0,.15) 55%,rgba(0,0,0,.88) 100%);"></div>
      <div style="position:absolute;top:12px;left:12px;right:12px;display:flex;gap:5px;z-index:4;">
        ${storyBarsHtml()}
      </div>
      <div style="position:absolute;top:30px;left:16px;right:16px;z-index:4;display:flex;justify-content:space-between;align-items:center;">
        <span style="font:700 10px 'Space Grotesk';letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.72);">Skill Graphics</span>
        <span style="font:600 11px 'Space Grotesk';letter-spacing:.12em;color:rgba(255,255,255,.72);"><span id="jm-step">1</span> / ${JOURNEY_DATA.length}</span>
      </div>
      <div style="position:absolute;left:20px;right:20px;bottom:26px;z-index:4;">
        <div id="jm-year" style="font-family:'Archivo';font-weight:900;font-size:74px;line-height:.82;letter-spacing:-.02em;color:#fff;text-shadow:0 4px 30px rgba(0,0,0,.5);">${JOURNEY_DATA[0].year}</div>
        <h4 id="jm-title" style="font-family:'Archivo';font-weight:800;font-size:23px;line-height:1.05;margin:12px 0 8px;letter-spacing:-.01em;">${JOURNEY_DATA[0].title}</h4>
        <p id="jm-story-text" style="font:400 14px/1.55 'Space Grotesk';color:rgba(255,255,255,.85);margin:0;max-width:34ch;">${JOURNEY_DATA[0].body}</p>
      </div>
      <button id="jm-prev" aria-label="Previous story" style="position:absolute;left:0;top:0;bottom:0;width:32%;z-index:5;background:transparent;border:0;cursor:pointer;"></button>
      <button id="jm-next" aria-label="Next story" style="position:absolute;right:0;top:0;bottom:0;width:42%;z-index:5;background:transparent;border:0;cursor:pointer;"></button>
    </div>
    <p style="font:500 11px 'Space Grotesk';color:rgba(255,255,255,.4);text-align:center;margin:14px 0 0;">Tap to move through the story</p>
  </section>

  <!-- ============ CONTACT ============ -->
  <section style="background:#EBEBE9;color:#141414;padding:56px 20px 130px;border-radius:28px 28px 0 0;">
    <div class="mm-reveal">
      <p style="font:600 11px 'Space Grotesk';letter-spacing:.22em;text-transform:uppercase;color:#7B2C8E;margin:0 0 14px;">Get in touch</p>
      <h2 style="font-family:'Archivo';font-weight:800;font-size:clamp(28px,8.8vw,36px);line-height:1.02;letter-spacing:-.01em;margin:0 0 8px;">Let's Begin a<br>Conversation</h2>
      <p style="font:400 15px/1.6 'Space Grotesk';color:#4a4a4a;margin:22px 0 0;max-width:32ch;">Share your project and we'll prepare a customised production plan &mdash; from onboarding to final delivery.</p>
      <a href="mailto:support@skill.ventures" class="mtap" style="display:inline-flex;align-items:center;gap:12px;margin-top:22px;font-family:'Archivo';font-weight:800;font-size:20px;color:#141414;border-bottom:2px solid #141414;padding-bottom:4px;">support@skill.ventures <span aria-hidden="true" style="display:inline-flex;align-items:center;justify-content:center;width:38px;height:38px;border-radius:50%;background:#7B2C8E;color:#fff;font-size:15px;">&#8594;</span></a>
    </div>
    <a href="#contact" class="mtap mm-reveal" style="display:flex;align-items:center;justify-content:center;gap:10px;margin-top:30px;background:#141414;color:#fff;font:700 15px 'Space Grotesk';padding:17px;border-radius:15px;box-shadow:0 12px 34px rgba(0,0,0,.22);">Start a project <span aria-hidden="true">&#8594;</span></a>
    ${homeMobileFooterHtml("on-light")}
  </section>

  <!-- ============ STICKY BOTTOM CTA ============ -->
  <div id="mm-sticky-cta" style="position:fixed;bottom:0;left:50%;transform:translateX(-50%);width:100%;z-index:70;padding:12px 16px calc(12px + env(safe-area-inset-bottom));background:linear-gradient(180deg,rgba(12,12,14,0),rgba(12,12,14,.9) 40%);display:flex;gap:10px;pointer-events:none;opacity:0;transition:opacity .3s ease;">
    <a href="#book" class="mtap" style="pointer-events:auto;flex:1;text-align:center;background:#7B2C8E;color:#fff;font:700 15px 'Space Grotesk';padding:16px;border-radius:15px;box-shadow:0 10px 30px rgba(123,44,142,.4);">Book a Meeting</a>
    <a href="mailto:support@skill.ventures" class="mtap" aria-label="Email support" style="pointer-events:auto;flex:none;width:56px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.25);backdrop-filter:blur(8px);color:#fff;border-radius:15px;font-size:20px;">&#9993;</a>
  </div>
`;

export const HOME_MOBILE_CSS = `
@keyframes mm-ticker{to{transform:translateX(-50%)}}
@keyframes mm-rise{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@keyframes mm-orbit{to{transform:rotate(360deg)}}
@keyframes mm-orbitR{to{transform:rotate(-360deg)}}
@keyframes mm-corepulse{0%,100%{box-shadow:0 0 0 0 rgba(123,44,142,.4)}50%{box-shadow:0 0 0 14px rgba(123,44,142,0)}}
.mobile-layout a{text-decoration:none;}
.mm-reveal{opacity:0;}
.mm-reveal.in{animation:mm-rise .7s cubic-bezier(.2,.7,.2,1) forwards;}
.mtap{transition:transform .15s ease;}
.mtap:active{transform:scale(.975);}
.mnav-link{transition:padding-left .35s cubic-bezier(.2,.7,.2,1),color .3s ease;}
.mnav-link:active{padding-left:14px;color:#c98fd6;}
#mnav-burger:focus-visible,#mnav-close:focus-visible,#jm-prev:focus-visible,#jm-next:focus-visible,.mm-cat:focus-visible,.mtap:focus-visible{outline:2px solid #fff;outline-offset:2px;}
.foot-socs{display:flex;flex-wrap:nowrap;justify-content:space-between;align-items:center;width:100%;gap:4px;}
.mobile-layout .foot-soc:hover,.mobile-layout .foot-soc:active{background:#7B2C8E!important;border-color:#7B2C8E!important;color:#fff!important;transform:translateY(-2px);}
.mobile-layout .foot-soc:focus-visible{outline:2px solid #7B2C8E;outline-offset:2px;}
#mm-cases::-webkit-scrollbar{display:none;}
#mm-cases{-ms-overflow-style:none;scrollbar-width:none;}

.mobile-layout{display:none;}
.desktop-layout{display:block;}
@media (max-width:640px){
  .mobile-layout{display:block;}
  .desktop-layout{display:none;}
}
`;

type CatKey = "ecom" | "editorial" | "campaign";

const CATS: Record<
  CatKey,
  { label: string; cap: string; onmodel: string; video: string }
> = {
  ecom: {
    label: "E-commerce",
    cap: "Your customers aren't all the same — your content shouldn't be either. One product set becomes the right look for every channel, all from your existing images.",
    onmodel: "/assets/ecom-onmodel.webp",
    video: "/assets/ecom-video.mp4",
  },
  editorial: {
    label: "Editorial",
    cap: "Editorial lives on mood, not just product. The same set becomes story-driven imagery — styled, atmospheric and ready for lookbooks, features and social.",
    onmodel: "/assets/editorial-onmodel.webp",
    video: "/assets/editorial-video.mp4",
  },
  campaign: {
    label: "Campaign",
    cap: "Campaigns need a hero moment. Those exact pieces turn into bold, high-impact visuals built to headline launches, ads and out-of-home.",
    onmodel: "/assets/cmp-onmodel.webp",
    video: "/assets/cmp-video.mp4",
  },
};

const PAIRS_BY_CAT: Record<CatKey, Array<{ raw: string; ai: string }>> = {
  ecom: [
    { raw: "/assets/ecom-raw-1.webp", ai: "/assets/ecom-still-2.webp" },
    { raw: "/assets/ecom-raw-2.webp", ai: "/assets/ecom-still-3.webp" },
    { raw: "/assets/ecom-raw-3.webp", ai: "/assets/ecom-still-1.webp" },
  ],
  editorial: [
    { raw: "/assets/ed-raw-1.webp", ai: "/assets/ed-edit-1.webp" },
    { raw: "/assets/ed-raw-2.webp", ai: "/assets/ed-edit-2.webp" },
    { raw: "/assets/ed-raw-3.webp", ai: "/assets/ed-edit-3.webp" },
  ],
  campaign: [
    { raw: "/assets/cmp-raw-1.webp", ai: "/assets/cmp-edit-1.webp" },
    { raw: "/assets/cmp-raw-2.webp", ai: "/assets/cmp-edit-2.webp" },
    { raw: "/assets/cmp-raw-3.webp", ai: "/assets/cmp-edit-3.webp" },
  ],
};

const CAT_ORDER: CatKey[] = ["ecom", "editorial", "campaign"];
const PILL_X: Record<CatKey, string> = { ecom: "0%", editorial: "100%", campaign: "200%" };

const SERVICE_GALLERY = [
  "/assets/photo-hero-1.webp",
  "/assets/photo-hero-2.webp",
  "/assets/photo-hero-3.webp",
  "/assets/photo-hero-4.webp",
  "/assets/photo-hero-5.webp",
  "/assets/photo-hero-6.webp",
];

// Shared full-screen mobile nav (burger + menu + focus trap), used by
// the mobile layouts of Home, Photo, and Video.
export function mountMobileNav(): () => void {
  const cleanups: Array<() => void> = [];
  const burger = document.getElementById("mnav-burger");
  const menu = document.getElementById("mnav-menu");
  const closeBtn = document.getElementById("mnav-close");
  const bars = Array.from(document.querySelectorAll<HTMLElement>(".mnav-bar"));
  const getFocusable = (): HTMLElement[] =>
    menu
      ? Array.from(
          menu.querySelectorAll<HTMLElement>(
            'a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])'
          )
        )
      : [];
  const setMenu = (open: boolean) => {
    if (!menu) return;
    menu.setAttribute("data-open", open ? "1" : "0");
    menu.style.opacity = open ? "1" : "0";
    menu.style.transform = open ? "translateY(0)" : "translateY(-14px)";
    menu.style.pointerEvents = open ? "auto" : "none";
    burger?.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.style.overflow = open ? "hidden" : "";
    bars.forEach((b, i) => {
      b.style.transform = open ? (i === 0 ? "translateY(7px) rotate(45deg)" : i === 2 ? "translateY(-7px) rotate(-45deg)" : "none") : "none";
      if (i === 1) b.style.opacity = open ? "0" : "1";
    });
    if (open) {
      window.setTimeout(() => (closeBtn ?? getFocusable()[0])?.focus(), 10);
    } else {
      burger?.focus();
    }
  };
  const onBurger = () => setMenu(menu?.getAttribute("data-open") !== "1");
  const onClose = () => setMenu(false);
  burger?.addEventListener("click", onBurger);
  closeBtn?.addEventListener("click", onClose);
  const menuLinks = Array.from(document.querySelectorAll(".mnav-link"));
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

  return () => cleanups.forEach((fn) => fn());
}

export function mountHomeMobile(): () => void {
  const cleanups: Array<() => void> = [];
  cleanups.push(mountMobileNav());

  // ---- reveal on scroll ----
  const revealEls = Array.from(document.querySelectorAll<HTMLElement>(".mm-reveal"));
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
      { threshold: 0.16 }
    );
    revealEls.forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());
  }

  // ---- sticky bottom CTA after leaving hero ----
  const stickyCta = document.getElementById("mm-sticky-cta");
  const onScroll = () => {
    if (!stickyCta) return;
    const show = window.scrollY > window.innerHeight * 0.7;
    stickyCta.style.opacity = show ? "1" : "0";
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  cleanups.push(() => window.removeEventListener("scroll", onScroll));

  // ---- keep autoplay videos playing + pause offscreen ----
  const fixVideos = () => {
    document.querySelectorAll<HTMLVideoElement>("video").forEach((v) => {
      if (v.id === "sg-fs-player" || v.closest("#sg-fs-overlay")) return;
      v.muted = true;
      v.defaultMuted = true;
      v.setAttribute("muted", "");
      v.playsInline = true;
      v.setAttribute("playsinline", "");
      if (v.closest(".desktop-layout")) return; // hidden on mobile viewports; don't waste bandwidth
      if (v.offsetParent === null) return;
      if (v.dataset.inview === "0") return;
      if (v.paused) {
        const p = v.play();
        if (p && p.catch) p.catch(() => {});
      }
    });
  };
  let vn = 0;
  const vTimer = window.setInterval(() => {
    fixVideos();
    if (++vn > 20) window.clearInterval(vTimer);
  }, 350);
  fixVideos();
  cleanups.push(() => window.clearInterval(vTimer));
  const vio = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        const v = e.target as HTMLVideoElement;
        v.dataset.inview = e.isIntersecting ? "1" : "0";
        if (e.isIntersecting) {
          const p = v.play();
          if (p && p.catch) p.catch(() => {});
        } else {
          v.pause();
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll("video").forEach((v) => vio.observe(v));
  cleanups.push(() => vio.disconnect());

  // ---- services card: auto-cycling gallery image ----
  const galEl = document.getElementById("mm-gal") as HTMLImageElement | null;
  if (galEl) {
    SERVICE_GALLERY.forEach((s) => {
      const p = new Image();
      p.src = s;
    });
    let gi = 0;
    const galTimer = window.setInterval(() => {
      gi = (gi + 1) % SERVICE_GALLERY.length;
      galEl.src = SERVICE_GALLERY[gi];
    }, 3400);
    cleanups.push(() => window.clearInterval(galTimer));
  }

  // ---- AI Studio: category pill switch (click + auto-cycle) ----
  const pill = document.getElementById("mm-pill");
  const capEl = document.getElementById("mm-cap");
  const rawEl = document.getElementById("mm-raw") as HTMLImageElement | null;
  const editEl = document.getElementById("mm-edit") as HTMLImageElement | null;
  const onmodelEl = document.getElementById("mm-onmodel") as HTMLImageElement | null;
  const vidEl = document.getElementById("mm-vid") as HTMLVideoElement | null;
  const vidSrcEl = document.getElementById("mm-vid-src") as HTMLSourceElement | null;
  const catButtons = Array.from(document.querySelectorAll<HTMLButtonElement>(".mm-cat"));
  const pairIdxByCat: Record<CatKey, number> = { ecom: 0, editorial: 0, campaign: 0 };
  let currentCat: CatKey = "ecom";
  let catTimer = 0;
  let catFallback = 0;

  const showPair = (cat: CatKey) => {
    const pairs = PAIRS_BY_CAT[cat];
    const i = pairIdxByCat[cat] % pairs.length;
    const p = pairs[i];
    if (rawEl) rawEl.src = p.raw;
    if (editEl) editEl.src = p.ai;
    pairIdxByCat[cat] = (i + 1) % pairs.length;
  };

  const setCat = (cat: CatKey) => {
    currentCat = cat;
    const c = CATS[cat];
    if (pill) pill.style.transform = `translateX(${PILL_X[cat]})`;
    if (capEl) capEl.textContent = c.cap;
    catButtons.forEach((btn) => {
      const on = btn.getAttribute("data-cat") === cat;
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      btn.style.color = on ? "#fff" : "rgba(255,255,255,.55)";
    });
    if (onmodelEl) onmodelEl.src = c.onmodel;
    if (vidEl && vidSrcEl) {
      vidSrcEl.src = c.video;
      vidEl.load();
      const p = vidEl.play();
      if (p && p.catch) p.catch(() => {});
    }
    showPair(cat);
  };

  // Advance to the next category once the current clip actually finishes
  // playing, instead of cutting it off on a fixed timer — a short fixed
  // interval was restarting every clip from frame 0 before it got anywhere,
  // which read as "it never plays past the first couple seconds."
  const advanceCat = () => {
    const i = CAT_ORDER.indexOf(currentCat);
    setCat(CAT_ORDER[(i + 1) % CAT_ORDER.length]);
  };
  const restartCatCycle = () => {
    window.clearTimeout(catFallback);
    // Safety net in case the video can't play (autoplay blocked, network
    // error) — don't let the showcase stall on one category forever.
    catFallback = window.setTimeout(advanceCat, 9000);
  };

  if (pill && rawEl) {
    setCat("ecom");
    restartCatCycle();
    if (vidEl) {
      const onEnded = () => {
        advanceCat();
        restartCatCycle();
      };
      vidEl.addEventListener("ended", onEnded);
      cleanups.push(() => vidEl.removeEventListener("ended", onEnded));
    }
    cleanups.push(() => window.clearTimeout(catFallback));
    catButtons.forEach((btn) => {
      const onClick = () => {
        const cat = btn.getAttribute("data-cat") as CatKey | null;
        if (cat) {
          setCat(cat);
          restartCatCycle();
        }
      };
      btn.addEventListener("click", onClick);
      cleanups.push(() => btn.removeEventListener("click", onClick));
    });

    // Pause playback while the card is off-screen so the active video isn't
    // silently advancing (or burning the fallback timer) while nobody's
    // looking — resume on return without resetting, so playback continues
    // from wherever it left off.
    const aisSection = document.getElementById("mm-ais-section");
    if (aisSection) {
      const aisIo = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const p = vidEl?.play();
            if (p && p.catch) p.catch(() => {});
            restartCatCycle();
          } else {
            vidEl?.pause();
            window.clearTimeout(catFallback);
          }
        },
        { threshold: 0.2 }
      );
      aisIo.observe(aisSection);
      cleanups.push(() => aisIo.disconnect());
    }
  }

  // ---- powering: live ops feed row cycling ----
  const opsFeed = document.getElementById("mm-ops-feed");
  if (opsFeed) {
    const rows = Array.from(opsFeed.querySelectorAll<HTMLElement>(".ops-row"));
    const dots = Array.from(opsFeed.querySelectorAll<HTMLElement>(".ops-dot"));
    const cards = Array.from(opsFeed.querySelectorAll<HTMLElement>(".ops-card"));
    const accents = ["#7B2C8E", "#3B82F6", "#10D9C4", "#F5A623", "#E0222E"];
    let opsIdx = 0;
    const paintOps = () => {
      rows.forEach((_, i) => {
        const on = i === opsIdx;
        const accent = accents[i] ?? "#7B2C8E";
        const dot = dots[i];
        const card = cards[i];
        if (dot) {
          dot.style.background = on ? accent : "#0C0C0E";
          dot.style.boxShadow = on ? `0 0 14px ${accent}` : "none";
          dot.style.transform = on ? "scale(1.25)" : "scale(1)";
        }
        if (card) {
          card.style.background = on ? "rgba(255,255,255,.07)" : "rgba(255,255,255,.03)";
          card.style.borderColor = on ? accent : "rgba(255,255,255,.1)";
        }
      });
    };
    paintOps();
    const opsTimer = window.setInterval(() => {
      opsIdx = (opsIdx + 1) % rows.length;
      paintOps();
    }, 1900);
    cleanups.push(() => window.clearInterval(opsTimer));
  }

  // ---- 10 Years: tap-through story deck ----
  const storyEl = document.getElementById("jm-story");
  if (storyEl) {
    let ji = 0;
    let jTimer = 0;
    let inView = true;
    const yearEl = document.getElementById("jm-year");
    const titleEl = document.getElementById("jm-title");
    const textEl = document.getElementById("jm-story-text");
    const stepEl = document.getElementById("jm-step");
    const imgs = Array.from(storyEl.querySelectorAll<HTMLElement>(".jm-simg"));
    const bars = Array.from(storyEl.querySelectorAll<HTMLElement>(".jm-barfill"));

    const renderStory = (i: number) => {
      const j = JOURNEY_DATA[i];
      if (!j) return;
      imgs.forEach((el) => {
        const on = Number(el.getAttribute("data-i")) === i;
        el.style.opacity = on ? "1" : "0";
      });
      if (yearEl) yearEl.textContent = j.year;
      if (titleEl) titleEl.textContent = j.title;
      if (textEl) textEl.textContent = j.body;
      if (stepEl) stepEl.textContent = String(i + 1);
      bars.forEach((el) => {
        const bi = Number(el.getAttribute("data-i"));
        el.style.transition = "none";
        el.style.width = bi < i ? "100%" : "0%";
      });
    };

    const startStory = () => {
      window.clearInterval(jTimer);
      const fill = storyEl.querySelector<HTMLElement>(`.jm-barfill[data-i="${ji}"]`);
      if (fill) {
        fill.style.transition = "none";
        fill.style.width = "0%";
        void fill.offsetWidth;
        fill.style.transition = "width 3.6s linear";
        fill.style.width = "100%";
      }
      jTimer = window.setTimeout(() => goStory(ji + 1), 3600) as unknown as number;
    };

    const goStory = (i: number) => {
      const n = JOURNEY_DATA.length;
      ji = ((i % n) + n) % n;
      renderStory(ji);
      if (inView) startStory();
    };

    renderStory(0);
    startStory();

    const prevBtn = document.getElementById("jm-prev");
    const nextBtn = document.getElementById("jm-next");
    const onPrev = () => goStory(ji - 1);
    const onNext = () => goStory(ji + 1);
    prevBtn?.addEventListener("click", onPrev);
    nextBtn?.addEventListener("click", onNext);
    cleanups.push(() => {
      prevBtn?.removeEventListener("click", onPrev);
      nextBtn?.removeEventListener("click", onNext);
      window.clearInterval(jTimer);
    });

    const storyIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          inView = e.isIntersecting;
          if (inView) startStory();
          else window.clearInterval(jTimer);
        });
      },
      { threshold: 0.4 }
    );
    storyIo.observe(storyEl);
    cleanups.push(() => storyIo.disconnect());
  }

  // ---- cases: auto-scroll right, pause on touch, pause off-screen ----
  const casesEl = document.getElementById("mm-cases");
  if (casesEl) {
    let paused = false;
    let offscreen = false;
    let pauseTimer = 0;
    const pause = () => {
      paused = true;
      window.clearTimeout(pauseTimer);
      pauseTimer = window.setTimeout(() => (paused = false), 2600);
    };
    casesEl.addEventListener("touchstart", pause, { passive: true });
    casesEl.addEventListener("wheel", pause, { passive: true });
    const casesIo = new IntersectionObserver(([entry]) => (offscreen = !entry.isIntersecting), {
      threshold: 0.05,
    });
    casesIo.observe(casesEl);
    const scrollTimer = window.setInterval(() => {
      if (paused || offscreen) return;
      const half = casesEl.scrollWidth / 2;
      if (casesEl.scrollLeft >= half) casesEl.scrollLeft -= half;
      casesEl.scrollLeft += 1.1;
    }, 24);
    cleanups.push(() => {
      window.clearInterval(scrollTimer);
      casesIo.disconnect();
      casesEl.removeEventListener("touchstart", pause);
      casesEl.removeEventListener("wheel", pause);
    });
  }

  return () => cleanups.forEach((fn) => fn());
}
