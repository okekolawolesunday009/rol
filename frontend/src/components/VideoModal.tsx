import { useEffect } from 'react';
import type { VideoSermon } from '../types';

interface VideoModalProps {
  sermon: VideoSermon | null;
  onClose: () => void;
}

export default function VideoModal({ sermon, onClose }: VideoModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    if (sermon) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [sermon]);

  if (!sermon) return null;

  const embedUrl = `${sermon.videoUrl}?autoplay=1&rel=0`;

  return (
    <div
      id="video-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`Now Playing: ${sermon.title}`}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />

      {/* Modal Content */}
      <div
        className="relative z-10 w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-headline text-xl text-white">{sermon.title}</h3>
            {sermon.speaker && (
              <p className="text-on-surface-variant font-body text-sm mt-1">{sermon.speaker}</p>
            )}
          </div>
          <button
            id="video-modal-close"
            onClick={onClose}
            aria-label="Close video modal"
            className="text-slate-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Video Embed */}
        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl bg-black">
          <iframe
            src={embedUrl}
            title={sermon.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
