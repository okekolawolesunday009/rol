import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Section from '../components/SectionProp';
import EventCard from '../components/EventCard';
import { events, type EventWithDonation } from '../data/events';

export default function EventsPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState<EventWithDonation | null>(null);

  useEffect(() => {
    if (params.eventId) {
      const event = events.find((item) => item.id === params.eventId) ?? null;
      setSelectedEvent(event);
    } else {
      setSelectedEvent(null);
    }
  }, [params.eventId]);

  const handleShareEvent = async (event: EventWithDonation) => {
    const shareUrl = event.shareUrl
      ? new URL(event.shareUrl, window.location.origin).href
      : window.location.href;
    const shareData = {
      title: event.title,
      text: event.description ?? event.title,
      url: shareUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // silent fail when dismissed
      }
    } else {
      await navigator.clipboard.writeText(shareUrl);
      alert('Event link copied to clipboard.');
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <Section bgColor="bg-gradient-to-br from-blue-600 to-red-700 relative py-20">
        <div className="max-w-4xl mx-auto px-6 py-12 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 italic tracking-tight">
            Upcoming Events
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Join us for transformative spiritual gatherings and community celebrations throughout the year.
          </p>
        </div>
      </Section>

      {/* Events List */}
      <Section bgColor="bg-slate-50" className="py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="space-y-1">
            {events.map((event) => (
              <button
                key={event.id}
                onClick={() => navigate(`/events/${event.id}`)}
                type="button"
                className="w-full text-left transition-all duration-200 hover:bg-slate-100 rounded-lg"
              >
                <EventCard event={event} />
              </button>
            ))}
          </div>
        </div>
      </Section>

      {/* Event Detail & Donation View */}
      {selectedEvent && (
        <Section bgColor={`bg-gradient-to-br ${selectedEvent.color} relative py-20`}>
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 p-8 md:p-12">
              {/* Header */}
              <div className="flex flex-col gap-6 mb-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div>
                    <div className="mb-4 inline-flex items-center gap-3 rounded-lg bg-white/15 px-4 py-2">
                      <span className="text-4xl font-bold text-white">{selectedEvent.date}</span>
                      <span className="text-sm uppercase tracking-[0.2em] text-white/80 font-semibold">
                        {selectedEvent.month}
                      </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 italic">
                      {selectedEvent.title}
                    </h2>
                    <div className="flex flex-col gap-2 text-white/85">
                      <p className="flex items-center gap-2">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.5 2a3.5 3.5 0 00-.369 6.98 4 4 0 117.753 1A4.5 4.5 0 1113.5 13a4 4 0 00-8.686-1.888 3.5 3.5 0 00.367 6.981A3.5 3.5 0 0010 19a3.5 3.5 0 00.994-6.878 4 4 0 00-7.848-1.976A3.5 3.5 0 005.5 2zm5 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                        {selectedEvent.time}
                      </p>
                      <p className="flex items-center gap-2">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {selectedEvent.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 items-start md:justify-end">
                    <button
                      onClick={() => setSelectedEvent(null)}
                      className="px-6 py-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors duration-200 text-white font-semibold"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      onClick={() => handleShareEvent(selectedEvent)}
                      className="px-6 py-2 rounded-lg border border-white/20 bg-white/10 hover:bg-white/20 transition-colors duration-200 text-white font-semibold"
                    >
                      Share Event
                    </button>
                  </div>
                </div>

                {selectedEvent.imageUrl && (
                  <img
                    src={selectedEvent.imageUrl}
                    alt={selectedEvent.title}
                    className="w-full h-[320px] rounded-3xl object-cover shadow-2xl border border-white/10"
                  />
                )}
              </div>

              {/* Description */}
              <p className="text-white/90 mb-10 text-lg leading-relaxed border-t border-white/20 pt-8">
                {selectedEvent.description}
              </p>

            
            </div>
          </div>
        </Section>
      )}

      {/* Why Attend Section */}
      <Section bgColor="bg-slate-950" className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Spiritual Growth',
                description: 'Deepen your faith and connection with God through worship, prayer, and teaching.',
                icon: '✨',
              },
              {
                title: 'Community Connection',
                description: 'Build meaningful relationships with believers and strengthen your church family.',
                icon: '🤝',
              },
              {
                title: 'Life Impact',
                description: 'Experience transformation and discover God\'s purpose for your life.',
                icon: '🚀',
              },
            ].map((reason, idx) => (
              <div key={idx} className="bg-slate-900 rounded-xl p-8 border border-slate-800 hover:border-slate-700 transition-colors duration-200">
                <div className="text-5xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-slate-300">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
