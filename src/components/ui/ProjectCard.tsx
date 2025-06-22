import React from 'react';
import { Link } from 'react-router-dom';
import { Project, Playlist } from '../../types';

interface ProjectCardProps {
  project: Project | Playlist;
  type: 'project' | 'playlist';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, type }) => {
  if (type === 'playlist') {
    const playlist = project as Playlist;
    return (
      <div className="flex flex-col">
        <div className="w-full aspect-square mb-6">
          <img 
            src={playlist.coverUrl} 
            alt={playlist.title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 space-y-4">
          <div>
            <h3 className="text-lg font-bold mb-1">{playlist.title}</h3>
            <p className="text-sm text-gray-600">{playlist.description}</p>
          </div>

          <div className="space-y-2">
            {playlist.streamingLinks.soundcloud && (
              <a
                href={playlist.streamingLinks.soundcloud}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center p-2 bg-[#ff5500] hover:bg-[#ff6600] text-white transition-all duration-300"
              >
                <span className="text-sm font-medium">Listen on SoundCloud</span>
              </a>
            )}
            
            {playlist.streamingLinks.spotify && (
              <a
                href={playlist.streamingLinks.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center p-2 bg-[#1DB954] hover:bg-[#1ed760] text-white transition-all duration-300"
              >
                <span className="text-sm font-medium">Listen on Spotify</span>
              </a>
            )}
            
            {playlist.streamingLinks.appleMusic && (
              <a
                href={playlist.streamingLinks.appleMusic}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center p-2 bg-[#FA243C] hover:bg-[#ff1222] text-white transition-all duration-300"
              >
                <span className="text-sm font-medium">Listen on Apple Music</span>
              </a>
            )}
            
            {playlist.streamingLinks.youtubeMusic && (
              <a
                href={playlist.streamingLinks.youtubeMusic}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center p-2 bg-[#FF0000] hover:bg-[#ff1a1a] text-white transition-all duration-300"
              >
                <span className="text-sm font-medium">Listen on YouTube Music</span>
              </a>
            )}
            
            {playlist.streamingLinks.deezer && (
              <a
                href={playlist.streamingLinks.deezer}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center p-2 bg-[#00C7F2] hover:bg-[#00d4ff] text-white transition-all duration-300"
              >
                <span className="text-sm font-medium">Listen on Deezer</span>
              </a>
            )}
            
            {playlist.streamingLinks.tidal && (
              <a
                href={playlist.streamingLinks.tidal}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center p-2 bg-black hover:bg-gray-900 text-white transition-all duration-300"
              >
                <span className="text-sm font-medium">Listen on Tidal</span>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Link 
        to={`/project/${project.id}`}
        className="block transition-transform duration-500 hover:scale-[1.02]"
      >
        <div className="aspect-square">
          <img 
            src={project.coverUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-all duration-700 grayscale hover:grayscale-0"
          />
        </div>
      </Link>
      
      <div className="mt-4">
        <h3 className="text-lg font-bold mb-1">{project.title}</h3>
        <p className="text-sm text-gray-600">
          {project.type.charAt(0).toUpperCase() + project.type.slice(1)} • {new Date(project.releaseDate).getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;