import { HEADER_CSS, headerHtml } from "./siteHeader";
import { MOBILE_PHOTO_HTML, PHOTO_MOBILE_CSS } from "./photoMobile";
import { HOME_MOBILE_CSS } from "./homeMobile";
import { HOME_FOOTER_CSS, homeDesktopFooterHtml } from "./homeFooter";

export const PHOTO_CSS = `
${HEADER_CSS}
${HOME_MOBILE_CSS}
${PHOTO_MOBILE_CSS}
${HOME_FOOTER_CSS}
*{box-sizing:border-box;}
html{scroll-behavior:smooth;scroll-snap-type:y proximity;scroll-padding-top:0;}
body{margin:0;background:#EDEDEB;}
.ph-snap{scroll-snap-align:start;scroll-snap-stop:normal;}
#contact,footer{scroll-snap-align:none;}
@media (max-width:640px){
  html{scroll-snap-type:none;}
  .ph-snap{scroll-snap-align:none;}
}
a{color:#7B2C8E;} a:hover{color:#5c1f6d;}
@keyframes ph-hue{0%{filter:hue-rotate(0deg) saturate(1.1)}100%{filter:hue-rotate(360deg) saturate(1.1)}}
@keyframes sg-sideshift{0%{background-position:0 0}100%{background-position:0 400%}}
@keyframes sg-textshift{0%{background-position:0% 0}100%{background-position:300% 0}}
.cta-mail::after{content:"";position:absolute;left:0;right:0;bottom:-.14em;height:2px;background:#141414;transform:scaleX(0);transform-origin:left;transition:transform .45s cubic-bezier(.2,.72,.2,1);}
.cta-link:hover .cta-mail::after{transform:scaleX(1);}
.cta-link:hover .cta-arw{transform:translateX(8px) rotate(-45deg);}
.sg-reveal{opacity:0;transform:translateY(30px);transition:opacity .85s cubic-bezier(.2,.72,.2,1),transform .85s cubic-bezier(.2,.72,.2,1);}
.sg-reveal.in{opacity:1;transform:none;}
.px-word{animation:px-glitch .28s steps(2) infinite;text-shadow:2px 0 #E0222E,-2px 0 #2A6FDB,0 0 1px #1c1c1c;}
@keyframes px-glitch{0%{transform:translate(0,0)}25%{transform:translate(1px,-1px)}50%{transform:translate(-1px,1px)}75%{transform:translate(1px,1px)}100%{transform:translate(0,0)}}
@keyframes ph-bob{0%,100%{transform:translate(-50%,0)}50%{transform:translate(-50%,7px)}}
.ph-thumb{cursor:pointer;transition:opacity .3s ease,transform .3s ease;opacity:.5;}
.cat-wrap{position:relative;display:inline-block;padding-top:calc(clamp(2rem,4vw,3.4rem) + .3em);}
.cat-ghost{position:absolute;top:0;left:-.02em;z-index:0;font:800 clamp(2rem,4vw,3.4rem)/.9 'Archivo';color:transparent;-webkit-text-stroke:1.3px rgba(123,44,142,.55);pointer-events:none;opacity:0;transform:translateY(1.02em);transition:opacity .45s ease,transform .85s cubic-bezier(.2,.72,.2,1);font-variant-numeric:tabular-nums;}
.sg-reveal.in .cat-ghost{opacity:1;transform:translateY(0);}
.cat-ghost::after{content:"";position:absolute;left:.04em;bottom:-.1em;height:.06em;width:0;background:#7B2C8E;border-radius:3px;transition:width .6s cubic-bezier(.2,.72,.2,1) .55s;}
.sg-reveal.in .cat-ghost::after{width:52%;}
.cat-h{position:relative;z-index:1;display:inline-block;opacity:0;transform:translateY(14px);transition:opacity .7s cubic-bezier(.2,.72,.2,1) .12s,transform .7s cubic-bezier(.2,.72,.2,1) .12s;}
.sg-reveal.in .cat-h{opacity:1;transform:translateY(0);}
.cat-c .cat-ghost{left:50%;right:auto;text-align:center;display:inline-block;transform:translate(-50%,1.02em);}
.sg-reveal.in .cat-c .cat-ghost{transform:translate(-50%,0);}
.cat-c .cat-ghost::after{left:50%;transform:translateX(-50%);}
.sg-reveal.in .cat-c .cat-ghost::after{width:52%;}
.cc-lockup{display:inline-flex;flex-direction:column;align-items:center;text-align:center;width:auto;max-width:100%;}
.cc-lockup .cc-line{display:block;width:auto;margin:0;white-space:nowrap;text-align:center;}
.ph-thumb.active{opacity:1;}
.ph-thumb:hover{opacity:.85;}
.onm-slot{position:relative;overflow:hidden;background:#EDEDEB;width:100%;aspect-ratio:2/3;height:auto;}
.onm-slot img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center top;display:block;}
.onm-slot .onm-ph{display:flex;align-items:center;justify-content:center;width:100%;height:100%;color:#9a9a95;font:600 12px 'Space Grotesk';letter-spacing:.08em;text-transform:uppercase;background:repeating-linear-gradient(135deg,#e5e5e1,#e5e5e1 10px,#dedeD9 10px,#dedeD9 20px);}
.ph-dot{cursor:pointer;transition:width .3s ease,background .3s ease;}
.ph-thumb:focus-visible,.ph-dot:focus-visible,.ph-colour-dot:focus-visible{outline:2px solid #7B2C8E;outline-offset:2px;}
#ph-intro-h{transition:color .35s ease;cursor:default;}
#ph-intro-h:hover{color:#7B2C8E !important;}

@media (max-width:1024px){
  .ph-2col{grid-template-columns:1fr !important;gap:36px !important;}
  #ph-carousel{margin:0 auto !important;}
  #ph-dots{margin-left:auto !important;margin-right:auto !important;}
  .onm-inner{flex-direction:column !important;}
  .onm-text{flex:none !important;padding:clamp(40px,6vh,64px) 24px 24px !important;text-align:center;align-items:center;}
  .onm-imgs{position:static !important;flex:none !important;height:auto !important;}
  #onm-colL,#onm-colR{position:static !important;transform:none !important;left:auto !important;right:auto !important;top:auto !important;width:100% !important;padding:0 20px 24px;}
  #onm-gallery{height:auto !important;}
  .onm-inner{position:static !important;height:auto !important;}
}
@media (max-width:768px){
  .ph-ghost-row{flex-direction:column !important;height:auto !important;}
  .ph-ghost-row > div{aspect-ratio:4/5;}
  #onm-colL,#onm-colR{grid-template-columns:1fr 1fr;display:grid !important;gap:12px !important;}
  .onm-slot{aspect-ratio:2/3;}
}
`;

