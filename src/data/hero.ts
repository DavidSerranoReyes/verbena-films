/**
 * 🎥 HERO VIDEOS DATA
 * Videos del hero carousel - Ready para Strapi
 */

export interface HeroVideoData {
  src: string;
  title: string; // Deprecated: use titleKey for translations
  titleKey: string; // Translation key for i18n
  director: string;
  year: string;
}

export const heroVideos: HeroVideoData[] = [
  {
    src: '/videos/bienvenus-home.mp4',
    title: 'BIENVENUS',
    titleKey: 'film.title.bienvenus',
    director: 'Ana Puentes',
    year: '2018',
  },
  {
    src: '/videos/mvap-corte-home.mp4',
    title: 'MI VIDA AL PRINCIPIO',
    titleKey: 'film.title.mivida',
    director: 'Ana Puentes',
    year: '2022',
  },
  {
    src: '/videos/elncs-home.mp4',
    title: 'EN LA NOCHE CAMINAMOS SOLOS',
    titleKey: 'film.title.noche',
    director: 'Rafa Alberola',
    year: '2024',
  },
];

/**
 * Obtener todos los videos del hero
 * @returns Array de videos
 */
export function getHeroVideos(): HeroVideoData[] {
  return heroVideos;
}

/**
 * Obtener video del hero por índice
 * @param index Índice del video
 * @returns Video o undefined
 */
export function getHeroVideoByIndex(index: number): HeroVideoData | undefined {
  return heroVideos[index];
}
