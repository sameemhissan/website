import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message, interest } = req.body

    if (!name || !email || !subject || !message || !interest) {
      return res.status(400).json({ error: 'All fields are required.' })
    }

    try {
      // Create Nodemailer transporter
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // Example: Gmail SMTP
        port: 587,
        secure: false, // true for port 465, false for other ports
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD,
        },
      })

      // Send email
      await transporter.sendMail({
        from: `"${name}" <${email}>`, // Sender address
        to: process.env.EMAIL, // Receiver address from environment variable
        subject: `Contact Form: ${subject}`, // Subject
        text: message, // Plain text
        html: `<div style="font-family: Arial, sans-serif;line-height: 1.8;color: #333;background: #ffffff;padding: 20px;border-radius: 12px;box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);max-width: 500px;margin: 0 auto;"><h2 style="color: #007BFF; margin-bottom: 10px;">Interest</h2><p style="font-size: 18px; color: #444; margin-bottom: 15px;">${interest}</p><h3 style="color: #28A745; margin-bottom: 10px;">Message</h3><p style="font-size: 16px; color: #555; margin-bottom: 15px;">${message}</p><div style="padding-top: 15px; border-top: 2px solid #eee; margin-top: 15px;"><h3 style="color: #E63946; margin-bottom: 10px;">Contact Details</h3><p style="font-size: 16px;"><a href="mailto:${email}" style="color: #007BFF; text-decoration: none; font-weight: bold;">${email}</a></p></div></div>`,
      })

      res.status(200).json({ message: 'Email sent successfully!' })
    } catch (error) {
      console.error('Error sending email:', error)
      res.status(500).json({ error: 'Failed to send email.' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ error: `Method ${req.method} not allowed` })
  }
}
