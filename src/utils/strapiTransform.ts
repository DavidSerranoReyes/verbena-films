/**
 * 🔄 STRAPI TRANSFORMERS
 * Convierte datos de Strapi al formato interno de la aplicación
 */

import type { FilmData } from '../data/films';
import type { NewsItem } from '../data/news';

/**
 * Film de Strapi v5 (sin attributes)
 */
interface StrapiFilm {
  id: number;
  documentId: string;
  title: string;
  director: string;
  year: string;
  country: string;
  synopsis_es?: string;
  synopsis_en?: string;
  writer?: string;
  producers?: string;
  executiveProducer?: string;
  production?: string;
  awards?: string[];
  trailer_url?: string;
  imdb_url?: string;
  featured?: boolean;
  poster?: {
    id: number;
    url: string;
    alternativeText?: string;
    width?: number;
    height?: number;
  };
  images?: Array<{
    id: number;
    url: string;
    alternativeText?: string;
  }>;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

/**
 * News de Strapi v5
 */
interface StrapiNews {
  id: number;
  documentId: string;
  title: string;
  description: string;
  date: string;
  category: 'award' | 'competition' | 'team' | 'general';
  externalUrl?: string;
  image?: {
    id: number;
    url: string;
    alternativeText?: string;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

/**
 * Transforma un film de Strapi v5 al formato interno
 * @param strapiFilm - Film de Strapi
 * @param strapiUrl - URL base de Strapi
 * @returns Film en formato interno
 */
export function transformStrapiFilm(
  strapiFilm: StrapiFilm,
  strapiUrl: string = '',
): FilmData {
  // Helper para construir URL completa de imagen
  const getImageUrl = (url?: string): string => {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${strapiUrl}${url}`;
  };

  // ID único para Strapi (prefijo para evitar conflictos)
  const filmId = `strapi-${strapiFilm.id}`;

  return {
    id: filmId,
    title: strapiFilm.title || '',
    titleKey: filmId, // Usar el ID como key, no buscar en i18n
    director: strapiFilm.director || '',
    year: strapiFilm.year || '',
    country: strapiFilm.country || '',
    synopsis_es: strapiFilm.synopsis_es,
    synopsis_en: strapiFilm.synopsis_en,
    writer: strapiFilm.writer,
    producers: strapiFilm.producers,
    executiveProducer: strapiFilm.executiveProducer,
    production: strapiFilm.production,
    awards: strapiFilm.awards || [],
    trailer: strapiFilm.trailer_url || '',
    imdbUrl: strapiFilm.imdb_url,
    poster: getImageUrl(strapiFilm.poster?.url),
    images: strapiFilm.images?.map((img) => getImageUrl(img.url)) || [],
    // Agregar flag para identificar que viene de Strapi
    fromStrapi: true,
  } as any;
}

/**
 * Transforma múltiples films de Strapi v5
 * @param films - Array de films de Strapi
 * @param strapiUrl - URL base de Strapi
 * @returns Array de films en formato interno
 */
export function transformStrapiFilms(
  films: StrapiFilm[],
  strapiUrl: string = '',
): FilmData[] {
  if (!Array.isArray(films)) {
    return [];
  }
  return films.map((film) => transformStrapiFilm(film, strapiUrl));
}

/**
 * Transforma una noticia de Strapi v5 al formato interno
 * @param strapiNews - News de Strapi
 * @param strapiUrl - URL base de Strapi
 * @returns NewsItem en formato interno
 */
export function transformStrapiNewsItem(
  strapiNews: StrapiNews,
  strapiUrl: string = '',
): NewsItem {
  const getImageUrl = (url?: string): string => {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${strapiUrl}${url}`;
  };

  return {
    id: strapiNews.id.toString(),
    title: strapiNews.title || '',
    description: strapiNews.description || '',
    date: strapiNews.date || strapiNews.createdAt,
    category: strapiNews.category || 'general',
    externalUrl: strapiNews.externalUrl,
    image: getImageUrl(strapiNews.image?.url),
  };
}

/**
 * Transforma múltiples noticias de Strapi v5
 * @param news - Array de news de Strapi
 * @param strapiUrl - URL base de Strapi
 * @returns Array de news en formato interno
 */
export function transformStrapiNewsList(
  news: StrapiNews[],
  strapiUrl: string = '',
): NewsItem[] {
  if (!Array.isArray(news)) {
    return [];
  }
  return news.map((item) => transformStrapiNewsItem(item, strapiUrl));
}

/**
 * Helper para manejar errores de Strapi
 * @param error - Error de Strapi
 * @returns Mensaje de error formateado
 */
export function handleStrapiError(error: any): string {
  if (error?.error?.message) {
    return error.error.message;
  }
  if (typeof error === 'string') {
    return error;
  }
  return 'Error desconocido al conectar con Strapi';
}
