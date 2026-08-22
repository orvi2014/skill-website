export const AI_STUDIO_CSS = `
@keyframes ais-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@keyframes ais-pulse{0%,100%{opacity:.22}50%{opacity:.75}}
@keyframes ais-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
@keyframes ais-glowhue{0%{filter:hue-rotate(0deg)}100%{filter:hue-rotate(360deg)}}
#ais-cursor-glow{animation:ais-glowhue 14s linear infinite;}
@keyframes ais-drift1{0%{transform:translate(0,0) scale(1)}33%{transform:translate(18%,12%) scale(1.15)}66%{transform:translate(-10%,20%) scale(.95)}100%{transform:translate(0,0) scale(1)}}
@keyframes ais-drift2{0%{transform:translate(0,0) scale(1)}30%{transform:translate(-16%,-10%) scale(1.1)}60%{transform:translate(12%,-16%) scale(.9)}100%{transform:translate(0,0) scale(1)}}
@keyframes ais-drift3{0%{transform:translate(0,0) scale(1.05)}50%{transform:translate(10%,-14%) scale(.92)}100%{transform:translate(0,0) scale(1.05)}}
.ais-blob{position:absolute;border-radius:50%;pointer-events:none;filter:blur(28px);will-change:transform;}
.ais-panel{opacity:0;visibility:hidden;transform:scale(.98);transition:opacity .5s cubic-bezier(.2,.72,.2,1),transform .5s cubic-bezier(.2,.72,.2,1),visibility .5s;position:absolute;inset:0;display:none !important;}
.ais-panel.active{opacity:1;visibility:visible;transform:scale(1);position:relative;display:grid !important;}
.ais-ph{display:flex;align-items:center;justify-content:center;width:100%;height:100%;color:#b7abbf;font:600 11px 'Space Grotesk';letter-spacing:.06em;text-transform:uppercase;background:repeating-linear-gradient(135deg,#f3eef6,#f3eef6 10px,#ece3f1 10px,#ece3f1 20px);text-align:center;padding:8px;}
.ais-chip{transition:color .35s ease,background .35s ease,border-color .35s ease,transform .2s ease;}
.ais-chip:hover{transform:translateY(-1px);}
.ais-chip:focus-visible{outline:2px solid #7B2C8E;outline-offset:2px;}

@media (max-width:1024px){
  #ais-card{flex-direction:column !important;gap:22px !important;min-height:0 !important;padding:24px 16px 30px !important;align-items:stretch !important;}
  #ais-card > div[style*="flex:0 1 360px"]{flex:none !important;max-width:none !important;min-width:0 !important;text-align:center;align-items:center;}
  #aisb-detail{height:auto !important;min-height:0 !important;max-width:36ch !important;margin:0 auto 4px !important;}
  #aisb-chips{justify-content:center !important;}
  #ais-card > div[style*="flex:0 0 auto"][style*="flex-direction:column"]{flex:none !important;width:100% !important;}
  .ais-panel.active{grid-template-columns:1fr 1fr !important;grid-auto-rows:auto !important;height:auto !important;column-gap:12px !important;row-gap:30px !important;width:100% !important;}
  .ais-panel > div:nth-child(1){grid-column:1 !important;height:auto !important;}
  .ais-panel > div:nth-child(2){grid-column:2 !important;height:auto !important;}
  .ais-panel > div:nth-child(3){display:none !important;}
  .ais-panel > div:nth-child(4){grid-column:1 !important;height:auto !important;}
  .ais-panel > div:nth-child(5){grid-column:2 !important;height:auto !important;}
  .ais-panel > div:nth-child(1) > div:not([style*="position:absolute"]),
  .ais-panel > div:nth-child(2) > div:not([style*="position:absolute"]){height:118px !important;flex:none !important;}
}
`;

function frame(inner: string) {
  return `<div style="flex:1;min-height:0;border-radius:12px;overflow:hidden;background:#fff;box-shadow:0 10px 26px rgba(20,10,30,.08);">${inner}</div>`;
}
function img(src: string) {
  return `<img src="${src}" alt="" loading="lazy" style="width:100%;height:100%;object-fit:contain;display:block;">`;
}
function ph(label: string) {
  return `<div class="ais-ph">${label}</div>`;
}

