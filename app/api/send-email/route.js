import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';


export async function GET() {
  return NextResponse.json({ message: 'Hello, world!' });
}

export async function POST(req) {
  try {
    const formData = await req.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    const file = formData.get('file');

    // Create a transporter object using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `${name} <${email}>`,
      to: process.env.MAIL_USER, // Receiver email from env
      subject: subject,
      text: message,
      attachments: [],
    };

    if (file) {
      const tempPath = path.join('/tmp', file.name);
      await fs.promises.writeFile(tempPath, Buffer.from(await file.arrayBuffer()));
      mailOptions.attachments.push({
        filename: file.name,
        path: tempPath,
      });
    }

    // Send email
    await transporter.sendMail(mailOptions);

    if (file) {
      // Clean up temporary file
      await fs.promises.unlink(tempPath);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

