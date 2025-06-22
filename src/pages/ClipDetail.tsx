import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
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
        <Link 
          to="/" 
          className="flex items-center text-red-500 hover:text-red-600"
        >
          <ArrowLeft size={18} className="mr-2" /> Back to home
        </Link>
      </div>
    );
  }

  // Extract video ID from YouTube URL
  const videoId = clip.videoUrl.split('/').pop();

  return (
    <div className="py-6">
      <Link 
        to="/" 
        className="inline-flex items-center text-red-500 hover:text-red-600 mb-6"
      >
        <ArrowLeft size={18} className="mr-2" /> Back to home
      </Link>
      
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">{clip.title}</h1>
        
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