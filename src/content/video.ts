import { HEADER_CSS, headerHtml } from "./siteHeader";
import { HOME_MOBILE_CSS } from "./homeMobile";
import { MOBILE_VIDEO_HTML, VIDEO_MOBILE_CSS } from "./videoMobile";
import { HOME_FOOTER_CSS, homeDesktopFooterHtml } from "./homeFooter";

export const VIDEO_CSS = `
${HEADER_CSS}
${HOME_MOBILE_CSS}
${VIDEO_MOBILE_CSS}
${HOME_FOOTER_CSS}
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;background:#0C0C0E;}
@keyframes sg-bob{0%,100%{transform:translate(-50%,0)}50%{transform:translate(-50%,7px)}}
.vp-head{transition:color .35s ease,text-shadow .35s ease;cursor:default;}
.vp-head:hover{color:#b98cd0;text-shadow:0 0 26px rgba(185,140,208,.65);}
@keyframes vp-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
.vp-reel{animation:vp-float 5s ease-in-out infinite;}
.vp-reel:nth-child(2){animation-delay:.9s;}
.vp-reel:nth-child(3){animation-delay:1.8s;}
.cta-mail::after{content:"";position:absolute;left:0;right:0;bottom:-.14em;height:2px;background:#141414;transform:scaleX(0);transform-origin:left;transition:transform .45s cubic-bezier(.2,.72,.2,1);}
.cta-link:hover .cta-mail::after{transform:scaleX(1);}
.cta-link:hover .cta-arw{transform:translateX(8px) rotate(-45deg);}
.vimeo-word{position:relative;}
.vimeo-word::after{content:"";position:absolute;left:0;right:0;bottom:-.1em;height:3px;background:#fff;transform:scaleX(0);transform-origin:left;transition:transform .5s cubic-bezier(.2,.72,.2,1);}
.vimeo-cta:hover .vimeo-word::after{transform:scaleX(1);}
.vimeo-cta:hover .vimeo-arw{transform:translate(6px,-6px);background:#7B2C8E;border-color:#7B2C8E;}

@media (max-width:1024px){
  .vp-split{grid-template-columns:1fr !important;height:auto !important;}
  .vp-split > div{height:56vh !important;}
  .vp-media-grid{grid-template-columns:1fr !important;gap:32px !important;padding-top:50px !important;padding-bottom:50px !important;}
  .vp-reels-grid{grid-template-columns:1fr 1fr !important;}
  .vp-reel{max-height:60vh !important;align-self:auto !important;}
}
@media (max-width:768px){
  .vp-reels-grid{grid-template-columns:1fr !important;}
  .vp-reel{max-height:52vh !important;}
  .vimeo-cta{flex-wrap:wrap !important;justify-content:center !important;text-align:center;}
}
`;

