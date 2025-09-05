import React, { useState } from 'react';

const ProjectsPage = ({ setCurrentPage }) => {
  const [expandedProjects, setExpandedProjects] = useState(new Set());
  
  const toggleDescription = (projectId) => {
    setExpandedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };
  
  const truncateText = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  const projects = [
    {
      id: 1,
      title: "Nuke Map",
      description: "Utviklet en fullstack webapplikasjon som simulerer konsekvensene av et atomangrep. Backend bygget på Supabase med PostGIS for lagring og romlige spørringer, mens frontend benytter Leaflet, GeoJSON og TurfJS for interaktive kartlag og analyser. Datasett fra GeoNorge (befolkning, tilfluktsrom, brannstasjoner) ble integrert og visualisert gjennom dynamiske kartlag og spatial queries.",
      image: "/images/NukeMap.png",
      github: "https://github.com/vebjornkjus/IS-218-Oppg2",
      technologies: ["Javascript", "Leaflet", "Supabase", "PostgreSQL", "QGIS", "GeoJSON"],
      status: "Fullført"
    },
    {
      id: 2,
      title: "IK Start App-prototype",
      description: "Designet og prototypet en supporter-app for IK Start i Figma. Appen inkluderer funksjonalitet for billettkjøp, bestilling av kioskvarer, supporterbutikk for merchandise. Brukergrensesnittet er utformet i klubbens farger (gult og svart) med fokus på moderne UI/UX, og prototypen ble utviklet med interaktive komponenter og navigasjon for å simulere en realistisk app-opplevelse.",
      image: "/images/IKStart.png",
      github: "https://www.figma.com/proto/PxIjH3qhBDpiGrEtZMqUn8/Start_Egen?page-id=115%3A217&node-id=259-842&p=f&m=draw&scaling=scale-down&content-scaling=fixed&starting-point-node-id=259%3A842&show-proto-sidebar=1&t=P0vOUesXHK5X3HF0-1",
      technologies: ["Figma", "Prototyping", "UI/UX Design", "Component Variants", "Interactive Navigation"],
      status: "Fullført"
    },
    {
      id: 3,
      title: "Kartverket Webapp",
      description: "Utviklet en webapplikasjon for Kartverket hvor brukere kan rapportere feil i kartdata direkte på et interaktivt kart. Systemet er bygget i ASP.NET med MariaDB i Docker, og benytter Leaflet for kartvisning. Funksjonalitet som brukerroller (innmelder, saksbehandler, admin), statusoppfølging og håndtering av duplikatmeldinger ble implementert. Prosjektet ble gjennomført med Scrum og Trello for å strukturere sprintene.",
      image: "/images/Kartverketwebapp2.png",
      github: "https://github.com/vebjornkjus/kartverket",
      technologies: ["ASP.NET Core", "C#", "MariaDB", "Docker", "Leaflet", "Microsoft Identity"],
      status: "Fullført"
    }
  ];

  return (
    <div className="min-h-screen glass-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Våre{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Prosjekter
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Her kan du se prosjektene våre. Prosjektene er skoleoppgaver hvor vi har jobbet og feilet oss fram til en løsning vi er stolte av å vise frem!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <div key={project.id} className="glass-card-interactive rounded-xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover border-b border-gray-700"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Fullført' ? 'bg-green-900 text-green-300 border border-green-500/30' :
                    project.status === 'Pågående' ? 'bg-blue-900 text-blue-300 border border-blue-500/30' :
                    'bg-gray-800 text-gray-300 border border-gray-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="text-gray-400 mb-4 leading-relaxed">
                  <p className="mb-2">
                    {expandedProjects.has(project.id) 
                      ? project.description 
                      : truncateText(project.description)
                    }
                  </p>
                  {project.description.length > 120 && (
                    <button 
                      onClick={() => toggleDescription(project.id)}
                      className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-200"
                    >
                      {expandedProjects.has(project.id) ? 'Se mindre' : 'Se mer'}
                    </button>
                  )}
                </div>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-800 border border-gray-600 rounded text-cyan-400 text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-btn-primary px-4 py-2 rounded-lg glass-focus-ring"
                  >
                    {project.id === 2 ? 'Se på Figma' : 'Se på GitHub'}
                  </a>
                  <div className="text-gray-500 text-sm">
                    Prosjekt #{project.id}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 text-center rounded-xl">
          <h2 className="text-2xl font-semibold text-white mb-4">Skrive bacheloroppgaven hos din bedrift?</h2>
          <p className="text-gray-300 mb-6">
            Vi elsker å sikte å sikte høyt, og jobbe hardt for å nå de målene vi har satt oss!!
          </p>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="glass-btn-primary px-8 py-3 rounded-lg glass-focus-ring"
          >
            Kontakt Oss
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
