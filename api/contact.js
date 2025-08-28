export default async function handler(req, res) {
  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      message: 'Alle felt er påkrevd',
      error: 'MISSING_FIELDS'
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      message: 'Ugyldig e-postadresse',
      error: 'INVALID_EMAIL'
    });
  }

  try {
    // Here you can integrate with email services like:
    // - SendGrid
    // - Nodemailer with SMTP
    // - Resend
    // - AWS SES
    
    // For now, we'll just log the data (replace with actual email sending)
    console.log('Kontaktskjema mottatt:', { name, email, message, timestamp: new Date().toISOString() });

    // Simulate email sending (replace this with actual email service)
    await new Promise(resolve => setTimeout(resolve, 500));

    return res.status(200).json({ 
      message: 'Takk for din melding! Vi kommer tilbake til deg snart.',
      success: true
    });

  } catch (error) {
    console.error('Feil ved sending av kontaktskjema:', error);
    return res.status(500).json({ 
      message: 'Det oppstod en feil. Prøv igjen senere.',
      error: 'INTERNAL_ERROR'
    });
  }
}