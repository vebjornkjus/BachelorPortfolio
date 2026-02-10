import React from 'react';

const Status1Page = ({ setCurrentPage }) => {
  return (
    <div className="glass-overlay min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Status 1
          </h2>
          <p className="text-gray-400 text-lg">Statusoppdatering fra Gruppe 11</p>
        </div>

        <div className="glass-card rounded-2xl overflow-hidden">
          <video
            controls
            className="w-full"
            poster=""
          >
            <source src="/Status1_Gruppe11.mp4" type="video/mp4" />
            Nettleseren din støtter ikke videoavspilling.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Status1Page;
