import type { ChurchEvent } from '../types';

export interface EventWithDonation extends ChurchEvent {
  accountNumber?: string;
  color?: string;
}

export const events: EventWithDonation[] = [
  {
    id: 'event-1',
    title: 'Missions Weekend 2024',
    date: '10',
    month: 'APRIL',
    time: '9:00 AM',
    location: 'Main Auditorium',
    description: 'Empowering the next generation of global impact.',
    ctaLabel: 'Register',
    accountNumber: 'EVT-001',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    id: 'event-2',
    title: 'Night of Destiny',
    date: '20',
    month: 'APRIL',
    time: '10:00 PM',
    location: 'Sanctuary',
    description: 'A nocturnal gathering of intense prayer and worship.',
    ctaLabel: 'Details',
    accountNumber: 'EVT-002',
    color: 'from-purple-600 to-violet-600',
  },
  {
    id: 'event-3',
    title: 'Youth Summit: Purpose',
    date: '05',
    month: 'APRIL',
    time: '11:00 AM',
    location: 'Youth Center',
    description: 'Defining identity and calling in a digital age.',
    ctaLabel: 'Join Us',
    accountNumber: 'EVT-003',
    color: 'from-orange-500 to-orange-600',
  },
  {
    id: 'event-4',
    title: 'Annual Family Picnic',
    date: '11',
    month: 'APRIL',
    time: '12:00 PM',
    location: 'Church Grounds',
    description: 'A day of food, fellowship, and family fun for all ages.',
    ctaLabel: 'RSVP',
    accountNumber: 'EVT-004',
    color: 'from-green-600 to-emerald-600',
  },
  {
    id: 'event-5',
    title: 'Prayer & Fasting Week',
    date: '06',
    month: 'April',
    time: '6:00 AM',
    location: 'Main Sanctuary',
    description: 'Seven days of corporate prayer and spiritual renewal.',
    ctaLabel: 'Join',
    accountNumber: 'EVT-005',
    color: 'from-red-600 to-rose-600',
  },
];
