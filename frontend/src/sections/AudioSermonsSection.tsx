import AudioCard from '../components/AudioCard';
import SectionHeader from '../components/SectionHeader';
import { audioSermons } from '../data/audioSermons';

export default function AudioSermonsSection() {
  return (
    <section
      id="audio-sermons"
      className="py-32 bg-surface-container-low"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <SectionHeader
            label="Listen Now"
            title="Audio"
            titleItalic="Sermons"
            description="Carry the Word with you. Download or stream messages from our pastors anytime, anywhere."
          />
          <a
            href="#"
            className="text-on-surface-variant hover:text-tertiary transition-colors font-body text-sm tracking-widest uppercase whitespace-nowrap"
          >
            View Full Library
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audioSermons.map((sermon) => (
            <AudioCard key={sermon.id} sermon={sermon} />
          ))}
        </div>
      </div>
    </section>
  );
}
