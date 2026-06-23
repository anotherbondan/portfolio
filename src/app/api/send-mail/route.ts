import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT = 3; // Max 3 emails
const WINDOW_MS = 60 * 60 * 1000; // per 1 hour

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for") ??
      request.headers.get("x-real-ip") ??
      "unknown";

    if (ip !== "unknown") {
      const now = Date.now();
      const rateData = rateLimitMap.get(ip) || { count: 0, lastReset: now };

      if (now - rateData.lastReset > WINDOW_MS) {
        rateData.count = 0;
        rateData.lastReset = now;
      }

      if (rateData.count >= RATE_LIMIT) {
        return NextResponse.json(
          {
            success: false,
            message: "Too many requests. Please try again later.",
          },
          { status: 429 },
        );
      }

      rateData.count += 1;
      rateLimitMap.set(ip, rateData);
    }
    const { name, email, subject, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.RESEND_TO_EMAIL || "anandagautama3112@gmail.com",
      replyTo: email,
      subject: subject
        ? `${subject} - from ${name}`
        : `New Contact Form Submission from ${name}`,
      text: message,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Error sending email with Resend:", error);
      return NextResponse.json(
        { success: false, message: "Failed to send email" },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process request" },
      { status: 500 },
    );
  }
}
