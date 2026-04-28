import type { ChurchEvent } from '../types';

export interface EventWithDonation extends ChurchEvent {
  color?: string;
}

export const events: EventWithDonation[] = [
  {
    id: 'event-1',
    title: 'May Thanksgiving Service',
    date: '01',
    month: 'May',
    time: '9:00 AM',
    location: 'Main Auditorium',
    description: 'An uplifting time of worship, praise, and thanksgiving for God’s goodness.',
    imageUrl: 'https://picsum.photos/520/380?random=21',
    shareUrl: '/events/event-1',
    color: 'from-blue-600 to-cyan-600',
  },
];
