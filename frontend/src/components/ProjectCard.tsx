import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onSelect?: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const Icon = project.icon;

  return (
    <button
      onClick={() => onSelect?.(project)}
      type="button"
      className={`group relative w-full rounded-2xl p-8 shadow-2xl shadow-black/25 transition-all duration-300 ease-out transform hover:-translate-y-2 hover:scale-[1.02] hover:z-20 overflow-hidden cursor-pointer ${project.colorClass}`}
    >
      <div className="absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl" />
      
      <div className="relative z-10 flex h-full flex-col justify-between gap-6">
        {/* Header with Icon and Goal Tag */}
        <div className="flex items-start justify-between gap-4">
          <div className="rounded-xl bg-white/15 p-3 text-white shadow-lg shadow-black/20">
            <Icon className="text-2xl" />
          </div>
          {project.goal && (
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/80 whitespace-nowrap">
              {project.goal}
            </span>
          )}
        </div>

        {/* Title and Description */}
        <div className="space-y-3 text-left">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-white/85">
            {project.description}
          </p>
        </div>

        {/* Account Number - Prominently Displayed */}
        <div className="border-t border-white/20 pt-4 mt-3">
          <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-2">Account Number</p>
          <div className="flex items-center justify-between">
            <code className="text-lg md:text-xl font-mono font-bold text-white bg-white/10 px-4 py-2 rounded-lg flex-1 mr-3">
              {project.accountNumber}
            </code>
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigator.clipboard.writeText(project.accountNumber);
              }}
              className="px-3 py-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors duration-200 text-white text-xs font-semibold"
              title="Copy account number"
            >
              Copy
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3 text-sm text-white/80 mt-2 pt-3 border-t border-white/10 group-hover:text-white transition-colors duration-200">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
            </svg>
          </span>
          <span>Select project to give</span>
        </div>
      </div>
    </button>
  );
}
