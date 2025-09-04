import React from 'react';

const Footer = () => {
  return (
    <footer className="glass-header border-t border-gray-700/50 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Bachelorgruppe</h3>
            <p className="text-gray-400 leading-relaxed">
              En gruppe motiverte studenter klare til å møte de utfordringene som kommer.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Kontakt</h4>
            <div className="space-y-2 text-gray-400">
              <p>vebjorn.kjus@gmail.com</p>
              <p>Oslo, Norge</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Følg Oss</h4>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 glass-focus-ring rounded px-2 py-1" disabled>
                LinkedIn
              </button>
              <button className="text-gray-400 hover:text-blue-400 transition-colors duration-200 glass-focus-ring rounded px-2 py-1" disabled>
                GitHub
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Bachelorgruppe. Alle rettigheter reservert.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;