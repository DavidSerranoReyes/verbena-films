/**
 * 📰 NEWS DATA
 * Datos de noticias - Ready para migrar a Strapi
 * Estructura preparada para integración con API
 *
 * ℹ️ Las noticias se ordenan automáticamente por fecha (más reciente primero)
 * Las primeras 2 noticias aparecen como "Destacadas"
 */

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string; // ISO format: YYYY-MM-DD
  category: 'award' | 'competition' | 'team' | 'general';
  externalUrl?: string;
  image?: string;
}

export const news: NewsItem[] = [
  {
    id: 'taranta-zinebi-award',
    title: 'TARANTA gana el premio ZINEBI NETWORKING de 10.000€',
    description:
      'El documental de Samuel Nacar ha sido galardonado con el premio Zinebi Networking, reconocimiento que destaca la excelencia profesional del proyecto.',
    date: '2025-01-15',
    category: 'award',
    externalUrl:
      'https://www.audiovisual451.com/correct-me-if-im-wrong-de-hao-zhou-gran-premio-de-la-67a-edicion-de-zinebi/',
  },
  {
    id: 'flores-alice-guy',
    title: 'FLORES PARA UNA MADRE AUSENTE gana el premio de guion ALICE GUY',
    description:
      'El guion de Ana Puentes es reconocido en los premios Alice Guy, destacando la escritura cinematográfica de calidad en la industria española.',
    date: '2025-01-10',
    category: 'award',
    externalUrl:
      'https://www.audiovisual451.com/flores-para-una-madre-ausente-y-olivia-ganan-los-premios-de-guion-mujeres-en-el-cine-alice-guy-2024/',
  },
  {
    id: 'taranta-zinebi-competition',
    title: 'TARANTA compite por el premio de ZINEBI NETWORKING',
    description:
      'El proyecto de Samuel Nacar es seleccionado entre 11 largometrajes documentales que compiten por los 30.000 euros del octavo foro profesional Zinebi Networking.',
    date: '2025-01-05',
    category: 'competition',
    externalUrl:
      'https://www.audiovisual451.com/11-proyectos-de-largometraje-documental-compiten-por-los-30-000-euros-del-octavo-foro-profesional-zinebi-networking/',
  },
  {
    id: 'ana-puentes-jasp',
    title:
      'ANA PUENTES en la lista de MUJERES "Jóvenes aunque sobradamente preparadas"',
    description:
      'Ana Puentes es incluida en la selección de mujeres JASP de la industria española por Audiovisual 451, reconociendo su talento y preparación profesional.',
    date: '2024-12-20',
    category: 'team',
    externalUrl:
      'https://www.audiovisual451.com/las-mujeres-jasp-de-la-industria-espanola-entrega-18/',
  },
];
