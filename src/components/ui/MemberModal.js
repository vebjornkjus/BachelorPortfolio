import React, { useEffect } from 'react';

const MemberModal = ({ member, onClose }) => {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!member) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 glass-card rounded-2xl overflow-hidden max-w-2xl w-[92%]">
        <button
          onClick={onClose}
          aria-label="Lukk"
          className="absolute top-3 right-3 text-gray-300 hover:text-white glass-nav-item p-2 rounded-full"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="grid md:grid-cols-2">
          <div className="bg-black/60">
            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-white mb-1">{member.name}</h3>
            <p className="text-cyan-400 font-medium mb-4">{member.role}</p>
            <p className="text-gray-300 leading-relaxed">{member.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberModal;

