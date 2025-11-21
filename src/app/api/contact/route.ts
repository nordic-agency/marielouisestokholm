import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phoneNumber, message } = body;

    // Validering
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Alle felter markeret med * skal udfyldes' },
        { status: 400 }
      );
    }

    // Email validering
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Ugyldig email adresse' },
        { status: 400 }
      );
    }

    // Send email via Resend API
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const TEST_EMAIL = process.env.TEST_EMAIL; // For testing in development
    const isDevelopment = process.env.NODE_ENV === 'development';

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service ikke konfigureret' },
        { status: 500 }
      );
    }

    // Determine recipient: use test email in development if set, otherwise production email
    const recipientEmail = (isDevelopment && TEST_EMAIL) 
      ? TEST_EMAIL 
      : 'kontakt@marie-louise-stokholm.dk';

    // HTML email template for notification to you
    const notificationEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #e9dccb; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background-color: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #8B4513; }
    .message-box { background-color: white; padding: 15px; border-left: 4px solid #e9dccb; margin-top: 10px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0; color: #333;">Ny besked fra kontaktformular</h2>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Navn:</span> ${firstName} ${lastName}
      </div>
      <div class="field">
        <span class="label">Email:</span> <a href="mailto:${email}">${email}</a>
      </div>
      ${phoneNumber ? `
      <div class="field">
        <span class="label">Telefon:</span> <a href="tel:${phoneNumber}">${phoneNumber}</a>
      </div>
      ` : ''}
      <div class="field">
        <span class="label">Besked:</span>
        <div class="message-box">
          ${message.replace(/\n/g, '<br>')}
        </div>
      </div>
      ${isDevelopment && TEST_EMAIL ? `
      <div style="margin-top: 20px; padding: 10px; background-color: #fff3cd; border-left: 4px solid #ffc107; font-size: 12px;">
        ⚠️ Test mode: Email sendt til ${TEST_EMAIL} i stedet for produktions email
      </div>
      ` : ''}
    </div>
  </div>
</body>
</html>
    `;

    // Plain text version for notification
    const notificationEmailText = `
Ny besked fra kontaktformular:

Navn: ${firstName} ${lastName}
Email: ${email}
Telefon: ${phoneNumber || 'Ikke angivet'}

Besked:
${message}

---
Sendt fra: ${request.headers.get('referer') || 'Kontaktformular'}
${isDevelopment && TEST_EMAIL ? `\n⚠️ Test mode: Email sendt til ${TEST_EMAIL}` : ''}
    `;

    // HTML email template for auto-reply to user
    const autoReplyHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #e9dccb; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
    .content { background-color: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0; color: #333;">Tak for din besked</h2>
    </div>
    <div class="content">
      <p>Hej ${firstName},</p>
      <p>Tak for din besked gennem kontaktformularen. Jeg har modtaget din henvendelse og vender tilbage hurtigst muligt.</p>
      <p>Med venlig hilsen,<br><strong>Marie Louise Stokholm</strong></p>
      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
      <p style="font-size: 12px; color: #666;">
        Dette er en automatisk bekræftelse. Du behøver ikke svare på denne email.
      </p>
    </div>
  </div>
</body>
</html>
    `;

    // Plain text version for auto-reply
    const autoReplyText = `
Hej ${firstName},

Tak for din besked gennem kontaktformularen. Jeg har modtaget din henvendelse og vender tilbage hurtigst muligt.

Med venlig hilsen,
Marie Louise Stokholm

---
Dette er en automatisk bekræftelse. Du behøver ikke svare på denne email.
    `;

    // Send notification email to you
    const notificationResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Kontaktformular <noreply@marie-louise-stokholm.dk>',
        to: [recipientEmail],
        replyTo: email,
        subject: `Ny besked fra ${firstName} ${lastName}${isDevelopment && TEST_EMAIL ? ' [TEST]' : ''}`,
        html: notificationEmailHtml,
        text: notificationEmailText,
      }),
    });

    if (!notificationResponse.ok) {
      const errorData = await notificationResponse.json();
      console.error('Resend API error (notification):', errorData);
      return NextResponse.json(
        { error: 'Kunne ikke sende email' },
        { status: 500 }
      );
    }

    // Send auto-reply to user
    const autoReplyResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Marie Louise Stokholm <noreply@marie-louise-stokholm.dk>',
        to: [email],
        subject: 'Tak for din besked',
        html: autoReplyHtml,
        text: autoReplyText,
      }),
    });

    if (!autoReplyResponse.ok) {
      // Log error but don't fail the request if auto-reply fails
      const errorData = await autoReplyResponse.json();
      console.error('Resend API error (auto-reply):', errorData);
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Besked sendt! Du modtager en bekræftelse på email.' 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Der opstod en fejl. Prøv venligst igen.' },
      { status: 500 }
    );
  }
}

