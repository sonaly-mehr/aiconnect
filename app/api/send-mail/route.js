import { sendEmail } from "../../../utils/mail";

export async function POST(request) {
  try {
    const formData = await request.formData();
    console.log('FormData:', formData); // Log the form data

    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    const file = formData.get('file');

    console.log('Form Data Extracted:', { name, email, subject, message, file });

    const sender = {
      name: name,
      address: email,
    };

    const receipent = [
      {
        name: "Sunny Mangat",
        address: "aiconnectbc@gmail.com",
      },
    ];

    const attachments = file ? [{
      filename: file.name,
      content: file.stream(),
    }] : [];

    const result = await sendEmail({
      sender,
      receipent,
      subject,
      message,
      attachments,
    });

    console.log('Email Sent:', result);

    return new Response(JSON.stringify({
      accepted: result.accepted,
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error in POST handler:', error);
    return new Response(JSON.stringify({
      message: "Unable to send email",
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}


export async function GET() {
  return new Response(JSON.stringify({ message: "Test route working!" }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}