/**
 * 🎬 SITE CONFIGURATION
 * Global site configuration and constants
 */

export const SITE_CONFIG = {
  // Metadata
  title: 'Verbena Films',
  description: 'Producciones audiovisuales de excelencia',
  author: 'Verbena Films',
  siteName: 'Verbena Films',
  siteUrl: 'https://verbena-films.com',
  language: 'es',

  // Social Links
  socialLinks: {
    instagram: 'https://instagram.com/verbeafilms',
    linkedin: 'https://linkedin.com/company/verbena-films',
    youtube: 'https://youtube.com/@verbeafilms',
    email: 'ana@verbenafilms.com',
  },

  // API Configuration - Strapi
  api: {
    strapiUrl: import.meta.env.PUBLIC_STRAPI_URL || 'http://localhost:1337',
    strapiToken: import.meta.env.STRAPI_API_TOKEN || '',
    // Endpoints
    endpoints: {
      films: '/api/films',
      news: '/api/news',
      team: '/api/team',
    },
    // Cache configuration
    cache: {
      enabled: true,
      ttl: 3600000, // 1 hora en ms
    },
  },

  // Navigation items
  navigation: [
    { id: 'home', label: 'home', href: '/' },
    { id: 'films', label: 'films', href: '/films' },
    { id: 'about', label: 'about', href: '/about' },
    { id: 'news', label: 'news', href: '/news' },
  ],

  // Features
  features: {
    darkMode: true,
    i18n: true,
    seo: true,
  },

  // Contact information
  contact: {
    email: 'ana@verbenafilms.com',
    location: 'Madrid - España',
    phone: '', // Agregar si es necesario
  },
};
