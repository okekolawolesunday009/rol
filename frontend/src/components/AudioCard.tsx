import { useRef, useState } from 'react';
import type { AudioSermon } from '../types';

interface AudioCardProps {
  sermon: AudioSermon;
}

export default function AudioCard({ sermon }: AudioCardProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleEnded = () => setIsPlaying(false);

  return (
    <div
      id={`audio-card-${sermon.id}`}
      className="group bg-black border border-outline/20 hover:border-tertiary/40 rounded-xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-tertiary/10"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          {sermon.series && (
            <span className="text-tertiary font-label text-[10px] tracking-[0.25em] uppercase block mb-1">
              {sermon.series}
            </span>
          )}
          <h3 className="font-headline text-lg text-foreground leading-snug line-clamp-2 group-hover:text-tertiary transition-colors">
            {sermon.title}
          </h3>
        </div>
        {/* Play / Pause button */}
        <button
          id={`play-btn-${sermon.id}`}
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause sermon' : 'Play sermon'}
          className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-tertiary/50 hover:border-tertiary hover:bg-tertiary/10 flex items-center justify-center transition-all duration-200"
        >
          <span className="material-symbols-outlined text-tertiary text-xl">
            {isPlaying ? 'pause' : 'play_arrow'}
          </span>
        </button>
      </div>

      {/* Speaker & meta */}
      <div className="flex items-center gap-3 text-on-surface-variant">
        <span className="material-symbols-outlined text-base text-tertiary/60">person</span>
        <span className="font-body text-sm">{sermon.speaker}</span>
        {sermon.duration && (
          <>
            <span className="text-white/10">·</span>
            <span className="material-symbols-outlined text-base text-tertiary/60">schedule</span>
            <span className="font-body text-sm">{sermon.duration}</span>
          </>
        )}
      </div>

      {/* Description */}
      {sermon.description && (
        <p className="font-body text-sm text-on-surface-variant/70 line-clamp-2 leading-relaxed">
          {sermon.description}
        </p>
      )}

      {/* Native Audio Player */}
      <div className="mt-auto pt-2">
        <audio
          ref={audioRef}
          src={sermon.audioUrl}
          onEnded={handleEnded}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          controls
          preload="none"
          className="w-full h-8 mt-1"
          aria-label={`Audio player for ${sermon.title}`}
        />
      </div>
    </div>
  );
}
