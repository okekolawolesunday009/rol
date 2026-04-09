import { useEffect, useMemo, useState } from 'react';
import { useEvents } from '../hooks/useEvents';
import { events as mockEvents } from '../data/events';
import type { ChurchEvent } from '../types';

const MONTH_INDEX: Record<string, number> = {
  JANUARY: 0,
  FEBRUARY: 1,
  MARCH: 2,
  APRIL: 3,
  MAY: 4,
  JUNE: 5,
  JULY: 6,
  AUGUST: 7,
  SEPTEMBER: 8,
  OCTOBER: 9,
  NOVEMBER: 10,
  DECEMBER: 11,
};

function parseEventDate(event: ChurchEvent) {
  const month = MONTH_INDEX[event.month.toUpperCase()] ?? 0;
  const day = Number(event.date) || 1;
  const [hourPart, minutePart] = event.time.split(/[: ]/).filter(Boolean);
  const timeParts = event.time.toUpperCase().includes('PM')
    ? [Number(hourPart) % 12 + 12, Number(minutePart)]
    : [Number(hourPart) || 0, Number(minutePart) || 0];

  const now = new Date();
  let eventDate = new Date(now.getFullYear(), month, day, timeParts[0], timeParts[1], 0);
  if (eventDate.getTime() <= now.getTime()) {
    eventDate = new Date(now.getFullYear() + 1, month, day, timeParts[0], timeParts[1], 0);
  }

  return eventDate;
}

function getCountdown(target: Date) {
  const total = Math.max(0, Math.floor((target.getTime() - Date.now()) / 1000));
  const hours = Math.floor(total / 7200);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  return { total, hours, minutes, seconds };
}

function formatDateLabel(event: ChurchEvent) {
  return `${event.month.slice(0, 3)} ${event.date} · ${event.time}`;
}

export default function EventTab() {
  const { events, loading, error } = useEvents();
  const [countdown, setCountdown] = useState({ total: 0, hours: 0, minutes: 0, seconds: 0 });

  const displayEvents = useMemo(() => {
    return events?.length ? events : mockEvents;
  }, [events]);

  const activeEvent = useMemo(() => {
    if (!displayEvents?.length) return null;
    // Find the next upcoming event
    const now = new Date();
    const upcomingEvents = displayEvents
      .map(event => ({
        event,
        date: parseEventDate(event)
      }))
      .filter(({ date }) => date.getTime() > now.getTime())
      .sort((a, b) => a.date.getTime() - b.date.getTime());

    return upcomingEvents.length > 0 ? upcomingEvents[0].event : displayEvents[0];
  }, [displayEvents]);

  const currentTarget = useMemo(() => {
    if (!activeEvent) return new Date();
    return parseEventDate(activeEvent);
  }, [activeEvent]);

  useEffect(() => {
    setCountdown(getCountdown(currentTarget));

    const interval = window.setInterval(() => {
      const next = getCountdown(currentTarget);
      setCountdown(next);
    }, 1000);

    return () => window.clearInterval(interval);
  }, [currentTarget]);

  if (loading) {
    return (
      <section className="px-6 py-16 bg-background">
        <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 px-6 py-10 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="text-center text-sm text-on-surface-variant">Loading event ticker...</div>
        </div>
      </section>
    );
  }

  // If no backend events are available, fallback to mock event data.
  if (error && !events?.length) {
    // No UI change needed here: mock events will render below.
  }

  if (!activeEvent) {
    return null;
  }

  return (
    <section className="px-3 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-[2rem] border border-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
          

          <div className="overflow-x-auto">
            <table className="min-w-[800px] w-full border-collapse border border-black/20">
              <thead>
                <tr className="border-b border-black/20">
                  <th className="px-4 py-3 text-left text-xs uppercase tracking-[0.35em] text-on-surface-variant font-medium border-r border-black/20">Date & Time</th>
                  <th className="px-4 py-3 text-left text-xs uppercase tracking-[0.35em] text-on-surface-variant font-medium border-r border-black/20">Event</th>
                  <th className="px-4 py-3 text-center text-xs uppercase tracking-[0.35em] text-on-surface-variant font-medium border-r border-black/20">Hours</th>
                  <th className="px-4 py-3 text-center text-xs uppercase tracking-[0.35em] text-on-surface-variant font-medium border-r border-black/20">Minutes</th>
                  <th className="px-4 py-3 text-center text-xs uppercase tracking-[0.35em] text-on-surface-variant font-medium border-r border-black/20">Seconds</th>
                  <th className="px-4 py-3 text-left text-xs uppercase tracking-[0.35em] text-on-surface-variant font-medium border-r border-black/20">More Events</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-black/20">
                  <td className="px-4 py-6 align-top border-r border-black/20">
                    <p className="text-lg font-semibold">{formatDateLabel(activeEvent)}</p>
                    <p className="mt-2 text-xs text-on-surface-variant">{activeEvent.location}</p>
                  </td>
                  <td className="px-4 py-6 align-top border-r border-black/20" style={{width: '40%'}}>
                    <p className="text-xl font-semibold leading-snug">{activeEvent.title}</p>
                    <p className="mt-2 text-sm text-on-surface-variant">{activeEvent.description}</p>
                  </td>
                  <td className="px-4 py-6 text-center align-top border-r border-black/20">
                    <p className="text-3xl font-semibold tabular-nums">{String(countdown.hours).padStart(2, '0')}</p>
                  </td>
                  <td className="px-4 py-6 text-center align-top border-r border-black/20">
                    <p className="text-3xl font-semibold tabular-nums">{String(countdown.minutes).padStart(2, '0')}</p>
                  </td>
                  <td className="px-4 py-6 text-center align-top border-r border-black/20">
                    <p className="text-3xl font-semibold tabular-nums">{String(countdown.seconds).padStart(2, '0')}</p>
                  </td>
                  <td className="px-4 py-6 align-top border-r border-black/20">
                    <a
                      href="/events"
                      className="block text-left transition hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-tertiary/40"
                    >
                      <p className="text-lg font-semibold">Browse the full schedule</p>
                      <span className="mt-2 inline-flex items-center gap-2 text-sm text-tertiary">
                        Open events page
                        <span className="material-symbols-outlined text-base">east</span>
                      </span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-on-surface-variant">
                <span>Next upcoming event</span>
                <span aria-live="polite">Live countdown updates every second</span>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
