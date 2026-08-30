import { homeMobileFooterHtml } from "./homeFooter";
import { mobileNavHtml } from "./homeMobile";

export const MOBILE_VIDEO_HTML = `
<div class="mobile-layout" style="font-family:'Space Grotesk',sans-serif;background:#0C0C0E;color:#fff;position:relative;overflow-x:clip;">
  ${mobileNavHtml(true)}

  <!-- HERO -->
  <header data-nav-hero style="position:relative;height:100svh;min-height:560px;display:flex;align-items:center;justify-content:center;overflow:hidden;background:#141414;">
    <video id="vm-hero" autoplay muted loop playsinline preload="auto" data-no-lazy data-no-fullscreen poster="/assets/video-hero-1-poster.webp" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.62;background:#141414;"><source src="/assets/video-hero-1.mp4" type="video/mp4"></video>
    <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,10,12,.42),rgba(10,10,12,.26) 45%,rgba(10,10,12,.6));"></div>
    <div style="position:relative;z-index:2;text-align:center;padding:0 16px;">
      <h1 style="margin:0;font-family:'Archivo';font-weight:800;font-size:clamp(2.4rem,12vw,4rem);text-transform:uppercase;color:transparent;-webkit-text-stroke:1.3px rgba(255,255,255,.85);line-height:.92;letter-spacing:-.01em;">AI-Powered<br>Video&nbsp;Post<br>Production</h1>
    </div>
    <div style="position:absolute;bottom:24px;left:50%;transform:translateX(-50%);z-index:5;display:flex;flex-direction:column;align-items:center;gap:6px;animation:pm-bob 2.4s ease-in-out infinite;">
      <span style="font:500 10px 'Space Grotesk';letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.75);">Scroll</span>
      <span style="color:#fff;font-size:16px;line-height:1;">&#8964;</span>
    </div>
  </header>

  <!-- INTRO -->
  <section class="vm-reveal" style="padding:64px 22px 48px;text-align:center;">
    <h2 style="font-family:'Archivo';font-weight:800;font-size:30px;line-height:1.05;margin:0 0 18px;">Motion picture drives your revenue</h2>
    <p style="font:400 15px/1.65 'Space Grotesk';color:#bdbdbd;margin:0;">Built for modern e-commerce. From product launches to seasonal campaigns, we help brands create high-quality video content &mdash; faster and at scale, powered by AI and refined by experts.</p>
  </section>

  <!-- 01 E-COMMERCE -->
  <section class="vm-reveal" style="padding:20px 22px 30px;text-align:center;">
    <p style="font:600 11px 'Space Grotesk';letter-spacing:.18em;text-transform:uppercase;color:#8a8a92;margin:0 0 12px;">01 &mdash; E-Commerce</p>
    <h3 style="font-family:'Archivo';font-weight:800;font-size:26px;line-height:1.06;margin:0;">Built for modern e-commerce</h3>
  </section>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;width:100%;height:64svh;min-height:420px;padding:0 6px;">
    <div style="position:relative;overflow:hidden;background:#0f0f11;border-radius:8px;"><video muted loop playsinline preload="none" poster="/assets/ecom-vid-1-poster.webp" style="width:100%;height:100%;object-fit:cover;display:block;"><source src="/assets/ecom-vid-1.mp4" type="video/mp4"></video></div>
    <div style="position:relative;overflow:hidden;background:#0f0f11;border-radius:8px;"><video muted loop playsinline preload="none" poster="/assets/ecom-vid-2-poster.webp" style="width:100%;height:100%;object-fit:cover;display:block;"><source src="/assets/ecom-vid-2.mp4" type="video/mp4"></video></div>
  </div>

  <!-- 02 REELS -->
  <section class="vm-reveal" style="padding:60px 18px;">
    <p style="font:600 11px 'Space Grotesk';letter-spacing:.18em;text-transform:uppercase;color:#8a8a92;margin:0 0 12px;text-align:center;">02 &mdash; Reels</p>
    <h3 style="font-family:'Archivo';font-weight:800;font-size:26px;line-height:1.06;margin:0 0 26px;text-align:center;">Scroll-stopping reels</h3>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;align-items:start;">
      <div style="border-radius:12px;overflow:hidden;aspect-ratio:9/16;background:#0f0f11;border:1px solid #2a2a2d;"><video muted loop playsinline preload="none" poster="/assets/reel-1-poster.webp" style="width:100%;height:100%;object-fit:contain;object-position:center;background:#0f0f11;display:block;"><source src="/assets/reel-1.mp4" type="video/mp4"></video></div>
      <div style="border-radius:12px;overflow:hidden;aspect-ratio:9/16;background:#0f0f11;border:1px solid #2a2a2d;margin-top:20px;"><video muted loop playsinline preload="none" poster="/assets/reel-2-poster.webp" style="width:100%;height:100%;object-fit:contain;object-position:center;background:#0f0f11;display:block;"><source src="/assets/reel-2.mp4" type="video/mp4"></video></div>
      <div style="border-radius:12px;overflow:hidden;aspect-ratio:9/16;background:#0f0f11;border:1px solid #2a2a2d;margin-top:40px;"><video muted loop playsinline preload="none" poster="/assets/reel-3-poster.webp" style="width:100%;height:100%;object-fit:contain;object-position:center;background:#0f0f11;display:block;"><source src="/assets/reel-3.mp4" type="video/mp4"></video></div>
    </div>
  </section>

  <!-- AI VIDEO BAND -->
  <div style="background:linear-gradient(135deg,#7B2C8E,#4a1a5c);color:#fff;">
    <div style="padding:60px 22px;display:flex;flex-direction:column;align-items:center;text-align:center;gap:26px;">
      <div>
        <p style="font:600 11px 'Space Grotesk';letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.8);margin:0 0 14px;">AI Video Post-Production</p>
        <h3 style="font-family:'Archivo';font-weight:800;font-size:28px;line-height:1.05;margin:0;">From raw still-life to ready-to-post video</h3>
      </div>
      <div style="width:auto;height:min(60vh,560px);aspect-ratio:9/16;border-radius:14px;overflow:hidden;background:#2a1234;box-shadow:0 24px 60px rgba(0,0,0,.35);">
        <video src="/assets/ai-video-raw.mp4" muted loop playsinline preload="none" poster="/assets/ai-video-raw-poster.webp" style="width:100%;height:100%;object-fit:contain;object-position:center;background:#2a1234;display:block;"></video>
      </div>
    </div>
  </div>

  <!-- 03 REAL ESTATE -->
  <section class="vm-reveal" style="padding:56px 18px 30px;">
    <div data-sg-fs-host style="position:relative;z-index:2;border-radius:16px;overflow:hidden;aspect-ratio:16/9;background:#0f0f11;border:1px solid #2a2a2d;margin:0 -18px 18px;width:calc(100% + 36px);"><video muted loop playsinline preload="none" poster="/assets/real-estate-poster.webp" style="width:100%;height:100%;object-fit:cover;display:block;background:#0f0f11;"><source src="/assets/real-estate.mp4" type="video/mp4"></video></div>
    <p style="font:600 11px 'Space Grotesk';letter-spacing:.18em;text-transform:uppercase;color:#8a8a92;margin:0 0 10px;">03 &mdash; Real Estate</p>
    <h3 style="font-family:'Archivo';font-weight:800;font-size:26px;line-height:1.06;margin:0;">Real estate, cut to sell</h3>
  </section>

  <!-- 04 EVENTS -->
  <section class="vm-reveal" style="padding:30px 18px;">
    <div data-sg-fs-host style="position:relative;z-index:2;border-radius:16px;overflow:hidden;aspect-ratio:16/9;background:#0f0f11;border:1px solid #2a2a2d;margin:0 -18px 18px;width:calc(100% + 36px);"><video muted loop playsinline preload="none" poster="/assets/events-poster.webp" style="width:100%;height:100%;object-fit:cover;display:block;background:#0f0f11;"><source src="/assets/events.mp4" type="video/mp4"></video></div>
    <p style="font:600 11px 'Space Grotesk';letter-spacing:.18em;text-transform:uppercase;color:#8a8a92;margin:0 0 10px;">04 &mdash; Events</p>
    <h3 style="font-family:'Archivo';font-weight:800;font-size:26px;line-height:1.06;margin:0;">Event content that lives beyond the moment</h3>
  </section>

  <!-- 05 PRODUCT MOTION -->
  <section class="vm-reveal" style="padding:30px 18px 56px;">
    <div data-sg-fs-host style="position:relative;z-index:2;border-radius:16px;overflow:hidden;aspect-ratio:9/16;max-height:72vh;margin-inline:auto;background:#0f0f11;border:1px solid #2a2a2d;margin-bottom:18px;"><video muted loop playsinline preload="none" poster="/assets/product-motion-poster.webp" style="width:100%;height:100%;object-fit:contain;display:block;background:#0f0f11;"><source src="/assets/product-motion.mp4" type="video/mp4"></video></div>
    <p style="font:600 11px 'Space Grotesk';letter-spacing:.18em;text-transform:uppercase;color:#8a8a92;margin:0 0 10px;">05 &mdash; Product Motion</p>
    <h3 style="font-family:'Archivo';font-weight:800;font-size:26px;line-height:1.06;margin:0;">Bringing products to life through motion</h3>
  </section>

  <!-- SEE MORE ON VIMEO -->
  <section style="background:#0b0b0d;color:#fff;padding:72px 22px;text-align:center;">
    <p style="font:700 12px 'Space Grotesk';letter-spacing:.28em;text-transform:uppercase;color:rgba(255,255,255,.5);margin:0 0 24px;">The full reel</p>
    <a href="https://vimeo.com/skillvideos" target="_blank" rel="noopener noreferrer" class="mtap" style="display:inline-flex;flex-direction:column;align-items:center;gap:18px;color:#fff;">
      <span style="font-family:'Archivo';font-weight:900;font-size:40px;line-height:1;letter-spacing:-.02em;">See more<br>on Vimeo</span>
      <span aria-hidden="true" style="display:inline-flex;width:60px;height:60px;border-radius:50%;border:2px solid rgba(255,255,255,.4);align-items:center;justify-content:center;"><svg width="40%" height="40%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></span>
    </a>
    <p style="font:400 13px/1.6 'Space Grotesk';color:rgba(255,255,255,.6);margin:28px 0 0;">A growing portfolio of post-production work &mdash; updated regularly.</p>
  </section>

  <!-- CONTACT -->
  <section id="contact" style="background:#EDEDEB;color:#141414;padding:72px 22px 56px;">
    <p style="font:700 12px 'Space Grotesk';letter-spacing:.28em;text-transform:uppercase;color:#9a9a95;margin:0 0 22px;">Get in touch</p>
    <h3 style="font-family:'Archivo';font-weight:900;font-size:clamp(28px,8.8vw,40px);line-height:1.05;margin:0 0 30px;letter-spacing:-.02em;white-space:normal;">Let's Begin a<br>Conversation</h3>
    <a href="mailto:support@skill.ventures" class="mtap" style="display:inline-flex;align-items:center;gap:12px;font-family:'Archivo';font-weight:800;font-size:20px;color:#141414;border-bottom:2px solid #141414;padding-bottom:4px;">support@skill.ventures <span aria-hidden="true" style="display:inline-flex;align-items:center;justify-content:center;width:38px;height:38px;border-radius:50%;background:#7B2C8E;color:#fff;font-size:15px;">&#8594;</span></a>
    ${homeMobileFooterHtml("on-light")}
  </section>
</div>
`;

