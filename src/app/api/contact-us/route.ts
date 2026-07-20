import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const requiredEnv = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
  'SMTP_FROM',
  'SMTP_TO',
];

function validateEmail(email: unknown): email is string {
  return (
    typeof email === 'string' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  );
}

function validateBody(body: any) {
  if (!body || typeof body !== 'object') {
    return 'Request body must be a JSON object.';
  }

  const { name, email, message } = body;

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return 'Name is required and must be at least 2 characters.';
  }

  if (!validateEmail(email)) {
    return 'A valid email address is required.';
  }

  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    return 'Message is required and must be at least 10 characters.';
  }

  return null;
}

function getSmtpConfig() {
  const missing = requiredEnv.filter((name) => !process.env[name]);

  if (missing.length > 0) {
    throw new Error(`Missing SMTP environment variables: ${missing.join(', ')}`);
  }

  return {
    host: process.env.SMTP_HOST!,
    port: Number(process.env.SMTP_PORT!),
    secure: Number(process.env.SMTP_PORT!) === 465,
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASS!,
    },
  } as const;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validationError = validateBody(body);

    if (validationError) {
      return NextResponse.json({ success: false, error: validationError }, { status: 400 });
    }

    const transporter = nodemailer.createTransport(getSmtpConfig());
    const fromAddress = process.env.SMTP_FROM!;
    const toAddress = process.env.SMTP_TO!;

    const res = await transporter.sendMail({
      from: fromAddress,
      to: toAddress,
      replyTo: body.email,
      subject: `Contact Me: ${body.name}`,
      text: `Name: ${body.name}\nEmail: ${body.email}\n\nMessage:\n${body.message}`,
      html: `
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Subject:</strong> Contact Me: ${body.name}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message.replace(/\n/g, '<br />')}</p>
      `,
    });

    console.log("🚀 ~ POST ~ res:", res)

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'An unknown error occurred.';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