export const VIDEO_HTML = `
<span id="main-content" tabindex="-1"></span>

${MOBILE_VIDEO_HTML}

<div class="desktop-layout" style="font-family:'Space Grotesk',sans-serif;color:#fff;background:#0C0C0E;overflow-x:hidden;position:relative;">

  ${headerHtml({ subpage: true })}

  <header data-nav-hero style="position:relative;height:100vh;height:100dvh;min-height:600px;overflow:hidden;display:flex;align-items:center;justify-content:center;background:#141414;">
    <div class="sg-vhero" data-op="0.66" style="position:absolute;inset:0;">
      <video class="sg-vhero-v" autoplay muted playsinline preload="auto" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.66;background:#141414;"></video>
      <video class="sg-vhero-v" muted playsinline preload="auto" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;background:#141414;"></video>
    </div><div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,10,12,.42),rgba(10,10,12,.26) 45%,rgba(10,10,12,.55));"></div>
    <div style="position:relative;z-index:2;text-align:center;">
      <h1 style="margin:0;font-family:'Archivo';font-weight:800;font-size:clamp(2.4rem,7.4vw,7rem);text-transform:uppercase;color:transparent;-webkit-text-stroke:1.4px rgba(255,255,255,.85);line-height:.92;letter-spacing:-.01em;">AI-Powered<br>Video&nbsp;Post<br>Production</h1>
    </div>
    <div style="position:absolute;bottom:26px;left:50%;transform:translateX(-50%);z-index:5;display:flex;flex-direction:column;align-items:center;gap:6px;animation:sg-bob 2.4s ease-in-out infinite;">
      <span style="font:500 11px 'Space Grotesk';letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.75);">Scroll</span>
      <span style="color:#fff;font-size:18px;line-height:1;">&#8964;</span>
    </div>
  </header>

  <div id="vp-intro" style="max-width:840px;margin:0 auto;padding:100px 40px 24px;text-align:center;overflow:hidden;">
    <h2 id="vp-intro-h" class="vp-head" style="font-family:'Archivo';font-weight:800;font-size:clamp(2rem,4.4vw,3.4rem);line-height:1.04;margin:0 0 20px;will-change:transform;">Motion picture drives your revenue</h2>
    <p id="vp-intro-p" style="font:400 18px/1.65 'Space Grotesk';color:#bdbdbd;margin:0 auto;max-width:62ch;will-change:transform;">Built for modern e-commerce. From product launches to seasonal campaigns, we help brands create high-quality video content — faster and at scale, powered by AI and refined by experts.</p>
  </div>

  <div style="max-width:840px;margin:0 auto;padding:60px 40px;text-align:center;">
    <p style="font:600 12px 'Space Grotesk';letter-spacing:.18em;text-transform:uppercase;color:#8a8a92;margin:0 0 14px;">01 &mdash; E-Commerce</p>
    <h3 class="vp-head" style="font-family:'Archivo';font-weight:800;font-size:clamp(1.7rem,3.4vw,2.7rem);line-height:1.06;margin:0 0 16px;">Built for modern e-commerce</h3>
  </div>

  <div class="vp-split" style="display:grid;grid-template-columns:1fr 1fr;width:100%;height:100vh;height:100dvh;min-height:560px;gap:0;">
    <div style="position:relative;overflow:hidden;background:#0f0f11;">
      <video muted loop playsinline preload="none" poster="/assets/ecom-vid-1-poster.webp" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block;"><source src="/assets/ecom-vid-1.mp4" type="video/mp4"></video>
    </div>
    <div style="position:relative;overflow:hidden;background:#0f0f11;">
      <video muted loop playsinline preload="none" poster="/assets/ecom-vid-2-poster.webp" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block;"><source src="/assets/ecom-vid-2.mp4" type="video/mp4"></video>
    </div>
  </div>

  <div class="vp-media-grid" style="min-height:100vh;display:grid;grid-template-columns:.95fr 1.05fr;gap:clamp(40px,5vw,80px);align-items:center;max-width:1440px;margin:0 auto;padding:clamp(60px,9vh,110px) clamp(24px,4vw,60px);">
    <div>
      <p style="font:600 12px 'Space Grotesk';letter-spacing:.18em;text-transform:uppercase;color:#8a8a92;margin:0 0 14px;">02 &mdash; Reels</p>
      <h3 class="vp-head" style="font-family:'Archivo';font-weight:800;font-size:clamp(1.7rem,3.4vw,2.7rem);line-height:1.06;margin:0 0 16px;">Scroll-stopping reels</h3>
    </div>
    <div class="vp-reels-grid" style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;align-items:center;">
      <div class="vp-reel" style="border-radius:16px;overflow:hidden;aspect-ratio:9/16;max-height:76vh;background:#0f0f11;border:1px solid #2a2a2d;align-self:start;"><video muted loop playsinline preload="none" poster="/assets/reel-1-poster.webp" style="width:100%;height:100%;object-fit:cover;display:block;"><source src="/assets/reel-1.mp4" type="video/mp4"></video></div>
      <div class="vp-reel" style="border-radius:16px;overflow:hidden;aspect-ratio:9/16;max-height:76vh;background:#0f0f11;border:1px solid #2a2a2d;align-self:center;"><video muted loop playsinline preload="none" poster="/assets/reel-2-poster.webp" style="width:100%;height:100%;object-fit:cover;display:block;"><source src="/assets/reel-2.mp4" type="video/mp4"></video></div>
      <div class="vp-reel" style="border-radius:16px;overflow:hidden;aspect-ratio:9/16;max-height:76vh;background:#0f0f11;border:1px solid #2a2a2d;align-self:end;"><video muted loop playsinline preload="none" poster="/assets/reel-3-poster.webp" style="width:100%;height:100%;object-fit:cover;display:block;"><source src="/assets/reel-3.mp4" type="video/mp4"></video></div>
    </div>
  </div>

  <div style="background:linear-gradient(135deg,#7B2C8E,#4a1a5c);color:#fff;margin-top:20px;">
    <div style="max-width:1240px;margin:0 auto;padding:clamp(56px,9vh,110px) 40px;display:flex;flex-direction:column;align-items:center;text-align:center;gap:clamp(28px,4vh,48px);">
      <div>
        <p style="font:600 12px 'Space Grotesk';letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.8);margin:0 0 16px;">AI Video Post-Production</p>
        <h3 style="font-family:'Archivo';font-weight:800;font-size:clamp(1.9rem,4.2vw,3.2rem);line-height:1.05;margin:0 auto;max-width:22ch;">From raw still-life to ready-to-post video</h3>
      </div>
      <div style="width:auto;height:min(70vh,640px);aspect-ratio:9/16;border-radius:16px;overflow:hidden;background:#2a1234;box-shadow:0 24px 60px rgba(0,0,0,.35);">
        <video src="/assets/ai-video-raw.mp4" muted loop playsinline preload="none" poster="/assets/ai-video-raw-poster.webp" style="width:100%;height:100%;object-fit:cover;display:block;"></video>
      </div>
    </div>
  </div>

  <div class="vp-media-grid" style="max-width:1240px;margin:0 auto;padding:70px 40px 60px;display:grid;grid-template-columns:1.05fr .95fr;gap:60px;align-items:center;">
    <div data-sg-fs-host style="position:relative;z-index:2;border-radius:22px;overflow:hidden;aspect-ratio:16/9;background:#0f0f11;border:1px solid #2a2a2d;"><video muted loop playsinline preload="none" poster="/assets/real-estate-poster.webp" style="width:100%;height:100%;object-fit:cover;display:block;background:#0f0f11;"><source src="/assets/real-estate.mp4" type="video/mp4"></video></div>
    <div>
      <p style="font:600 12px 'Space Grotesk';letter-spacing:.18em;text-transform:uppercase;color:#8a8a92;margin:0 0 14px;">03 &mdash; Real Estate</p>
      <h3 class="vp-head" style="font-family:'Archivo';font-weight:800;font-size:clamp(1.7rem,3.4vw,2.7rem);line-height:1.06;margin:0 0 16px;">Real estate, cut to sell</h3>
    </div>
  </div>

  <div class="vp-media-grid" style="max-width:1240px;margin:0 auto;padding:60px 40px;display:grid;grid-template-columns:.95fr 1.05fr;gap:60px;align-items:center;">
    <div>
      <p style="font:600 12px 'Space Grotesk';letter-spacing:.18em;text-transform:uppercase;color:#8a8a92;margin:0 0 14px;">04 &mdash; Events</p>
      <h3 class="vp-head" style="font-family:'Archivo';font-weight:800;font-size:clamp(1.7rem,3.4vw,2.7rem);line-height:1.06;margin:0 0 16px;">Event content that lives beyond the moment</h3>
    </div>
    <div data-sg-fs-host style="position:relative;z-index:2;border-radius:22px;overflow:hidden;aspect-ratio:16/9;background:#0f0f11;border:1px solid #2a2a2d;"><video muted loop playsinline preload="none" poster="/assets/events-poster.webp" style="width:100%;height:100%;object-fit:cover;display:block;background:#0f0f11;"><source src="/assets/events.mp4" type="video/mp4"></video></div>
  </div>

  <div class="vp-media-grid" style="max-width:1240px;margin:0 auto;padding:60px 40px 20px;display:grid;grid-template-columns:1.05fr .95fr;gap:60px;align-items:center;">
    <div data-sg-fs-host style="position:relative;z-index:2;border-radius:22px;overflow:hidden;aspect-ratio:9/16;max-height:72vh;justify-self:start;background:#0f0f11;border:1px solid #2a2a2d;"><video muted loop playsinline preload="none" poster="/assets/product-motion-poster.webp" style="width:100%;height:100%;object-fit:contain;display:block;background:#0f0f11;"><source src="/assets/product-motion.mp4" type="video/mp4"></video></div>
    <div>
      <p style="font:600 12px 'Space Grotesk';letter-spacing:.18em;text-transform:uppercase;color:#8a8a92;margin:0 0 14px;">05 &mdash; Product Motion</p>
      <h3 class="vp-head" style="font-family:'Archivo';font-weight:800;font-size:clamp(1.7rem,3.4vw,2.7rem);line-height:1.06;margin:0 0 16px;">Bringing products to life through motion</h3>
    </div>
  </div>

  <section style="background:#0b0b0d;color:#fff;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:clamp(80px,14vh,160px) 40px;">
    <p style="font:700 13px 'Space Grotesk';letter-spacing:.32em;text-transform:uppercase;color:rgba(255,255,255,.5);margin:0 0 clamp(22px,4vh,40px);">The full reel</p>
    <a href="https://vimeo.com/skillvideos" target="_blank" rel="noopener noreferrer" class="vimeo-cta" style="text-decoration:none;color:#fff;display:inline-flex;align-items:center;gap:clamp(16px,2vw,30px);font-family:'Archivo';font-weight:900;font-size:clamp(2.4rem,9vw,7.5rem);line-height:1;letter-spacing:-.02em;">
      <span class="vimeo-word">See more on Vimeo</span>
      <span class="vimeo-arw" style="display:inline-flex;flex:0 0 auto;width:clamp(52px,7vw,104px);height:clamp(52px,7vw,104px);border-radius:50%;border:2px solid rgba(255,255,255,.4);align-items:center;justify-content:center;transition:transform .5s cubic-bezier(.2,.72,.2,1),background .35s,border-color .35s;">
        <svg width="42%" height="42%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
      </span>
    </a>
    <p style="font:400 clamp(14px,1.1vw,16px)/1.6 'Space Grotesk';color:rgba(255,255,255,.6);margin:clamp(28px,4vh,44px) 0 0;">A growing portfolio of post-production work &mdash; updated regularly.</p>
  </section>

  <section id="contact" style="background:#EDEDEB;color:#141414;padding:clamp(90px,18vh,200px) 40px;">
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
