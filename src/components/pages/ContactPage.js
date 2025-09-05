import React from 'react';
import ContactForm from '../ui/ContactForm';

const ContactPage = () => {
  return (
    <div className="min-h-screen glass-overlay py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Kontakt Oss</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Har du spørsmål eller ønsker å komme i kontakt? Ta gjerne kontakt med oss – vi hører gjerne fra deg!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-6">Send oss en melding</h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-6">Kontaktinformasjon</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-cyan-900 border border-cyan-500/30 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">E-post</h3>
                  <p className="text-gray-400">vebjorn.kjus@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-900 border border-blue-500/30 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Lokasjon</h3>
                  <p className="text-gray-400">Kristiansand, Norge</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
