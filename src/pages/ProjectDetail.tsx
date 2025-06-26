import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProjectById } from '../data/music';
import { Track } from '../types';

interface ProjectDetailProps {
  onTrackSelect?: (track: Track, project: any) => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ onTrackSelect }) => {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(id || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="pt-6">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-6">
      {/* Logo Aulia */}
      <div className="fixed left-1/2 transform -translate-x-1/2 z-40 top-0 scale-75">
        <div className="w-[150px] sm:w-[200px] mx-auto">
          <img src="/ressources/image/aulia.png" alt="Artist Logo" className="w-full h-auto" />
        </div>
      </div>

      <div className="space-y-8">
        {/* Cover Image */}
        <div className="relative aspect-square overflow-hidden rounded-lg shadow-2xl">
          <img src={project.coverUrl} alt={project.title} className="w-full h-full object-cover" />
        </div>

        {/* Project Info */}
        <div className="space-y-6">
          <div>
            <div className="h-16 mb-2">
              <img src={project.titleImageUrl} alt={project.title} className="h-full w-auto object-contain" />
            </div>
            <p className="text-gray-500">
              {project.type.charAt(0).toUpperCase() + project.type.slice(1)} •{' '}
              {new Date(project.releaseDate).toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </p>
          </div>

          {/* Tracks */}
          <div className="space-y-2">
            {project.tracks.map((track, index) => (
              <button
                key={track.id}
                onClick={() => onTrackSelect?.(track, project)}
                className="w-full text-left p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.02] flex justify-between items-center"
              >
                <span>{track.title}</span>
                <span className="text-gray-400 text-sm">{track.duration}</span>
              </button>
            ))}
          </div>

          {/* Platform Logos */}
          {project.streamingLinks && (
            <div>
              {/* <h2 className="text-xl font-bold mb-4">Dispo sur:</h2> */}
              <div className="flex flex-wrap justify-center gap-6 items-center">
                {project.streamingLinks.spotify && (
                  <a href={project.streamingLinks.spotify} target="_blank" rel="noopener noreferrer">
                    <img src="/public/ressources/image/logo/spotify.svg" alt="Spotify" className="w-11 h-11" />
                  </a>
                )}
                {project.streamingLinks.appleMusic && (
                  <a href={project.streamingLinks.appleMusic} target="_blank" rel="noopener noreferrer">
                    <img src="/public/ressources/image/logo/apple_music.svg" alt="Apple Music" className="w-17 h-10" />
                  </a>
                )}
                {project.streamingLinks.youtubeMusic && (
                  <a href={project.streamingLinks.youtubeMusic} target="_blank" rel="noopener noreferrer">
                    <img src="/public/ressources/image/logo/youtube_music.svg" alt="YouTube Music" className="w-10 h-10" />
                  </a>
                )}
                {project.streamingLinks.deezer && (
                  <a href={project.streamingLinks.deezer} target="_blank" rel="noopener noreferrer">
                    <img src="/public/ressources/image/logo/deezer.svg" alt="Deezer" className="w-17 h-10" />
                  </a>
                )}
                {project.streamingLinks.tidal && (
                  <a href={project.streamingLinks.tidal} target="_blank" rel="noopener noreferrer">
                    <img src="/public/ressources/image/logo/tidal.svg" alt="Tidal" className="w-10 h-10" />
                  </a>
                )}
                {project.streamingLinks.soundcloud && (
                  <a href={project.streamingLinks.soundcloud} target="_blank" rel="noopener noreferrer">
                    <img src="/public/ressources/image/logo/soundcloud.svg" alt="SoundCloud" className="w-17 h-10" />
                  </a>
                )}
              </div>
            </div>
          )}
              {project.streamingEmbedLinks && (
  <div className="space-y-6 my-8">

    {project.streamingEmbedLinks.appleMusic && (
      <div>
        <iframe
          title="Apple Music Embed"
          allow="autoplay *; encrypted-media *;"
          frameBorder="0"
          height="450"
          style={{
            width: '100%',
            maxWidth: '59vw',
            overflow: 'hidden',
            background: 'transparent',
          }}
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src={project.streamingEmbedLinks.appleMusic}
        />
      </div>
    )}

    {project.streamingEmbedLinks.spotify && (
      <div>
        <iframe
          title="Spotify Embed"
          style={{ borderRadius: '12px' }}
          src={project.streamingEmbedLinks.spotify}
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    )}

    {project.streamingEmbedLinks.deezer && (
      <div>
        <iframe
          title="Deezer Embed"
          src={project.streamingEmbedLinks.deezer}
          width="100%"
          height="300"
          frameBorder="0"
          allowTransparency={true}
          allow="encrypted-media; clipboard-write"
        />
      </div>
    )}

    </div>
    )}

          {/* Credits */}
          <div className="pt-8 border-t">
            <h2 className="text-xl font-bold mb-4">Credits</h2>
            <div className="prose prose-sm max-w-none text-gray-600">
              {project.ecrit && <p>écrit et interpreté par: {project.ecrit}</p>}
              {project.prod && <p>produit par: {project.prod}</p>}
              {project.mix && <p>mixé par :{project.mix}</p>}
              {project.master && <p>masterisé par: {project.master}</p>}
              {project.remerciement && <p>remerciements à:{project.remerciement}</p>}
              {project.cover && <p>cover par: {project.cover}</p>}
              {project.label && (
                <p>
                  {new Date().getFullYear()} {project.label}. All Rights Reserved
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
