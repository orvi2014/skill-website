import { footerSocialsHtml, FOOTER_SOCIAL_HOVER_CSS } from "./footerSocials";

export const HOME_FOOTER_CSS = `
.foot-link:hover{color:#fff!important;}
${FOOTER_SOCIAL_HOVER_CSS}
.foot-wm-fill{-webkit-mask-image:radial-gradient(circle 180px at var(--mx,50%) var(--my,50%),#000 0%,rgba(0,0,0,.35) 55%,transparent 78%);mask-image:radial-gradient(circle 180px at var(--mx,50%) var(--my,50%),#000 0%,rgba(0,0,0,.35) 55%,transparent 78%);}
.foot-office:hover .foot-office-city{color:#b98cd0;}
@media (max-width:1024px){
  .sg-home-foot-grid{grid-template-columns:1fr 1fr!important;gap:36px!important;}
}
@media (max-width:768px){
  .sg-home-foot-grid{grid-template-columns:1fr!important;}
}
`;

function serviceLinks(subpage: boolean): string {
  const photo = subpage ? "/photo" : "#photo";
  const video = subpage ? "/video" : "#video";
  const studio = subpage ? "/#studio" : "#studio";
  const a = (href: string, label: string) =>
    `<a href="${href}" class="foot-link" style="color:#c5c5c9;text-decoration:none;transition:color .25s ease;">${label}</a>`;
  return `${a(photo, "Image Post-Production")}${a(video, "Video Post-Production")}${a(studio, "Virtual Try-On")}`;
}

