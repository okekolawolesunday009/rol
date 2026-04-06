import { useState } from 'react';
import VideoCard from '../components/VideoCard';
import VideoModal from '../components/VideoModal';
import SectionHeader from '../components/SectionHeader';
import { useVideoSermons } from '../hooks/useVideoSermons';
import type { VideoSermon } from '../types';

export default function VideoSermonsSection() {
  const { sermons, loading, error } = useVideoSermons();
  const [activeVideo, setActiveVideo] = useState<VideoSermon | null>(null);

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
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
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
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {sermons.map((sermon) => (
            <VideoCard key={sermon.id} sermon={sermon} onPlay={setActiveVideo} />
          ))}
        </div>
      </div>

      {/* Modal */}
      <VideoModal sermon={activeVideo} onClose={() => setActiveVideo(null)} />
    </section>
  );
}
