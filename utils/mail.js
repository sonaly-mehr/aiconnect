import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({

  host: "sandbox.smtp.mailtrap.io", // E.g., 'smtp.gmail.com'
  port: "587", // E.g., 587 for TLS
  secure: false, // Use TLS in production
    auth: {
      // user: "aiconnectbc@gmail.com", // Your SMTP username
      // pass: "ffmkhwulhhjydtrp", // Your SMTP password
            user: "ce1ab1cb884bf0", // Your SMTP username
      pass: "69e56e91853ee2", // Your SMTP password
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