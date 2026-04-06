import type { WeeklyService } from '../data/weeklyServices';

interface ServiceCardProps {
  service: WeeklyService;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <button
      type="button"
      className={`group relative w-full min-w-0 rounded-[24px] p-8 shadow-2xl shadow-black/25 transition-transform duration-300 ease-out transform hover:-translate-y-2 hover:scale-[1.03] hover:z-20 overflow-hidden ${service.colorClass} ${service.offsetClass}`}
    >
      <div className="absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-[24px]" />
      <div className="relative z-10 flex h-full flex-col justify-between gap-6">
        <div className="flex items-center justify-between gap-4">
          <div className="rounded-2xl bg-white/15 p-3 text-white shadow-lg shadow-black/20">
            <Icon className="text-2xl" />
          </div>
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-white/80">
            {service.tag}
          </span>
        </div>

        <div className="space-y-4 text-left">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-white/70">{service.day}</p>
            <h3 className="text-3xl font-bold tracking-tight text-white">{service.title}</h3>
          </div>
          <div className="text-lg font-semibold text-white/90">{service.time}</div>
        </div>

        <div className="mt-auto flex items-center gap-3 text-sm text-white/80">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M12 7a1 1 0 0 1 1 1v3.586l2.707 2.707a1 1 0 0 1-1.414 1.414L11 12.414V8a1 1 0 0 1 1-1z" />
              <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6zm0 2h12v16H6V4z" />
            </svg>
          </span>
          <span>Tap to view details</span>
        </div>
      </div>
    </button>
  );
}
