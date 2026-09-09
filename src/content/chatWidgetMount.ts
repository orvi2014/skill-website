// Behaviour for the "Ask Skill" widget.
//
// Talks to POST /api/chat, which proxies Anthropic server-side so the API key
// never reaches the browser. If that route is missing or errors (e.g. before
// ANTHROPIC_API_KEY is set on the server) it degrades to the scripted answers
// below, so the widget is never broken in production.

import { chatWidgetHtml } from "./chatWidget";

type Msg = { role: "user" | "assistant"; content: string };

const GREETING =
  "Hi \u2014 I'm Skill's assistant. I can help with services, turnaround, file specs, AI Studio and how pricing works. What are you working on?";

const CHIPS: Array<{ label: string; key: string }> = [
  { label: "How pricing works", key: "price" },
  { label: "Turnaround time", key: "turn" },
  { label: "What services do you offer?", key: "svc" },
  { label: "What is AI Studio?", key: "ai" },
  { label: "Can I get a free test?", key: "test" },
  { label: "Minimum order", key: "min" },
  { label: "File formats & transfer", key: "spec" },
  { label: "Production capacity", key: "cap" },
  { label: "Book a call", key: "book" },
  { label: "Careers", key: "job" },
];

const CANNED: Record<string, string> = {
  price:
    "Pricing is flexible, so I'll give you the shape rather than a number. Images can be priced per image, per SKU, on a monthly retainer or on custom volume-based pricing; video can be per finished minute, per project, per editing hour or as a recurring agreement. The standard minimum is 100 images a month. Tell me your volume, category and deadline and the Business Development team will put a real quote together \u2014 and we can run a free test batch first so you can judge the quality.",
  turn:
    "Images run around 24 to 48 hours and video around 48 to 72 hours, counted from when the brief is approved and all the material has arrived. Both flex with volume and complexity, and express delivery is often possible \u2014 the team confirms that against current capacity. We work a six-day week, and weekend coverage can be arranged.",
  ai:
    "AI Studio takes product imagery you already have \u2014 flat-lays, ghost mannequin or straight product shots \u2014 and turns it into AI-generated on-model imagery. It also covers AI-generated and AI-assisted video. Everything passes through human quality control before delivery, so AI does the production work and experienced retouchers review the result. Send raw images, a brief and any references and the team can assess it.",
  spec:
    "On the image side we take RAW and camera originals, TIFF, PSD, JPEG and PNG; for video, camera originals, ProRes, H.264 and other common professional formats. That isn't an exhaustive list \u2014 if you work in something else, tell me and we'll check. Transfers can run over our FTP, yours, your DAM, or cloud storage, whichever you already use. Delivered files stay backed up for three months.",
  svc:
    "On images we cover ghost mannequin, still life and flat lay retouching, on-model and fashion retouching, product retouching, e-commerce editing, colour correction, background removal, shadow creation, clipping paths, masking, high-end retouching, PDP and PLP production, and campaign and editorial retouching. On video we handle full post-production and editing, and AI Studio produces AI on-model imagery and AI-assisted video. Which of those is closest to what you need?",
  test:
    "Yes \u2014 we can run a free test before any commitment so you can judge the quality on your own product. Send a few sample files, your instructions and any reference images, and the team will turn them around for you to review.",
  min:
    "The standard minimum is 100 images per month. If your requirement sits below that or looks unusual, it's still worth talking to the Business Development team \u2014 they can look at the specifics rather than turning it away on volume alone.",
  cap:
    "The studio runs on over ten years of experience, with 350 image retouchers and 50 video editors across Dhaka, Sharjah, New York and Singapore, and capacity of roughly 10,000 images a day. That's what makes high-volume and long-tail catalogue work practical.",
  book:
    "Happy to set that up. Discovery calls are handled by the Business Development team and they work across time zones \u2014 tell me your preferred date, time and time zone and I'll pass it on. If you'd rather not book a slot, emailing support@skill.ventures works just as well.",
  clients:
    "We work with businesses and brands across different markets, but we respect our clients' confidentiality and don't disclose client names without permission. We'd be happy to demonstrate our capabilities through a free test project, or discuss relevant examples with the team.",
  outside:
    "Our focus is post-production rather than 3D, CGI, packaging design or physical photography shoots. That said, we're open to customised requirements \u2014 tell me what you have in mind and the Business Development team can look at whether we can build something around it.",
  project:
    "To protect client and project confidentiality I can't access or share detailed project information here. Send me your project reference or company details and I'll route this to the right account team.",
  issue:
    "I'm sorry that's been your experience \u2014 let me get it to the right people. Could you share your company name, the project or order reference, a short description of the issue, and any files or examples that show it? I'll escalate it to the team handling your account.",
  contact:
    "WhatsApp on +880 1723 099983 is the fastest route, and support@skill.ventures reaches the team for anything more detailed. Career and internship enquiries go to hr@skill.ventures.",
  job:
    "All hiring and internship enquiries go to hr@skill.ventures \u2014 send a CV or portfolio and the HR team will take a look, whether or not a matching role is advertised. Internships are paid. Skill Academy is a separate paid training programme, and HR can tell you about current intakes, eligibility and fees. Roles may be on-site or remote depending on the position.",
};

