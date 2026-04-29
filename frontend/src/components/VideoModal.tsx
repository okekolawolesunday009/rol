import { useEffect } from 'react';
import type { VideoSermon } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

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
    <AnimatePresence>
      <motion.div
        id="video-modal-overlay"
        role="dialog"
        aria-modal="true"
        aria-label={`Now Playing: ${sermon.title}`}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal Content */}
        <motion.div
          className="relative z-10 w-full max-w-4xl"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-headline text-xl text-white">{sermon.title}</h3>
              {sermon.speaker && (
                <p className="text-on-surface-variant font-body text-sm mt-1">{sermon.speaker}</p>
              )}
            </div>
            <motion.button
              id="video-modal-close"
              onClick={onClose}
              aria-label="Close video modal"
              className="text-slate-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </motion.button>
          </div>

          {/* Video Embed */}
          <motion.div
            className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl bg-black"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <iframe
              src={embedUrl}
              title={sermon.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
