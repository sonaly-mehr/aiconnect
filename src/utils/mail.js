import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({

  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
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
      attachments, 
    });
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};