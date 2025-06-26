import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getSingles } from '../data/music';
import ProjectCard from '../components/ui/ProjectCard';

export default function Singles() {
  const singles = getSingles();
  const [scrolled] = useState(true); // affiche le logo comme après scroll

  return (
    <div className="py-6">
      {/* Logo Aulia en haut */}
      <div
        className={`fixed left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out ${
          scrolled
            ? 'top-[-1.5rem] scale-50 sm:scale-30 z-50'
            : 'top-[30vh] scale-150 z-30'
        }`}
      >
        <div className="w-[200px] sm:w-[300px] mx-auto">
          <img
            src="/ressources/image/aulia.png"
            alt="Artist Logo"
            className="w-full h-auto"
          />
        </div>
      </div>

          <div className="py-6">
      <img 
        src="/src/assets/images/sections/singles.png" 
        alt="Singles"
        className="h-12 w-auto mb-10" 
      />
      
      <p className="text-gray-600 max-w-2xl mb-12">
        Mes singles
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {singles.map(single => (
          <ProjectCard key={single.id} project={single} type="project" />
        ))}
      </div>
    </div>
    </div>
  );
}
