import type { GalleryItem } from '../types';

interface GalleryBentoProps {
  items: GalleryItem[];
}

export default function GalleryBento({ items }: GalleryBentoProps) {
  const [main, ...rest] = items;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[800px]">
      {/* Hero item — spans 2 cols and 2 rows */}
      {main && (
        <div
          id={`gallery-item-${main.id}`}
          className="md:col-span-2 md:row-span-2 relative overflow-hidden group rounded-lg"
        >
          <img
            src={main.imageUrl}
            alt={main.caption}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 min-h-[300px] md:min-h-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex flex-col justify-end p-8">
            <p className="text-tertiary text-xs tracking-widest uppercase font-bold mb-2">
              {main.category}
            </p>
            <h4 className="font-headline text-2xl text-foreground">{main.caption}</h4>
          </div>
        </div>
      )}

      {/* Remaining items */}
      {rest.map((item, idx) => (
        <div
          key={item.id}
          id={`gallery-item-${item.id}`}
          className={`relative overflow-hidden group rounded-lg ${
            idx === 0 ? 'md:col-span-2 md:row-span-1' : 'md:col-span-1 md:row-span-1'
          }`}
        >
          <img
            src={item.imageUrl}
            alt={item.caption}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 min-h-[200px] md:min-h-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex flex-col justify-end p-6">
            {idx === 0 && (
              <p className="text-tertiary text-xs tracking-widest uppercase font-bold mb-2">
                {item.category}
              </p>
            )}
            <h4 className={`font-headline text-white ${idx === 0 ? 'text-2xl' : 'text-lg'}`}>
              {item.caption}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}
