/**
 * 🎬 STRAPI FILMS CONFIGURATION
 *
 * Esta es la estructura que debe tener la colección "Films" en Strapi
 * Copia esta estructura al crear la colección en tu instancia de Strapi
 */

// Estructura de la Colección "films" en Strapi

export const FILMS_COLLECTION_SCHEMA = {
  collectionName: 'films',
  info: {
    singularName: 'film',
    pluralName: 'films',
    displayName: 'Films',
    description: 'Películas de Verbena Films',
  },
  attributes: {
    // Campos obligatorios
    title: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 255,
      help: 'Título de la película (ej: Taranta)',
    },

    director: {
      type: 'string',
      required: true,
      help: 'Nombre del director/a (ej: Samuel Nacar)',
    },

    year: {
      type: 'string',
      required: true,
      help: 'Año de producción o estado (ej: 2024, En Producción, En Rodaje)',
    },

    country: {
      type: 'string',
      required: true,
      help: 'País o países de origen (ej: España, España-Francia)',
    },

    poster: {
      type: 'media',
      multiple: false,
      required: true,
      allowedTypes: ['images'],
      help: 'Imagen principal de la película (300x450px mínimo)',
    },

    // Campos opcionales
    writer: {
      type: 'string',
      required: false,
      help: 'Guionista/s (ej: Ana Puentes, Claudia Barthelemy)',
    },

    producers: {
      type: 'string',
      required: false,
      help: 'Productor/es (ej: Ana Puentes, José Carlos de Isla)',
    },

    executiveProducer: {
      type: 'string',
      required: false,
      help: 'Productor/a ejecutivo/a (ej: Adriana Vera)',
    },

    production: {
      type: 'string',
      required: false,
      help: 'Empresas productoras (ej: Verbena Films, White Leaf Producciones)',
    },

    awards: {
      type: 'json',
      required: false,
      help: 'Array de premios y festivales',
      example: [
        'Premio Alice Guy de Guión',
        'ICAA 2025',
        'Festival de Sevilla',
      ],
    },

    trailer: {
      type: 'string',
      required: false,
      help: 'ID de Vimeo (solo el número, ej: 123456789)',
    },

    images: {
      type: 'media',
      multiple: true,
      required: false,
      allowedTypes: ['images'],
      help: 'Galería de imágenes adicionales de la película',
    },

    synopsis: {
      type: 'richtext',
      required: false,
      help: 'Sinopsis completa de la película',
    },

    // Metadata
    createdAt: {
      type: 'datetime',
      required: true,
    },

    updatedAt: {
      type: 'datetime',
      required: true,
    },
  },
};

/**
 * EJEMPLO: Estructura de una película en JSON (como viene de Strapi)
 */
export const EXAMPLE_FILM_JSON = {
  id: 1,
  attributes: {
    title: 'Taranta',
    director: 'Samuel Nacar',
    year: '2018',
    country: 'España',
    writer: 'Claudia Barthelemy y Ana Puentes',
    producers: 'Ana Puentes, José Carlos de Isla y Paco Ortiz',
    executiveProducer: null,
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
    poster: {
      id: 1,
      name: 'TARANTA.png',
      alternativeText: 'Póster de Taranta',
      caption: 'Póster oficial',
      width: 400,
      height: 600,
      formats: {
        small: {
          name: 'small_TARANTA.png',
          hash: 'small_abc123',
          mime: 'image/png',
          width: 188,
          height: 281,
          size: 45.23,
          url: '/uploads/small_TARANTA.png',
        },
        medium: {
          name: 'medium_TARANTA.png',
          hash: 'medium_abc123',
          mime: 'image/png',
          width: 300,
          height: 450,
          size: 95.45,
          url: '/uploads/medium_TARANTA.png',
        },
      },
      hash: 'abc123',
      ext: '.png',
      mime: 'image/png',
      size: 189.23,
      url: '/uploads/TARANTA.png',
      previewUrl: null,
      provider: 'local',
      provider_metadata: null,
      createdAt: '2025-01-01T00:00:00.000Z',
      updatedAt: '2025-01-01T00:00:00.000Z',
    },
    images: [],
    synopsis: null,
    createdAt: '2025-01-01T00:00:00.000Z',
    updatedAt: '2025-01-15T10:30:00.000Z',
  },
};

/**
 * PASOS PARA CREAR LA COLECCIÓN EN STRAPI
 *
 * 1. Ir al Content-Type Builder
 * 2. Crear nueva colección llamada "films"
 * 3. Agregar los campos según la estructura anterior
 * 4. Configurar las relaciones si es necesario
 * 5. Publicar el Content-Type
 * 6. Começar a rellenar datos
 */

/**
 * API ENDPOINT
 *
 * GET /api/films
 * Query params: ?sort=createdAt:desc&populate=*
 *
 * Respuesta: Array de FilmData
 */
