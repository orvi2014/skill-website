// POST /api/chat-lead — a visitor left their name and email in the chat.
//
// Logs the lead with the transcript. Configure delivery with:
//
//   LEAD_EMAIL_TO=hello@skillgraphics.com        (where leads land)
//   RESEND_API_KEY=re_...                        (optional, to actually send)
//
// Without RESEND_API_KEY it still returns 200 and writes the lead to the
// server log, so nothing is lost while email delivery is being set up.

import { NextResponse } from "next/server";

type Msg = { role: string; content: string };

export async function POST(req: Request) {
  let body: { name?: string; email?: string; page?: string; thread?: Msg[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  const name = String(body.name || "").slice(0, 120).trim();
  const email = String(body.email || "").slice(0, 200).trim();
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: "bad_email" }, { status: 400 });
  }

  const transcript = (Array.isArray(body.thread) ? body.thread : [])
    .slice(-30)
    .map((m) => (m.role === "user" ? "Visitor: " : "Assistant: ") + String(m.content).slice(0, 2000))
    .join("\n\n");

  const summary = [
    "New chat lead from skillgraphics.com",
    "",
    "Name:  " + (name || "(not given)"),
    "Email: " + email,
    "Page:  " + (body.page || "/"),
    "Time:  " + new Date().toISOString(),
    "",
    "--- transcript ---",
    "",
    transcript || "(no messages)",
  ].join("\n");

  console.log("[chat-lead]\n" + summary);

  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_EMAIL_TO;
  if (resendKey && to) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: "Bearer " + resendKey,
        },
        body: JSON.stringify({
          from: process.env.LEAD_EMAIL_FROM || "chat@skillgraphics.com",
          to: [to],
          reply_to: email,
          subject: "Chat lead — " + (name || email),
          text: summary,
        }),
      });
    } catch (e) {
      console.error("[chat-lead] delivery failed", e);
    }
  }

  return NextResponse.json({ ok: true });
}
