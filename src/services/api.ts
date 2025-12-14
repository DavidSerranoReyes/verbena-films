/**
 * 🔗 API SERVICE
 * Cliente HTTP genérico para Strapi
 * Fácil de mantener y actualizar
 */

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

  constructor(
    baseUrl: string = import.meta.env.PUBLIC_STRAPI_URL ||
      'http://localhost:1337',
    apiToken?: string,
  ) {
    this.baseUrl = baseUrl;
    this.apiToken = apiToken;
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

      const response = await fetch(url, fetchOptions);

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

export default ApiClient;
