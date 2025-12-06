/**
 * 🌍 i18n UTILITIES
 * Internationalization helper functions
 */

import es from '../locales/es.json';
import en from '../locales/en.json';

type Language = 'es' | 'en';
type Translations = typeof es;

const translations: Record<Language, Translations> = {
  es,
  en,
};

/**
 * Get translation for a given key
 * @param key - Dot notation key (e.g., 'nav.home')
 * @param lang - Language code ('es' or 'en')
 * @returns Translated string
 */
export function t(key: string, lang: Language = 'es'): string {
  const keys = key.split('.');
  let value: any = translations[lang];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // Fallback to key if not found
    }
  }

  return typeof value === 'string' ? value : key;
}

/**
 * Get current language from localStorage or browser preference
 */
export function getCurrentLanguage(): Language {
  if (typeof window === 'undefined') return 'es';

  const stored = localStorage.getItem('language');
  if (stored === 'en' || stored === 'es') return stored;

  const browserLang = navigator.language.split('-')[0];
  return browserLang === 'en' ? 'en' : 'es';
}

/**
 * Set language preference
 */
export function setLanguage(lang: Language): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lang);
  }
}

/**
 * Get all translations for a language
 */
export function getTranslations(lang: Language = 'es'): Translations {
  return translations[lang];
}
