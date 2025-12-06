/* Traducciones para el sitio */

export const translations: Record<string, Record<string, string>> = {
  es: {
    /* Navigation */
    'nav.home': 'Inicio',
    'nav.films': 'Films',
    'nav.about': 'Nosotros',
    'nav.news': 'Noticias',
    'nav.contact': 'Contacto',

    /* Home */
    'home.title': 'Verbena Films',
    'home.subtitle': 'Producciones Audiovisuales de Calidad',
    'home.cta': 'Conocer Más',
    'home.featured': 'Últimas Producciones',

    /* General */
    'common.language': 'Idioma',
    'common.spanish': 'Español',
    'common.english': 'English',
    'common.loading': 'Cargando...',
    'common.error': 'Error al cargar',
  },
  en: {
    /* Navigation */
    'nav.home': 'Home',
    'nav.films': 'Films',
    'nav.about': 'About',
    'nav.news': 'News',
    'nav.contact': 'Contact',

    /* Home */
    'home.title': 'Verbena Films',
    'home.subtitle': 'Quality Audiovisual Productions',
    'home.cta': 'Learn More',
    'home.featured': 'Latest Productions',

    /* General */
    'common.language': 'Language',
    'common.spanish': 'Español',
    'common.english': 'English',
    'common.loading': 'Loading...',
    'common.error': 'Error loading content',
  },
};

export function getTranslation(key: string, lang: string): string {
  return translations[lang]?.[key] || translations['es']?.[key] || key;
}

export function getDefaultLanguage(): string {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('language');
    if (stored) return stored;

    const browserLang = navigator.language.split('-')[0];
    return ['es', 'en'].includes(browserLang) ? browserLang : 'es';
  }
  return 'es';
}

export function setLanguage(lang: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lang);
  }
}
