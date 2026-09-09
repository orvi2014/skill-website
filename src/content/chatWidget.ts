// "Ask Skill" — AI chat with human handoff. Rendered by the shared site
// header, so it appears on every page without per-page wiring.

export const CHAT_CSS = `
:root{--sgc-inset:26px;--sgc-bottom:84px;}
#sgc-bubble{position:fixed;right:var(--sgc-inset);bottom:var(--sgc-bottom);z-index:75;height:56px;padding:0 24px 0 18px;border-radius:100px;border:1px solid #2b2b32;background:#101012;color:#fff;cursor:pointer;display:flex;align-items:center;gap:11px;box-shadow:0 16px 40px rgba(0,0,0,.5);transition:transform .3s cubic-bezier(.16,1,.3,1),opacity .3s ease;}
#sgc-bubble:hover{transform:translateY(-3px) scale(1.03);}
#sgc-bubble[data-hidden="1"]{opacity:0;pointer-events:none;transform:translateY(10px) scale(.95);}
#sgc-panel{position:fixed;right:var(--sgc-inset);bottom:var(--sgc-bottom);z-index:75;width:min(384px,calc(100vw - 40px));height:min(600px,calc(100vh - var(--sgc-bottom) - 26px));background:#101012;border:1px solid #26262d;border-radius:20px;box-shadow:0 30px 70px rgba(0,0,0,.6);display:flex;flex-direction:column;overflow:hidden;opacity:0;pointer-events:none;transform:translateY(14px) scale(.98);transition:opacity .32s cubic-bezier(.16,1,.3,1),transform .32s cubic-bezier(.16,1,.3,1);}
#sgc-panel[data-open="1"]{opacity:1;pointer-events:auto;transform:none;}
#sgc-scroll{flex:1;overflow-y:auto;padding:20px 18px 8px;display:flex;flex-direction:column;gap:14px;}
#sgc-scroll::-webkit-scrollbar{width:5px;}
#sgc-scroll::-webkit-scrollbar-thumb{background:#2a2a30;border-radius:3px;}
#sgc-scroll::-webkit-scrollbar-track{background:transparent;}
.sgc-msg{animation:sgc-msg .3s ease both;text-wrap:pretty;}
.sgc-user{align-self:flex-end;max-width:84%;background:#b98cd0;color:#141414;font:500 14px/1.55 'Space Grotesk';padding:11px 15px;border-radius:16px 16px 4px 16px;}
.sgc-bot{align-self:flex-start;max-width:88%;background:#191920;color:#e6e6ea;font:400 14px/1.65 'Space Grotesk';padding:12px 15px;border-radius:16px 16px 16px 4px;border:1px solid #23232b;}
.sgc-bot a{color:#b98cd0;}
.sgc-bot a:hover{color:#d3b3e2;}
.sgc-chip{font:500 12.5px 'Space Grotesk';background:transparent;border:1px solid #2b2b32;color:#c5c5c9;border-radius:100px;padding:8px 14px;cursor:pointer;transition:all .25s ease;}
.sgc-chip:hover{border-color:#b98cd0;color:#fff;background:rgba(185,140,208,.1);}
.sgc-esc{flex:1;display:flex;align-items:center;justify-content:center;gap:6px;font:500 11.5px 'Space Grotesk';color:#8f8f96;text-decoration:none;border:1px solid #26262d;border-radius:100px;padding:8px 6px;transition:all .25s ease;}
.sgc-esc:hover{color:#fff;border-color:#3a3a42;}
#sgc-send{width:34px;height:34px;border-radius:50%;border:0;background:#b98cd0;color:#141414;cursor:pointer;display:flex;align-items:center;justify-content:center;flex:none;transition:transform .2s ease;}
#sgc-send:hover{transform:scale(1.06);}
#sgc-close{width:30px;height:30px;border-radius:50%;border:1px solid #2b2b32;background:transparent;color:#8f8f96;cursor:pointer;display:flex;align-items:center;justify-content:center;flex:none;transition:color .25s ease,border-color .25s ease;}
#sgc-close:hover{color:#fff;border-color:#3a3a42;}
#sgc-input{flex:1;min-width:0;background:transparent;border:0;outline:none;resize:none;font:400 14px/1.5 'Space Grotesk';color:#fff;max-height:88px;padding:5px 0;}
#sgc-input::placeholder{color:#8f8f96;}
.sgc-field{width:100%;box-sizing:border-box;background:#0d0d10;border:1px solid #2b2b32;border-radius:10px;padding:11px 13px;font:400 14px 'Space Grotesk';color:#fff;outline:none;}
.sgc-field:focus{border-color:#b98cd0;}
.sgc-dot{width:6px;height:6px;border-radius:50%;background:#b98cd0;display:block;animation:sgc-dot 1.1s infinite;}
.sgc-dot:nth-child(2){animation-delay:.15s;}
.sgc-dot:nth-child(3){animation-delay:.3s;}
@keyframes sgc-msg{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
@keyframes sgc-dot{0%,60%,100%{opacity:.25;transform:translateY(0)}30%{opacity:1;transform:translateY(-3px)}}
@media (max-width:640px){
  :root{--sgc-inset:16px;--sgc-bottom:76px;}
  #sgc-bubble{height:52px;padding:0;width:52px;justify-content:center;}
  #sgc-bubble .sgc-bubble-label{display:none;}
  #sgc-panel{right:10px;left:10px;width:auto;height:min(72vh,560px);border-radius:18px;}
}
`;

