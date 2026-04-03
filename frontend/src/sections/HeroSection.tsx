export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-32 pb-12 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover "
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpFfHYPfh7pSlrQKNcJSauIeK_R3jRbXVLuUbDm_iA-DsBeO7xTL_948B_WR15-9Cean9LH2SKxfR9Ycs6-4F4jbag_1kfiPy5Izod3oi9F2ECJzhKRvKoXx3QOzkzvArMHuP7jiNp_7j4gXwJDse-yr0g_I1TieWDN223pODjMKB18fRLkDl6B_1Ny-uttlz3HADTvVYlXIJV6tK-iqKpUHW0Xk9E-lOsdpAuQ15iBxumGG0G2pfuXR4RuPL-hWy4-AGQIfdywpiL"
          alt="Dramatic modern cathedral interior with sunlight filtering through tall windows"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 w-full flex justify-center items-center">
        {/* center — Headline center div below */}
        <div className="text-center space-y-6">
          <span className="inline-block font-label text-xs tracking-[0.2em] text-slate-100 uppercase font-bolder">
            Faith • Hope • Love
          </span>
          <h1 className="font-headline text-5xl md:text-7xl leading-tight text-white font-bold tracking-tight">
            Welcome to <br />
            <span className="italic text-tertiary">RCCG LP17 HQ</span>
          </h1>
          <p className="font-body text-lg text-gray-100 max-w-2xl mx-auto leading-relaxed font-light">
            A sanctuary for spiritual growth in the heart of the city.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button
              id="hero-cta-audio"
              onClick={() => scrollTo('audio-sermons')}
              className="flex items-center gap-2 bg-tertiary text-gray-900 font-body font-semibold tracking-wide uppercase text-sm px-8 py-3 hover:bg-tertiary/90 transition-all duration-300 rounded-lg shadow-lg shadow-tertiary/25 hover:shadow-tertiary/50"
            >
              <span className="material-symbols-outlined text-lg">headphones</span>
              Listen
            </button>
            <button
              id="hero-cta-video"
              onClick={() => scrollTo('video-sermons')}
              className="flex items-center gap-2 text-white font-body font-semibold tracking-wide uppercase text-sm border-2 border-white px-8 py-2 hover:bg-white/10 transition-all duration-300 rounded-lg"
            >
              <span className="material-symbols-outlined text-lg">play_circle</span>
              Watch
            </button>
          </div>
        </div>

        {/* Right — Services Card */}
        
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30 pointer-events-none hidden md:flex">
        <span className="text-[10px] uppercase tracking-[0.5em]">Scroll to Explore</span>
        <div className="w-px h-12 bg-white/50" />
      </div>
    </main>
  );
}
