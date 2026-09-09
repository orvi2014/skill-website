import { footerSocialsHtml, FOOTER_SOCIAL_HOVER_CSS } from "./footerSocials";
import { CHAT_CSS } from "./chatWidget";

export const HEADER_CSS = `
${CHAT_CSS}
#sg-menu .foot-socs{display:flex !important;flex-wrap:wrap !important;justify-content:flex-start !important;width:auto !important;gap:10px !important;}
${FOOTER_SOCIAL_HOVER_CSS}
.skip-link{position:fixed;top:-100px;left:12px;z-index:100;background:#fff;color:#141414;padding:12px 20px;border-radius:8px;font:600 14px 'Space Grotesk';text-decoration:none;transition:top .2s ease;box-shadow:0 8px 24px rgba(0,0,0,.25);}
.skip-link:focus{top:12px;}
.sg-vlink{opacity:.9;}
.sg-vlink:hover{opacity:1;transform:translateY(-2px);}
#sg-nav{color:#fff;position:fixed;left:0;right:0;top:0;z-index:60;display:flex;align-items:center;justify-content:space-between;padding:26px 40px;background:transparent;transition:background .3s ease,padding .3s ease;}
#sg-nav[data-logobg="light"]{color:#141414;}
#sg-nav[data-logobg="light"] .sv-mark,
#sg-nav[data-logobg="light"] .lg-white{filter:brightness(0);}
#sg-nav[data-logobg="light"] .sg-bar{background:#141414 !important;}
#sg-nav[data-logobg="dark"] .sg-bar{background:#fff !important;}
#sg-logo-link .lg-white{transition:opacity .3s ease,filter .3s ease;}
/* Adaptive marks: a shape-masked layer whose BACKDROP is inverted, so the
   logo is always the photographic negative of whatever scrolls behind it —
   guaranteed contrast over any colour, image or moving headline, with no bar,
   scrim or hiding. Only active once the nav floats over page content. */
.nav-inv{position:absolute;inset:0;opacity:0;pointer-events:none;transition:opacity .3s ease;
  /* contrast+brightness push mid-tones away from 50% grey, where a plain
     invert would cancel itself out (photo sections) */
  display:none;
  -webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;
  -webkit-mask-size:contain;mask-size:contain;
  -webkit-mask-position:left center;mask-position:left center;}
#sg-nav[data-invert="1"] .nav-inv{opacity:1;}
/* The sampled black/white PNG always stays underneath as the fallback: the
   invert layer is an enhancement, only allowed to replace it where the
   browser really supports backdrop-filter (and never during print/export). */

@media print {
  .nav-inv{display:none;}
  #sg-nav[data-invert="1"] #sg-logo-link .lg-white,
  #sg-nav[data-invert="1"] .sv-mark{opacity:1 !important;}
}
/* Hovering restores the real artwork so the existing logo swap still works. */
#sg-nav[data-invert="1"] #sg-logo-link:hover .nav-inv{opacity:0;}
/* The small caption keeps the sampled light/dark treatment — text cannot be
   alpha-masked reliably — plus a hairline shadow for photo backgrounds. */
#sg-nav[data-invert="1"] .sv-cap{text-shadow:0 1px 3px rgba(0,0,0,.45);}
#sg-nav[data-logobg="light"][data-invert="1"] .sv-cap{text-shadow:0 1px 3px rgba(255,255,255,.6);}
#sg-logo-link .lg-dark,
#sg-logo-link .lg-light,
#sg-logo-link .lg-black{opacity:0;}
#sg-logo-link:hover .lg-white{opacity:0;}
#sg-nav[data-logobg="dark"] #sg-logo-link:hover .lg-dark{opacity:1;}
#sg-nav[data-logobg="light"] #sg-logo-link:hover .lg-light{opacity:1;}
.sg-book:hover{background:#7B2C8E!important;color:#fff!important;transform:translateY(-1px);}
.nav-back{text-decoration:none;color:inherit;font:600 13px 'Space Grotesk';letter-spacing:.02em;display:flex;align-items:center;gap:8px;transition:color .3s ease,opacity .3s ease;opacity:.9;}
.nav-back:hover{opacity:1;}
#sg-burger:hover .sg-bar{width:32px !important;}
#sg-nav[data-invert="1"] .sg-bar{box-shadow:0 0 3px rgba(0,0,0,.35);}
#sg-nav[data-logobg="light"][data-invert="1"] .sg-bar{box-shadow:0 0 3px rgba(255,255,255,.6);}
#sg-menu{opacity:0;pointer-events:none;transform:translateY(-10px);transition:opacity .38s ease,transform .38s ease;}
#sg-menu[data-open="1"]{opacity:1;pointer-events:auto;transform:translateY(0);}
.sg-contact-tab{position:fixed;right:0;top:40%;z-index:70;background:#7B2C8E;color:#fff;writing-mode:vertical-rl;transform:rotate(180deg);padding:21px 11px;font:600 12px 'Space Grotesk';letter-spacing:.22em;text-transform:uppercase;text-decoration:none;border-radius:6px 0 0 6px;box-shadow:0 8px 30px rgba(123,44,142,.35);}

@media (max-width:1024px),(hover:none),(pointer:coarse){
  .sg-contact-tab{display:none !important;}
}
@media (max-width:768px){
  #sg-nav{padding:12px 18px !important;position:fixed !important;}
  #sg-nav > div:first-child{flex-direction:column !important;align-items:flex-start !important;gap:7px !important;}
  #sg-nav .sv-cap{display:block !important;font-size:8.5px !important;opacity:.55 !important;}
  #sg-nav .sg-vlink{gap:7px !important;}
  #sg-nav .sv-mark{height:22px !important;}
  #sg-nav .sg-book{position:absolute !important;left:50% !important;top:16px !important;transform:translateX(-50%) !important;padding:7px 16px !important;font-size:11px !important;letter-spacing:.03em !important;}
  #sg-nav > div:last-child{gap:0 !important;}
  #sg-nav #sg-burger{padding:2px 2px !important;}
  #sg-nav .nav-back{display:none !important;}
}
`;

