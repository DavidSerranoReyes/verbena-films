/**
 * 🔗 API SERVICE
 * Cliente HTTP genérico para Strapi
 * Fácil de mantener y actualizar
 */

import { STRAPI_CONFIG } from '../config';

// Timeout para requests (5 segundos) - para hacer fallback rápido
const REQUEST_TIMEOUT = 5000;

interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
}

/**
 * Cliente API para comunicarse con Strapi
 */
class ApiClient {
  private baseUrl: string;
  private apiToken?: string;

  constructor(baseUrl: string = STRAPI_CONFIG.url, apiToken?: string) {
    this.baseUrl = baseUrl;
    this.apiToken = apiToken || STRAPI_CONFIG.token;
  }

  /**
   * Realiza una petición GET
   * @param endpoint Ruta del endpoint (ej: '/api/films')
   * @param options Opciones adicionales de fetch
   * @returns Respuesta de la API
   */
  async get<T>(
    endpoint: string,
    options?: FetchOptions,
  ): Promise<ApiResponse<T>> {
    return this.request<T>('GET', endpoint, undefined, options);
  }

  /**
   * Realiza una petición POST
   * @param endpoint Ruta del endpoint
   * @param data Datos a enviar
   * @param options Opciones adicionales de fetch
   * @returns Respuesta de la API
   */
  async post<T>(
    endpoint: string,
    data?: unknown,
    options?: FetchOptions,
  ): Promise<ApiResponse<T>> {
    return this.request<T>('POST', endpoint, data, options);
  }

  /**
   * Realiza una petición PUT
   * @param endpoint Ruta del endpoint
   * @param data Datos a enviar
   * @param options Opciones adicionales de fetch
   * @returns Respuesta de la API
   */
  async put<T>(
    endpoint: string,
    data?: unknown,
    options?: FetchOptions,
  ): Promise<ApiResponse<T>> {
    return this.request<T>('PUT', endpoint, data, options);
  }

  /**
   * Realiza una petición DELETE
   * @param endpoint Ruta del endpoint
   * @param options Opciones adicionales de fetch
   * @returns Respuesta de la API
   */
  async delete<T>(
    endpoint: string,
    options?: FetchOptions,
  ): Promise<ApiResponse<T>> {
    return this.request<T>('DELETE', endpoint, undefined, options);
  }

  /**
   * Realiza una petición genérica
   * @private
   */
  private async request<T>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    endpoint: string,
    data?: unknown,
    options?: FetchOptions,
  ): Promise<ApiResponse<T>> {
    try {
      const url = `${this.baseUrl}${endpoint}`;

      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        ...options?.headers,
      };

      if (this.apiToken) {
        headers['Authorization'] = `Bearer ${this.apiToken}`;
      }

      const fetchOptions: FetchOptions = {
        method,
        headers,
        ...options,
      };

      if (data) {
        fetchOptions.body = JSON.stringify(data);
      }

      // Crear un AbortController para timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

      try {
        const response = await fetch(url, {
          ...fetchOptions,
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          return {
            error: `HTTP ${response.status}: ${response.statusText}`,
            status: response.status,
          };
        }

        const responseData = (await response.json()) as T;
        return {
          data: responseData,
          status: response.status,
        };
      } catch (fetchError) {
        clearTimeout(timeoutId);
        throw fetchError;
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      return {
        error: `Request failed: ${errorMessage}`,
        status: 0,
      };
    }
  }

  /**
   * Actualiza el URL base (útil para cambiar entre dev/prod)
   */
  setBaseUrl(url: string): void {
    this.baseUrl = url;
  }

  /**
   * Actualiza el token de autenticación
   */
  setApiToken(token: string): void {
    this.apiToken = token;
  }
}

// Exportar instancia singleton
export const apiClient = new ApiClient();

/**
 * 🎬 FILMS API
 * Métodos específicos para trabajar con películas
 */

/**
 * Obtener todas las películas
 * @param options Opciones de consulta (sort, filters, etc.)
 * @returns Array de películas de Strapi
 */
export async function fetchFilms(options?: {
  sort?: string;
  filters?: Record<string, unknown>;
  populate?: string;
}) {
  const params = new URLSearchParams();

  // Sort
  if (options?.sort) {
    params.append('sort', options.sort);
  } else {
    params.append('sort', 'year:desc'); // Por defecto ordenar por año descendente
  }

  // Populate (incluir imágenes y relaciones)
  if (options?.populate) {
    params.append('populate', options.populate);
  } else {
    params.append('populate', '*'); // Incluir todo por defecto
  }

  // Filters
  if (options?.filters) {
    Object.entries(options.filters).forEach(([key, value]) => {
      params.append(`filters[${key}]`, String(value));
    });
  }

  const endpoint = `/api/films?${params.toString()}`;
  return apiClient.get(endpoint);
}

/**
 * Obtener una película por ID
 * @param id ID de la película
 * @returns Película específica
 */
export async function fetchFilmById(id: string) {
  return apiClient.get(`/api/films/${id}?populate=*`);
}

/**
 * 📰 NEWS API
 * Métodos específicos para trabajar con noticias
 */

/**
 * Obtener todas las noticias
 * @param options Opciones de consulta
 * @returns Array de noticias de Strapi
 */
export async function fetchNews(options?: {
  sort?: string;
  filters?: Record<string, unknown>;
  populate?: string;
  pagination?: {
    page?: number;
    pageSize?: number;
  };
}) {
  const params = new URLSearchParams();

  // Sort
  if (options?.sort) {
    params.append('sort', options.sort);
  } else {
    params.append('sort', 'date:desc'); // Por defecto ordenar por fecha descendente
  }

  // Populate
  if (options?.populate) {
    params.append('populate', options.populate);
  } else {
    params.append('populate', '*');
  }

  // Pagination
  if (options?.pagination?.page) {
    params.append('pagination[page]', String(options.pagination.page));
  }
  if (options?.pagination?.pageSize) {
    params.append('pagination[pageSize]', String(options.pagination.pageSize));
  }

  // Filters
  if (options?.filters) {
    Object.entries(options.filters).forEach(([key, value]) => {
      params.append(`filters[${key}]`, String(value));
    });
  }

  const endpoint = `${STRAPI_CONFIG.endpoints.news}?${params.toString()}`;
  return apiClient.get(endpoint);
}

/**
 * Obtener una noticia por ID
 * @param id ID de la noticia
 * @returns Noticia específica
 */
export async function fetchNewsById(id: string) {
  return apiClient.get(`${STRAPI_CONFIG.endpoints.news}/${id}?populate=*`);
}

/**
 * Obtener noticias por categoría
 * @param category Categoría de las noticias
 * @returns Array de noticias filtradas
 */
export async function fetchNewsByCategory(
  category: 'award' | 'competition' | 'team' | 'general',
) {
  return fetchNews({
    filters: { category: { $eq: category } },
  });
}

export default ApiClient;
