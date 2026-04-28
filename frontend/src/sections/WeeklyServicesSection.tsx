import Section from '../components/SectionProp';
import ServiceCard from '../components/ServiceCard';
import { weeklyServices } from '../data/weeklyServices';

export default function WeeklyServicesSection() {
  return (
    <Section bgColor="bg-slate-950" id="weekly-services" className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3 md:gap-0 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-tertiary font-label text-sm tracking-[0.3em] uppercase mb-3 block">
                Weekly Services
              </span>
              <h2 className="font-headline text-4xl md:text-5xl italic text-white">
                Service rhythm for every week
              </h2>
            </div>
            <p className="max-w-xl text-sm md:text-base text-slate-300 leading-relaxed">
              Discover our weekly rhythm of worship, prayer and community gatherings designed to keep your faith strong and your heart engaged.
            </p>
          </div>

          <div className="relative mt-12">
            <div className="flex flex-col gap-6 md:flex-row md:flex-wrap md:-mx-4">
              {weeklyServices.map((service) => (
                <div key={service.title} className="md:px-4 md:w-1/2- lg:w-1/4">
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
