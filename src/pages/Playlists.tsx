import React from 'react';
import ProjectCard from '../components/ui/ProjectCard';
import { playlists } from '../data/music';

const Playlists: React.FC = () => {
  return (
    <div className="py-6">
      <img 
        src="/src/assets/images/sections/playlists.png" 
        alt="Playlists"
        className="h-12 w-auto mb-10" 
      />
      
      <p className="text-gray-600 max-w-2xl mb-12">
        Discover curated collections of music that tell unique stories and create specific moods.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {playlists.map(playlist => (
          <ProjectCard key={playlist.id} project={playlist} type="playlist" />
        ))}
      </div>
    </div>
  );
};

export default Playlists;