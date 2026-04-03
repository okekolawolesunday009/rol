import type { ChurchEvent } from '../types';

interface EventCardProps {
  event: ChurchEvent;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div
      id={`event-card-${event.id}`}
      className="group flex flex-col md:flex-row justify-between items-start md:items-center py-10 border-t border-outline/30 hover:bg-surface/50 transition-all duration-300 px-6 rounded-lg"
    >
      {/* Date + Info */}
      <div className="flex gap-10 items-center w-full md:w-auto">
        <div className="text-center min-w-[56px]">
          <p className="text-tertiary font-headline text-4xl italic leading-none">{event.date}</p>
          <p className="text-on-surface-variant text-[10px] uppercase tracking-widest mt-2">
            {event.month}
          </p>
        </div>
        <div>
          <h4 className="font-headline text-2xl text-foreground mb-1 group-hover:text-tertiary transition-colors duration-300">
            {event.title}
          </h4>
          {event.description && (
            <p className="text-on-surface-variant font-body text-sm">{event.description}</p>
          )}
        </div>
      </div>

      {/* Meta + CTA */}
      <div className="flex items-center gap-8 mt-6 md:mt-0 w-full md:w-auto justify-between md:justify-end">
        <span className="text-on-surface-variant/60 font-body text-xs tracking-widest uppercase">
          {event.time} — {event.location}
        </span>
        <a
          href="#"
          className="text-tertiary font-bold tracking-widest uppercase text-xs border-b border-transparent group-hover:border-tertiary pb-1 transition-all duration-300 whitespace-nowrap"
        >
          {event.ctaLabel ?? 'Learn More'}
        </a>
      </div>
    </div>
  );
}
