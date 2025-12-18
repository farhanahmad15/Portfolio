import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { subject, message } = body;

    // Validate input
    if (!subject || !message) {
      return NextResponse.json(
        { error: "Subject and message are required" },
        { status: 400 }
      );
    }

    // For now, we'll just log the message and return success
    // In production, you would integrate with an email service like Resend, SendGrid, or Nodemailer
    console.log("Contact form submission:", { subject, message });

    // TODO: Implement actual email sending
    // Example with Resend:
    // const { data, error } = await resend.emails.send({
    //   from: 'Portfolio <onboarding@resend.dev>',
    //   to: ['thefarhan@duck.com'],
    //   subject: subject,
    //   text: message,
    // });

    return NextResponse.json(
      { success: true, message: "Message received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