function panel(
  cat: string,
  raw: [string?, string?, string?],
  still: [string?, string?, string?],
  onmodel: string | undefined,
  accentColor: string
): string {
  const rawCol = raw
    .map((src) => frame(src ? img(src) : ph("Raw")))
    .join("");
  const stillCol = still
    .map((src) => frame(src ? img(src) : ph("Retouched")))
    .join("");
  return `
    <div class="ais-panel${cat === "relaxed" ? " active" : ""}" data-cat="${cat}" style="grid-template-columns:128px 128px auto auto auto;grid-template-rows:1fr;column-gap:clamp(12px,1.6vw,24px);align-items:stretch;justify-content:center;width:100%;height:min(56vh,500px);">
      <div style="grid-column:1;position:relative;display:flex;flex-direction:column;gap:10px;height:100%;min-height:0;">
        <p style="position:absolute;top:-20px;left:0;right:0;text-align:center;margin:0;font:600 9.5px 'Space Grotesk';letter-spacing:.16em;text-transform:uppercase;color:#9a9a95;">Raw</p>
        ${rawCol}
      </div>
      <div style="grid-column:2;position:relative;display:flex;flex-direction:column;gap:10px;height:100%;min-height:0;">
        <p style="position:absolute;top:-20px;left:0;right:0;text-align:center;margin:0;font:600 9.5px 'Space Grotesk';letter-spacing:.16em;text-transform:uppercase;color:#9a9a95;">Retouched</p>
        ${stillCol}
      </div>
      <div aria-hidden="true" style="grid-column:3;align-self:center;justify-self:center;color:#7B2C8E;font-size:clamp(18px,2vw,28px);line-height:1;">→</div>
      <div style="grid-column:4;position:relative;height:100%;aspect-ratio:9/16;">
        <div style="position:absolute;inset:0;border-radius:18px;overflow:hidden;background:#fff;border:1px solid #ececE7;box-shadow:0 24px 60px rgba(20,10,30,.12);">
          ${onmodel ? `<img src="${onmodel}" alt="On-model result" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;">` : ph("On-model result")}
          <div style="position:absolute;left:12px;top:12px;display:flex;align-items:center;gap:7px;background:rgba(255,255,255,.86);backdrop-filter:blur(6px);padding:6px 12px;border-radius:100px;pointer-events:none;">
            <span style="width:7px;height:7px;border-radius:50%;background:${accentColor};"></span>
            <span style="font:600 10px 'Space Grotesk';letter-spacing:.08em;text-transform:uppercase;color:#161616;">On-model</span>
          </div>
        </div>
        <svg viewBox="0 0 90 160" preserveAspectRatio="none" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:6;overflow:visible;"><path d="M3 20 L3 3 L20 3" fill="none" stroke="${accentColor}" stroke-width="1.4"/><path d="M87 20 L87 3 L70 3" fill="none" stroke="${accentColor}" stroke-width="1.4"/><path d="M3 140 L3 157 L20 157" fill="none" stroke="${accentColor}" stroke-width="1.4"/><path d="M87 140 L87 157 L70 157" fill="none" stroke="${accentColor}" stroke-width="1.4"/></svg>
      </div>
      <div style="grid-column:5;position:relative;height:100%;aspect-ratio:9/16;">
        <div style="position:absolute;inset:0;border-radius:18px;overflow:hidden;background:#161616;border:1px solid #ececE7;box-shadow:0 24px 60px rgba(20,10,30,.12);">
          <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;color:#cfcfd4;text-align:center;padding:16px;">
            <span style="display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:50%;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.24);font-size:16px;">▶</span>
            <span style="font:600 11px 'Space Grotesk';letter-spacing:.04em;line-height:1.5;">Video<br>coming soon</span>
          </div>
          <div style="position:absolute;left:12px;top:12px;display:flex;align-items:center;gap:7px;background:rgba(0,0,0,.5);backdrop-filter:blur(6px);padding:6px 12px;border-radius:100px;pointer-events:none;z-index:2;">
            <span style="width:7px;height:7px;border-radius:50%;background:${accentColor};"></span>
            <span style="font:600 10px 'Space Grotesk';letter-spacing:.08em;text-transform:uppercase;color:#fff;">Video</span>
          </div>
        </div>
      </div>
    </div>`;
}

export const AI_STUDIO_HTML = `
<section data-screen-label="AI Studio" style="position:relative;background:#EDEDEB;color:#161616;min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:clamp(40px,5vh,64px) clamp(20px,3vw,48px);overflow:hidden;">
  <div aria-hidden="true" style="position:absolute;top:-20%;left:50%;transform:translateX(-50%);width:min(1000px,110%);height:520px;background:radial-gradient(ellipse at center,rgba(123,44,142,.10),transparent 64%);pointer-events:none;"></div>

  <div id="ais-card" style="position:relative;overflow:hidden;width:100%;max-width:1780px;margin:0 auto;background:linear-gradient(118deg,rgba(123,44,142,.055) 0%,rgba(123,44,142,0) 30%),radial-gradient(circle at 92% 8%,rgba(123,44,142,.07),transparent 42%),#fff;border-radius:24px;padding:clamp(26px,3vw,48px) clamp(20px,2vw,34px);box-shadow:0 34px 90px rgba(20,10,30,.10),0 2px 0 rgba(255,255,255,.7) inset;border:1px solid #e6e6e2;display:flex;gap:clamp(24px,2.2vw,40px);align-items:stretch;justify-content:center;flex-wrap:nowrap;min-height:min(82vh,780px);padding-top:clamp(40px,5vh,72px);padding-bottom:clamp(40px,5vh,72px);">
    <div id="ais-cursor-glow" aria-hidden="true" style="position:absolute;left:0;top:0;width:460px;height:460px;border-radius:50%;background:radial-gradient(circle,rgba(123,44,142,.10),rgba(123,44,142,.04) 40%,transparent 70%);transform:translate(-50%,-50%);opacity:0;transition:opacity .6s ease;pointer-events:none;will-change:transform;"></div>
    <div class="ais-blob" aria-hidden="true" style="top:-14%;left:-6%;width:46%;height:70%;background:radial-gradient(circle,rgba(123,44,142,.10),transparent 68%);animation:ais-drift1 22s ease-in-out infinite;"></div>
    <div class="ais-blob" aria-hidden="true" style="bottom:-20%;right:-4%;width:42%;height:66%;background:radial-gradient(circle,rgba(224,34,46,.06),transparent 68%);animation:ais-drift2 27s ease-in-out infinite;"></div>
    <div class="ais-blob" aria-hidden="true" style="top:20%;right:24%;width:34%;height:52%;background:radial-gradient(circle,rgba(123,44,142,.07),transparent 70%);animation:ais-drift3 19s ease-in-out infinite;"></div>
    <div style="position:relative;flex:0 1 360px;min-width:250px;max-width:380px;display:flex;flex-direction:column;justify-content:center;">
      <p style="font:600 12px 'Space Grotesk';letter-spacing:.22em;text-transform:uppercase;color:#7B2C8E;margin:0 0 16px;">AI Studio · Styling</p>
      <h2 style="font-family:'Archivo';font-weight:800;font-size:clamp(1.7rem,2.6vw,3rem);line-height:1.03;letter-spacing:-.02em;margin:0 0 18px;color:#161616;">The right look<br>for <span id="aisb-headword" style="display:inline-block;transform-origin:center;backface-visibility:hidden;transform:perspective(440px) rotateX(0deg);color:transparent;-webkit-text-stroke:1.4px #7B2C8E;transition:transform .52s cubic-bezier(.2,.75,.25,1),opacity .42s ease;">E-commerce</span></h2>
      <p id="aisb-detail" style="font:400 15px/1.62 'Space Grotesk';color:#5b5b58;margin:0 0 26px;max-width:40ch;height:7.9em;min-height:7.9em;transition:opacity .4s ease;">Your customers aren't all the same — your content shouldn't be either. One product set becomes the right look for every channel, all from your existing images.</p>
      <div id="aisb-chips" style="display:flex;gap:4px;flex-wrap:wrap;">
        <button type="button" data-cat="relaxed" class="ais-chip" aria-pressed="true" style="border:1px solid #7B2C8E;background:#7B2C8E;color:#fff;font:600 11px 'Space Grotesk';padding:8px 9px;border-radius:100px;cursor:pointer;white-space:nowrap;">E-commerce</button>
        <button type="button" data-cat="casual" class="ais-chip" aria-pressed="false" style="border:1px solid #d8d8d3;background:transparent;color:#5b5b58;font:600 11px 'Space Grotesk';padding:8px 9px;border-radius:100px;cursor:pointer;white-space:nowrap;">Editorial</button>
        <button type="button" data-cat="formal" class="ais-chip" aria-pressed="false" style="border:1px solid #d8d8d3;background:transparent;color:#5b5b58;font:600 11px 'Space Grotesk';padding:8px 9px;border-radius:100px;cursor:pointer;white-space:nowrap;">Campaign</button>
      </div>
    </div>
    <div style="position:relative;flex:0 0 auto;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px;">
      ${panel(
        "relaxed",
        ["/assets/ecom-raw-2.webp", "/assets/ecom-raw-1.webp", "/assets/ecom-raw-3.webp"],
        ["/assets/ecom-still-3.webp", "/assets/ecom-still-2.webp", "/assets/ecom-still-1.webp"],
        "/assets/ai-result-model.webp",
        "#7B2C8E"
      )}
      ${panel("casual", [undefined, undefined, undefined], [undefined, undefined, undefined], undefined, "#7B2C8E")}
      ${panel("formal", [undefined, undefined, undefined], [undefined, undefined, undefined], undefined, "#7B2C8E")}
    </div>
  </div>
</section>`;

const HEAD_MAP: Record<string, string> = {
  relaxed: "E-commerce",
  casual: "Editorial",
  formal: "Campaign",
};
const DETAIL_MAP: Record<string, string> = {
  relaxed:
    "Your customers aren't all the same — your content shouldn't be either. One product set becomes the right look for every channel, all from your existing images.",
  casual:
    "Editorial lives on mood, not just product. The same set becomes story-driven imagery — styled, atmospheric and ready for lookbooks, features and social.",
  formal:
    "Campaigns need a hero moment. Those exact pieces turn into bold, high-impact visuals built to headline launches, ads and out-of-home.",
};
const ACCENT_MAP: Record<string, string> = {
  relaxed: "#7B2C8E",
  casual: "#7B2C8E",
  formal: "#7B2C8E",
};
const ORDER = ["relaxed", "casual", "formal"];

export function mountAiStudio(): () => void {
  const cleanups: Array<() => void> = [];
  const card = document.getElementById("ais-card");
  const glow = document.getElementById("ais-cursor-glow");
  const panels = Array.from(document.querySelectorAll<HTMLElement>(".ais-panel"));
  const headEl = document.getElementById("aisb-headword");
  const detailEl = document.getElementById("aisb-detail");
  const chips = Array.from(document.querySelectorAll<HTMLButtonElement>(".ais-chip"));

  if (card && glow) {
    let raf = 0;
    let tx = 0,
      ty = 0,
      cx = 0,
      cy = 0;
    const tick = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      (glow as HTMLElement).style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
      if (Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };
    const onMove = (e: MouseEvent) => {
      const r = card.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const onEnter = () => {
      (glow as HTMLElement).style.opacity = "1";
    };
    const onLeave = () => {
      (glow as HTMLElement).style.opacity = "0";
    };
    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);
    cleanups.push(() => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    });
  }

  let ci = 0;

  const setCat = (key: string) => {
    panels.forEach((p) => p.classList.toggle("active", p.getAttribute("data-cat") === key));
    chips.forEach((c) => {
      const on = c.getAttribute("data-cat") === key;
      const accent = ACCENT_MAP[key] || "#7B2C8E";
      c.setAttribute("aria-pressed", on ? "true" : "false");
      c.style.background = on ? accent : "transparent";
      c.style.borderColor = on ? accent : "#d8d8d3";
      c.style.color = on ? "#fff" : "#5b5b58";
    });
    if (headEl && HEAD_MAP[key]) {
      (headEl as HTMLElement).style.transform = "perspective(440px) rotateX(90deg)";
      (headEl as HTMLElement).style.opacity = "0";
      window.setTimeout(() => {
        headEl.style.transition = "none";
        (headEl as HTMLElement).style.transform = "perspective(440px) rotateX(-90deg)";
        headEl.textContent = HEAD_MAP[key];
        (headEl as HTMLElement).style.setProperty(
          "-webkit-text-stroke-color",
          ACCENT_MAP[key] || "#7B2C8E"
        );
        void (headEl as HTMLElement).offsetWidth;
        (headEl as HTMLElement).style.transition =
          "transform .52s cubic-bezier(.2,.75,.25,1),opacity .42s ease";
        requestAnimationFrame(() => {
          (headEl as HTMLElement).style.transform = "perspective(440px) rotateX(0deg)";
          (headEl as HTMLElement).style.opacity = "1";
        });
      }, 360);
    }
    if (detailEl && DETAIL_MAP[key]) {
      (detailEl as HTMLElement).style.opacity = "0";
      window.setTimeout(() => {
        detailEl.textContent = DETAIL_MAP[key];
        (detailEl as HTMLElement).style.opacity = "1";
      }, 200);
    }
    ci = Math.max(0, ORDER.indexOf(key));
  };

  let catTimer = 0;
  catTimer = window.setInterval(() => {
    ci = (ci + 1) % ORDER.length;
    setCat(ORDER[ci]);
  }, 3500);
  cleanups.push(() => window.clearInterval(catTimer));

  return () => cleanups.forEach((fn) => fn());
}
