import GalleryBento from '../components/GalleryBento';
import Section from '../components/SectionProp';
import { galleryItems } from '../data/gallery';

export default function GallerySection() {
  return (
    <Section bgColor='bg-white' id="gallery" className="py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-tertiary font-label text-sm tracking-[0.3em] uppercase mb-4 block">
              Recent Moments
            </span>
            <h2 className="font-headline text-5xl text-white italic">Life in the Sanctuary</h2>
          </div>
          <a
            href="#"
            className="text-on-surface-variant hover:text-tertiary transition-colors font-body text-sm tracking-widest uppercase hidden md:block"
          >
            View Full Archive
          </a>
        </div>

        <GalleryBento items={galleryItems} />
      </div>
    </Section>
  );
}