/** Homepage-style desktop footer (CTA, socials, services, studio clocks, wordmark). */
export function homeDesktopFooterHtml(opts?: { subpage?: boolean; contactId?: boolean }): string {
  const subpage = Boolean(opts?.subpage);
  const id = opts?.contactId === false ? "" : ' id="contact"';
  return `<footer${id} style="position:relative;background:#000;color:#fff;overflow:hidden;">
    <div style="position:relative;max-width:1720px;margin:0 auto;padding:clamp(72px,9vh,104px) clamp(28px,3vw,56px) 0;">
      <div style="display:flex;justify-content:space-between;align-items:flex-end;gap:clamp(40px,5vw,96px);flex-wrap:wrap;border-bottom:1px solid #1c1c20;padding-bottom:clamp(44px,5vh,64px);">
        <div style="min-width:0;">
          <p style="font:600 13px 'Space Grotesk';letter-spacing:.18em;text-transform:uppercase;color:#b98cd0;margin:0 0 18px;">Let's build something worth watching</p>
          <h2 style="font-family:'Archivo';font-weight:800;font-size:clamp(2.4rem,6.5vw,5.4rem);line-height:.98;letter-spacing:-.02em;margin:0;">Start a project<br><span style="color:transparent;-webkit-text-stroke:1.4px #7B2C8E;">with Skill</span></h2>
        </div>
      </div>
    </div>

    <div style="position:relative;max-width:1720px;margin:0 auto;padding:clamp(52px,6vh,76px) clamp(28px,3vw,56px) clamp(52px,6vh,72px);">
      <div class="sg-home-foot-grid" style="display:grid;grid-template-columns:1.35fr 0.85fr 1.5fr;gap:clamp(44px,4.6vw,104px);align-items:stretch;">
        <div style="display:flex;flex-direction:column;min-width:0;">
          <img src="/assets/logo-skill-graphics.png" alt="Skill Graphics" loading="lazy" style="height:34px;width:auto;align-self:flex-start;filter:brightness(0) invert(1);opacity:.92;margin-bottom:22px;">
          <p style="font:400 16px/1.72 'Space Grotesk';color:#93939a;margin:0 0 32px;max-width:34ch;">A global, AI-powered image &amp; video production company helping brands, retailers, agencies and studios scale visual content — refined by expert teams.</p>
          <div style="margin-top:auto;">${footerSocialsHtml("on-dark")}</div>
        </div>
        <div style="min-width:0;">
          <p style="font:600 13px 'Space Grotesk';letter-spacing:.16em;text-transform:uppercase;color:#90909a;margin:0 0 22px;">Services</p>
          <div style="display:grid;gap:15px;font:400 17px 'Space Grotesk';">
            ${serviceLinks(subpage)}
          </div>
        </div>
        <div>
          <p style="font:600 13px 'Space Grotesk';letter-spacing:.16em;text-transform:uppercase;color:#90909a;margin:0 0 22px;">Studios</p>
          <div style="display:grid;gap:14px;">
            <div class="foot-office" style="display:flex;justify-content:space-between;align-items:flex-start;gap:14px;border-bottom:1px solid #1c1c20;padding-bottom:14px;">
              <div style="min-width:0;"><div class="foot-office-city" style="font-family:'Archivo';font-weight:800;font-size:17px;transition:color .25s ease;">DHAKA</div><div style="font:400 12px 'Space Grotesk';color:#6f6f76;">Bangladesh · HQ</div><div style="font:400 11.5px/1.55 'Space Grotesk';color:#93939a;margin-top:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">H 112, R 06, Mohakhali DOHS, Dhaka, Bangladesh</div></div>
              <div id="clk-dhaka" style="font:600 16px 'Space Grotesk';color:#fff;font-variant-numeric:tabular-nums;letter-spacing:.02em;white-space:nowrap;flex:0 0 auto;">--:--</div>
            </div>
            <div class="foot-office" style="display:flex;justify-content:space-between;align-items:flex-start;gap:14px;border-bottom:1px solid #1c1c20;padding-bottom:14px;">
              <div style="min-width:0;"><div class="foot-office-city" style="font-family:'Archivo';font-weight:800;font-size:17px;transition:color .25s ease;">SHARJAH</div><div style="font:400 12px 'Space Grotesk';color:#6f6f76;">United Arab Emirates</div><div style="font:400 11.5px/1.55 'Space Grotesk';color:#93939a;margin-top:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Business Center, SPC Free Zone, Sharjah, UAE</div></div>
              <div id="clk-sharjah" style="font:600 16px 'Space Grotesk';color:#fff;font-variant-numeric:tabular-nums;letter-spacing:.02em;white-space:nowrap;flex:0 0 auto;">--:--</div>
            </div>
            <div class="foot-office" style="display:flex;justify-content:space-between;align-items:flex-start;gap:14px;border-bottom:1px solid #1c1c20;padding-bottom:14px;">
              <div style="min-width:0;"><div class="foot-office-city" style="font-family:'Archivo';font-weight:800;font-size:17px;transition:color .25s ease;">NEW YORK</div><div style="font:400 12px 'Space Grotesk';color:#6f6f76;">USA · Americas</div><div style="font:400 11.5px/1.55 'Space Grotesk';color:#93939a;margin-top:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">2248 Broadway, #1619, NY 10024, New York, USA</div></div>
              <div id="clk-usa" style="font:600 16px 'Space Grotesk';color:#fff;font-variant-numeric:tabular-nums;letter-spacing:.02em;white-space:nowrap;flex:0 0 auto;">--:--</div>
            </div>
            <div class="foot-office" style="display:flex;justify-content:space-between;align-items:flex-start;gap:14px;">
              <div style="min-width:0;"><div class="foot-office-city" style="font-family:'Archivo';font-weight:800;font-size:17px;transition:color .25s ease;">SINGAPORE</div><div style="font:400 12px 'Space Grotesk';color:#6f6f76;">Asia · APAC</div><div style="font:400 11.5px/1.55 'Space Grotesk';color:#93939a;margin-top:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">151 Chin Swee Rd, #02-24 Manhattan House, Singapore</div></div>
              <div id="clk-singapore" style="font:600 16px 'Space Grotesk';color:#fff;font-variant-numeric:tabular-nums;letter-spacing:.02em;white-space:nowrap;flex:0 0 auto;">--:--</div>
            </div>
          </div>
        </div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;margin-top:clamp(40px,4.5vh,58px);padding-top:24px;border-top:1px solid #1c1c20;">
        <span style="font:400 13px 'Space Grotesk';color:#8c8c94;">© 2026 Skill Graphics · A Skill Ventures company.</span>
      </div>
    </div>
    <div id="foot-wm" aria-hidden="true" style="position:relative;overflow:hidden;line-height:0;padding-bottom:10px;cursor:default;">
      <div style="font-family:'Archivo';font-weight:800;font-size:clamp(4rem,17.5vw,17rem);text-align:center;letter-spacing:-.02em;color:transparent;-webkit-text-stroke:1px #1e1e22;white-space:nowrap;user-select:none;">SKILL GRAPHICS</div>
      <div class="foot-wm-fill" style="position:absolute;inset:0;padding-bottom:10px;font-family:'Archivo';font-weight:800;font-size:clamp(4rem,17.5vw,17rem);text-align:center;letter-spacing:-.02em;color:transparent;-webkit-text-stroke:1px #7B2C8E;white-space:nowrap;user-select:none;pointer-events:none;">SKILL GRAPHICS</div>
    </div>
  </footer>`;
}

