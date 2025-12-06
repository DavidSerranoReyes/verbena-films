/* ===================================== */
/* 🌍 i18n CONFIGURATION                */
/* ===================================== */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as es from '../locales/es.json';
import * as en from '../locales/en.json';

// Detect browser language
const getBrowserLanguage = (): string => {
  if (typeof navigator === 'undefined') return 'es';

  const storedLang = localStorage.getItem('language');
  if (storedLang) return storedLang;

  const browserLang = navigator.language.split('-')[0];
  return ['es', 'en'].includes(browserLang) ? browserLang : 'es';
};

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
  },
  lng: getBrowserLanguage(),
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
