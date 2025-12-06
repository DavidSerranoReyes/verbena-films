/**
 * 🎬 SITE CONFIGURATION
 * Global site configuration and constants
 */

export const SITE_CONFIG = {
  title: 'Verbena Films',
  description: 'Producciones audiovisuales de excelencia',
  author: 'Verbena Films',
  siteName: 'Verbena Films',
  siteUrl: 'https://verbena-films.com',
  
  socialLinks: {
    instagram: 'https://instagram.com/verbeafilms',
    linkedin: 'https://linkedin.com/company/verbena-films',
    youtube: 'https://youtube.com/@verbeafilms',
  },
  
  // API Configuration
  api: {
    strapiUrl: process.env.PUBLIC_STRAPI_URL || 'http://localhost:1337',
  },
  
  // Navigation items
  navigation: [
    { id: 'home', label: 'home', href: '/' },
    { id: 'films', label: 'films', href: '/films' },
    { id: 'about', label: 'about', href: '/about' },
    { id: 'news', label: 'news', href: '/news' },
  ],
};

// Breakpoints
export const BREAKPOINTS = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1200px',
};

// Animation timing
export const TIMING = {
  fast: '0.2s',
  default: '0.3s',
  slow: '0.5s',
};
