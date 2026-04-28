import type { ChurchEvent } from '../types';

export interface EventWithDonation extends ChurchEvent {
  accountNumber?: string;
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
    description: 'Thanksgiving Service.',
    ctaLabel: 'Register',
    accountNumber: 'EVT-001',
    color: 'from-blue-600 to-cyan-600',
  },
  
];
