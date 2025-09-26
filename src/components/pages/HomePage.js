import React from 'react';

const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section
        className="
          relative min-h-[90vh] bg-cover bg-no-repeat
          bg-[center_22%] md:bg-[center_18%] lg:bg-[center_15%]
        "
        style={{ backgroundImage: 'url("/images/GruppeBilde.jpg")' }}
      >
        {/* Mørkt slør for lesbarhet */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Tekstblokk forankret nederst – lander under ansiktene på de fleste skjermer */}
        <div
          className="
            absolute left-1/2 -translate-x-1/2
            bottom-16 md:bottom-20 lg:bottom-24
            w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10
            text-center
          "
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Velkommen til{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Bachelorgruppa!
            </span>
          </h1>
          <p className="text-xl text-gray-200/90 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            Vi er en gruppe på fem studenter med interesse for teknologi og data, og vi
            samarbeider om å utvikle løsninger som kan bidra til å løse praktiske utfordringer
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('about')}
              className="glass-btn-primary px-8 py-4 rounded-lg glass-focus-ring"
            >
              Lær mer om oss
            </button>
            <button
              onClick={() => setCurrentPage('projects')}
              className="glass-btn-secondary px-8 py-4 rounded-lg glass-focus-ring"
            >
              Se våre prosjekter
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES (egen seksjon, ikke påvirket av hero-posisjoneringen) */}
      <section className="relative z-0 bg-gradient-to-b from-black/5 via-black/0 to-black/0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-feature p-8 rounded-xl">
              <div className="w-12 h-12 bg-cyan-900/60 rounded-lg flex items-center justify-center mb-6 border border-cyan-500/30 backdrop-blur-sm">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Læring</h3>
              <p className="text-gray-300">Vi ser på et potensielt bachelorprosjekt som et skritt i vår faglige utvikling, en sjanse til å teste ideer, lære av erfaringer og bygge den kompetansen vi trenger for fremtidige prosjekter og karriere.</p>
            </div>

            <div className="glass-feature p-8 rounded-xl">
              <div className="w-12 h-12 bg-blue-900/60 rounded-lg flex items-center justify-center mb-6 border border-blue-500/30 backdrop-blur-sm">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Sterkt Samarbeid</h3>
              <p className="text-gray-300">Vi setter samarbeid høyt, og legger vekt på å bruke hverandres kunnskap og erfaringer. Gjennom tett samspill arbeider vi for å utvikle løsninger som både viser vårt fellesskap og representerer vår faglige kompetanse.</p>
            </div>

            <div className="glass-feature p-8 rounded-xl">
              <div className="w-12 h-12 bg-emerald-900/60 rounded-lg flex items-center justify-center mb-6 border border-emerald-500/30 backdrop-blur-sm">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Høy Kvalitet</h3>
              <p className="text-gray-300">Å sikre høy kvalitet er vårt viktigste mål. Vi jobber kontinuerlig for å forbedre oss og sørger for at leveransen alltid representerer vårt beste arbeid.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
