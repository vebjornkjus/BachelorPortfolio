import React from 'react';

const MemberCard = ({ name, role, bio, image, onClick }) => {
  return (
    <div
      className="glass-card-interactive rounded-xl overflow-hidden cursor-pointer focus:outline-none"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick?.(); } }}
    >
      <div className="aspect-w-1 aspect-h-1">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover border-b border-gray-700/50"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
        <p className="text-cyan-400 font-medium mb-3">{role}</p>
        <p className="text-gray-300 mb-4 leading-relaxed">{bio}</p>
        {/* Kontaktseksjonen er fjernet fra kortet etter ønske */}
      </div>
    </div>
  );
};

export default MemberCard;
