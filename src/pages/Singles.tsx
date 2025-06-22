import React from 'react';
import ProjectCard from '../components/ui/ProjectCard';
import { getSingles } from '../data/music';

const Singles: React.FC = () => {
  const singles = getSingles();

  return (
    <div className="py-6">
      <img 
        src="/src/assets/images/sections/singles.png" 
        alt="Singles"
        className="h-12 w-auto mb-10" 
      />
      
      <p className="text-gray-600 max-w-2xl mb-12">
        Check out my latest singles - individual tracks released to showcase new sounds and ideas.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {singles.map(single => (
          <ProjectCard key={single.id} project={single} type="project" />
        ))}
      </div>
    </div>
  );
};

export default Singles;