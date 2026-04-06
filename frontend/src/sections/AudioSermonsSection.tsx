import AudioCard from '../components/AudioCard';
import SectionHeader from '../components/SectionHeader';
import Section from '../components/SectionProp';
import { useAudioSermons } from '../hooks/useAudioSermons';
import { audioSermons as mockAudioSermons } from '../data/audioSermons';

export default function AudioSermonsSection() {
  const { sermons, loading, error } = useAudioSermons();
  const displaySermons = sermons?.length ? sermons : mockAudioSermons;

  if (loading) {
    return (
      <Section bgColor='bg-black' id="audio-sermons" className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center text-white">Loading audio sermons...</div>
        </div>
      </Section>
    );
  }

  if (error && !sermons?.length) {
    // If there's an error and no backend sermons, we'll fall back to mock data below
  }

  if (!displaySermons?.length) {
    return (
      <Section bgColor='bg-black' id="audio-sermons" className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center text-red-400">No audio sermons available.</div>
        </div>
      </Section>
    );
  }

  return (
    <Section bgColor='bg-black'
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
          {displaySermons.map((sermon) => (
            <AudioCard key={sermon.id} sermon={sermon} />
          ))}
        </div>
      </div>
    </Section>
  );
}
