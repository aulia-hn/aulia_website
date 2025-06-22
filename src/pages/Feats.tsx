import React from 'react';
import ProjectCard from '../components/ui/ProjectCard';
import { getFeats } from '../data/music';

const Feats: React.FC = () => {
  const feats = getFeats();

  return (
    <div className="py-6">
      <img 
        src="/src/assets/images/sections/feats.png" 
        alt="Feats"
        className="h-12 w-auto mb-10" 
      />
      
      <p className="text-gray-600 max-w-2xl mb-12">
        Discover my collaborations with other talented artists, bringing together unique styles and creative energies.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {feats.map(feat => (
          <ProjectCard key={feat.id} project={feat} type="project" />
        ))}
      </div>
    </div>
  );
};

export default Feats;