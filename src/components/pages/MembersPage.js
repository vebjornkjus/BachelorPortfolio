import React, { useState, useEffect } from 'react';

const MembersPage = ({ setCurrentPage }) => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [hoveredMember, setHoveredMember] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); // Start at 0 for cleaner math

  // Simple sound effects using Web Audio API
  const playSound = (type) => {
    if (!window.AudioContext && !window.webkitAudioContext) return;
    
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    if (type === 'hover') {
      oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    } else if (type === 'select') {
      oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.2);
      gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    }
    
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.3);
  };

  // Course data for the showcase
  const courses = [
    { name: "Advanced Machine Learning", category: "AI", color: "from-purple-500 to-pink-500" },
    { name: "Cloud Architecture", category: "Infrastructure", color: "from-blue-500 to-indigo-500" },
    { name: "UX Research Methods", category: "Design", color: "from-green-500 to-teal-500" },
    { name: "Cybersecurity Fundamentals", category: "Security", color: "from-red-500 to-orange-500" },
    { name: "Algrotihms and Data Structures", category: "IS-211", color: "from-red-500 to-amber-500" },
    { name: "Geografiske Informasjonssystemer, AI og IoT; Introduksjon og Anvendelse", category: "IS-218", color: "from-cyan-500 to-blue-500" },
    { name: "Datamodellering og databasesystemer", category: "IS-201", color: "from-yellow-500 to-lime-500" },
    { name: "Universell utforming av informasjonssystemer", category: "IS-217", color: "from-emerald-500 to-teal-500" },
    { name: "Datasystemer og systemarkitektur", category: "IS-105", color: "from-amber-500 to-yellow-500" },
  ];

  const members = [
    {
      id: 1,
      name: "Vebjørn Kjus",
      title: "The Architect",
      role: "Full-stack Developer",
      bio: "Erfaring med web-apper i React, Tailwind og .NET, med interesse for maskinlæring og AI. Har erfaring med Scrum, sprintplanlegging og har tidligere hatt rollen som Scrum Master/prosjektleder.",
      image: "/images/vebjornProfil.jpg",
      linkedin: "https://www.linkedin.com/in/vebjørn-kjus-16b309258/",
      github: "https://github.com/vebjornkjus",
      abilities: ["React", "Tailwind", ".NET", "Scrum", "AI/ML"],
      primaryColor: "from-blue-500 to-cyan-500",
      glowColor: "shadow-blue-500/50",
      specialization: "Full-stack Architecture & AI Integration",
      completedCourses: ["Algrotihms and Data Structures", "Datamodellering og databasesystemer", "Geografiske Informasjonssystemer, AI og IoT; Introduksjon og Anvendelse"]
    },
    {
      id: 2,
      name: "Kristian Kalleberg",
      title: "The System Master",
      role: "Full-stack Developer",
      bio: "Erfaring innenfor webutvikling og databaser, og interesse for fullstack systemutvikling. Har jobbet med prosjekter som inkluderer blant annet React, Leaflet, Supabase, og Figma for prototyping, med særlig interesse for arkitektur, integrasjoner og design.",
      image: "/images/KristianProfil.jpg",
      linkedin: "https://www.linkedin.com/in/kristian-kalleberg-3a594637b/",
      github: "https://github.com/Kristiank02",
      abilities: ["Architecture", "Frontend", "Backend", "Databases", "Design"],
      primaryColor: "from-green-500 to-emerald-500",
      glowColor: "shadow-green-500/50",
      specialization: "Fullstack Development, Databases & User Interface Design",
      completedCourses: ["Algrotihms and Data Structures", "Universell utforming av informasjonssystemer", "Datasystemer og systemarkitektur"]
    },
    {
      id: 3,
      name: "Kristoffer Holmsen",
      title: "The Data Sage",
      role: "Frontend & AI-utvikler",
      bio: "rontend- og AI-utvikler med fokus på moderne grensesnitt og integrasjon av kunstig intelligens for å skape smarte og brukervennlige løsninger",
      image: "/images/kristoffer.jpg",
      linkedin: "https://www.linkedin.com/in/kristoffer-f-holmsen-17866737b/",
      github: "https://github.com/Kri1410",
      abilities: ["Databases", "Cloud", "DevOps", "Backend", "Optimization"],
      primaryColor: "from-purple-500 to-violet-500",
      glowColor: "shadow-purple-500/50",
      specialization: "Database Architecture & Cloud Infrastructure",
      completedCourses: ["Data Visualization", "Cloud Architecture", "DevOps Pipeline Design"]
    },
    {
      id: 4,
      name: "Oliver Gyve",
      title: "The Frontend Artisan",
      role: "Frontend-utvikler",
      bio: "Frontend-utvikler med fokus på å skape brukergrensesnitt som kombinerer estetisk design med optimal funksjonalitet. Dedikert til å levere brukervennlige og innovative løsninger.",
      image: "/images/OliverBilde.jpg",
      linkedin: "https://linkedin.com/in/oliver-gyve",
      github: "https://github.com/olivergyve",
      abilities: ["Frontend", "Unversell utforming", "UX Design", "Aesthetics"],
      primaryColor: "from-orange-500 to-red-500",
      glowColor: "shadow-orange-500/50",
      specialization: "UX Design & Frontend",
      completedCourses: ["Algrotihms and Data Structures", "Universell utforming av informasjonssystemer", "Geografiske Informasjonssystemer, AI og IoT; Introduksjon og Anvendelse"]
    },
    {
      id: 5,
      name: "Gaute J. Hoel",
      title: "The Experience Weaver",
      role: "UX-designer & Frontend-utvikler",
      bio: "Liker å skape løsninger som både ser bra ut og er enkle å bruke. Jeg har erfaring med å bygge brukervennlige grensesnitt, og legger stor vekt på universell utforming slik at alle kan ha en god opplevelse.",
      image: "/images/GauteBilde.jpg",
      linkedin: "https://www.linkedin.com/in/gaute-jahren-hoel-4408a0338/",
      abilities: ["UX Design", "Accessibility", "User Research", "Frontend", "Empathy"],
      primaryColor: "from-pink-500 to-rose-500",
      glowColor: "shadow-pink-500/50",
      specialization: "User Experience Design & Accessibility",
      completedCourses: ["UX Research Methods", "Mobile App Development", "IS-217 Universell utforming av informasjonssysteme"]
    }
  ];

  // Get current centered member
  const getCurrentMember = () => {
    return members[currentIndex % members.length];
  };
  
  // Navigate to next/previous member
  const navigateWheel = (direction) => {
    setCurrentIndex(prev => {
      const newIndex = direction > 0 ? prev + 1 : prev - 1;
      return newIndex < 0 ? members.length - 1 : newIndex;
    });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      switch(event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          navigateWheel(-1);
          break;
        case 'ArrowRight':
          event.preventDefault();
          navigateWheel(1);
          break;
        case 'Enter':
        case ' ':
          event.preventDefault();
          const current = getCurrentMember();
          setSelectedMember(current === selectedMember ? null : current);
          playSound('select');
          break;
        case 'Escape':
          if (selectedMember) {
            event.preventDefault();
            setSelectedMember(null);
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentIndex, selectedMember]);

  const currentMember = getCurrentMember();
  const displayMember = hoveredMember || currentMember;

  return (
    <div className="h-screen glass-overlay relative overflow-hidden flex flex-col">
      {/* Dynamic background based on hovered/current member */}
      <div 
        className={`absolute inset-0 transition-all duration-1000 ${
          displayMember 
            ? `bg-gradient-to-br ${displayMember.primaryColor} opacity-10` 
            : 'bg-gradient-to-br from-slate-900 to-slate-800 opacity-20'
        }`}
      />
      
      {/* Header - Extra Compact */}
      <div className="text-center py-3 relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-1 tracking-wider">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            SELECT YOUR DEVELOPER
          </span>
        </h1>
        <p className="text-xs md:text-sm text-gray-300 max-w-2xl mx-auto font-medium px-4">
          {displayMember 
            ? `${displayMember.title} • ${displayMember.specialization}`
            : "Use arrow keys or click to navigate • Enter/Space to select"
          }
        </p>
      </div>

      {/* Infinity Wheel - Takes remaining space */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden min-h-0">
        <div className="relative w-full h-full flex items-center">
          {/* Enhanced fade effects */}
          <div 
            className="absolute left-0 top-0 w-32 md:w-48 h-full z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, rgb(15 23 42) 0%, rgba(15, 23, 42, 0.9) 25%, rgba(15, 23, 42, 0.5) 50%, transparent 100%)'
            }}
          />
          <div 
            className="absolute right-0 top-0 w-32 md:w-48 h-full z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to left, rgb(15 23 42) 0%, rgba(15, 23, 42, 0.9) 25%, rgba(15, 23, 42, 0.5) 50%, transparent 100%)'
            }}
          />
          
          {/* Fixed navigation arrows */}
          <div className="absolute left-2 md:left-6 top-1/2 transform -translate-y-1/2 z-20">
            <button
              onClick={() => navigateWheel(-1)}
              className="glass-btn-secondary p-3 md:p-4 rounded-full transition-colors duration-200"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          <div className="absolute right-2 md:right-6 top-1/2 transform -translate-y-1/2 z-20">
            <button
              onClick={() => navigateWheel(1)}
              className="glass-btn-secondary p-3 md:p-4 rounded-full transition-colors duration-200"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Champion wheel - Back to simple working solution */}
          <div className="flex items-center justify-center w-full px-20 md:px-32 py-8">
            <div className="flex items-center justify-center space-x-4 md:space-x-8 max-w-6xl">
              {[-2, -1, 0, 1, 2].map((offset) => {
                const memberIndex = (currentIndex + offset + members.length) % members.length;
                const member = members[memberIndex];
                const isCenter = offset === 0;
                const distance = Math.abs(offset);
                
                return (
                  <div
                    key={`${member.id}-${offset}`}
                    className={`relative cursor-pointer transition-all duration-300 ease-out flex-shrink-0 ${
                      isCenter ? 'scale-110 md:scale-125 z-30' : distance === 1 ? 'scale-95 md:scale-105 z-20' : 'scale-75 z-10'
                    } ${
                      hoveredMember?.id === member.id && isCenter ? 'scale-125 md:scale-140' : ''
                    }`}
                    style={{
                      opacity: distance > 1 ? 0.4 : 1,
                      filter: `blur(${distance > 1 ? 1.5 : 0}px)`
                    }}
                    onMouseEnter={() => {
                      if (isCenter) {
                        setHoveredMember(member);
                        playSound('hover');
                      }
                    }}
                    onMouseLeave={() => setHoveredMember(null)}
                    onClick={() => {
                      if (isCenter) {
                        setSelectedMember(member === selectedMember ? null : member);
                        playSound('select');
                        
                        // Add explosive visual effects
                        const cardElement = document.querySelector(`[data-member-id="${member.id}"]`);
                        const explosionContainer = document.getElementById('explosion-container');
                        
                        if (cardElement) {
                          cardElement.classList.add('animate-explosiveSelect');
                          setTimeout(() => cardElement.classList.remove('animate-explosiveSelect'), 800);
                        }
                        
                        if (explosionContainer) {
                          explosionContainer.innerHTML = '';
                          
                          // Create shockwave effect
                          const shockwave = document.createElement('div');
                          shockwave.className = `absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 border-4 border-white rounded-full animate-shockwave`;
                          explosionContainer.appendChild(shockwave);
                          setTimeout(() => shockwave.remove(), 600);
                          
                          // Create particle explosion
                          for (let i = 0; i < 25; i++) {
                            const particle = document.createElement('div');
                            const size = Math.random() * 4 + 2;
                            const angle = (i / 25) * 360;
                            const x = 50 + Math.cos(angle * Math.PI / 180) * (Math.random() * 25);
                            const y = 50 + Math.sin(angle * Math.PI / 180) * (Math.random() * 25);
                            
                            particle.className = `absolute rounded-full animate-ping bg-gradient-to-r ${member.primaryColor}`;
                            particle.style.width = `${size}px`;
                            particle.style.height = `${size}px`;
                            particle.style.left = `${x}%`;
                            particle.style.top = `${y}%`;
                            particle.style.animationDelay = `${Math.random() * 0.3}s`;
                            particle.style.animationDuration = `${0.6 + Math.random() * 0.4}s`;
                            
                            explosionContainer.appendChild(particle);
                            setTimeout(() => particle.remove(), 1000);
                          }
                          
                          // Screen flash effect
                          const flash = document.createElement('div');
                          flash.className = `absolute inset-0 bg-white pointer-events-none`;
                          flash.style.opacity = '0.2';
                          explosionContainer.appendChild(flash);
                          setTimeout(() => {
                            flash.style.transition = 'opacity 0.2s ease-out';
                            flash.style.opacity = '0';
                            setTimeout(() => flash.remove(), 200);
                          }, 30);
                        }
                      } else {
                        // Navigate to clicked member
                        const targetIndex = memberIndex;
                        setCurrentIndex(targetIndex);
                      }
                    }}
                  >
                    {/* Glow effect for center item - contained within bounds */}
                    {isCenter && (
                      <div className={`absolute -inset-2 md:-inset-3 bg-gradient-to-r ${member.primaryColor} rounded-3xl blur opacity-35 animate-pulse`} />
                    )}
                    
                    {/* Champion card - Large but contained */}
                    <div 
                      data-member-id={member.id}
                      className="relative glass-card-interactive rounded-2xl md:rounded-3xl overflow-hidden border-2 border-gray-700/50 w-44 h-60 md:w-56 md:h-72 lg:w-64 lg:h-80"
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 lg:p-5">
                        <h3 className="font-bold text-white text-sm md:text-base lg:text-lg text-center mb-1">{member.name}</h3>
                        <p className={`text-xs md:text-sm lg:text-base text-center font-semibold bg-gradient-to-r ${member.primaryColor} bg-clip-text text-transparent`}>
                          {member.title}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Explosion effect container */}
          <div id="explosion-container" className="absolute inset-0 pointer-events-none z-40" />
        </div>
      </div>


      {/* Fly-out Champion Detail Card */}
      {selectedMember && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center p-4 pt-20 md:pt-12 animate-fadeIn"
          onClick={() => setSelectedMember(null)}
        >
          <div 
            className={`relative max-w-4xl w-[92%] glass-card rounded-2xl md:rounded-3xl p-6 md:p-6 bg-gradient-to-br ${selectedMember.primaryColor} bg-opacity-10 border border-opacity-30 animate-championSelect overflow-hidden`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-6 right-6 glass-btn-secondary p-3 rounded-full z-10"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            <div className="grid md:grid-cols-2 gap-6 items-start">
              {/* Left side - Image and basic info */}
              <div className="space-y-6">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full md:h-[380px] h-64 object-cover rounded-2xl border-2 border-white/20"
                />
                
                <div className="text-center space-y-2">
                  <h1 className="text-3xl font-bold text-white">{selectedMember.name}</h1>
                  <h2 className={`text-xl font-semibold bg-gradient-to-r ${selectedMember.primaryColor} bg-clip-text text-transparent`}>
                    {selectedMember.title}
                  </h2>
                  <p className="text-lg text-gray-300 font-medium">{selectedMember.role}</p>
                  <p className={`text-base bg-gradient-to-r ${selectedMember.primaryColor} bg-clip-text text-transparent font-semibold`}>
                    {selectedMember.specialization}
                  </p>
                </div>

                {/* Social links removed per request */}
              </div>

              {/* Right side - Detailed info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Developer Biography</h3>
                  <p className="text-gray-300 text-base leading-relaxed">{selectedMember.bio}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Core Abilities</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedMember.abilities.map((ability, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-lg bg-gradient-to-r ${selectedMember.primaryColor} bg-opacity-20 border border-white/10 transition-all duration-300`}
                      >
                        <span className="font-semibold text-white text-sm md:text-base">{ability}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Highlighted Courses</h3>
                  <div className="space-y-2">
                    {selectedMember.completedCourses.map((courseName, idx) => {
                      const course = courses.find(c => c.name === courseName);
                      return (
                        <div
                          key={idx}
                          className={`p-3 rounded-lg bg-gradient-to-r ${selectedMember.primaryColor} bg-opacity-90 border border-white/20`}
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-bold text-white text-base">{courseName}</h4>
                              <p className="text-white/80 text-sm">{course?.category || 'Specialized'}</p>
                            </div>
                            <div className="bg-white/20 rounded-full p-1.5">
                              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* CTA removed per request */}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10 mt-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="glass-card p-8 text-center rounded-xl">
            <h2 className="text-2xl font-semibold text-white mb-4">Vil du jobbe med oss?</h2>
            <p className="text-gray-300 mb-6">
              Visste du at 5 av 5 studenter på denne gruppa vil høre hva slags bachelorprosjekt dere har til oss!?
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
    </div>
  );
};

export default MembersPage;
