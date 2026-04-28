import type { ChurchEvent } from '../types';

interface EventCardProps {
  event: ChurchEvent;
}

export default function EventCard({ event }: EventCardProps) {
  const handleShare = async () => {
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
        // User dismissed share dialog
      }
    } else {
      await navigator.clipboard.writeText(shareUrl);
      alert('Event link copied to clipboard.');
    }
  };

  return (
    <div
      id={`event-card-${event.id}`}
      className="group grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 py-8 border-t border-outline/30 hover:bg-surface/50 transition-all duration-300 px-6 rounded-lg"
    >
      {event.imageUrl ? (
        <img
          src={event.imageUrl}
          alt={event.title}
          className="h-44 w-full rounded-3xl object-cover shadow-lg"
        />
      ) : (
        <div className="h-44 w-full rounded-3xl bg-slate-200" />
      )}

      <div className="flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="text-center min-w-[56px]">
              <p className="text-tertiary font-headline text-4xl italic leading-none">{event.date}</p>
              <p className="text-on-surface-variant text-[10px] uppercase tracking-widest mt-2">
                {event.month}
              </p>
            </div>
            <div>
              <h4 className="font-headline text-2xl text-foreground mb-2 group-hover:text-tertiary transition-colors duration-300">
                {event.title}
              </h4>
              {event.description && (
                <p className="text-on-surface-variant font-body text-sm">{event.description}</p>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-on-surface-variant">
            <span>{event.time}</span>
            <span>•</span>
            <span>{event.location}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-6">
          {event.registerUrl ? (
            <a
              href={event.registerUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-tertiary px-4 py-2 text-xs font-bold text-white transition hover:bg-tertiary/90"
            >
              Register
            </a>
          ) : (
            <span className="inline-flex items-center justify-center rounded-full bg-slate-200 px-4 py-2 text-xs font-bold text-slate-700">
              No registration link
            </span>
          )}
          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-900 transition hover:bg-slate-50"
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
