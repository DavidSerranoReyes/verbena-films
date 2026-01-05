/**
 * ⚙️ CONFIGURACIÓN CENTRALIZADA
 * Todas las variables de entorno y configuración del proyecto
 *
 * Este archivo centraliza TODA la configuración para evitar duplicados
 * y facilitar el mantenimiento.
 */

/**
 * Configuración de Strapi
 */
export const STRAPI_CONFIG = {
  enabled: import.meta.env.PUBLIC_USE_STRAPI === 'true',
  url: import.meta.env.PUBLIC_STRAPI_URL || 'http://localhost:1337',
  token: import.meta.env.STRAPI_API_TOKEN || '',

  endpoints: {
    films: '/api/films',
    news: '/api/articles',
    team: '/api/team',
  },

  // Opciones de query por defecto
  defaultQuery: {
    populate: '*',
    sort: {
      films: 'year:desc',
      news: 'date:desc',
    },
  },
} as const;

/**
 * Información del sitio
 */
export const SITE_INFO = {
  title: 'Verbena Films',
  description: 'Producciones audiovisuales de excelencia',
  author: 'Verbena Films',
  siteUrl: import.meta.env.PUBLIC_SITE_URL || 'https://verbenafilms.com',
  language: 'es',
  defaultLanguage: 'es' as const,
  supportedLanguages: ['es', 'en'] as const,
} as const;

/**
 * Información de contacto
 */
export const CONTACT_INFO = {
  email: 'ana@verbenafilms.com',
  location: 'Madrid, España',
  phone: '', // Agregar si es necesario
} as const;

/**
 * Enlaces de redes sociales
 */
export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/verbeafilms',
  linkedin: 'https://linkedin.com/company/verbena-films',
  youtube: 'https://youtube.com/@verbeafilms',
  email: 'mailto:ana@verbenafilms.com',
} as const;

/**
 * Navegación principal
 */
export const NAVIGATION = [
  { id: 'home', labelKey: 'nav.home', href: '/' },
  { id: 'films', labelKey: 'nav.films', href: '/films' },
  { id: 'about', labelKey: 'nav.about', href: '/about' },
  { id: 'news', labelKey: 'nav.news', href: '/news' },
] as const;

/**
 * Features habilitados
 */
export const FEATURES = {
  darkMode: true,
  i18n: true,
  seo: true,
  analytics: false,
} as const;

/**
 * Breakpoints responsivos
 */
export const BREAKPOINTS = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
  wide: 1200,
} as const;

/**
 * Tiempos y animaciones
 */
export const ANIMATION = {
  duration: {
    fast: 200,
    default: 300,
    slow: 500,
    heroCarousel: 10000,
    videoTransition: 800,
  },
  easing: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

/**
 * Paleta de colores
 */
export const COLORS = {
  bg: {
    primary: '#0f0f0f',
    secondary: '#1a1a1a',
    tertiary: '#2a2a2a',
  },
  text: {
    primary: '#ffffff',
    secondary: '#b0b0b0',
  },
  accent: {
    primary: '#d4a8b8',
    hover: '#e0b8c8',
  },
  border: '#333333',
  status: {
    error: '#ff4444',
    success: '#44ff44',
    warning: '#ffaa44',
  },
} as const;

/**
 * Z-index layering
 */
export const Z_INDEX = {
  base: 0,
  content: 1,
  overlay: 10,
  navbar: 1000,
  modal: 2000,
  modalClose: 2001,
} as const;

/**
 * Paginación
 */
export const PAGINATION = {
  itemsPerPage: 12,
  defaultPage: 1,
  newsPerPage: 10,
  featuredNewsCount: 2,
} as const;

/**
 * Cache configuration
 */
export const CACHE = {
  enabled: true,
  ttl: 3600000, // 1 hora en ms
} as const;

/**
 * Helpers para usar la configuración
 */

/**
 * Verifica si Strapi está habilitado
 */
export function isStrapiEnabled(): boolean {
  return STRAPI_CONFIG.enabled;
}

/**
 * Obtiene la URL completa de un endpoint de Strapi
 */
export function getStrapiEndpoint(
  endpoint: keyof typeof STRAPI_CONFIG.endpoints,
): string {
  return `${STRAPI_CONFIG.url}${STRAPI_CONFIG.endpoints[endpoint]}`;
}

/**
 * Obtiene la URL completa del sitio
 */
export function getSiteUrl(path: string = ''): string {
  return `${SITE_INFO.siteUrl}${path}`;
}

/**
 * Verifica si un idioma es soportado
 */
export function isSupportedLanguage(lang: string): lang is 'es' | 'en' {
  return SITE_INFO.supportedLanguages.includes(lang as any);
}

/**
 * Obtiene el breakpoint en píxeles
 */
export function getBreakpoint(size: keyof typeof BREAKPOINTS): number {
  return BREAKPOINTS[size];
}

/**
 * Exportar toda la configuración como objeto único (opcional)
 */
export const CONFIG = {
  strapi: STRAPI_CONFIG,
  site: SITE_INFO,
  contact: CONTACT_INFO,
  social: SOCIAL_LINKS,
  navigation: NAVIGATION,
  features: FEATURES,
  breakpoints: BREAKPOINTS,
  animation: ANIMATION,
  colors: COLORS,
  zIndex: Z_INDEX,
  pagination: PAGINATION,
  cache: CACHE,
} as const;

/**
 * Type exports para TypeScript
 */
export type Language = (typeof SITE_INFO.supportedLanguages)[number];
export type NavigationItem = (typeof NAVIGATION)[number];
export type StrapiEndpoint = keyof typeof STRAPI_CONFIG.endpoints;