const CAROUSEL = [
  "/assets/sl-sunglasses.webp",
  "/assets/sl-belt.webp",
  "/assets/sl-shoes.webp",
  "/assets/sl-watch.webp",
  "/assets/sl-backpack.webp",
  "/assets/sl-new-1.webp",
  "/assets/sl-new-2.webp",
];

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

const COLOURS = [
  { name: "Coral", dot: "#FC3E2C", src: "/assets/dress-coral.webp" },
  { name: "Yellow", dot: "#F9EB84", src: "/assets/dress-yellow.webp" },
  { name: "Olive", dot: "#9E9339", src: "/assets/dress-olive.webp" },
  { name: "Blue", dot: "#83A3C6", src: "/assets/dress-blue.webp" },
  { name: "Cyan", dot: "#45B2C6", src: "/assets/dress-cyan.webp" },
  { name: "Purple", dot: "#B26AFE", src: "/assets/dress-purple.webp" },
];

const ONM_IMAGES = [
  "/assets/photo-onm-1.webp",
  "/assets/photo-onm-2.webp",
  "/assets/photo-onm-3.webp",
  "/assets/photo-onm-4.webp",
  "/assets/photo-onm-5.webp",
  "/assets/photo-onm-6.webp",
  "/assets/photo-onm-7.webp",
];

