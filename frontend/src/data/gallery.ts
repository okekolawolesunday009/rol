import type { GalleryItem } from '../types';

import gallery1 from '../assets/church/worship/worship-1.jpg';
import gallery1_2 from '../assets/church/worship/worship-2.jpg';

import gallery2 from '../assets/hero/hero-5.jpg';
import gallery2_2 from '../assets/hero/hero-4.jpg';
import gallery2_3 from '../assets/hero/hero-3.jpg';


import youth1 from '../assets/church/youth/youth-1.jpg';
import youth2 from '../assets/church/youth/youth-2.jpg';
import youth3 from '../assets/church/youth/youth-3.jpg';
import youth4 from '../assets/church/youth/youth-4.jpg';
import youth5 from '../assets/church/youth/youth-5.jpg';

import birthday1 from '../assets/church/birthday/birthday.jpg';

export const galleryItems: GalleryItem[] = [
  {
    id: 'gallery-1',
    imageUrls: [gallery1, gallery1_2],
    category: 'Worship',
    caption: 'An Evening of Hymns',
    colSpan: 2,
    rowSpan: 2,
  },
  {
    id: 'gallery-2',
    imageUrls: [gallery2, gallery2_2, gallery2_3],
    category: 'Community',
    caption: 'Annual Family Picnic',
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: 'gallery-3',
    imageUrls: [
      youth1,
      youth2,
      youth3,
      youth4,
      youth5,
    ],
    category: 'Youth',
    caption: 'Youth Summit',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 'gallery-4',
    imageUrls: [
      birthday1,
    ],
    category: 'Birthday',
    caption: 'Birthday Bash',
    colSpan: 1,
    rowSpan: 1,
  },
];