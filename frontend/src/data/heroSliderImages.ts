import heroMain from '../assets/hero/hero_main.png';
import hero3 from '../assets/hero/hero-3.jpg';
import hero2 from '../assets/hero/hero-2.jpg';
import church from '../assets/hero/church.jpg';
import hero5 from '../assets/hero/hero-5.jpg';


export interface ImageSliderImage {
  src: string;
  alt: string;
  title?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  scale?: number;
  objectPosition?: string;
}

export interface SliderConfig {
  autoPlay: boolean;
  interval: number;
  showDots: boolean;
  showArrows: boolean;
  width?: string;
  height?: string;
  aspectRatio?: 'square' | 'video' | 'wide' | 'portrait' | 'auto';
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

export const heroSliderImages: ImageSliderImage[] = [
  {
    src: heroMain,
    alt: 'Dramatic modern cathedral interior with sunlight filtering through tall windows',
    title: 'Cathedral Main',
    objectFit: 'cover', 
    scale: 1.05, // Slight zoom for a more dynamic feel

  },
  {
    src: hero2,
    alt: 'Sacred spiritual space with warm ambient lighting',
    title: 'Sacred Space',
    objectFit: 'cover',
    scale: 1.1, // More zoom for a more intimate feel
    objectPosition: 'center 40%', // Shift focus slightly upwards for better composition
  },
  {
    src: hero3,
    alt: 'Sacred spiritual space with warm ambient lighting',
    title: 'Sacred Space',
    objectFit: 'cover',
    scale: 1.1, // More zoom for a more intimate feel
    objectPosition: '20px -20px', // Shift focus slightly upwards for better composition
  },

  {
    src: hero5,
    alt: 'Sacred spiritual space with warm ambient lighting',
    title: 'Sacred Space',
    objectPosition: '5px 0.2px'
  },  
  
  {
    src:church,
    alt: 'Sacred spiritual space with warm ambient lighting',
    title: 'Sacred Space',
    objectPosition: '5px 0.2px'
  },  
];

export const sliderConfig = {
  autoPlay: true,
  interval: 6000, // Slightly longer for better viewing
  showDots: true,
  showArrows: true,
  width: '100%',
  height: '100%',
  aspectRatio: '16.9', // 16:9 for cinematic feel
  objectFit: 'cover', // Maintains full coverage
};

// Alternative configurations for different viewing experiences:
// aspectRatio options: 'square' (1:1), 'video' (16:9), 'wide' (16:9), 'portrait' (3:4), 'auto'
// objectFit options: 'cover' (crops to fit), 'contain' (shows full image), 'fill', 'none', 'scale-down'
