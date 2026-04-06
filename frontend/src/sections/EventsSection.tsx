import EventCard from '../components/EventCard';
import Section from '../components/SectionProp';
import { useEvents } from '../hooks/useEvents';
import { events as mockEvents } from '../data/events';

export default function EventsSection() {
  const { events, loading, error } = useEvents();
  const displayEvents = events?.length ? events : mockEvents;

  if (loading) {
    return (
      <Section bgColor='bg-black' id="events" className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center text-white">Loading events...</div>
        </div>
      </Section>
    );
  }

  if (error && !events?.length) {
    // If there's an error and no backend events, we'll fall back to mock data below
  }

  if (!displayEvents?.length) {
    return (
      <Section bgColor='bg-black' id="events" className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center text-red-400">No events available.</div>
        </div>
      </Section>
    );
  }

  return (
    <Section bgColor='bg-black' id="events" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-24">
          <span className="text-tertiary font-label text-sm tracking-[0.3em] uppercase mb-4 block">
            Calendar
          </span>
          <h2 className="font-headline text-5xl text-white leading-tight mb-8">
            Gather With Us
          </h2>
          <p className="text-on-surface-variant font-body">
            Mark your calendars for our upcoming special events and gatherings designed for every
            member of the family.
          </p>
        </div>

        {/* Events List */}
        <div className="space-y-2">
          {displayEvents.map((event, idx) => (
            <div
              key={event.id}
              className={idx === displayEvents.length - 1 ? 'border-b border-white/5' : ''}
            >
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
