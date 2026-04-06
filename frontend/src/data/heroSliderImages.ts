import heroMain from '../assets/hero_main.png';
import hero from '../assets/hero.png';

export interface HeroSliderImage {
  src: string;
  alt: string;
  title?: string;
}

export const heroSliderImages: HeroSliderImage[] = [
  {
    src: heroMain,
    alt: 'Dramatic modern cathedral interior with sunlight filtering through tall windows',
    title: 'Cathedral Main',
  },
  {
    src: hero,
    alt: 'Sacred spiritual space with warm ambient lighting',
    title: 'Sacred Space',
  },
];

export const sliderConfig = {
  autoPlay: true,
  interval: 5000,
  showDots: true,
  showArrows: true,
};
