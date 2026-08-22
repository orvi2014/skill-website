import { AI_STUDIO_CSS } from "./aiStudio";
import { HEADER_CSS } from "./siteHeader";
import { HOME_MOBILE_CSS } from "./homeMobile";
import { HOME_FOOTER_CSS } from "./homeFooter";

export const HOME_CSS = `
${AI_STUDIO_CSS}
${HEADER_CSS}
${HOME_MOBILE_CSS}
${HOME_FOOTER_CSS}
*{box-sizing:border-box;}
html{scroll-behavior:smooth;scroll-padding-top:82px;scroll-snap-type:y proximity;}
body{margin:0;background:#EBEBE9;}
header#top,#photo,#video,#studio,section[data-screen-label="Cases"],section[data-screen-label="Powering"],#join,#faq{scroll-snap-align:start;scroll-snap-stop:normal;}
@keyframes sg-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@keyframes sg-hue{0%{filter:hue-rotate(0deg) saturate(1.1)}100%{filter:hue-rotate(360deg) saturate(1.1)}}
@keyframes sg-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(7px)}}
@keyframes sg-orb1{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(24px,-26px) scale(1.12)}}
@keyframes sg-orb2{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-26px,20px) scale(1.14)}}
@keyframes sg-spin{to{transform:rotate(360deg)}}
@keyframes sg-blobA{0%{transform:translate(0,0) scale(1)}33%{transform:translate(42%,26%) scale(1.35)}66%{transform:translate(-22%,44%) scale(.85)}100%{transform:translate(0,0) scale(1)}}
@keyframes sg-blobB{0%{transform:translate(0,0) scale(1)}33%{transform:translate(-38%,28%) scale(1.25)}66%{transform:translate(28%,-32%) scale(1.1)}100%{transform:translate(0,0) scale(1)}}
@keyframes sg-blobC{0%{transform:translate(0,0) scale(1)}50%{transform:translate(34%,-38%) scale(1.4)}100%{transform:translate(0,0) scale(1)}}
@keyframes sg-coreSpin{to{transform:rotate(360deg)}}
@keyframes sg-dash{to{stroke-dashoffset:-40}}
@keyframes sg-ring{0%{transform:scale(.6);opacity:.5}100%{transform:scale(1.9);opacity:0}}
@keyframes sg-nfloat{0%,100%{transform:translate(-50%,-50%) translateY(0)}50%{transform:translate(-50%,-50%) translateY(-9px)}}
@keyframes sg-flowL{to{stroke-dashoffset:-320}}
@keyframes sg-flowR{to{stroke-dashoffset:320}}
@keyframes sg-streampulse{0%,100%{opacity:.3}50%{opacity:.8}}
.ops-node{transition:transform .4s cubic-bezier(.2,.7,.2,1);}
.sa-card:hover{background:linear-gradient(155deg,#16294c,#0f1c39 60%)!important;border-color:rgba(245,145,32,.6)!important;box-shadow:0 44px 100px rgba(20,44,86,.55)!important;}
.sa-card:hover .sa-logo{transform:scale(1.05);}
.sa-card:hover .sa-desc{color:rgba(255,255,255,.86)!important;}
.sa-card:hover .sa-t{color:#fff!important;}
.sa-card:hover .sa-row{border-color:rgba(245,145,32,.3)!important;}
.sa-card:hover .sa-arrow{color:#f59120!important;transform:translateX(4px);}
.join-chip:hover{border-color:#b98cd0!important;color:#fff!important;transform:translateY(-2px);}
.join-cta:hover{transform:translateY(-2px);box-shadow:0 16px 40px rgba(255,255,255,.14);}
.join-cta:hover span{transform:translateX(4px);}
.ops-node:hover{animation-play-state:paused!important;}
.ops-node .ops-chip{transition:transform .4s cubic-bezier(.2,.7,.2,1),box-shadow .4s ease,border-color .4s ease,background .4s ease;}
.ops-node:hover .ops-chip{transform:scale(1.14);border-color:rgba(255,255,255,.55)!important;box-shadow:0 0 0 6px rgba(123,44,142,.16),0 20px 50px rgba(0,0,0,.5);background:rgba(123,44,142,.4)!important;}
.ops-node .ops-lab{transition:color .35s ease,opacity .35s ease;}
.ops-node:hover .ops-lab{color:#fff!important;}
@keyframes sg-chipflip{0%{transform:rotateY(0)}100%{transform:rotateY(360deg)}}
.ops-chip{transform-style:preserve-3d;}
.ops-chip.flipping{animation:sg-chipflip .85s cubic-bezier(.5,0,.2,1);}
@keyframes sg-amb{0%,100%{transform:translate(-8%,-6%) scale(1)}50%{transform:translate(10%,8%) scale(1.25)}}
.usp-rw{transition:color .18s linear;}
.usp-m{transition:transform .5s cubic-bezier(.2,.7,.2,1),box-shadow .5s ease,border-color .5s ease;}
.usp-m:hover{transform:translateY(-6px);box-shadow:0 26px 60px rgba(20,20,20,.1);border-color:#d9cfe2 !important;}
.usp-m .usp-line{transform:scaleX(0);transform-origin:left;transition:transform .55s cubic-bezier(.2,.7,.2,1);}
.usp-m:hover .usp-line{transform:scaleX(1);}
.usp-m .usp-arrow{transition:transform .45s cubic-bezier(.2,.7,.2,1),color .45s ease;}
.usp-m:hover .usp-arrow{transform:translateX(6px);color:#7B2C8E;}
@keyframes sg-bargrow{0%,100%{transform:scaleY(.42)}50%{transform:scaleY(1)}}
@keyframes sg-sweep{to{transform:rotate(360deg)}}
details[open] .sg-faq-plus{transform:rotate(45deg);}
#faq summary{transition:color .25s ease;}
#faq summary:hover{color:#7B2C8E;}
.foot-cta:hover{background:#7B2C8E!important;color:#fff!important;}
.foot-cta:hover .foot-cta-arrow{transform:translate(6px,-6px);}
details summary::-webkit-details-marker{display:none;}
.jcard{transition:transform .5s cubic-bezier(.2,.7,.2,1);}
.jframe{transition:box-shadow .5s ease;box-shadow:0 16px 40px rgba(0,0,0,.1);}
.jcard-img{transition:filter .6s ease,transform .7s cubic-bezier(.2,.7,.2,1);filter:grayscale(1) contrast(1.04);will-change:transform;}
.jcard:hover .jcard-img{filter:none;transform:scale(1.07);}
.jcard:hover .jframe{box-shadow:0 30px 70px rgba(123,44,142,.22);}
.jcard:hover .jyear{color:#7B2C8E !important;}
.jcard .jyear{transition:color .45s ease;}
@keyframes sg-globe-rot{to{background-position:-440px 0}}
@keyframes sg-orbit{to{transform:rotate(360deg)}}
@keyframes sg-orbit-r{to{transform:rotate(-360deg)}}
@keyframes sg-twinkle{0%,100%{opacity:.25}50%{opacity:1}}
@keyframes sg-globepulse{0%,100%{box-shadow:0 0 90px 6px rgba(123,44,142,.45)}50%{box-shadow:0 0 130px 14px rgba(123,44,142,.6)}}
.cases-marquee-wrap:hover #cases-track{--paused:1;}
.cases-card img{will-change:transform;}
.cases-card:focus-visible{outline:2px solid #fff;outline-offset:-3px;z-index:5;}
.cases-card-logo img{opacity:.92;transition:opacity .35s ease,transform .45s cubic-bezier(.2,.72,.2,1);}
.cases-card:hover .cases-card-logo img,.cases-card:focus-visible .cases-card-logo img{opacity:1;transform:scale(1.04);}

@media (max-width:1024px){
  #usp [style*="repeat(3,1fr)"]{grid-template-columns:repeat(2,1fr) !important;gap:16px !important;}
  #join [style*="1.15fr 0.85fr"]{grid-template-columns:1fr !important;gap:40px !important;}
  #contact [style*="1.5fr 1fr 1fr 1.2fr"]{grid-template-columns:1fr 1fr !important;gap:32px !important;}
}
@media (max-width:768px){
  html{scroll-snap-type:none !important;scroll-padding-top:60px;}
  #contact [style*="1.5fr 1fr 1fr 1.2fr"]{grid-template-columns:1fr !important;gap:36px !important;}
  header#top,#photo,#video,#studio,section[data-screen-label="Cases"],section[data-screen-label="Powering"],#join,#faq{scroll-snap-align:none !important;}
  header#top{min-height:100svh !important;height:auto !important;padding:96px 0 0 !important;}
  #photo [data-cursor="media"],#video [data-cursor="media"]{min-height:82svh !important;height:82svh !important;}
  #usp-scroll{height:auto !important;}
  #usp-pin{position:static !important;height:auto !important;overflow:visible !important;padding:96px 20px 64px !important;gap:26px !important;}
  #usp-statement{font-size:1.45rem !important;line-height:1.34 !important;max-width:none !important;}
  #usp [style*="repeat(3,1fr)"]{grid-template-columns:1fr !important;gap:16px !important;}
  .usp-m{min-height:auto !important;}
  section[data-screen-label="Powering"]{min-height:auto !important;padding:72px 20px !important;}
  section[data-screen-label="Powering"] > svg{display:none !important;}
  section[data-screen-label="Powering"] > div[aria-hidden="true"]{display:none !important;}
  #ops-core{display:none !important;}
  .ops-node{position:static !important;transform:none !important;animation:none !important;flex-direction:row !important;align-items:center !important;justify-content:flex-start !important;gap:14px !important;width:100% !important;max-width:380px !important;margin:0 auto 10px !important;background:rgba(255,255,255,.045);border:1px solid rgba(255,255,255,.12);border-radius:14px;padding:12px 16px !important;}
  .ops-node .ops-lab{max-width:none !important;text-align:left !important;font-size:14px !important;color:#e7e7ec !important;}
  #journey-tl{position:static !important;height:auto !important;padding:90px 20px 40px !important;}
  #journey-vp{height:auto !important;overflow:visible !important;margin-top:20px !important;}
  #journey-track{flex-direction:column !important;height:auto !important;gap:34px !important;transform:none !important;}
  .jcard{flex:0 0 auto !important;width:100% !important;height:auto !important;}
  .jframe{min-height:0 !important;height:56vw !important;max-height:340px !important;}
  #vision-stage{display:none !important;}
  #join{padding:84px 20px !important;}
  #join [style*="1.15fr 0.85fr"]{grid-template-columns:1fr !important;gap:30px !important;}
  #faq{padding:80px 20px !important;}
}
`;
