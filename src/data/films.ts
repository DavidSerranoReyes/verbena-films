/**
 * 🎬 FILMS DATA
 * Datos de películas - Ready para migrar a Strapi
 */

export interface FilmData {
  id: string;
  title: string; // Deprecated: use titleKey for translations
  titleKey: string; // Translation key for i18n (e.g., 'film.title.taranta')
  director: string;
  year: string;
  country: string;
  writer?: string;
  producers?: string;
  executiveProducer?: string;
  production?: string;
  awards?: string[];
  trailer?: string;
  poster: string;
  images?: string[];
}

export const films: FilmData[] = [
  {
    id: 'taranta',
    title: 'Taranta',
    titleKey: 'film.title.taranta',
    director: 'Samuel Nacar',
    country: 'España',
    year: '2026',
    writer: 'Claudia Barthelemy y Ana Puentes',
    producers: 'Ana Puentes, José Carlos de Isla y Paco Ortiz',
    production: 'Verbena Films, Sarao Films',
    awards: [
      'Premio Abycine Lanza',
      'Premio Abycine WIP',
      'Premio Zinebi Networking',
      'ICAA',
      'Junta de Andalucía',
      'Canal Sur',
      'RTVE',
    ],
    trailer: '',
    poster: '/images/movies/TARANTA.png',
  },
  {
    id: 'flores',
    title: 'Flores para una madre ausente',
    titleKey: 'film.title.flores',
    director: 'Ana Puentes',
    country: 'España',
    year: '2026',
    writer: 'Ana Puentes',
    producers: 'Sergy Moreno y Ana Puentes',
    executiveProducer: 'Adriana Vera',
    production: 'White Leaf Producciones, Verbena Films',
    awards: [
      'Premio Alice Guy de Guión',
      'ICAA - Selectivas 2025',
      'La Incubadora 7',
      'VentanaCineMad',
      'Abycine Lanza - Premio CMMedia',
    ],
    trailer: '',
    poster: '/images/movies/FLORES PARA UNA MADRE AUSENTE.jpeg',
  },
  {
    id: 'audicion',
    title: 'Audición',
    titleKey: 'film.title.audicion',
    director: 'Ana Puentes',
    country: 'España',
    year: '2026',
    writer: 'Ana Puentes',
    producers: 'Sergy Moreno y Ana Puentes',
    executiveProducer: 'Adriana Vera y Sandra Caballero',
    production: 'White Leaf Producciones, Verbena Films',
    awards: ['ICAA 2025', 'Comunidad de Madrid 2025'],
    trailer: '',
    poster: '/images/movies/AUDICIÓN.png',
  },
  {
    id: 'noche',
    title: 'En la noche caminamos solos',
    titleKey: 'film.title.noche',
    director: 'Rafa Alberola',
    year: '2024',
    country: 'España',
    writer: 'Rafa Alberola',
    producers: 'Ana Puentes, Jesús Choya, Guillermo Benet y Rafa Alberola',
    production:
      'Verbena Films, Pico 3 Cine, Guillermo Benet y Rafa Alberola, Marvin & Wayne',
    awards: [
      'Estreno en Sección Oficial de SEMINCI',
      'Sección Oficial Abycine',
      'Festival de Sevilla',
    ],
    trailer: '',
    poster: '/images/movies/EN LA NOCHE CAMINAMOS SOLOS.jpg',
    images: [
      '/images/movies/EN LA NOCHE CAMINAMOS SOLOS.jpg',
      '/images/movies/ELNCS_cartel.jpg',
    ],
  },
  {
    id: 'mivida',
    title: 'Mi vida al principio',
    titleKey: 'film.title.mivida',
    director: 'Ana Puentes',
    year: '2022',
    country: 'España',
    writer: 'Ana Puentes',
    producers: 'Sergy Moreno y Ana Puentes',
    production: 'White Leaf Producciones y Verbena Films',
    awards: [
      'Candidato al Goya 2024',
      'Sección oficial en la 35º Semana de Cine de Medina del Campo',
      'Festival de Sevilla',
      'Sección Oficial Abycine',
      'Premios Pávez',
      'Premios FUGAZ',
    ],
    trailer: 'https://vimeo.com/736976963?fl=pl&fe=sh',
    poster: '/images/movies/MI VIDA AL PRINCIPIO.jpg',
    images: [
      '/images/movies/MI VIDA AL PRINCIPIO.jpg',
      '/images/movies/MVAP_CARTEL.jpeg',
    ],
  },
  {
    id: 'bienvenus',
    title: 'Bienvenus',
    titleKey: 'film.title.bienvenus',
    director: 'Ana Puentes',
    year: '2018',
    country: 'España',
    writer: 'Ana Puentes',
    producers: 'Ana Puentes y Sergy Moreno',
    production: 'Verbena Films y White Leaf Producciones',
    awards: [
      'Premio Filmadrid',
      'Seleccionado en ABYCINE',
      'Festival de Cine de Madrid FCM-PNR',
      'American Documentary Festival',
      'Festival Directed by Women',
      'St Cloud Film Fest',
    ],
    trailer: 'https://vimeo.com/306275587?fl=pl&fe=sh',
    poster: '/images/movies/fotograma-bienvenus.jpg',
    images: [
      '/images/movies/fotograma-bienvenus.jpg',
      '/images/movies/CARTEL-BIENVENUS_LAURELES.jpg',
    ],
  },
];

/**
 * Obtener todas las películas
 * @param limit Número máximo de películas a retornar
 * @returns Array de películas
 */
export function getAllFilms(limit?: number): FilmData[] {
  return limit ? films.slice(0, limit) : films;
}

/**
 * Obtener película por ID
 * @param id ID de la película
 * @returns Película o undefined
 */
export function getFilmById(id: string): FilmData | undefined {
  return films.find((film) => film.id === id);
}

/**
 * Obtener películas por año
 * @param year Año de las películas
 * @returns Array de películas del año especificado
 */
export function getFilmsByYear(year: string): FilmData[] {
  return films.filter((film) => film.year === year);
}
