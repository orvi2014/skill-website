const ITEMS = [
  {
    q: "Working with Skill Graphics changed how we plan a season. Assets that used to take three weeks now land in four days, and the retouching is consistent across every market we ship to.",
    n: "E-commerce Director",
    r: "Nordic fashion retailer",
    p: "/assets/testimonials/01.png",
  },
  {
    q: "We handed over raw studio footage and got back a full PDP set, campaign crops and social cutdowns. The team reads a brand book properly — nothing came back off-tone.",
    n: "Brand Production Lead",
    r: "Global sportswear group",
    p: "/assets/testimonials/02.png",
  },
  {
    q: "The on-model work is what convinced us. Same garment, twelve markets, and you cannot tell which frames were shot and which were generated.",
    n: "Head of Digital",
    r: "European denim label",
    p: "/assets/testimonials/03.png",
  },
  {
    q: "Volume was our problem: 40,000 SKUs a year with a three-person studio. They absorbed it without us adding headcount, and the QC is tighter than what we had in-house.",
    n: "Studio Operations Manager",
    r: "US marketplace seller",
    p: "/assets/testimonials/04.png",
  },
  {
    q: "Fast, quiet and precise. We brief on Monday, review on Wednesday, publish on Friday. Two years in and that rhythm has not slipped once.",
    n: "Creative Director",
    r: "Accessories house, Milan",
    p: "/assets/testimonials/05.png",
  },
  {
    q: "They rebuilt our whole colour pipeline so every swatch matches the physical sample. Returns from colour complaints dropped by a third in one season.",
    n: "Head of Merchandising",
    r: "Kidswear brand, Dhaka",
    p: "/assets/testimonials/06.png",
  },
];

const face = (t: (typeof ITEMS)[number], back: boolean, n: number) => `
          <div class="tst-face" style="grid-area:1/1;position:relative;display:flex;flex-direction:column;justify-content:space-between;gap:26px;padding:clamp(30px,2.5vw,46px);border:1px solid rgba(20,20,20,.09);border-radius:4px;background:linear-gradient(180deg,#fff 0%,#faf9f7 100%);box-shadow:0 1px 0 rgba(255,255,255,.9) inset,0 26px 60px -28px rgba(28,20,32,.28);box-sizing:border-box;backface-visibility:hidden;-webkit-backface-visibility:hidden;overflow:hidden;transform:rotateY(${back ? "180deg" : "0deg"});">
            <span aria-hidden="true" style="position:absolute;left:0;right:0;top:0;height:2px;background:linear-gradient(90deg,#7B2C8E,rgba(123,44,142,0));"></span>
            <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:20px;">
              <div aria-hidden="true" style="font-family:'Archivo';font-weight:800;font-size:64px;line-height:.62;color:#7B2C8E;opacity:.16;">&ldquo;</div>
              <span aria-hidden="true" style="font:600 11px 'Space Grotesk';letter-spacing:.2em;color:#a5a5a0;">${String(n).padStart(2, "0")}</span>
            </div>
            <p style="font-family:'Archivo';font-weight:500;font-size:clamp(17px,1.35vw,22px);line-height:1.42;letter-spacing:-.008em;color:#1c1c1a;margin:0;text-wrap:pretty;">${t.q}</p>
            <div style="display:flex;align-items:center;gap:14px;padding-top:22px;border-top:1px solid rgba(20,20,20,.08);">
              <span aria-hidden="true" style="flex:none;position:relative;width:52px;height:52px;border-radius:50%;overflow:hidden;display:flex;align-items:center;justify-content:center;font:700 13px 'Space Grotesk';letter-spacing:.06em;color:#fff;background:linear-gradient(145deg,#7B2C8E,#4d1a5c);box-shadow:0 6px 16px -6px rgba(123,44,142,.55);">${t.i}<img src="${t.p}" alt="" loading="lazy" onerror="this.remove()" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;"></span>
              <span style="display:flex;flex-direction:column;gap:4px;">
                <span style="font:600 14.5px 'Space Grotesk';letter-spacing:-.01em;color:#141414;">${t.n}</span>
                <span style="font:400 12px 'Space Grotesk';letter-spacing:.06em;text-transform:uppercase;color:#8a8a85;">${t.r}</span>
              </span>
            </div>
          </div>`;

const slot = (i: number) => `
      <div class="tst-slot" data-i="${i}" style="perspective:1800px;">
        <div class="tst-flip" style="display:grid;grid-template-areas:'f';width:100%;height:100%;min-height:clamp(400px,56vh,560px);transform-style:preserve-3d;will-change:transform;transition:transform 1.05s cubic-bezier(.22,1,.36,1);">
${face(ITEMS[i], false, i + 1)}
${face(ITEMS[i + 3], true, i + 4)}
        </div>
      </div>`;

export const TESTIMONIALS_HTML = `
  <section id="tst" data-screen-label="Testimonials" data-nav-tone="light" style="position:relative;background:#E8E6E1;color:#141414;">
    <div id="tst-pin" style="position:sticky;top:0;height:100vh;overflow:hidden;display:flex;flex-direction:column;justify-content:center;gap:clamp(34px,4vh,60px);padding:clamp(70px,9vh,110px) clamp(28px,3vw,56px);box-sizing:border-box;">
      <span aria-hidden="true" style="position:absolute;inset:0;pointer-events:none;background:radial-gradient(90% 70% at 50% 8%,rgba(123,44,142,.09),rgba(123,44,142,0) 62%);"></span>
      <div style="position:relative;max-width:1720px;width:100%;margin:0 auto;display:flex;align-items:flex-end;justify-content:space-between;gap:40px;flex-wrap:wrap;padding-bottom:clamp(18px,2vh,28px);border-bottom:1px solid rgba(20,20,20,.11);">
        <div>
          <p style="display:flex;align-items:center;gap:11px;font:600 12px 'Space Grotesk';letter-spacing:.22em;text-transform:uppercase;color:#7B2C8E;margin:0 0 16px;"><span aria-hidden="true" style="display:block;width:26px;height:1px;background:#7B2C8E;"></span>Testimonials</p>
          <h2 style="font-family:'Archivo';font-weight:800;font-size:clamp(2.4rem,4.4vw,4.2rem);line-height:1;letter-spacing:-.025em;margin:0;">What our clients say</h2>
        </div>
        <p style="font:400 16px/1.62 'Space Grotesk';color:#5b5b58;margin:0 0 6px;max-width:32ch;text-wrap:pretty;">Studios, brands and marketplaces we produce for, in their words.</p>
      </div>
      <div id="tst-grid" style="position:relative;max-width:1720px;width:100%;margin:0 auto;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(22px,2vw,36px);">
${[0, 1, 2].map(slot).join("")}
      </div>
    </div>
  </section>`;
