import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear any previous error messages when user starts typing
    if (submitStatus === 'error') {
      setSubmitStatus(null);
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      // Basic validation before sending
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        throw new Error('Alle felt må fylles ut');
      }

      // EmailJS configuration
      const serviceId = 'service_m23v6mp';
      const templateId = 'template_lk5t9gl';
      const publicKey = 'kd9ofrAXKi7QlAUT8';

      // Template parameters for EmailJS
      const templateParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        message: formData.message.trim(),
        to_name: 'Bachelorgruppe',
        reply_to: formData.email.trim(),
        // Additional parameters to ensure sender info is visible
        sender_name: formData.name.trim(),
        sender_email: formData.email.trim(),
        sender_message: formData.message.trim(),
      };

      // Send email using EmailJS with proper error handling
      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey)
        .catch(emailError => {
          console.error('EmailJS error details:', emailError);
          throw emailError;
        });

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      console.error('Feil ved sending av e-post:', error);
      setSubmitStatus('error');
      
      // More specific error handling
      if (typeof error === 'string') {
        setErrorMessage(error);
      } else if (error.message) {
        setErrorMessage(error.message);
      } else if (error.text) {
        setErrorMessage(`EmailJS feil: ${error.text}`);
      } else if (error.status === 400) {
        setErrorMessage('Ugyldig forespørsel. Sjekk at alle felt er fyllt ut korrekt.');
      } else if (error.status === 401) {
        setErrorMessage('Autorisering feilet. Sjekk EmailJS konfigurasjonen.');
      } else if (error.status === 403) {
        setErrorMessage('Tilgang nektet. Sjekk EmailJS innstillinger.');
      } else if (error.status >= 500) {
        setErrorMessage('Server feil. Prøv igjen om litt.');
      } else {
        setErrorMessage('Det oppstod en ukjent feil ved sending. Prøv igjen senere.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="bg-emerald-900/50 border border-emerald-500/50 text-emerald-300 px-4 py-3 rounded-lg">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Takk for din melding! Vi kommer tilbake til deg snart.
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="bg-red-900/50 border border-red-500/50 text-red-300 px-4 py-3 rounded-lg">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            {errorMessage}
          </div>
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Navn *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          disabled={isSubmitting}
          className="glass-input w-full px-4 py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="Ditt fulle navn"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          E-post *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          disabled={isSubmitting}
          className="glass-input w-full px-4 py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="din@epost.no"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Melding *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          disabled={isSubmitting}
          className="glass-input w-full px-4 py-3 rounded-lg resize-none disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="Skriv din melding her..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="glass-btn-primary w-full py-3 px-6 rounded-lg glass-focus-ring disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sender...
          </div>
        ) : (
          'Send Melding'
        )}
      </button>
    </form>
  );
};

export default ContactForm;