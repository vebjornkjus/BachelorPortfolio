import React from 'react';

const AboutPage = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen glass-overlay py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Om Oss</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Vi er fem dedikerte studenter som har funnet sammen gjennom vår felles lidenskap for kreativitet, problemløsning og samarbeid.
          </p>
        </div>

        <div className="glass-card p-8 rounded-xl mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Vår Visjon</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Som et team tror vi på kraften av samarbeid og komplementære ferdigheter. 
            Hver av oss bringer unike perspektiver og ekspertise til bordet, og sammen 
            skaper vi løsninger som overgår summen av delene våre.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Vi er klare for enhver utfordring som kommer vår vei. og har som mål å kunne levere produter som ikke bare møter teknsike krav, men som også gir en utmerket brukeropplevelse.
          
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-4">Våre Verdier</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Innovasjon og kreativitet
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Åpenhet og samarbeid
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Kvalitet og presisjon
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Kontinuerlig læring
              </li>
            </ul>
          </div>

          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-4">Våre Fagområder</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Frontend Utvikling (React, Vue, Angular)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Backend Utvikling (Node.js, Python, Java, C#)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Database Design og Administrasjon
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                UI/UX Design og Prototyping
              </li>
            </ul>
          </div>
        </div>

        <div className="glass-card p-8 rounded-xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-xl"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold mb-4 text-white">Klar for Samarbeid?</h3>
            <p className="mb-6 text-gray-300">
              Bestemt deg for oss allerede altså? Da får du trykke på knappen under da vel!
            </p>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="glass-btn-primary px-6 py-3 rounded-lg glass-focus-ring"
            >
              Kontakt Oss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;