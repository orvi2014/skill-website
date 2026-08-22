import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const MAX_CV_BYTES = 10 * 1024 * 1024; // 10MB
const ALLOWED_CV_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
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
  const departments = data.getAll("department").map(String).filter(Boolean);
  const department = departments.join(", ");
  const message = String(data.get("message") || "");
  const website = String(data.get("website") || ""); // honeypot
  const cv = data.get("cv");

  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name.trim() || !email.trim() || departments.length === 0) {
    return NextResponse.json(
      { error: "Name, email and at least one department are required." },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (!(cv instanceof File) || cv.size === 0) {
    return NextResponse.json({ error: "Please attach your CV." }, { status: 400 });
  }
  if (cv.size > MAX_CV_BYTES) {
    return NextResponse.json({ error: "CV must be under 10MB." }, { status: 400 });
  }
  if (!ALLOWED_CV_TYPES.has(cv.type)) {
    return NextResponse.json({ error: "CV must be a PDF or Word document." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, HR_TO_EMAIL, CONTACT_FROM_EMAIL } =
    process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    console.error("Careers form: SMTP environment variables are not configured.");
    return NextResponse.json(
      { error: "Email sending isn't configured yet. Please email HR@skill.ventures directly." },
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

  const toAddress = HR_TO_EMAIL || "HR@skill.ventures";
  const fromAddress = CONTACT_FROM_EMAIL || SMTP_USER;
  const cvBuffer = Buffer.from(await cv.arrayBuffer());

  try {
    await transporter.sendMail({
      from: `"Skill Graphics Careers" <${fromAddress}>`,
      to: toAddress,
      replyTo: email,
      subject: `New application: ${department} — ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Department: ${department}`,
        "",
        message || "(no message)",
      ].join("\n"),
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Department:</strong> ${escapeHtml(department)}</p>
        ${message ? `<p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>` : ""}
      `,
      attachments: [
        {
          filename: cv.name || "cv",
          content: cvBuffer,
          contentType: cv.type,
        },
      ],
    });
  } catch (err) {
    console.error("Careers form send failed:", err);
    return NextResponse.json(
      { error: "Something went wrong sending your application. Please try again shortly." },
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