export function headerHtml(opts?: { backHref?: string; backLabel?: string; subpage?: boolean }): string {
  const back = opts?.backHref
    ? `<a href="${opts.backHref}" class="nav-back"><span style="font-size:15px;">&#8592;</span> ${opts.backLabel ?? "Back"}</a>`
    : "";
  return `
  <a href="#main-content" class="skip-link">Skip to content</a>
  <a href="#contact" class="sg-contact-tab">Contact&nbsp;Us</a>

  <nav id="sg-nav">
    <div data-nav-chip style="display:flex;align-items:center;gap:16px;">
      <a id="sg-logo-link" data-nav-mark href="/" style="position:relative;display:block;height:30px;"><img class="lg lg-white" src="/assets/logo-white.png" alt="Skill Graphics" style="height:30px;width:auto;display:block;"><img class="lg lg-dark" src="/assets/logo-hover-dark.png" alt="" aria-hidden="true" style="position:absolute;inset:0;height:30px;width:auto;display:block;transition:opacity .3s ease;pointer-events:none;"><img class="lg lg-light" src="/assets/logo-hover-light.png" alt="" aria-hidden="true" style="position:absolute;inset:0;height:30px;width:auto;display:block;transition:opacity .3s ease;pointer-events:none;"><img class="lg lg-black" src="/assets/logo-black.png" alt="" aria-hidden="true" style="position:absolute;inset:0;height:30px;width:auto;display:block;transition:opacity .3s ease;pointer-events:none;"><span class="nav-inv" aria-hidden="true" style="-webkit-mask-image:url(/assets/logo-black.png);mask-image:url(/assets/logo-black.png);"></span></a>
      <a href="https://skill.ventures/" target="_blank" rel="noopener" class="sg-vlink" data-nav-mark title="Member of Skill Ventures" style="display:flex;align-items:center;gap:11px;text-decoration:none;color:inherit;">
        <span aria-hidden="true" style="display:block;width:1px;height:22px;background:currentColor;opacity:.28;"></span>
        <span class="sv-cap" style="font:600 9px 'Space Grotesk';letter-spacing:.16em;text-transform:uppercase;line-height:1;color:inherit;opacity:.62;white-space:nowrap;">Member of</span>
        <img class="sv-mark" src="/assets/skill-ventures-white.png" alt="Skill Ventures" style="height:34px;width:auto;display:block;transition:filter .3s ease,opacity .3s ease;">
      </a>
    </div>
    <div data-nav-chip style="display:flex;align-items:center;gap:20px;">
      ${back}
      <a href="#book" class="sg-book" data-nav-mark style="text-decoration:none;background:#fff;color:#141414;font:600 13px 'Space Grotesk';letter-spacing:.02em;padding:11px 22px;border-radius:100px;white-space:nowrap;transition:background .3s ease,color .3s ease,transform .3s ease;">Book a Meeting</a>
      <button id="sg-burger" data-nav-mark aria-label="Open menu" aria-expanded="false" aria-controls="sg-menu" style="appearance:none;border:none;background:transparent;cursor:pointer;padding:10px 4px;display:flex;flex-direction:column;align-items:flex-end;gap:7px;">
        <span class="sg-bar" style="display:block;width:32px;height:2px;border-radius:2px;background:#fff;transition:background .3s ease,width .3s ease;"></span>
        <span class="sg-bar" style="display:block;width:20px;height:2px;border-radius:2px;background:#fff;transition:background .3s ease,width .3s ease;"></span>
      </button>
    </div>
  </nav>

  <div id="sg-menu" data-open="0" style="position:fixed;inset:0;z-index:80;background:rgba(10,10,12,.98);display:flex;flex-direction:column;">
    <div style="display:flex;align-items:center;justify-content:space-between;padding:26px 40px;">
      <img src="/assets/logo-skill-graphics.png" alt="Skill Graphics" style="height:30px;width:auto;filter:brightness(0) invert(1);">
      <button id="sg-menu-close" aria-label="Close menu" style="appearance:none;border:none;background:transparent;color:#fff;font:300 40px 'Space Grotesk';line-height:1;cursor:pointer;padding:0 6px;">&times;</button>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;justify-content:center;padding:0 40px;max-width:1180px;margin:0 auto;width:100%;box-sizing:border-box;">
      <div style="display:flex;flex-direction:column;gap:4px;">
        <a href="/photo" class="sg-menu-link" style="text-decoration:none;color:#fff;font-family:'Archivo';font-weight:800;font-size:clamp(2.4rem,6vw,5rem);line-height:1.02;letter-spacing:-.01em;text-transform:uppercase;">Image Editing</a>
        <a href="/video" class="sg-menu-link" style="text-decoration:none;color:#fff;font-family:'Archivo';font-weight:800;font-size:clamp(2.4rem,6vw,5rem);line-height:1.02;letter-spacing:-.01em;text-transform:uppercase;">Video Editing</a>
        <a href="/#studio" class="sg-menu-link" style="text-decoration:none;color:#fff;font-family:'Archivo';font-weight:800;font-size:clamp(2.4rem,6vw,5rem);line-height:1.02;letter-spacing:-.01em;text-transform:uppercase;">AI Studio</a>
        <a href="/#cases" class="sg-menu-link" style="text-decoration:none;color:#fff;font-family:'Archivo';font-weight:800;font-size:clamp(2.4rem,6vw,5rem);line-height:1.02;letter-spacing:-.01em;text-transform:uppercase;">Cases</a>
        <a href="/#faq" class="sg-menu-link" style="text-decoration:none;color:#fff;font-family:'Archivo';font-weight:800;font-size:clamp(2.4rem,6vw,5rem);line-height:1.02;letter-spacing:-.01em;text-transform:uppercase;">FAQ</a>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:20px;align-items:center;margin-top:40px;padding-top:26px;border-top:1px solid rgba(255,255,255,.14);">
        <a href="/#book" class="sg-menu-link" style="text-decoration:none;background:#7B2C8E;color:#fff;font:600 15px 'Space Grotesk';padding:14px 28px;border-radius:100px;">Book a Meeting &#8594;</a>
        ${footerSocialsHtml("on-dark")}
      </div>
    </div>
  </div>`;
}