/** Homepage-style mobile closer: socials, studio addresses, logo. */
export function homeMobileFooterHtml(variant: "on-light" | "on-dark" = "on-light"): string {
  const onLight = variant === "on-light";
  const rule = onLight ? "#d4d2ce" : "#1e1e22";
  const city = onLight ? "#141414" : "#fff";
  const mute = onLight ? "#8a8a86" : "#6a6a70";
  const logo = onLight ? "/assets/logo-black.png" : "/assets/logo-white.png";
  return `<div style="margin-top:34px;">
      ${footerSocialsHtml(variant, { compact: true })}
    </div>
    <div style="margin-top:40px;padding-top:24px;border-top:1px solid ${rule};">
      <p style="font:600 11px 'Space Grotesk';letter-spacing:.18em;text-transform:uppercase;color:#9a9a95;margin:0 0 16px;">Our studios</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px 16px;">
        <div><div style="font-family:'Archivo';font-weight:800;font-size:14px;color:${city};">DHAKA</div><div style="font:400 11px/1.5 'Space Grotesk';color:${mute};margin-top:4px;">H&nbsp;112, R&nbsp;06,<br>Mohakhali DOHS,<br>Dhaka, Bangladesh</div></div>
        <div><div style="font-family:'Archivo';font-weight:800;font-size:14px;color:${city};">SHARJAH</div><div style="font:400 11px/1.5 'Space Grotesk';color:${mute};margin-top:4px;">Business Center, Sharjah<br>Publishing City Free Zone,<br>Sharjah, UAE</div></div>
        <div><div style="font-family:'Archivo';font-weight:800;font-size:14px;color:${city};">NEW YORK</div><div style="font:400 11px/1.5 'Space Grotesk';color:${mute};margin-top:4px;">2248 Broadway, #1619,<br>NY 10024,<br>New York, USA</div></div>
        <div><div style="font-family:'Archivo';font-weight:800;font-size:14px;color:${city};">SINGAPORE</div><div style="font:400 11px/1.5 'Space Grotesk';color:${mute};margin-top:4px;">151 Chin Swee Road,<br>#02-24 Manhattan House,<br>169876, Singapore</div></div>
      </div>
    </div>
    <div style="margin-top:32px;padding-top:22px;border-top:1px solid ${rule};display:flex;justify-content:space-between;align-items:center;gap:12px;">
      <img src="${logo}" alt="Skill Graphics" style="height:20px;width:auto;display:block;">
      <span style="font:400 11px 'Space Grotesk';color:${mute};">&copy; 2026 &middot; Member of Skill Ventures</span>
    </div>`;
}

export function mountHomeFooter(): () => void {
  const cleanups: Array<() => void> = [];
  const map: Record<string, string> = {
    "clk-dhaka": "Asia/Dhaka",
    "clk-sharjah": "Asia/Dubai",
    "clk-usa": "America/New_York",
    "clk-singapore": "Asia/Singapore",
  };
  function tick() {
    Object.keys(map).forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      try {
        el.textContent = new Intl.DateTimeFormat("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
          timeZone: map[id],
        }).format(new Date());
      } catch {
        /* ignore */
      }
    });
  }
  tick();
  const clock = window.setInterval(tick, 1000 * 20);
  cleanups.push(() => window.clearInterval(clock));

  const wm = document.getElementById("foot-wm");
  const fill = wm ? wm.querySelector<HTMLElement>(".foot-wm-fill") : null;
  if (wm && fill) {
    const onMove = (e: MouseEvent) => {
      const r = wm.getBoundingClientRect();
      fill.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
      fill.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
    };
    wm.addEventListener("mousemove", onMove);
    cleanups.push(() => wm.removeEventListener("mousemove", onMove));
  }

  return () => cleanups.forEach((fn) => fn());
}
