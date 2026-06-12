import { Resend } from "resend";

const DEFAULT_TO = "talent@apexcreatormanagement.com";
const DEFAULT_FROM = "Apex Creator Management <noreply@apexcreatormanagement.com>";

export type ContactEmailPayload = {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
};

export async function sendContactEmail(payload: ContactEmailPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const resend = new Resend(apiKey);
  const to = process.env.CONTACT_TO_EMAIL ?? DEFAULT_TO;
  const from = process.env.RESEND_FROM_EMAIL ?? DEFAULT_FROM;

  const inquiryLabel =
    payload.inquiryType === "creator"
      ? "Creator representation"
      : payload.inquiryType === "brand"
        ? "Brand partnership"
        : "General inquiry";

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: payload.email,
    subject: `[Apex] ${inquiryLabel} — ${payload.name}`,
    text: [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Inquiry type: ${inquiryLabel}`,
      "",
      payload.message,
    ].join("\n"),
    html: `
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Inquiry type:</strong> ${escapeHtml(inquiryLabel)}</p>
      <hr />
      <p>${escapeHtml(payload.message).replace(/\n/g, "<br />")}</p>
    `,
  });

  if (error) {
    throw new Error(error.message);
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