export const VIDEO_MOBILE_CSS = `
@keyframes vm-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
.vm-reveal{opacity:0;}
.vm-reveal.in{animation:mm-rise .7s cubic-bezier(.2,.7,.2,1) forwards;}
`;

export function mountVideoMobile(): () => void {
  const cleanups: Array<() => void> = [];

  const revealEls = Array.from(document.querySelectorAll<HTMLElement>(".vm-reveal"));
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
      { threshold: 0.2 }
    );
    revealEls.forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());
  }

  // ---- keep videos playing, pause offscreen ----
  const fixVideos = () => {
    document.querySelectorAll<HTMLVideoElement>("video").forEach((v) => {
      if (v.id === "sg-fs-player" || v.getAttribute("data-sg-fs") || v.closest("#sg-fs-overlay")) return;
      v.muted = true;
      v.defaultMuted = true;
      v.setAttribute("muted", "");
      v.playsInline = true;
      v.setAttribute("playsinline", "");
      if (v.closest(".desktop-layout")) return;
      if (v.offsetParent === null) return;
      if (v.dataset.inview === "0") return;
      if (v.paused) {
        const p = v.play();
        if (p && p.catch) p.catch(() => {});
      }
    });
  };
  let n = 0;
  const iv = window.setInterval(() => {
    fixVideos();
    if (++n > 20) window.clearInterval(iv);
  }, 350);
  fixVideos();
  cleanups.push(() => window.clearInterval(iv));

  const vio = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        const v = e.target as HTMLVideoElement;
        v.dataset.inview = e.isIntersecting ? "1" : "0";
        if (v.id === "sg-fs-player" || v.getAttribute("data-sg-fs") || v.closest("#sg-fs-overlay")) return;
        if (e.isIntersecting) {
          const p = v.play();
          if (p && p.catch) p.catch(() => {});
        } else {
          v.pause();
        }
      });
    },
    { threshold: 0.2 }
  );
  document.querySelectorAll("video").forEach((v) => vio.observe(v));
  cleanups.push(() => vio.disconnect());

  // ---- cycle hero showreel clips ----
  const hero = document.getElementById("vm-hero") as HTMLVideoElement | null;
  const playlist = [
    "/assets/video-hero-1.mp4",
    "/assets/video-hero-2.mp4",
    "/assets/video-hero-3.mp4",
    "/assets/video-hero-4.mp4",
  ];
  let hi = 0;
  if (hero) {
    hero.removeAttribute("loop");
    const onEnded = () => {
      hi = (hi + 1) % playlist.length;
      hero.src = playlist[hi];
      const p = hero.play();
      if (p && p.catch) p.catch(() => {});
    };
    hero.addEventListener("ended", onEnded);
    cleanups.push(() => hero.removeEventListener("ended", onEnded));
  }

  return () => cleanups.forEach((fn) => fn());
}
