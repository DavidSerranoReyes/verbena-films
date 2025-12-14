/**
 * 🖼️ IMAGE UTILITIES
 * Funciones para manejo de imágenes (WebP, rutas, optimización)
 */

/**
 * Convierte una ruta de imagen a formato WebP
 * @param imagePath Ruta original de la imagen
 * @returns Ruta del archivo WebP
 *
 * @example
 * getWebpPath('/images/movies/film.jpg')
 * // Returns: '/images/movies/film.webp'
 */
export function getWebpPath(imagePath: string): string {
  return imagePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
}

/**
 * Extrae la extensión del archivo
 * @param imagePath Ruta de la imagen
 * @returns Extensión del archivo
 */
export function getImageExtension(imagePath: string): string {
  return imagePath.split('.').pop()?.toLowerCase() || '';
}

/**
 * Verifica si una imagen es WebP
 * @param imagePath Ruta de la imagen
 * @returns true si es WebP, false en otro caso
 */
export function isWebP(imagePath: string): boolean {
  return getImageExtension(imagePath) === 'webp';
}

/**
 * Obtiene nombre del archivo sin extensión
 * @param imagePath Ruta de la imagen
 * @returns Nombre del archivo
 */
export function getImageFileName(imagePath: string): string {
  return imagePath.split('/').pop()?.split('.')[0] || '';
}

/**
 * Genera atributo alt automático basado en nombre del archivo
 * @param imagePath Ruta de la imagen
 * @returns Texto descriptivo para alt
 */
export function getImageAlt(imagePath: string, fallback: string = ''): string {
  if (fallback) return fallback;

  const fileName = getImageFileName(imagePath);
  return fileName
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}