const FALLBACK =
  "That one's better answered by a person \u2014 I don't want to guess at something commercial. WhatsApp on +880 1723 099983 is the fastest route, or email support@skill.ventures and a producer replies within the working day.";

function classify(text: string): keyof typeof CANNED | null {
  const t = text.toLowerCase();
  if (/price|pricing|cost|quote|rate|budget|how much/.test(t)) return "price";
  if (/turnaround|how (long|fast)|deadline|delivery time|speed|rush/.test(t)) return "turn";
  if (/ai studio|on.?model|virtual|try.?on|generat/.test(t)) return "ai";
  if (/spec|format|file|raw|tiff|psd|resolution|deliver/.test(t)) return "spec";
  if (/job|career|hire|hiring|intern|apply|position|vacanc/.test(t)) return "job";
  if (/your clients|who.*(clients|brands)|client list|work with (brand|any brand)|reference client|case stud/.test(t))
    return "clients";
  if (/\b3d\b|cgi|packaging|photograph|photo shoot|photoshoot|shoot for us/.test(t)) return "outside";
  if (/complain|unhappy|not happy|poor quality|refund|compensat|late deliver|missed deadline|wrong/.test(t))
    return "issue";
  if (/my (project|order)|existing project|ongoing project|current project|order status|project status/.test(t))
    return "project";
  if (/whatsapp|contact|email|phone|reach you|get in touch|support/.test(t)) return "contact";
  if (/book|call|meeting|calendly|schedule|demo/.test(t)) return "book";
  if (/minimum|min order|smallest|how few/.test(t)) return "min";
  if (/test|sample|trial|try you/.test(t)) return "test";
  if (/capacity|how many (people|retouchers|editors)|team size|volume|experience|years/.test(t)) return "cap";
  if (/service|offer|do you do|can you do|retouch|ghost mannequin|background|clipping|mask|video edit/.test(t))
    return "svc";
  return null;
}

const STORE = "sgc-thread-v1";

