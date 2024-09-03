import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({

  host: "smtp.gmail.com", // E.g., 'smtp.gmail.com'
  port: "465", // E.g., 587 for TLS
  secure: true, // Use TLS in production
    auth: {
      user: "aiconnectbc@gmail.com", // Your SMTP username
      pass: "ffmkhwulhhjydtrp", // Your SMTP password
    },
});

export const sendEmail = async (dto) => {
  const { sender, receipent, subject, message, attachments } = dto;

  try {
    const info = await transport.sendMail({
      from: sender.address,
      to: receipent.map(r => r.address).join(', '),
      subject,
      html: message,
      text: message,
      attachments, // Handle attachments
    });
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};