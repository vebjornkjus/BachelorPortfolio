import React, { useState } from 'react';
import './App.css';

// Header Component
const Header = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Hjem', id: 'home' },
    { name: 'Om oss', id: 'about' },
    { name: 'Medlemmer', id: 'members' },
    { name: 'Kontakt', id: 'contact' }
  ];

  return (
    <header className="bg-gray-900 border-b border-gray-700 shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              TechTeam
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.id
                    ? 'text-cyan-400 bg-gray-800 border border-cyan-500/30'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:text-cyan-400"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  currentPage === item.id
                    ? 'text-cyan-400 bg-gray-800 border border-cyan-500/30'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

// Home/Landing Page Component
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Velkommen til{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              TechTeam
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Vi er en gruppe på fem dedikerte studenter som brenner for teknologi og innovasjon. 
            Sammen utvikler vi løsninger som former morgendagens digitale landskap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transform hover:scale-105 transition-all duration-200 shadow-lg border border-cyan-500/30">
              Lær mer om oss
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-200">
              Se våre prosjekter
            </button>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 border border-gray-700 p-8 rounded-xl shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
            <div className="w-12 h-12 bg-cyan-900 rounded-lg flex items-center justify-center mb-6 border border-cyan-500/30">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Innovativ Tilnærming</h3>
            <p className="text-gray-400">Vi utforsker nye teknologier og metodikker for å skape banebrytende løsninger.</p>
          </div>
          
          <div className="bg-gray-800 border border-gray-700 p-8 rounded-xl shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-6 border border-blue-500/30">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Sterkt Samarbeid</h3>
            <p className="text-gray-400">Vårt team jobber tett sammen for å levere kvalitetsprosjekter i tide.</p>
          </div>
          
          <div className="bg-gray-800 border border-gray-700 p-8 rounded-xl shadow-2xl hover:shadow-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300">
            <div className="w-12 h-12 bg-emerald-900 rounded-lg flex items-center justify-center mb-6 border border-emerald-500/30">
              <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Høy Kvalitet</h3>
            <p className="text-gray-400">Vi setter kvalitet i høysetet og leverer alltid vårt beste arbeid.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// About Page Component
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Om Oss</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Vi er fem dedikerte studenter innen informatikk og teknologi som har funnet sammen 
            gjennom vår felles lidenskap for innovasjon og problemløsning.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-xl shadow-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Vår Visjon</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Som et team tror vi på kraften av samarbeid og komplementære ferdigheter. 
            Hver av oss bringer unike perspektiver og ekspertise til bordet, og sammen 
            skaper vi løsninger som overgår summen av delene våre.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Vi fokuserer på moderne webutvikling, applikasjonsdesign, og innovative 
            teknologiløsninger. Vårt mål er å levere produkter som ikke bare møter 
            tekniske krav, men som også gir exceptional brukeropplevelse.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-900 border border-gray-700 rounded-xl shadow-2xl p-8">
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

          <div className="bg-gray-900 border border-gray-700 rounded-xl shadow-2xl p-8">
            <h3 className="text-xl font-semibold text-white mb-4">Våre Fagområder</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Frontend Utvikling (React, Vue, Angular)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Backend Utvikling (Node.js, Python, Java)
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

        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 border border-cyan-500/30 rounded-xl shadow-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-semibold mb-4">Klar for Samarbeid?</h3>
          <p className="mb-6 text-cyan-100">
            Vi er alltid interessert i spennende prosjekter og nye utfordringer. 
            Ta kontakt med oss for å diskutere hvordan vi kan hjelpe deg!
          </p>
          <button className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors duration-200 border border-cyan-200">
            Kontakt Oss
          </button>
        </div>
      </div>
    </div>
  );
};

// Member Card Component
const MemberCard = ({ name, role, bio, image, linkedin }) => {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
      <div className="aspect-w-1 aspect-h-1">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover border-b border-gray-700"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
        <p className="text-cyan-400 font-medium mb-3">{role}</p>
        <p className="text-gray-400 mb-4 leading-relaxed">{bio}</p>
        <div className="flex items-center justify-between">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

// Members Page Component
const MembersPage = () => {
  const members = [
    {
      name: "Vebjørn Kjus",
      role: "Frontend Developer & UI/UX Designer",
      bio: "Spesialiserer seg på moderne frontend-teknologier og brukersentrert design. Har en lidenskap for å skape intuitive og vakre brukeropplevelser.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      linkedin: "https://linkedin.com/in/vebjorn-kjus"
    },
    {
      name: "Kristian Kalleberg",
      role: "Full-stack Developer",
      bio: "Erfaren med både frontend og backend utvikling. Elsker å jobbe med komplekse systemarkitekturer og skalbare løsninger.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      linkedin: "https://linkedin.com/in/kristian-kalleberg"
    },
    {
      name: "Kristoffer Holmsen",
      role: "Backend Developer & Database Specialist",
      bio: "Fokuserer på robust backend-utvikling og database-optimering. Har stor erfaring med cloud-tjenester og DevOps-praksis.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      linkedin: "https://linkedin.com/in/kristoffer-holmsen"
    },
    {
      name: "Oliver Gyve",
      role: "Mobile Developer & Tech Lead",
      bio: "Leder teamets tekniske retning og spesialiserer seg på mobilutvikling. Brenner for ren kode og agile utviklingsmetoder.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      linkedin: "https://linkedin.com/in/oliver-gyve"
    },
    {
      name: "Gaute J. Hoel",
      role: "Data Scientist & AI Specialist",
      bio: "Jobber med maskinlæring og dataanalyse for å skape intelligente løsninger. Har sterk bakgrunn i statistikk og algoritmer.",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      linkedin: "https://linkedin.com/in/gaute-hoel"
    }
  ];

  return (
    <div className="min-h-screen bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="mt-16 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Vil du jobbe med oss?</h2>
          <p className="text-gray-400 mb-6">
            Vi er alltid interessert i å møte like-minded personer og diskutere potensielle samarbeid.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 border border-cyan-500/30">
            Ta Kontakt
          </button>
        </div>
      </div>
    </div>
  );
};

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Takk for din melding! Vi kommer tilbake til deg snart.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
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
          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
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
          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 resize-none"
          placeholder="Skriv din melding her..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transform hover:scale-105 transition-all duration-200 shadow-lg border border-cyan-500/30"
      >
        Send Melding
      </button>
    </form>
  );
};

// Contact Page Component
const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Kontakt Oss</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Har du et spennende prosjekt eller bare vil ta en uformell prat? 
            Vi gleder oss til å høre fra deg!
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
                  <p className="text-gray-400">kontakt@techteam.no</p>
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
                  <p className="text-gray-400">Oslo, Norge</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-emerald-900 border border-emerald-500/30 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Responstid</h3>
                  <p className="text-gray-400">Vanligvis innen 24 timer</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border border-cyan-500/30 rounded-xl">
              <h3 className="font-semibold text-white mb-3">Følg oss</h3>
              <p className="text-gray-400 mb-4">
                Hold deg oppdatert på våre siste prosjekter og innsikter.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.404-5.958 1.404-5.958s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.753-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">TechTeam</h3>
            <p className="text-gray-400 leading-relaxed">
              En gruppe dedikerte studenter som skaper innovative teknologiløsninger 
              for morgendagens utfordringer.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Kontakt</h4>
            <div className="space-y-2 text-gray-400">
              <p>kontakt@techteam.no</p>
              <p>Oslo, Norge</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Følg Oss</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                GitHub
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 TechTeam. Alle rettigheter reservert.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'members':
        return <MembersPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="App bg-black min-h-screen">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;