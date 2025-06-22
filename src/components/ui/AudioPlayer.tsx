import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, ChevronDown, ChevronUp } from 'lucide-react';
import { Track } from '../../types';

interface AudioPlayerProps {
  tracks: Track[];
  initialTrackIndex?: number;
  onTrackChange?: (trackId: string) => void;
  compact?: boolean;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ 
  tracks, 
  initialTrackIndex = 0,
  onTrackChange,
  compact = false
}) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(initialTrackIndex);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isTracklistOpen, setIsTracklistOpen] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const currentTrack = tracks[currentTrackIndex];

  useEffect(() => {
  playTrack(initialTrackIndex);
  }, [initialTrackIndex, tracks]);


  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleDurationChange = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      if (currentTrackIndex < tracks.length - 1) {
        playTrack(currentTrackIndex + 1);
      } else {
        setIsPlaying(false);
      }
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('durationchange', handleDurationChange);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('durationchange', handleDurationChange);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrackIndex, tracks.length]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => setIsPlaying(false));
    }
    setIsPlaying(!isPlaying);
  };

  const playTrack = (index: number) => {
    if (index >= 0 && index < tracks.length) {
      setCurrentTrackIndex(index);
      setIsPlaying(true);
      if (onTrackChange) {
        onTrackChange(tracks[index].id);
      }
      
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().catch(() => setIsPlaying(false));
        }
      }, 100);
    }
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = progressBarRef.current;
    const audio = audioRef.current;
    if (!progressBar || !audio) return;

    const rect = progressBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audio.currentTime = percent * duration;
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  return (
    <div className="w-full bg-black text-white rounded-lg shadow-sm">
      <div className={compact ? "p-2" : "p-4"}>
        <div className="flex items-center gap-4 mb-4">
          {/* <img 
            src={tracks[0].coverUrl || "./ressources/cover/pochette_retirer_le_pansement.jpg"} 
            alt={currentTrack.title}
            className="w-16 h-16 object-cover rounded-md"
          /> */}
          <div className="flex-1">
            <h3 className={compact ? "text-base font-medium" : "text-lg font-medium"}>{currentTrack.title}</h3>
          </div>
        </div>
        
        <div className="mb-4">
          <div 
            ref={progressBarRef}
            className="h-2 bg-white/20 rounded-full cursor-pointer"
            onClick={handleProgressBarClick}
          >
            <div 
              className="h-full bg-red-600 rounded-full transition-all duration-100"
              style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs mt-1 text-white/60">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
        
        <div className="flex justify-center items-center space-x-6">
          <button 
            className="p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none"
            onClick={() => playTrack(currentTrackIndex - 1)}
            disabled={currentTrackIndex === 0}
          >
            <SkipBack size={compact ? 16 : 20} className={currentTrackIndex === 0 ? "text-white/40" : "text-white"} />
          </button>
          
          <button 
            className="p-3 bg-red-600 rounded-full hover:bg-red-700 transition-colors focus:outline-none text-white"
            onClick={togglePlayPause}
          >
            {isPlaying ? 
              <Pause size={compact ? 20 : 24} /> : 
              <Play size={compact ? 20 : 24} className="ml-1" />
            }
          </button>
          
          <button 
            className="p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none"
            onClick={() => playTrack(currentTrackIndex + 1)}
            disabled={currentTrackIndex >= tracks.length - 1}
          >
            <SkipForward size={compact ? 16 : 20} className={currentTrackIndex >= tracks.length - 1 ? "text-white/40" : "text-white"} />
          </button>
        </div>
      </div>
      
      {tracks.length > 1 && (
        <div className="border-t border-white/10">
          <button
            onClick={() => setIsTracklistOpen(!isTracklistOpen)}
            className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors"
          >
            <span className="text-sm font-medium text-white/80">Tracklist</span>
            {isTracklistOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          
          <div className={`transition-all duration-300 ${isTracklistOpen ? 'max-h-64' : 'max-h-0'} overflow-hidden`}>
            <div className="p-4 pt-0">
              <div className="space-y-1 max-h-48 overflow-y-auto pr-1 scrollbar-custom">
                  {tracks.map((track, index) => (
          // <div className={`overflow-hidden transition-all duration-300 ${isTracklistOpen ? 'max-h-48' : 'max-h-0'}`}>
          //   <div className="p-4 pt-0 space-y-1">
          //     {tracks.map((track, index) => (
                  <div 
                  key={track.id}
                  className={`flex justify-between p-2 rounded cursor-pointer hover:bg-white/10 transition-colors ${
                    index === currentTrackIndex ? 'bg-white/10 text-red-500' : ''
                  }`}
                  onClick={() => playTrack(index)}
                >
                  <span className="text-sm">{track.title}</span>
                  <span className="text-xs text-white/60">{track.duration}</span>
                  </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      )}
      
      <audio 
        ref={audioRef}
        src={currentTrack.audioUrl}
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </div>
  );
};

export default AudioPlayer;