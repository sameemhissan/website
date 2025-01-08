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
        html: `<p><strong>Interest:</strong> ${interest}</p><p>${message}</p> <p>Contact details: ${email}</p>`, // HTML message
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
