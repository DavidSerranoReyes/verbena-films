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
 *
 * - Imágenes locales: se cambia la extensión (junto al .jpg existe el .webp).
 * - Imágenes de Cloudinary (las que sube la clienta desde Strapi): no existe
 *   un `.webp` al lado, así que se pide el WebP a Cloudinary con su
 *   transformación `f_webp,q_auto`. Sin esto, el póster salía ROTO en la web.
 * - Cualquier otra URL externa se deja tal cual.
 */
export function getWebpPath(imagePath: string): string {
  if (!imagePath) return imagePath;

  if (/^https?:\/\//i.test(imagePath)) {
    const cloudinary = imagePath.match(
      /^(https?:\/\/res\.cloudinary\.com\/[^/]+\/image\/upload\/)(.+)$/i,
    );
    if (cloudinary) {
      const [, base, resto] = cloudinary;
      if (/\bf_(webp|auto)\b/i.test(resto)) return imagePath; // ya venía optimizada
      return `${base}f_webp,q_auto/${resto}`;
    }
    return imagePath; // otro CDN: no se toca
  }

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