const WA_PATH =
  "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6z";

export function chatWidgetHtml(): string {
  return `
  <button id="sgc-bubble" aria-label="Open chat" aria-expanded="false" aria-controls="sgc-panel">
    <span style="width:32px;height:32px;border-radius:50%;background:linear-gradient(140deg,#b98cd0,#7d5c96);display:flex;align-items:center;justify-content:center;flex:none;">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#141414" stroke-width="2.2" stroke-linecap="round"><path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.4 8.7 8.7 0 0 1-3.9-.9L3 21l2-5.6a8.4 8.4 0 0 1-.9-3.9A8.4 8.4 0 0 1 12.5 3 8.4 8.4 0 0 1 21 11.5z"/></svg>
    </span>
    <span class="sgc-bubble-label" style="font:600 14px 'Space Grotesk';letter-spacing:.01em;">Ask Skill</span>
  </button>

  <div id="sgc-panel" data-open="0" role="dialog" aria-modal="false" aria-label="Ask Skill">
    <div style="display:flex;align-items:center;gap:12px;padding:16px 16px 15px 18px;border-bottom:1px solid #1e1e24;flex:none;">
      <div style="width:34px;height:34px;border-radius:50%;background:linear-gradient(140deg,#b98cd0,#7d5c96);display:flex;align-items:center;justify-content:center;flex:none;font-family:'Archivo';font-weight:800;font-size:14px;color:#141414;">S</div>
      <div style="flex:1;min-width:0;">
        <div style="font-family:'Archivo';font-weight:800;font-size:14px;letter-spacing:-.01em;color:#fff;">Ask Skill</div>
        <div style="display:flex;align-items:center;gap:6px;margin-top:2px;">
          <span style="width:6px;height:6px;border-radius:50%;background:#4ec97e;flex:none;"></span>
          <span style="font:400 11px 'Space Grotesk';color:#8f8f96;">Replies in seconds</span>
        </div>
      </div>
      <button id="sgc-close" aria-label="Close chat">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M4 4l16 16M20 4L4 20"/></svg>
      </button>
    </div>

    <div id="sgc-scroll" aria-live="polite"></div>

    <div style="flex:none;padding:12px 14px 10px;border-top:1px solid #1e1e24;">
      <div style="display:flex;align-items:flex-end;gap:9px;background:#0d0d10;border:1px solid #2b2b32;border-radius:14px;padding:8px 8px 8px 14px;">
        <textarea id="sgc-input" rows="1" placeholder="Ask about turnaround, specs, pricing&hellip;" aria-label="Message"></textarea>
        <button id="sgc-send" aria-label="Send message">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg>
        </button>
      </div>
      <div style="display:flex;align-items:center;gap:7px;margin-top:9px;">
        <a class="sgc-esc" href="https://wa.me/8801723099983" target="_blank" rel="noopener noreferrer">
          <svg width="12" height="12" viewBox="0 0 448 512" fill="currentColor"><path d="${WA_PATH}"/></svg>WhatsApp
        </a>
        <a class="sgc-esc" href="mailto:support@skill.ventures">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>Email
        </a>
        <a class="sgc-esc" href="#join">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>Book a call
        </a>
      </div>
    </div>
  </div>`;
}
