/**
 * 🔄 DATA SERVICE
 * Servicio unificado que maneja datos estáticos y de Strapi
 * Facilita la transición gradual a Strapi
 */

import { films as staticFilms, type FilmData } from '../data/films';
import { news as staticNews, type NewsItem } from '../data/news';
import { fetchFilms, fetchNews } from './api';
import {
  transformStrapiFilms,
  transformStrapiNewsList,
  handleStrapiError,
} from '../utils/strapiTransform';
import { STRAPI_CONFIG, isStrapiEnabled } from '../config';

/**
 * Configuración del servicio de datos
 */
const USE_STRAPI = isStrapiEnabled();
const STRAPI_URL = STRAPI_CONFIG.url;

/**
 * 🎬 FILMS SERVICE
 */

/**
 * Obtener todas las películas (Strapi o estático)
 * @param limit Número máximo de películas (opcional)
 * @returns Array de películas
 */
export async function getFilms(limit?: number): Promise<FilmData[]> {
  let allFilms: FilmData[] = [];

  try {
    if (USE_STRAPI) {
      console.log('📡 [FILMS] Fetching from Strapi (timeout: 5s)...');
      const startTime = Date.now();
      const response = await fetchFilms();
      const duration = Date.now() - startTime;

      if (!response.error && response.data) {
        // Strapi v5 devuelve response.data.data
        const strapiData = (response.data as any).data || response.data;
        const strapiFilms = transformStrapiFilms(strapiData, STRAPI_URL);
        console.log(
          `✅ [FILMS] Loaded ${strapiFilms.length} from Strapi (${duration}ms)`,
        );

        // Combinar: Strapi primero, luego estáticos
        allFilms = [...strapiFilms, ...staticFilms];
        console.log(
          `📦 [FILMS] Total: ${allFilms.length} (${strapiFilms.length} Strapi + ${staticFilms.length} static)`,
        );
      } else {
        console.warn(
          `⚠️  [FILMS] Strapi failed after ${duration}ms: ${response.error}`,
        );
        console.log('📦 [FILMS] Using fallback: static data');
        allFilms = staticFilms;
      }
    } else {
      console.log('📦 [FILMS] Strapi disabled - using static data');
      allFilms = staticFilms;
    }

    return limit ? allFilms.slice(0, limit) : allFilms;
  } catch (error) {
    console.error('❌ Error loading films:', handleStrapiError(error));
    console.log('📦 Fallback to static data');
    return limit ? staticFilms.slice(0, limit) : staticFilms;
  }
}

/**
 * Obtener una película por ID
 * @param id ID de la película
 * @returns Película o undefined
 */
export async function getFilmById(id: string): Promise<FilmData | undefined> {
  const films = await getFilms();
  return films.find((film) => film.id === id);
}

/**
 * Obtener películas por año
 * @param year Año de las películas
 * @returns Array de películas del año especificado
 */
export async function getFilmsByYear(year: string): Promise<FilmData[]> {
  const films = await getFilms();
  return films.filter((film) => film.year === year);
}

/**
 * 📰 NEWS SERVICE
 */

/**
 * Obtener todas las noticias (Strapi o estático)
 * @param limit Número máximo de noticias (opcional)
 * @returns Array de noticias ordenadas por fecha
 */
export async function getNews(limit?: number): Promise<NewsItem[]> {
  let allNews: NewsItem[] = [];

  try {
    if (USE_STRAPI) {
      console.log('📡 [NEWS] Fetching from Strapi (timeout: 5s)...');
      const startTime = Date.now();
      const response = await fetchNews();
      const duration = Date.now() - startTime;

      if (!response.error && response.data) {
        // Strapi v5 devuelve response.data.data
        const strapiData = (response.data as any).data || response.data;
        const strapiNews = transformStrapiNewsList(strapiData, STRAPI_URL);
        console.log(
          `✅ [NEWS] Loaded ${strapiNews.length} from Strapi (${duration}ms)`,
        );

        // Combinar: Strapi primero, luego estáticas
        allNews = [...strapiNews, ...staticNews];
        console.log(
          `📦 [NEWS] Total: ${allNews.length} (${strapiNews.length} Strapi + ${staticNews.length} static)`,
        );
      } else {
        console.warn(
          `⚠️  [NEWS] Strapi failed after ${duration}ms: ${response.error}`,
        );
        console.log('📦 [NEWS] Using fallback: static data');
        allNews = staticNews;
      }
    } else {
      console.log('📦 [NEWS] Strapi disabled - using static data');
      allNews = staticNews;
    }

    // Ordenar por fecha (más reciente primero)
    const sortedNews = allNews.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

    return limit ? sortedNews.slice(0, limit) : sortedNews;
  } catch (error) {
    console.error('❌ Error loading news:', handleStrapiError(error));
    console.log('📦 Fallback to static data');
    return limit ? staticNews.slice(0, limit) : staticNews;
  }
}

/**
 * Obtener noticias destacadas (primeras 2)
 * @returns Array con las 2 noticias más recientes
 */
export async function getFeaturedNews(): Promise<NewsItem[]> {
  return getNews(2);
}

/**
 * Obtener noticias por categoría
 * @param category Categoría de las noticias
 * @returns Array de noticias filtradas
 */
export async function getNewsByCategory(
  category: 'award' | 'competition' | 'team' | 'general',
): Promise<NewsItem[]> {
  const allNews = await getNews();
  return allNews.filter((item) => item.category === category);
}

/**
 * 🔧 UTILITIES
 */

/**
 * Verificar si Strapi está disponible
 * @returns true si Strapi responde correctamente
 */
export async function checkStrapiConnection(): Promise<boolean> {
  try {
    const response = await fetch(`${STRAPI_URL}/api/films?pagination[limit]=1`);
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Obtener información del sistema de datos
 * @returns Información sobre qué sistema se está usando
 */
export function getDataSourceInfo() {
  return {
    useStrapi: USE_STRAPI,
    strapiUrl: STRAPI_URL,
    mode: USE_STRAPI ? 'Strapi API' : 'Static Data',
  };
}
