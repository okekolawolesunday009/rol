import { useState, useEffect } from 'react';

export interface SliderImage {
  src: string;
  alt: string;
  title?: string;
}

interface ImageSliderProps {
  images: SliderImage[] | string[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
}

export default function ImageSlider({
  images,
  autoPlay = true,
  interval = 5000,
  showDots = true,
  showArrows = true,
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Normalize images to SliderImage format
  const normalizedImages = images.map((img) =>
    typeof img === 'string' ? { src: img, alt: '' } : img
  );

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % normalizedImages.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, normalizedImages.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + normalizedImages.length) % normalizedImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % normalizedImages.length);
  };

  return (
    <div className="relative w-full h-full">
      {/* Images */}
      <div className="relative w-full h-full overflow-hidden">
        {normalizedImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showArrows && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 group"
          >
            <span className="material-symbols-outlined text-2xl group-hover:scale-110">
              chevron_left
            </span>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 group"
          >
            <span className="material-symbols-outlined text-2xl group-hover:scale-110">
              chevron_right
            </span>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {showDots && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {normalizedImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white w-3 h-3'
                  : 'bg-white/50 w-2 h-2 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

