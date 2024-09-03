import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

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
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "aiconnectbc@gmail.com",
        pass: "ffmkhwulhhjydtrp",
      },
    });

    const mailOptions = {
      from: `${name} <${email}>`,
      to: "aiconnectbc@gmail.com", // Receiver email from env
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