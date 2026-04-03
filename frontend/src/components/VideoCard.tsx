import type { VideoSermon } from '../types';

interface VideoCardProps {
  sermon: VideoSermon;
  onPlay: (sermon: VideoSermon) => void;
}

export default function VideoCard({ sermon, onPlay }: VideoCardProps) {
  return (
    <div
      id={`video-card-${sermon.id}`}
      className="group bg-surface border border-outline/20 hover:border-tertiary/40 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-tertiary/10 cursor-pointer"
      onClick={() => onPlay(sermon)}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-surface-container-high">
        <img
          src={sermon.thumbnail}
          alt={sermon.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'https://placehold.co/640x360/1f1f24/edc06a?text=RCCG+LP17+HQ';
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-tertiary/90 group-hover:bg-tertiary flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg shadow-black/50">
            <span className="material-symbols-outlined text-on-tertiary text-3xl ml-0.5">
              play_arrow
            </span>
          </div>
        </div>

        {/* Duration badge */}
        {sermon.duration && (
          <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-body px-2 py-0.5 rounded">
            {sermon.duration}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 space-y-2">
        <h3 className="font-headline text-lg text-foreground leading-snug group-hover:text-tertiary transition-colors line-clamp-2">
          {sermon.title}
        </h3>
        {sermon.speaker && (
          <div className="flex items-center gap-2 text-on-surface-variant">
            <span className="material-symbols-outlined text-sm text-tertiary/60">person</span>
            <span className="font-body text-sm">{sermon.speaker}</span>
          </div>
        )}
        {sermon.description && (
          <p className="font-body text-sm text-on-surface-variant/70 line-clamp-2 leading-relaxed pt-1">
            {sermon.description}
          </p>
        )}
      </div>
    </div>
  );
}
