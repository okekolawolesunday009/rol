import ImageSlider from '../components/ImageSlider';
import { heroSliderImages, sliderConfig } from '../data/heroSliderImages';

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-32 pb-12 overflow-hidden"
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <ImageSlider
          images={heroSliderImages}
          autoPlay={sliderConfig.autoPlay}
          interval={sliderConfig.interval}
          showDots={sliderConfig.showDots}
          showArrows={sliderConfig.showArrows}
          className=" h-[100vh] "
          aspectRatio="wide"
          objectFit="none"
          imageClassName="transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 w-full flex justify-center items-center">
        {/* center — Headline center div below */}
        <div className="text-center space-y-6">
          <p className=' font-headline text-3xl md:text-2xl text-white font-bold tracking-tight'>Welcome to <br /></p>
          
          <h1 className="font-headline text-7xl md:text-7xl leading-tight text-white font-bold tracking-tight">
            
            <span className="italic ">River of Life  </span>
              <br />
             <span className="italic ">LP17 HQ </span>
          </h1>
          <p className="font-body text-lg text-gray-100 max-w-2xl mx-auto leading-relaxed font-light">
             The Province of Ultimate Excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button
              id="hero-cta-audio"
              onClick={() => scrollTo('audio-sermons')}
              className="flex items-center gap-2 bg-tertiary text-gray-100 font-body font-semibold tracking-wide uppercase text-sm px-8 py-3 hover:bg-tertiary/90 transition-all duration-300 rounded-lg shadow-lg shadow-tertiary/25 hover:shadow-tertiary/50"
            >
          
             New here ?
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
