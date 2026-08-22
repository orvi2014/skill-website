import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const MAX_ATTACHMENT_BYTES = 10 * 1024 * 1024; // 10MB
const ALLOWED_ATTACHMENT_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "text/csv",
]);

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = String(data.get("name") || "");
  const email = String(data.get("email") || "");
  const message = String(data.get("message") || "");
  const company = String(data.get("company") || "");
  const website = String(data.get("website") || ""); // honeypot
  const attachment = data.get("attachment");

  // Honeypot: real visitors never fill this hidden field.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name.trim() || !email.trim() || !message.trim()) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  let attachmentPart: { filename: string; content: Buffer; contentType: string } | undefined;
  if (attachment instanceof File && attachment.size > 0) {
    if (attachment.size > MAX_ATTACHMENT_BYTES) {
      return NextResponse.json({ error: "Attachment must be under 10MB." }, { status: 400 });
    }
    if (!ALLOWED_ATTACHMENT_TYPES.has(attachment.type)) {
      return NextResponse.json(
        { error: "Attachment must be an image, PDF, Word or Excel file." },
        { status: 400 }
      );
    }
    attachmentPart = {
      filename: attachment.name || "attachment",
      content: Buffer.from(await attachment.arrayBuffer()),
      contentType: attachment.type,
    };
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } =
    process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    console.error("Contact form: SMTP environment variables are not configured.");
    return NextResponse.json(
      { error: "Email sending isn't configured yet. Please email support@skill.ventures directly." },
      { status: 500 }
    );
  }

  const port = Number(SMTP_PORT);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const toAddress = CONTACT_TO_EMAIL || "support@skill.ventures";
  const fromAddress = CONTACT_FROM_EMAIL || SMTP_USER;

  try {
    await transporter.sendMail({
      from: `"Skill Graphics Website" <${fromAddress}>`,
      to: toAddress,
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` (${company})` : ""}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
      attachments: attachmentPart ? [attachmentPart] : undefined,
    });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again shortly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
