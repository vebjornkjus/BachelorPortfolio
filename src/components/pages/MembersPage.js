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
      bio: "Erfaring innen webutvikling og databaser, og interesse for fullstack systemutvikling. Har jobbet med prosjekter som inkluderer blant annet React, Leaflet, Supabase, og Figma for prototyping, med særlig interesse for arkitektur, integrasjoner og design.",
      image: "/images/KristianProfil.jpg",
      linkedin: "https://www.linkedin.com/in/kristian-kalleberg-3a594637b/",
      github: "https://github.com/Kristiank02",
      abilities: ["Architecture", "Scalability", "Frontend", "Backend", "Systems"],
      primaryColor: "from-green-500 to-emerald-500",
      glowColor: "shadow-green-500/50",
      specialization: "Complex System Architecture & Scalable Solutions",
      completedCourses: ["Cloud Architecture", "DevOps Pipeline Design", "Cybersecurity Fundamentals"]
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
      title: "The Interface Guardian",
      role: "Frontend-utvikler",
      bio: "Frontend-utvikler med fokus på å skape brukergrensesnitt som kombinerer estetisk design med optimal funksjonalitet. Dedikert til å levere brukervennlige og innovative løsninger.",
      image: "/images/OliverBilde.jpg",
      linkedin: "https://linkedin.com/in/oliver-gyve",
      github: "https://github.com/olivergyve",
      abilities: ["UI Design", "User Experience", "Frontend", "Innovation", "Aesthetics"],
      primaryColor: "from-orange-500 to-red-500",
      glowColor: "shadow-orange-500/50",
      specialization: "User Interface Design & Frontend Innovation",
      completedCourses: ["UX Research Methods", "Mobile App Development", "Data Visualization"]
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
      completedCourses: ["UX Research Methods", "Mobile App Development", "Cybersecurity Fundamentals"]
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
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedMember(null)}
        >
          <div 
            className={`relative max-w-6xl w-full max-h-[90vh] overflow-y-auto glass-card rounded-3xl p-8 bg-gradient-to-br ${selectedMember.primaryColor} bg-opacity-10 border-2 border-opacity-30 animate-championSelect`}
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

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left side - Image and basic info */}
              <div className="space-y-6">
                <div className="relative">
                  <div className={`absolute -inset-4 bg-gradient-to-r ${selectedMember.primaryColor} rounded-3xl blur opacity-20 animate-pulseGlow`} />
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="relative w-full aspect-square object-cover rounded-3xl border-4 border-white/20"
                  />
                </div>
                
                <div className="text-center space-y-4">
                  <h1 className="text-4xl font-bold text-white">{selectedMember.name}</h1>
                  <h2 className={`text-2xl font-semibold bg-gradient-to-r ${selectedMember.primaryColor} bg-clip-text text-transparent`}>
                    {selectedMember.title}
                  </h2>
                  <p className="text-xl text-gray-300 font-medium">{selectedMember.role}</p>
                  <p className={`text-lg bg-gradient-to-r ${selectedMember.primaryColor} bg-clip-text text-transparent font-semibold`}>
                    {selectedMember.specialization}
                  </p>
                </div>

                {/* Social links */}
                <div className="flex justify-center space-x-6">
                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`glass-btn-primary p-4 rounded-full transition-all duration-300 bg-gradient-to-r ${selectedMember.primaryColor} bg-opacity-20 hover:bg-opacity-40`}
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  {selectedMember.github && (
                    <a
                      href={selectedMember.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`glass-btn-primary p-4 rounded-full transition-all duration-300 bg-gradient-to-r ${selectedMember.primaryColor} bg-opacity-20 hover:bg-opacity-40`}
                    >
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Right side - Detailed info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Champion Biography</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{selectedMember.bio}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Core Abilities</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedMember.abilities.map((ability, idx) => (
                      <div
                        key={idx}
                        className={`p-4 rounded-xl bg-gradient-to-r ${selectedMember.primaryColor} bg-opacity-20 border border-white/10 transition-all duration-300 hover:bg-opacity-30 hover:scale-105`}
                      >
                        <span className="font-semibold text-white text-lg">{ability}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Mastered Courses</h3>
                  <div className="space-y-3">
                    {selectedMember.completedCourses.map((courseName, idx) => {
                      const course = courses.find(c => c.name === courseName);
                      return (
                        <div
                          key={idx}
                          className={`p-4 rounded-xl bg-gradient-to-r ${course?.color || 'from-gray-600 to-gray-700'} bg-opacity-90 border border-white/20 transform transition-all duration-300 hover:scale-105`}
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-bold text-white text-lg">{courseName}</h4>
                              <p className="text-white/80">{course?.category || 'Specialized'}</p>
                            </div>
                            <div className="bg-white/20 rounded-full p-2">
                              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Call to action */}
                <div className="pt-6 border-t border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4">Ready to collaborate?</h3>
                  <button 
                    onClick={() => setCurrentPage('contact')}
                    className={`w-full glass-btn-primary p-4 rounded-xl font-bold text-lg bg-gradient-to-r ${selectedMember.primaryColor} transition-all duration-300 hover:scale-105`}
                  >
                    Contact {selectedMember.name.split(' ')[0]}
                  </button>
                </div>
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
    </div>
  );
};

export default MembersPage;