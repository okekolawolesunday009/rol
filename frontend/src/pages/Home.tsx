import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import GallerySection from '../sections/GallerySection';
import WeeklyServicesSection from '../sections/WeeklyServicesSection';
import EventTab from '../sections/EventTab';

export default function Home() {
  return (
    <>
      <HeroSection />
      <EventTab />
      <AboutSection />
      {/* <AudioSermonsSection /> */}
      
      <GallerySection />
      <WeeklyServicesSection />

      {/* <EventsSection /> */}
    </>
  );
}
