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
  titleKey: string; // Key para traducción
  descriptionKey: string; // Key para traducción
  date: string; // ISO format: YYYY-MM-DD
  category: 'award' | 'competition' | 'team' | 'general';
  externalUrl?: string;
  image?: string;
}

export const news: NewsItem[] = [
  {
    id: 'taranta-zinebi-award',
    titleKey: 'news.taranta-zinebi-award.title',
    descriptionKey: 'news.taranta-zinebi-award.description',
    date: '2025-01-15',
    category: 'award',
    externalUrl:
      'https://www.audiovisual451.com/correct-me-if-im-wrong-de-hao-zhou-gran-premio-de-la-67a-edicion-de-zinebi/',
  },
  {
    id: 'flores-alice-guy',
    titleKey: 'news.flores-alice-guy.title',
    descriptionKey: 'news.flores-alice-guy.description',
    date: '2025-01-10',
    category: 'award',
    externalUrl:
      'https://www.audiovisual451.com/flores-para-una-madre-ausente-y-olivia-ganan-los-premios-de-guion-mujeres-en-el-cine-alice-guy-2024/',
  },
  {
    id: 'taranta-zinebi-competition',
    titleKey: 'news.taranta-zinebi-competition.title',
    descriptionKey: 'news.taranta-zinebi-competition.description',
    date: '2025-01-05',
    category: 'competition',
    externalUrl:
      'https://www.audiovisual451.com/11-proyectos-de-largometraje-documental-compiten-por-los-30-000-euros-del-octavo-foro-profesional-zinebi-networking/',
  },
  {
    id: 'ana-puentes-jasp',
    titleKey: 'news.ana-puentes-jasp.title',
    descriptionKey: 'news.ana-puentes-jasp.description',
    date: '2024-12-20',
    category: 'team',
    externalUrl:
      'https://www.audiovisual451.com/las-mujeres-jasp-de-la-industria-espanola-entrega-18/',
  },
];
