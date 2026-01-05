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
      console.log('📡 Fetching films from Strapi...');
      const response = await fetchFilms();

      if (!response.error && response.data) {
        // Strapi v5 devuelve response.data.data
        const strapiData = (response.data as any).data || response.data;
        const strapiFilms = transformStrapiFilms(strapiData, STRAPI_URL);
        console.log(`✅ Loaded ${strapiFilms.length} films from Strapi`);

        // Combinar: Strapi primero, luego estáticos
        allFilms = [...strapiFilms, ...staticFilms];
        console.log(
          `📦 Total: ${allFilms.length} films (${strapiFilms.length} Strapi + ${staticFilms.length} static)`,
        );
      } else {
        console.error('❌ Strapi error:', response.error);
        console.log('📦 Fallback to static data');
        allFilms = staticFilms;
      }
    } else {
      console.log('📦 Using static films data');
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
      console.log('📡 Fetching news from Strapi...');
      const response = await fetchNews();

      if (!response.error && response.data) {
        // Strapi v5 devuelve response.data.data
        const strapiData = (response.data as any).data || response.data;
        const strapiNews = transformStrapiNewsList(strapiData, STRAPI_URL);
        console.log(`✅ Loaded ${strapiNews.length} news from Strapi`);

        // Combinar: Strapi primero, luego estáticas
        allNews = [...strapiNews, ...staticNews];
        console.log(
          `📦 Total: ${allNews.length} news (${strapiNews.length} Strapi + ${staticNews.length} static)`,
        );
      } else {
        console.error('❌ Strapi error:', response.error);
        console.log('📦 Fallback to static data');
        allNews = staticNews;
      }
    } else {
      console.log('📦 Using static news data');
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
