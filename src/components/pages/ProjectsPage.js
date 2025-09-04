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
      description: "Utviklet en fullstack webapplikasjon som simulerer konsekvensene av et atomangrep. Backend bygget på Supabase med PostGIS for lagring og romlige spørringer, mens frontend benytter Leaflet, GeoJSON og TurfJS for interaktive kartlag og analyser. Datasett fra GeoNorge (befolkning, tilfluktsrom, brannstasjoner) ble integrert og visualisert gjennom dynamiske kartlag og spatial queries.Dette er et eksempel på et prosjekt. Du kan enkelt endre denne beskrivelsen og legge til dine egne prosjekter.",
      image: "/images/NukeMap.png",
      github: "https://github.com/vebjornkjus/IS-218-Oppg2",
      technologies: ["Javascript", "Leaflet", "Supabase", "PostgreSQL", "QGIS", "GeoJSON"],
      status: "Fullført"
    },
    {
      id: 2,
      title: "Eksempel Prosjekt 2",
      description: "Et annet eksempel prosjekt. Legg til video eller GIF-URL i image-feltet for å vise animasjoner.",
      image: "/images/project2.gif",
      github: "https://github.com/username/project2",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      status: "Fullført"
    },
    {
      id: 3,
      title: "Eksempel Prosjekt 3",
      description: "Tredje prosjekt eksempel. Du kan enkelt kopiere denne strukturen og legge til flere prosjekter.",
      image: "/images/placeholder-project.jpg",
      github: "https://github.com/username/project3",
      technologies: ["Python", "Django", "SQLite"],
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
            Utforsk våre innovative løsninger og tekniske prosjekter som viser vår ekspertise og kreativitet.
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
                    Se på GitHub
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
          <h2 className="text-2xl font-semibold text-white mb-4">Har du et prosjekt i tankene?</h2>
          <p className="text-gray-300 mb-6">
            Vi elsker å jobbe med spennende prosjekter og er alltid åpne for nye samarbeid og utfordringer.
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