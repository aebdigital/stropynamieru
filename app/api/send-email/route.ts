import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  form_type?: string;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const EMAIL_ENDPOINT = "https://api.smtp2go.com/v3/email/send";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Payload;
    const name = payload.name?.trim();
    const email = payload.email?.trim();
    const message = payload.message?.trim();
    const phone = payload.phone?.trim() || "Neuvedené";
    const formType = payload.form_type === "cenova_ponuka" ? "Cenová ponuka" : "Kontakt";

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Chýbajú povinné údaje formulára.",
        },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Zadajte prosím platnú e-mailovú adresu.",
        },
        { status: 400 },
      );
    }

    const apiKey = process.env.SMTP2GO_API_KEY;
    const sender = process.env.SMTP2GO_SENDER;
    const recipient = process.env.CONTACT_FORM_RECIPIENT;

    if (!apiKey || !sender || !recipient) {
      console.error("Missing SMTP2GO env vars.");
      return NextResponse.json(
        {
          success: false,
          message:
            "Odosielanie formulára ešte nie je dokončené. Skontrolujte konfiguráciu servera.",
        },
        { status: 500 },
      );
    }

    const subject = `[${formType}] ${name}`;
    const textBody = [
      `Typ formulára: ${formType}`,
      `Meno: ${name}`,
      `Email: ${email}`,
      `Telefón: ${phone}`,
      "",
      "Správa:",
      message,
    ].join("\n");

    const htmlBody = `
      <h2>${formType}</h2>
      <p><strong>Meno:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Telefón:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Správa:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    `;

    const smtpResponse = await fetch(EMAIL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Smtp2go-Api-Key": apiKey,
      },
      body: JSON.stringify({
        sender,
        to: [recipient],
        subject,
        text_body: textBody,
        html_body: htmlBody,
        custom_headers: [
          {
            header: "Reply-To",
            value: email,
          },
        ],
      }),
    });

    const smtpData = (await smtpResponse.json()) as {
      data?: { succeeded?: number; error?: string };
      error?: string;
      request_id?: string;
    };

    if (!smtpResponse.ok || smtpData.data?.succeeded !== 1) {
      console.error("SMTP2GO send failed", {
        status: smtpResponse.status,
        body: smtpData,
      });
      throw new Error(smtpData.data?.error || smtpData.error || "SMTP2GO send failed");
    }

    return NextResponse.json({
      success: true,
      message:
        payload.form_type === "cenova_ponuka"
          ? "Žiadosť o cenovú ponuku bola úspešne odoslaná! Odpovieme vám do 24 hodín."
          : "Správa bola úspešne odoslaná. Ozveme sa vám čo najskôr.",
    });
  } catch (error) {
    console.error("Form processing failed", error);
    return NextResponse.json(
      {
        success: false,
        message: "Chyba servera pri spracovaní formulára.",
      },
      { status: 500 },
    );
  }
}
