import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getClipById } from '../data/music';

const ClipDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const clip = getClipById(id || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!clip) {
    return (
      <div className="pt-6">
        <h1 className="text-2xl font-bold mb-4">Clip not found</h1>
      </div>
    );
  }

  // Extract video ID from YouTube URL
  const videoId = clip.videoUrl.split('/').pop();

  return (
    <div className="py-6">
      <div className="space-y-8">
        <div className="h-16 mb-4">
          <img
            src={clip.titleImageUrl} // Assumes clip object has a titleImageUrl
            alt={clip.title}
            className="h-full w-auto object-contain"
          />
        </div>

        <div className="relative pb-[56.25%] h-0">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={clip.title}
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Lyrics</h2>
          <pre className="font-sans text-gray-700 whitespace-pre-wrap break-words leading-relaxed">
            {clip.lyrics}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ClipDetail;