export function mountChatWidget(): () => void {
  // Injected straight into <body> rather than emitted by headerHtml(): this
  // site keeps parallel desktop and mobile trees, and headerHtml() lives
  // inside .desktop-layout, which is display:none below 640px. Mounting to
  // the body keeps one code path and one widget on every breakpoint.
  if (!document.getElementById("sgc-bubble")) {
    const host = document.createElement("div");
    host.id = "sgc-host";
    host.innerHTML = chatWidgetHtml();
    document.body.appendChild(host);
  }

  const bubble = document.getElementById("sgc-bubble");
  const panel = document.getElementById("sgc-panel");
  const scroll = document.getElementById("sgc-scroll");
  const input = document.getElementById("sgc-input") as HTMLTextAreaElement | null;
  const send = document.getElementById("sgc-send");
  const close = document.getElementById("sgc-close");
  if (!bubble || !panel || !scroll || !input || !send || !close) return () => {};

  let thread: Msg[] = [];
  let busy = false;
  let leadShown = false;
  let leadDone = false;

  try {
    const raw = sessionStorage.getItem(STORE);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed.thread)) thread = parsed.thread;
      leadDone = Boolean(parsed.leadDone);
      leadShown = Boolean(parsed.leadShown);
    }
  } catch {
    /* private mode / quota — start fresh */
  }

  const persist = () => {
    try {
      sessionStorage.setItem(STORE, JSON.stringify({ thread, leadDone, leadShown }));
    } catch {
      /* ignore */
    }
  };

  const toBottom = () => {
    // render() wipes and re-appends every message, so a single rAF can fire
     // before the new children have contributed their height. Assign now, on
    // the next two frames, and once more on a short timer.
    const pin = () => {
      scroll.scrollTop = scroll.scrollHeight;
    };
    pin();
    requestAnimationFrame(() => {
      pin();
      requestAnimationFrame(pin);
    });
    window.setTimeout(pin, 60);
  };

  const bubbleEl = (role: Msg["role"], text: string) => {
    const div = document.createElement("div");
    div.className = "sgc-msg " + (role === "user" ? "sgc-user" : "sgc-bot");
    div.textContent = text;
    return div;
  };

  const renderChips = () => {
    document.getElementById("sgc-chips")?.remove();
    const asked = new Set(
      thread.filter((m) => m.role === "user").map((m) => m.content.trim().toLowerCase())
    );
    const left = CHIPS.filter((c) => !asked.has(c.label.toLowerCase()));
    if (!left.length) return;

    const wrap = document.createElement("div");
    wrap.id = "sgc-chips";
    wrap.style.cssText = "display:flex;flex-direction:column;gap:8px;padding:2px 0 4px;";

    const label = document.createElement("p");
    label.style.cssText =
      "margin:0;font:600 10.5px 'Space Grotesk';letter-spacing:.15em;text-transform:uppercase;color:#7b7b83;";
    label.textContent = asked.size ? "Or ask about" : "Common questions";
    wrap.appendChild(label);

    const row = document.createElement("div");
    row.style.cssText = "display:flex;flex-wrap:wrap;gap:7px;";
    left.forEach((c) => {
      const b = document.createElement("button");
      b.className = "sgc-chip";
      b.type = "button";
      b.textContent = c.label;
      b.addEventListener("click", () => ask(c.label, c.key));
      row.appendChild(b);
    });
    wrap.appendChild(row);
    scroll.appendChild(wrap);
  };

  const renderLead = () => {
    if (leadDone || document.getElementById("sgc-lead")) return;
    const card = document.createElement("div");
    card.id = "sgc-lead";
    card.className = "sgc-msg";
    card.style.cssText =
      "align-self:stretch;background:#15151b;border:1px solid #2b2b32;border-radius:16px;padding:16px;";
    card.innerHTML = `
      <p style="font:600 11px 'Space Grotesk';letter-spacing:.14em;text-transform:uppercase;color:#b98cd0;margin:0 0 8px;">So we can follow up</p>
      <p style="font:400 13px/1.6 'Space Grotesk';color:#9a9aa2;margin:0 0 13px;">Leave your name and email and a producer picks this up even if you close the tab.</p>
      <div style="display:grid;gap:8px;">
        <input id="sgc-lead-name" class="sgc-field" placeholder="Name" autocomplete="name">
        <input id="sgc-lead-mail" class="sgc-field" type="email" placeholder="Work email" autocomplete="email">
      </div>
      <div style="display:flex;gap:8px;margin-top:11px;">
        <button id="sgc-lead-send" type="button" style="font:600 13px 'Space Grotesk';background:#fff;color:#141414;border:0;border-radius:100px;padding:10px 20px;cursor:pointer;">Send</button>
        <button id="sgc-lead-skip" type="button" style="font:500 13px 'Space Grotesk';background:transparent;color:#8f8f96;border:0;padding:10px 6px;cursor:pointer;">Not now</button>
      </div>`;
    scroll.appendChild(card);

    card.querySelector("#sgc-lead-skip")?.addEventListener("click", () => {
      leadDone = true;
      persist();
      card.remove();
    });
    card.querySelector("#sgc-lead-send")?.addEventListener("click", () => {
      const name = (card.querySelector("#sgc-lead-name") as HTMLInputElement)?.value.trim();
      const email = (card.querySelector("#sgc-lead-mail") as HTMLInputElement)?.value.trim();
      if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        const f = card.querySelector("#sgc-lead-mail") as HTMLInputElement;
        f.style.borderColor = "#d9534a";
        f.focus();
        return;
      }
      leadDone = true;
      persist();
      card.remove();
      void fetch("/api/chat-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, page: location.pathname, thread }),
      }).catch(() => {});
      thread.push({
        role: "assistant",
        content:
          "Thanks " +
          (name || "\u2014 noted") +
          ". A producer will follow up with this conversation attached, so you won't have to repeat any of it.",
      });
      persist();
      render();
    });
  };

  const render = () => {
    scroll.innerHTML = "";
    scroll.appendChild(bubbleEl("assistant", GREETING));
    thread.forEach((m) => scroll.appendChild(bubbleEl(m.role, m.content)));
    if (busy) {
      const t = document.createElement("div");
      t.style.cssText =
        "align-self:flex-start;background:#191920;border:1px solid #23232b;border-radius:16px;padding:13px 16px;display:flex;gap:5px;align-items:center;";
      t.innerHTML = '<span class="sgc-dot"></span><span class="sgc-dot"></span><span class="sgc-dot"></span>';
      scroll.appendChild(t);
    } else {
      if (leadShown) renderLead();
      renderChips();
    }
    const pad = document.createElement("div");
    pad.style.cssText = "height:4px;flex:none;";
    scroll.appendChild(pad);
    toBottom();
  };

  async function ask(text: string, instantKey?: string) {
    const q = text.trim();
    if (!q || busy) return;
    thread.push({ role: "user", content: q });
    input.value = "";
    input.style.height = "auto";
    busy = true;
    render();

    // Chip taps answer from the approved copy immediately — no network wait.
    if (instantKey && CANNED[instantKey]) {
      thread.push({ role: "assistant", content: CANNED[instantKey] });
      busy = false;
      if (!leadDone) leadShown = true;
      persist();
      render();
      return;
    }

    let answer = "";
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: thread, page: location.pathname }),
      });
      if (res.ok) {
        const data = await res.json();
        if (typeof data.reply === "string" && data.reply.trim()) answer = data.reply.trim();
      }
    } catch {
      /* offline or route absent — fall through to canned */
    }
    if (!answer) {
      const key = classify(q);
      answer = key ? CANNED[key] : FALLBACK;
    }

    thread.push({ role: "assistant", content: answer });
    busy = false;
    if (!leadDone) leadShown = true;
    persist();
    render();
  }

  const setOpen = (open: boolean) => {
    panel.setAttribute("data-open", open ? "1" : "0");
    bubble.setAttribute("data-hidden", open ? "1" : "0");
    bubble.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) {
      render();
      window.setTimeout(() => input.focus(), 320);
    } else {
      (bubble as HTMLElement).focus();
    }
  };

  const onBubble = () => setOpen(true);
  const onClose = () => setOpen(false);
  const onSend = () => void ask(input.value);
  const onKey = (e: KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void ask(input.value);
    }
  };
  const onGrow = () => {
    input.style.height = "auto";
    input.style.height = Math.min(input.scrollHeight, 88) + "px";
  };
  const onEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape" && panel.getAttribute("data-open") === "1") setOpen(false);
  };

  bubble.addEventListener("click", onBubble);
  close.addEventListener("click", onClose);
  send.addEventListener("click", onSend);
  input.addEventListener("keydown", onKey);
  input.addEventListener("input", onGrow);
  document.addEventListener("keydown", onEsc);

  // Let any element on the page open the chat: <a href="#chat"> or
  // [data-open-chat]. Gives copy blocks a "talk to us" affordance for free.
  const onOpenLink = (e: MouseEvent) => {
    const t = e.target as HTMLElement | null;
    if (!t?.closest('a[href="#chat"], a[href="/#chat"], [data-open-chat]')) return;
    e.preventDefault();
    setOpen(true);
  };
  document.addEventListener("click", onOpenLink);

  render();

  return () => {
    bubble.removeEventListener("click", onBubble);
    close.removeEventListener("click", onClose);
    send.removeEventListener("click", onSend);
    input.removeEventListener("keydown", onKey);
    input.removeEventListener("input", onGrow);
    document.removeEventListener("keydown", onEsc);
    document.removeEventListener("click", onOpenLink);
    document.getElementById("sgc-host")?.remove();
  };
}
