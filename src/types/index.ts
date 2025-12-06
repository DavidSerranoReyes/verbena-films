/**
 * 🎬 VERBENA FILMS - TypeScript Types
 * Global types and interfaces
 */

export interface Film {
  id: string;
  title: string;
  description: string;
  year: number;
  thumbnail: string;
  video?: string;
  genre?: string;
  director?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: Date;
  author?: string;
  image?: string;
  category?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  image: string;
  social?: {
    instagram?: string;
    linkedin?: string;
    email?: string;
  };
}

export type LanguageCode = 'es' | 'en';

export interface SiteConfig {
  title: string;
  description: string;
  author: string;
  siteName: string;
  siteUrl: string;
  socialLinks?: {
    instagram?: string;
    linkedin?: string;
    youtube?: string;
    twitter?: string;
  };
}
