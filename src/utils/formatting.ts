/**
 * 📝 FORMATTING UTILITIES
 * Funciones para formateo de datos
 */

/**
 * Formatea una fecha a formato legible (ES/EN)
 * @param date Fecha a formatear
 * @param lang Idioma ('es' o 'en')
 * @returns Fecha formateada
 *
 * @example
 * formatDate(new Date('2025-12-14'), 'es')
 * // Returns: '14 de diciembre de 2025'
 */
export function formatDate(
  date: Date | string,
  lang: 'es' | 'en' = 'es',
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return dateObj.toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', options);
}

/**
 * Trunca un texto a una longitud máxima
 * @param text Texto a truncar
 * @param maxLength Longitud máxima
 * @param suffix Sufijo (ej: '...')
 * @returns Texto truncado
 *
 * @example
 * truncateText('Lorem ipsum dolor sit amet', 10)
 * // Returns: 'Lorem ipsu...'
 */
export function truncateText(
  text: string,
  maxLength: number,
  suffix: string = '...',
): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - suffix.length) + suffix;
}

/**
 * Convierte un string a slug URL-friendly
 * @param text Texto a convertir
 * @returns Slug formateado
 *
 * @example
 * textToSlug('Mi Vida Al Principio')
 * // Returns: 'mi-vida-al-principio'
 */
export function textToSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Capitaliza la primera letra de un string
 * @param text Texto a capitalizar
 * @returns Texto capitalizado
 */
export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

/**
 * Convierte string a Title Case
 * @param text Texto a convertir
 * @returns Texto en Title Case
 *
 * @example
 * titleCase('mi vida al principio')
 * // Returns: 'Mi Vida Al Principio'
 */
export function titleCase(text: string): string {
  return text
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Obtiene el nombre del mes en string
 * @param monthIndex Índice del mes (0-11)
 * @param lang Idioma ('es' o 'en')
 * @returns Nombre del mes
 */
export function getMonthName(
  monthIndex: number,
  lang: 'es' | 'en' = 'es',
): string {
  const months: Record<'es' | 'en', string[]> = {
    es: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ],
    en: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  };

  return months[lang][monthIndex] || '';
}

/**
 * Formatea un número como moneda
 * @param amount Cantidad a formatear
 * @param currency Código de moneda (ej: 'EUR', 'USD')
 * @param lang Idioma ('es' o 'en')
 * @returns Número formateado como moneda
 */
export function formatCurrency(
  amount: number,
  currency: string = 'EUR',
  lang: 'es' | 'en' = 'es',
): string {
  return new Intl.NumberFormat(lang === 'es' ? 'es-ES' : 'en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

/**
 * Convierte un string de URL Vimeo a embed URL
 * @param url URL de Vimeo
 * @returns URL embed lista para iframe
 *
 * @example
 * getVimeoEmbedUrl('https://vimeo.com/306275587')
 * // Returns: 'https://player.vimeo.com/video/306275587'
 */
export function getVimeoEmbedUrl(url: string): string {
  if (!url) return '';

  const match = url.match(/(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/);
  return match && match[1] ? `https://player.vimeo.com/video/${match[1]}` : url;
}