export const PHOTO_HTML = `
<span id="main-content" tabindex="-1"></span>

${MOBILE_PHOTO_HTML}

<div class="desktop-layout" style="font-family:'Space Grotesk',sans-serif;color:#141414;background:#EDEDEB;overflow-x:clip;position:relative;">

  ${headerHtml({ subpage: true })}

  <header class="ph-snap" data-nav-hero style="position:relative;height:100vh;height:100dvh;min-height:600px;overflow:hidden;display:flex;align-items:center;justify-content:center;background:#c9c9c4;">
    <img src="/assets/photo-hero.webp" alt="Editorial fashion" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 18%;">
    <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(18,18,20,.5),rgba(18,18,20,.22) 42%,rgba(18,18,20,.55));"></div>
    <div style="position:relative;z-index:2;text-align:center;">
      <p style="font:600 clamp(17px,1.9vw,28px) 'Space Grotesk';letter-spacing:.34em;text-transform:uppercase;color:rgba(255,255,255,.94);margin:0 0 clamp(14px,2vh,26px);text-shadow:0 2px 20px rgba(0,0,0,.35);">AI-Powered</p>
      <h1 style="margin:0;font-family:'Archivo';font-weight:800;font-size:clamp(3.4rem,15vw,16rem);text-transform:uppercase;color:transparent;-webkit-text-stroke:1.8px rgba(255,255,255,.97);line-height:.82;letter-spacing:.01em;">Image<br>Editing</h1>
    </div>
    <div style="position:absolute;bottom:26px;left:50%;transform:translateX(-50%);z-index:5;display:flex;flex-direction:column;align-items:center;gap:6px;animation:ph-bob 2.4s ease-in-out infinite;">
      <span style="font:500 11px 'Space Grotesk';letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.8);">Scroll</span>
      <span style="color:#fff;font-size:18px;line-height:1;">&#8964;</span>
    </div>
  </header>

  <div id="ph-intro" style="max-width:1180px;margin:0 auto;padding:clamp(84px,13vh,160px) 40px clamp(24px,4vh,48px);text-align:center;overflow:hidden;">
    <h2 id="ph-intro-h" style="font-family:'Archivo';font-weight:800;font-size:clamp(2.1rem,4.6vw,3.8rem);line-height:1.06;margin:0 0 24px;color:#161616;letter-spacing:-.015em;will-change:transform;">Designed for Modern Commerce</h2>
    <p id="ph-intro-p" style="font:400 clamp(15px,1.3vw,18px)/1.7 'Space Grotesk';color:#5b5b58;margin:0 auto;max-width:62ch;will-change:transform;">Helping brands create faster product launches, stronger visual identities and better customer experiences through persistent content post-production.</p>
  </div>

  <div class="sg-reveal ph-snap" style="min-height:100vh;display:flex;flex-direction:column;justify-content:center;max-width:1240px;margin:0 auto;padding:clamp(64px,9vh,110px) 40px clamp(40px,6vh,72px);">
    <span class="cat-wrap" style="margin:0 0 clamp(20px,3vh,34px);"><span class="cat-ghost" aria-hidden="true">01</span><h3 class="cat-h" style="font-family:'Archivo';font-weight:800;font-size:clamp(2rem,4.6vw,3.6rem);line-height:1;text-transform:uppercase;color:#161616;letter-spacing:-.015em;margin:0;">Ghost Mannequin</h3></span>
    <div class="ph-ghost-row" style="display:flex;justify-content:center;align-items:stretch;gap:14px;height:min(60vh,620px);">
      <div style="flex:1 1 50%;overflow:hidden;border-radius:4px;"><img src="/assets/ghost-1.webp" alt="Ghost mannequin sample" loading="lazy" style="width:100%;height:100%;object-fit:contain;display:block;"></div>
      <div style="flex:1 1 50%;overflow:hidden;border-radius:4px;"><img src="/assets/ghost-2.webp" alt="Ghost mannequin sample" loading="lazy" style="width:100%;height:100%;object-fit:contain;display:block;"></div>
    </div>
  </div>

  <div class="sg-reveal ph-snap" style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#111;margin:0 auto;padding:clamp(48px,8vh,100px) 40px;text-align:center;">
    <h3 style="margin:0;font-family:'Archivo';font-weight:800;font-size:clamp(2.4rem,9.5vw,9rem);text-transform:uppercase;color:transparent;-webkit-text-stroke:1.4px #f4f4f2;line-height:.94;letter-spacing:-.01em;">Every<br><span class="px-word" style="font-family:'Press Start 2P';font-size:.42em;-webkit-text-stroke:0;color:#f4f4f2;letter-spacing:0;vertical-align:middle;display:inline-block;cursor:default;">Pixel</span><br>Perfected</h3>
  </div>

  <div id="ph-still" class="sg-reveal ph-snap ph-2col" style="min-height:100vh;display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:clamp(40px,6vw,90px);max-width:1240px;margin:0 auto;padding:clamp(56px,9vh,110px) 40px;">
    <div>
      <span class="cat-wrap"><span class="cat-ghost" aria-hidden="true">02</span><h3 class="cat-h" style="font-family:'Archivo';font-weight:800;font-size:clamp(2rem,4.6vw,3.6rem);line-height:1;text-transform:uppercase;color:#161616;letter-spacing:-.015em;margin:0;">Still Life &amp; Flat Lay</h3></span>
    </div>
    <div>
      <div id="ph-carousel" style="position:relative;width:100%;max-width:600px;margin:0 0 0 auto;aspect-ratio:4/5;border-radius:6px;overflow:hidden;background:#e6e6e3;">
        ${CAROUSEL.map(
          (src, i) =>
            `<img data-i="${i}" src="${src}" alt="Still life" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:opacity .7s cubic-bezier(.2,.72,.2,1);opacity:${
              i === 0 ? 1 : 0
            };z-index:${i === 0 ? 2 : 1};">`
        ).join("")}
      </div>
      <div id="ph-dots" style="display:flex;justify-content:center;gap:10px;margin-top:20px;max-width:600px;margin-left:auto;">
        ${CAROUSEL.map(
          (_, i) =>
            `<span class="ph-dot" data-i="${i}" style="height:8px;border-radius:100px;background:${
              i === 0 ? "#7B2C8E" : "#c4c4be"
            };width:${i === 0 ? "26px" : "8px"};"></span>`
        ).join("")}
      </div>
    </div>
  </div>

  <div class="ph-snap" style="position:relative;background:#111;overflow:hidden;display:flex;align-items:center;justify-content:center;height:100vh;height:100dvh;min-height:600px;">
    <img src="/assets/million-bg.webp" alt="Editorial fashion" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;">
    <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(12,12,14,.42),rgba(12,12,14,.28) 45%,rgba(12,12,14,.5));"></div>
    <h3 style="position:relative;z-index:2;margin:0;text-align:center;font-family:'Archivo';font-weight:800;font-size:clamp(2.8rem,10vw,10rem);text-transform:uppercase;color:transparent;-webkit-text-stroke:1.5px rgba(255,255,255,.96);line-height:.9;">3 Million<br>Images In<br>One Year</h3>
  </div>

  <section id="onm-gallery" style="position:relative;background:#EDEDEB;height:240vh;">
    <div class="onm-inner" style="position:sticky;top:0;height:100vh;height:100dvh;overflow:hidden;display:flex;align-items:stretch;">
      <div class="sg-reveal onm-text" style="flex:1 1 42%;display:flex;flex-direction:column;justify-content:center;padding:0 clamp(28px,4.5vw,84px);">
        <span class="cat-wrap"><span class="cat-ghost" aria-hidden="true">03</span><h3 class="cat-h" style="margin:0;font-family:'Archivo';font-weight:800;font-size:clamp(2.8rem,6.4vw,7rem);line-height:.88;text-transform:uppercase;color:#161616;letter-spacing:-.015em;">Styled<br>On<br><span style="color:#161616;">Model</span></h3></span>
      </div>
      <div class="onm-imgs" style="position:relative;flex:1 1 58%;overflow:hidden;">
        <div id="onm-colL" style="position:absolute;left:clamp(10px,2.4vw,34px);top:0;width:calc(50% - clamp(16px,1.8vw,28px));display:flex;flex-direction:column;gap:16px;will-change:transform;transform:translateY(0);">
          ${ONM_IMAGES.filter((_, i) => i % 2 === 0)
            .map(
              (src) =>
                `<div class="onm-slot"><img src="${src}" alt="Styled on model" loading="lazy"></div>`
            )
            .join("")}
        </div>
        <div id="onm-colR" style="position:absolute;right:clamp(24px,4.4vw,84px);top:0;width:calc(50% - clamp(16px,1.8vw,28px));display:flex;flex-direction:column;gap:16px;will-change:transform;transform:translateY(0);">
          ${ONM_IMAGES.filter((_, i) => i % 2 === 1)
            .map(
              (src) =>
                `<div class="onm-slot"><img src="${src}" alt="Styled on model" loading="lazy"></div>`
            )
            .join("")}
        </div>
      </div>
    </div>
  </section>

  <div id="ph-consist" class="ph-snap" style="width:100%;min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:clamp(80px,10vh,120px) 0 clamp(40px,6vh,72px);">
    <div class="sg-reveal" style="max-width:1240px;margin:0 auto 26px;padding:0 40px;">
      <h3 style="font-family:'Archivo';font-weight:800;font-size:clamp(1.6rem,3.2vw,2.5rem);line-height:1.06;margin:0 0 14px;color:#161616;">Consistency across every SKU.</h3>
    </div>
    <div style="display:flex;gap:16px;width:100%;max-width:1600px;margin:0 auto;padding:0 clamp(16px,3vw,40px);align-items:stretch;">
      <div id="ph-album-rail" style="flex:0 0 auto;width:clamp(70px,6.5vw,94px);height:min(64vh,640px);overflow:hidden;display:flex;flex-direction:column;gap:8px;padding:2px;">
        ${ALBUM.map(
          (a, i) =>
            `<div class="ph-thumb ${i === 0 ? "active" : ""}" data-i="${i}" style="flex:1 1 0;min-height:0;width:100%;border-radius:4px;overflow:hidden;background:#d7d7d2 url('${a.src}') center/cover;cursor:pointer;outline:2px solid ${
              i === 0 ? "#161616" : "transparent"
            };outline-offset:1px;box-shadow:0 2px 10px rgba(0,0,0,.28);"></div>`
        ).join("")}
      </div>
      <div id="ph-album-main" style="position:relative;flex:1 1 auto;height:min(64vh,640px);overflow:hidden;background:#e2e2de;border-radius:4px;">
        ${ALBUM.map(
          (a, i) =>
            `<img data-i="${i}" src="${a.src}" alt="${a.brand}" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:contain;transition:opacity .55s cubic-bezier(.2,.72,.2,1);opacity:${
              i === 0 ? 1 : 0
            };z-index:${i === 0 ? 2 : 1};">`
        ).join("")}
        <span id="ph-album-brand" style="position:absolute;left:32px;bottom:28px;z-index:6;font:700 15px 'Space Grotesk';letter-spacing:.14em;text-transform:uppercase;color:#161616;">${ALBUM[0].brand}</span>
      </div>
    </div>
  </div>

  <div class="sg-reveal ph-snap" style="min-height:100vh;display:flex;align-items:center;max-width:1240px;margin:0 auto;padding:clamp(48px,7vh,90px) 40px;">
    <div style="position:relative;width:100%;border-radius:12px;overflow:hidden;min-height:clamp(520px,68vh,680px);background:#EAEAE7;padding:clamp(30px,4vw,52px);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px;">
      <div style="text-align:center;">
        <span class="cat-wrap cat-c cc-lockup"><span class="cat-ghost" aria-hidden="true">04</span><h3 class="cat-h cc-line" style="font-family:'Archivo';font-weight:800;font-size:clamp(1.8rem,3.8vw,3rem);line-height:1;text-transform:uppercase;color:#161616;letter-spacing:-.015em;margin:0;">Colour Correction</h3>
        <p class="cc-line" style="font-family:'Archivo';font-weight:800;font-size:clamp(1.15rem,2.4vw,1.85rem);line-height:1;letter-spacing:-.01em;margin:8px 0 0;background:linear-gradient(90deg,#7B2C8E,#E0222E,#2A6FDB,#1F8A5B,#7B2C8E);background-size:300% 100%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;animation:sg-textshift 8s linear infinite;">Colour changes with mood</p></span>
      </div>
      <div id="ph-colour-stage" style="position:relative;height:min(52vh,520px);aspect-ratio:3/4;overflow:hidden;">
        ${COLOURS.map(
          (c, i) =>
            `<img data-i="${i}" src="${c.src}" alt="${c.name}" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:contain;transition:opacity .5s cubic-bezier(.2,.72,.2,1);opacity:${
              i === 0 ? 1 : 0
            };z-index:${i === 0 ? 2 : 1};">`
        ).join("")}
      </div>
      <div id="ph-colour-dots" style="display:flex;gap:16px;align-items:center;">
        ${COLOURS.map(
          (c, i) =>
            `<span class="ph-colour-dot" data-i="${i}" title="${c.name}" style="width:${
              i === 0 ? "36px" : "26px"
            };height:${i === 0 ? "36px" : "26px"};border-radius:50%;cursor:pointer;background:${c.dot};box-shadow:0 0 0 ${
              i === 0 ? "3px rgba(20,20,20,.82)" : "1px rgba(20,20,20,.25)"
            };transition:width .3s ease,height .3s ease,box-shadow .3s ease;"></span>`
        ).join("")}
      </div>
      <span id="ph-colour-name" style="font:600 12px 'Space Grotesk';letter-spacing:.14em;text-transform:uppercase;color:#161616;">${COLOURS[0].name}</span>
    </div>
  </div>

  <section id="contact" style="background:#EDEDEB;color:#141414;padding:clamp(90px,14vh,160px) 40px;">
    <div style="max-width:1300px;margin:0 auto;">
      <p style="font:700 13px 'Space Grotesk';letter-spacing:.32em;text-transform:uppercase;color:#9a9a95;margin:0 0 clamp(24px,4vh,44px);">Get in touch</p>
      <h3 style="font-family:'Archivo';font-weight:900;font-size:clamp(2.6rem,10vw,9rem);line-height:1.12;margin:0 0 clamp(40px,6vh,72px);letter-spacing:-.02em;">Let's<br>Begin a<br>Conversation</h3>
      <a href="mailto:support@skill.ventures" class="cta-link" style="text-decoration:none;color:#141414;display:inline-flex;align-items:center;gap:clamp(12px,1.4vw,20px);font-family:'Archivo';font-weight:800;font-size:clamp(1.4rem,4vw,3rem);letter-spacing:-.01em;">
        <span class="cta-mail" style="position:relative;color:transparent;-webkit-text-stroke:1.1px #141414;">support@skill.ventures</span>
        <span class="cta-arw" style="display:inline-flex;align-items:center;justify-content:center;width:clamp(46px,5vw,74px);height:clamp(46px,5vw,74px);border-radius:50%;background:#7B2C8E;color:#fff;font-size:.6em;transition:transform .4s cubic-bezier(.2,.72,.2,1);">&#8594;</span>
      </a>
    </div>
  </section>

  ${homeDesktopFooterHtml({ subpage: true, contactId: false })}

</div>`;
