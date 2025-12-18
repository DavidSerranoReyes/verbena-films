/**
 * ⚙️ CONSTANTS
 * Constantes globales reutilizables
 */

/**
 * Breakpoints para media queries
 */
export const BREAKPOINTS = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1200px',
} as const;

/**
 * Tiempos de transición y animaciones
 */
export const TIMING = {
  fast: '0.2s',
  default: '0.3s',
  slow: '0.5s',
} as const;

/**
 * Easing functions para animaciones
 */
export const EASING = {
  linear: 'linear',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeInQuad: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
  easeOutQuad: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
} as const;

/**
 * Espaciado estándar (CSS variables mapping)
 */
export const SPACING = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
  '2xl': '4rem',
  '3xl': '6rem',
} as const;

/**
 * Colores del diseño
 */
export const COLORS = {
  darkBg: '#0f0f0f',
  darkSecondary: '#1a1a1a',
  darkTertiary: '#2a2a2a',
  textPrimary: '#ffffff',
  textSecondary: '#b0b0b0',
  accent: '#d4a8b8',
  accentHover: '#e0b8c8',
  border: '#333333',
  error: '#ff4444',
  success: '#44ff44',
} as const;

/**
 * Z-index layering
 */
export const Z_INDEX = {
  base: 0,
  content: 1,
  overlay: 10,
  modal: 2000,
  modalClose: 2001,
  navbar: 1000,
} as const;

/**
 * Duración de animaciones específicas
 */
export const ANIMATION_DURATION = {
  heroCarousel: 10000, // 10 segundos
  videoTransition: 800, // 0.8 segundos
  modalTransition: 300, // 0.3 segundos
} as const;

/**
 * Límites y configuración de paginación
 */
export const PAGINATION = {
  itemsPerPage: 12,
  defaultPage: 1,
} as const;
