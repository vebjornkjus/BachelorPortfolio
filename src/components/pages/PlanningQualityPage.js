import React from 'react';

const PlanningQualityPage = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen glass-overlay py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">
            Planlegging og{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Kvalitet
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Vår tilnærming til planlegging, kvalitetssikring og ressursutnyttelse i bachelorprosjektet
          </p>
        </div>

        {/* Section 1: Hva skal utvikles? */}
        <div className="glass-card p-8 rounded-xl mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
            Hva skal utvikles?
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Gruppen skal videreutvikle og redesigne «Min Eiendom» siden for Kristiansand kommune.
            I PI-1 er de primære fokusområdene å gjennomføre research, avklare utviklingsmiljø og
            utarbeide en visuell prototype. I tillegg skal arkitekturvalg avklares i samarbeid med
            de andre gruppene som er tilknyttet Kristiansand kommune.
          </p>
        </div>

        {/* Section 2: Kvalitetsaspekter */}
        <div className="glass-card p-8 rounded-xl mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
            Kvalitetsaspekter
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            For selve produktet som utvikles, er brukervennlighet, funksjonalitet,
            vedlikeholdbarhet og modularitet de viktigste kvalitetsaspektene.
          </p>

          <div className="space-y-4">
            <div className="pl-4 border-l-2 border-cyan-400">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                Brukervennlighet
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Produktet skal utformes slik at personer i alle aldre enkelt kan bruke
                løsningen og få nytte av den.
              </p>
            </div>

            <div className="pl-4 border-l-2 border-blue-400">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">
                Funksjonalitet
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Det er avgjørende at all funksjonalitet fungerer som forventet, ettersom
                løsningen er ment å kunne tas i bruk i fremtiden.
              </p>
            </div>

            <div className="pl-4 border-l-2 border-cyan-400">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                Vedlikeholdbarhet
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Produktet skal være enkelt å drifte og videreutvikle, og ikke kreve
                unødvendig mye ressurser for å holdes i drift.
              </p>
            </div>

            <div className="pl-4 border-l-2 border-blue-400">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">
                Modularitet
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Siden løsningen skal kunne brukes flere steder, er det viktig at koden er
                strukturert på en modulær måte, slik at komponenter enkelt kan gjenbrukes
                eller videreutvikles.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Måling av kvalitet */}
        <div className="glass-card p-8 rounded-xl mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
            Måling av kvalitet
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Gjennom brukertester og tilbakemeldinger fra produkteier vil gruppen få innsikt
            i hvilken grad disse kvalitetsaspektene er oppfylt.
          </p>
        </div>

        {/* Section 4 & 5: Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Section 4: Kvalitetssikring */}
          <div className="glass-card p-8 rounded-xl">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
              Kvalitetssikring av plan og backlog
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Planen kvalitetssikres ved å gjennomføre grundige planleggingsmøter, der både
              langsiktige og kortsiktige mål defineres. Backloggen kvalitetssikres ved å
              legge inn relevante, tydelige og gjennomførbare oppgaver som støtter
              prosjektets mål.
            </p>
          </div>

          {/* Section 5: Estimater og ressursutnyttelse */}
          <div className="glass-card p-8 rounded-xl">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
              Estimater og ressursutnyttelse
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Ved bruk av estimater og timerapportering får gruppen konkret innsikt i hvor
              presise estimatene er, noe som gir et bedre grunnlag for justering og mer
              nøyaktig estimering i senere faser.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Ressursene anses som godt utnyttet når gruppen leverer planlagt funksjonalitet
              med ønsket kvalitet innenfor gitt tidsramme, og når tilgjengelige ressurser
              brukes på en ansvarlig og effektiv måte.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanningQualityPage;
