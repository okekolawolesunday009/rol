// ─── Core Domain Types ───────────────────────────────────────────────────────

export interface AudioSermon {
  id: string;
  title: string;
  speaker: string;
  audioUrl: string;
  duration?: string;
  date?: string;
  description?: string;
  series?: string;
}

export interface VideoSermon {
  id: string;
  title: string;
  videoUrl: string;       // YouTube embed URL
  thumbnail: string;
  description?: string;
  speaker?: string;
  date?: string;
  duration?: string;
}

export interface ChurchEvent {
  id: string;
  title: string;
  date: string;           // Day number e.g. "14"
  month: string;          // e.g. "MARCH"
  time: string;           // e.g. "9:00 AM"
  location: string;       // e.g. "Main Auditorium"
  description?: string;
  ctaLabel?: string;      // e.g. "Register" | "Details" | "Join Us"
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  category: string;
  caption: string;
  colSpan?: number;
  rowSpan?: number;
}

// ─── Admin Types ─────────────────────────────────────────────────────────────

export type AdminTab = 'audio' | 'video' | 'events';

export interface AdminUser {
  email: string;
  token: string;
}
