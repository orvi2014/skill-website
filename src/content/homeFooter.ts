import { footerSocialsHtml } from "./footerSocials";

export const HOME_FOOTER_CSS = `
.foot-link:hover{color:#fff!important;}
.foot-soc:hover{background:#7B2C8E!important;border-color:#7B2C8E!important;color:#fff!important;transform:translateY(-3px);}
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
    <div style="position:relative;max-width:1180px;margin:0 auto;padding:88px 40px 12px;">
      <div style="display:flex;justify-content:space-between;align-items:flex-end;gap:40px;flex-wrap:wrap;border-bottom:1px solid #1c1c20;padding-bottom:52px;">
        <div>
          <p style="font:600 13px 'Space Grotesk';letter-spacing:.18em;text-transform:uppercase;color:#b98cd0;margin:0 0 18px;">Let's build something worth watching.</p>
          <h2 style="font-family:'Archivo';font-weight:800;font-size:clamp(2.4rem,6.5vw,5.4rem);line-height:.98;letter-spacing:-.02em;margin:0;">Start a project<br><span style="color:transparent;-webkit-text-stroke:1.4px #7B2C8E;">with Skill</span></h2>
        </div>
      </div>
    </div>

    <div style="position:relative;max-width:1180px;margin:0 auto;padding:52px 40px 60px;">
      <div class="sg-home-foot-grid" style="display:grid;grid-template-columns:1.6fr 1fr 1.3fr;gap:44px;">
        <div>
          <img src="/assets/logo-skill-graphics.png" alt="Skill Graphics" loading="lazy" style="height:28px;filter:brightness(0) invert(1);opacity:.92;margin-bottom:18px;">
          <p style="font:400 14px/1.65 'Space Grotesk';color:#8f8f96;margin:0 0 22px;max-width:38ch;">A global, AI-powered image &amp; video production company helping brands, retailers, agencies and studios scale visual content — refined by expert teams.</p>
          ${footerSocialsHtml("on-dark")}
        </div>
        <div>
          <p style="font:600 12px 'Space Grotesk';letter-spacing:.14em;text-transform:uppercase;color:#8c8c94;margin:0 0 18px;">Services</p>
          <div style="display:grid;gap:13px;font:400 15px 'Space Grotesk';">
            ${serviceLinks(subpage)}
          </div>
        </div>
        <div>
          <p style="font:600 12px 'Space Grotesk';letter-spacing:.14em;text-transform:uppercase;color:#8c8c94;margin:0 0 18px;">Studios</p>
          <div style="display:grid;gap:14px;">
            <div class="foot-office" style="display:flex;justify-content:space-between;align-items:baseline;gap:14px;border-bottom:1px solid #1c1c20;padding-bottom:12px;">
              <div><div class="foot-office-city" style="font-family:'Archivo';font-weight:800;font-size:15px;transition:color .25s ease;">DHAKA</div><div style="font:400 11px 'Space Grotesk';color:#6a6a70;">Bangladesh · HQ</div></div>
              <div id="clk-dhaka" style="font:600 15px 'Space Grotesk';color:#fff;font-variant-numeric:tabular-nums;letter-spacing:.02em;">--:--</div>
            </div>
            <div class="foot-office" style="display:flex;justify-content:space-between;align-items:baseline;gap:14px;border-bottom:1px solid #1c1c20;padding-bottom:12px;">
              <div><div class="foot-office-city" style="font-family:'Archivo';font-weight:800;font-size:15px;transition:color .25s ease;">SHARJAH</div><div style="font:400 11px 'Space Grotesk';color:#6a6a70;">United Arab Emirates</div></div>
              <div id="clk-sharjah" style="font:600 15px 'Space Grotesk';color:#fff;font-variant-numeric:tabular-nums;letter-spacing:.02em;">--:--</div>
            </div>
            <div class="foot-office" style="display:flex;justify-content:space-between;align-items:baseline;gap:14px;border-bottom:1px solid #1c1c20;padding-bottom:12px;">
              <div><div class="foot-office-city" style="font-family:'Archivo';font-weight:800;font-size:15px;transition:color .25s ease;">NEW YORK</div><div style="font:400 11px 'Space Grotesk';color:#6a6a70;">USA · Americas</div></div>
              <div id="clk-usa" style="font:600 15px 'Space Grotesk';color:#fff;font-variant-numeric:tabular-nums;letter-spacing:.02em;">--:--</div>
            </div>
            <div class="foot-office" style="display:flex;justify-content:space-between;align-items:baseline;gap:14px;">
              <div><div class="foot-office-city" style="font-family:'Archivo';font-weight:800;font-size:15px;transition:color .25s ease;">SINGAPORE</div><div style="font:400 11px 'Space Grotesk';color:#6a6a70;">Asia · APAC</div></div>
              <div id="clk-singapore" style="font:600 15px 'Space Grotesk';color:#fff;font-variant-numeric:tabular-nums;letter-spacing:.02em;">--:--</div>
            </div>
          </div>
        </div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;margin-top:52px;padding-top:26px;border-top:1px solid #1c1c20;">
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
