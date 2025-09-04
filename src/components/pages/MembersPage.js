import React from 'react';
import MemberCard from '../ui/MemberCard';

const MembersPage = ({ setCurrentPage }) => {
  const members = [
    {
      name: "Vebjørn Kjus",
      role: "Full-stack Developer",
      bio: "Erfaring med web-apper i React, Tailwind og .NET, med interesse for maskinlæring og AI. Har erfaring med Scrum, sprintplanlegging og har tidligere hatt rollen som Scrum Master/prosjektleder.",
      image: "/images/vebjornProfil.jpg",
      linkedin: "https://www.linkedin.com/in/vebjørn-kjus-16b309258/",
      github: "https://github.com/vebjornkjus"
    },
    {
      name: "Kristian Kalleberg",
      role: "Full-stack Developer",
      bio: "Erfaren med både frontend og backend utvikling. Elsker å jobbe med komplekse systemarkitekturer og skalbare løsninger.",
      image: "/images/placeholder-member.jpg",
      linkedin: "https://linkedin.com/in/kristian-kalleberg",
      github: "https://github.com/kristiankalleberg"
    },
    {
      name: "Kristoffer Holmsen",
      role: "Frontend & AI-utvikler",
      bio: "rontend- og AI-utvikler med fokus på moderne grensesnitt og integrasjon av kunstig intelligens for å skape smarte og brukervennlige løsninger",
      image: "/images/kristoffer.jpg",
      linkedin: "https://www.linkedin.com/in/kristoffer-f-holmsen-17866737b/",
      github: "https://github.com/Kri1410"
    },
    {
      name: "Oliver Gyve",
      role: "Frontend-utvikler",
      bio: "Frontend-utvikler med fokus på å skape brukergrensesnitt som kombinerer estetisk design med optimal funksjonalitet. Dedikert til å levere brukervennlige og innovative løsninger.",
      image: "/images/OliverBilde.jpg",
      linkedin: "https://linkedin.com/in/oliver-gyve",
      github: "https://github.com/olivergyve"
    },
    {
      name: "Gaute J. Hoel",
      role: "UX-designer & Frontend-utvikler",
      bio: "Liker å skape løsninger som både ser bra ut og er enkle å bruke. Jeg har erfaring med å bygge brukervennlige grensesnitt, og legger stor vekt på universell utforming slik at alle kan ha en god opplevelse.",
      image: "/images/GauteBilde.jpg",
      linkedin: "https://www.linkedin.com/in/gaute-jahren-hoel-4408a0338/"
    }
  ];

  return (
    <div className="min-h-screen glass-overlay py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Møt Teamet</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Lær mer om de fem talentfulle individene som utgjør vår gruppe. 
            Hver bringer unike ferdigheter og perspektiver som gjør oss sterkere sammen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <MemberCard key={index} {...member} />
          ))}
        </div>

        <div className="mt-16 glass-card p-8 text-center rounded-xl">
          <h2 className="text-2xl font-semibold text-white mb-4">Vil du jobbe med oss?</h2>
          <p className="text-gray-300 mb-6">
            Vi er alltid interessert i å møte like-minded personer og diskutere potensielle samarbeid.
          </p>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="glass-btn-primary px-8 py-3 rounded-lg glass-focus-ring"
          >
            Ta Kontakt
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembersPage;