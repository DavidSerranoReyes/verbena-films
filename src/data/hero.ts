/**
 * 🎥 HERO VIDEOS DATA
 * Videos del hero carousel - Ready para Strapi
 */

export interface HeroVideoData {
  src: string;
  title: string;
  director: string;
  year: string;
}

export const heroVideos: HeroVideoData[] = [
  {
    src: '/videos/BIENVENUS_HOME.mp4',
    title: 'BIENVENUS',
    director: 'Ana Puentes',
    year: '2018',
  },
  {
    src: '/videos/MVAP_CORTE HOME.mp4',
    title: 'MI VIDA AL PRINCIPIO',
    director: 'Ana Puentes',
    year: '2022',
  },
  {
    src: '/videos/ELNCS_HOME.mp4',
    title: 'EN LA NOCHE CAMINAMOS SOLOS',
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
