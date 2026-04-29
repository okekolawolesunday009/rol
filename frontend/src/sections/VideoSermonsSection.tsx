import { useState } from 'react';
import VideoCard from '../components/VideoCard';
import VideoModal from '../components/VideoModal';
import SectionHeader from '../components/SectionHeader';
import { useVideoSermons } from '../hooks/useVideoSermons';
import type { VideoSermon } from '../types';
import { motion } from 'framer-motion';

export default function VideoSermonsSection() {
  const { sermons, loading, error } = useVideoSermons();
  const [activeVideo, setActiveVideo] = useState<VideoSermon | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  if (loading) {
    return (
      <section id="video-sermons" className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center text-white">Loading video sermons...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="video-sermons" className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center text-red-400">Error loading video sermons: {error}</div>
        </div>
      </section>
    );
  }

  return (
    <section id="video-sermons" className="py-32 bg-background">
      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
          variants={itemVariants}
        >
          <SectionHeader
            label="Watch Now"
            title="Video"
            titleItalic="Messages"
            description="Experience the power of the Word through full-length sermon recordings from our services."
          />
          <a
            href="#"
            className="text-on-surface-variant hover:text-tertiary transition-colors font-body text-sm tracking-widest uppercase whitespace-nowrap"
          >
            View All Videos
          </a>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={itemVariants}
        >
          {sermons.map((sermon) => (
            <VideoCard key={sermon.id} sermon={sermon} onPlay={setActiveVideo} />
          ))}
        </motion.div>
      </motion.div>

      {/* Modal */}
      <VideoModal sermon={activeVideo} onClose={() => setActiveVideo(null)} />
    </section>
  );
}
