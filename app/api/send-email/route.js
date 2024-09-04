import { NextResponse } from "next/server";
import { z } from "zod";

// Define a Zod schema for validation
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
  file: z.any().optional(), // Add optional file validation
});

export async function GET() {
  return NextResponse.json({
    message: "Please send a POST request with the necessary data.",
  });
}

export async function POST(request) {
  try {
    // Parse the form data
    const formData = await request.formData();
    const file = formData.get("file"); // Get the file (optional)

    // Extract form data
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    // Validate the form data using Zod
    const result = formSchema.safeParse({ name, email, subject, message, file });
    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: result.error.issues },
        { status: 400 }
      );
    }

    // Prepare the email content
    const emailContent = {
      from: "Aiconnection <onboarding@resend.dev>",
      to: ["sonaly.mehr@gmail.com"],
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #0D1054; border-bottom: 2px solid #0D1054; padding-bottom: 10px;">Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border: 1px solid #ddd;">
            ${message.replace(/\n/g, "<br>")}
          </div>
          <br>
          <p style="font-size: 0.9em; color: #555;">
            This message was sent from the contact form on your website.
          </p>
        </div>
      `,
    };

    // Handle the file (if provided)
    if (file) {
      const fileContent = await file.arrayBuffer();
      emailContent.attachments = [
        {
          filename: file.name,
          content: Buffer.from(fileContent).toString("base64"),
          encoding: "base64",
        },
      ];
    }

    // Send the email via Resend API
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: "Bearer re_ebpNHVkA_5xxzdL7jozKB8yhT6zhrcXGh",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailContent),
    });

    console.log("Resend API Response Status:", response.status);

    // Check if the response is not ok
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Resend API Error:", errorText);
      throw new Error("Failed to send email");
    }

    // Return success response
    return NextResponse.json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error in POST /api/send-email:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}