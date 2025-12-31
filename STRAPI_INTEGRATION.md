# 🔗 Integración Strapi - Frontend

## Descripción General

Este documento explica cómo conectar el frontend con Strapi para que la información de películas y noticias se cargue dinámicamente.

---

## 🎯 Pasos de Integración

### Paso 1: Configurar Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# .env.local
STRAPI_API_URL=http://localhost:1337
STRAPI_API_TOKEN=tu_token_aqui
```

### Paso 2: Crear Servicio API

El servicio ya existe en `src/services/api.ts`. Actualízalo si es necesario:

```typescript
// src/services/api.ts

const STRAPI_URL = import.meta.env.STRAPI_API_URL || 'http://localhost:1337';
const STRAPI_TOKEN = import.meta.env.STRAPI_API_TOKEN;

export async function fetchFilms() {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/films?sort=createdAt:desc&populate=*`,
      {
        headers: {
          Authorization: `Bearer ${STRAPI_TOKEN}`,
        },
      }
    );
    
    if (!response.ok) throw new Error('Failed to fetch films');
    
    const data = await response.json();
    return data.data; // Array de películas
  } catch (error) {
    console.error('Error fetching films:', error);
    return [];
  }
}

export async function fetchNews() {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/news?sort=date:desc&populate=*`,
      {
        headers: {
          Authorization: `Bearer ${STRAPI_TOKEN}`,
        },
      }
    );
    
    if (!response.ok) throw new Error('Failed to fetch news');
    
    const data = await response.json();
    return data.data; // Array de noticias
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}
```

### Paso 3: Transformar Datos de Strapi

Crear un transformador para convertir formato Strapi al formato interno:

```typescript
// src/utils/strapiTransform.ts

import type { FilmData } from '../data/films';

export function transformStrapiFilm(strapiFilm: any): FilmData {
  return {
    id: strapiFilm.id,
    title: strapiFilm.attributes.title,
    director: strapiFilm.attributes.director,
    year: strapiFilm.attributes.year,
    country: strapiFilm.attributes.country,
    writer: strapiFilm.attributes.writer,
    producers: strapiFilm.attributes.producers,
    executiveProducer: strapiFilm.attributes.executiveProducer,
    production: strapiFilm.attributes.production,
    awards: strapiFilm.attributes.awards || [],
    trailer: strapiFilm.attributes.trailer || '',
    poster: strapiFilm.attributes.poster?.data?.attributes?.url || '',
    images: strapiFilm.attributes.images?.data?.map(
      (img: any) => img.attributes.url
    ) || [],
  };
}

export function transformStrapiNews(strapiNews: any): NewsItem {
  return {
    id: strapiNews.id,
    title: strapiNews.attributes.title,
    description: strapiNews.attributes.description,
    date: strapiNews.attributes.date,
    category: strapiNews.attributes.category,
    externalUrl: strapiNews.attributes.externalUrl,
    image: strapiNews.attributes.image?.data?.attributes?.url,
  };
}
```

### Paso 4: Actualizar Componentes

Modificar `src/components/Films/FilmsGrid.astro` para usar datos de Strapi:

```astro
---
import { fetchFilms } from '../../services/api';
import { transformStrapiFilm } from '../../utils/strapiTransform';

// Opción 1: Usar datos de Strapi si está disponible
let films = [];
try {
  const strapiFilms = await fetchFilms();
  films = strapiFilms.map(transformStrapiFilm);
} catch (error) {
  // Fallback: usar datos locales
  const { films: localFilms } = await import('../../data/films');
  films = localFilms;
}
---
```

---

## 🚀 Flujo de Datos

```
Cliente (Strapi Admin) 
    ↓ (sube película)
Strapi Database
    ↓ (API GET)
Frontend (Astro build)
    ↓ (fetch en tiempo de build)
transformStrapiFilm()
    ↓
FilmsGrid.astro
    ↓
Página renderizada
    ↓
Visitante ve películas
```

---

## 🔐 Seguridad

### Token de API

1. En Strapi, ve a Settings → API Tokens
2. Crea un nuevo token con permisos:
   - `films:read`
   - `news:read`
3. Copia el token
4. Pegalo en `.env.local` como `STRAPI_API_TOKEN`

### CORS

Configura CORS en Strapi (`config/middlewares.js`):

```javascript
{
  name: 'strapi::cors',
  config: {
    enabled: true,
    origin: ['http://localhost:3000', 'https://tudominio.com'],
    credentials: true,
  },
}
```

---

## 📝 Ejemplo Completo: Conexión Films

### 1. Archivo de Servicio (src/services/api.ts)

```typescript
const STRAPI_API_URL = import.meta.env.STRAPI_API_URL;
const STRAPI_API_TOKEN = import.meta.env.STRAPI_API_TOKEN;

export async function fetchFromStrapi(endpoint: string) {
  const url = `${STRAPI_API_URL}/api${endpoint}`;
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  
  if (STRAPI_API_TOKEN) {
    headers['Authorization'] = `Bearer ${STRAPI_API_TOKEN}`;
  }
  
  try {
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(`Strapi API error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching from Strapi (${endpoint}):`, error);
    throw error;
  }
}

export async function fetchFilms() {
  try {
    const data = await fetchFromStrapi(
      '/films?sort=createdAt:desc&populate[poster][populate]=*&populate[images][populate]=*'
    );
    return data.data || [];
  } catch (error) {
    console.error('Failed to fetch films from Strapi');
    return [];
  }
}
```

### 2. Archivo de Transformación (src/utils/strapiTransform.ts)

```typescript
import type { FilmData } from '../data/films';

export function transformStrapiFilm(strapiFilm: any): FilmData {
  const attrs = strapiFilm.attributes;
  
  // Extraer URL del póster
  const posterUrl = 
    attrs.poster?.data?.attributes?.url || 
    attrs.poster?.data?.url ||
    '/placeholder.png';
  
  // Extraer URLs de imágenes
  const images = attrs.images?.data?.map((img: any) => 
    img.attributes?.url || img.url
  ) || [];
  
  return {
    id: strapiFilm.id.toString(),
    title: attrs.title || 'Sin título',
    director: attrs.director || 'Desconocido',
    year: attrs.year || 'N/A',
    country: attrs.country || 'N/A',
    writer: attrs.writer || undefined,
    producers: attrs.producers || undefined,
    executiveProducer: attrs.executiveProducer || undefined,
    production: attrs.production || undefined,
    awards: Array.isArray(attrs.awards) ? attrs.awards : [],
    trailer: attrs.trailer || '',
    poster: posterUrl,
    images: images,
  };
}
```

### 3. Usar en Componente (src/components/Films/FilmsGrid.astro)

```astro
---
import { fetchFilms } from '../../services/api';
import { transformStrapiFilm } from '../../utils/strapiTransform';
import { films as localFilms } from '../../data/films';

let films = localFilms; // Fallback por defecto

// Intentar cargar desde Strapi
if (import.meta.env.STRAPI_API_URL) {
  try {
    const strapiFilms = await fetchFilms();
    if (strapiFilms.length > 0) {
      films = strapiFilms.map(transformStrapiFilm);
    }
  } catch (error) {
    console.warn('Using local films data as fallback');
  }
}
---

<section class="films-section">
  <div class="container">
    <!-- ... resto del componente igual ... -->
  </div>
</section>
```

---

## ⚡ Build Time vs Runtime

### Build Time (Recomendado - Astro Static)

Los datos se cargan **durante el build**:
- ✅ Más rápido (datos prefetched)
- ✅ Mejor SEO
- ✅ Sitio estático

```astro
---
const films = await fetchFilms(); // En tiempo de build
---

<div>{films.map(film => ...)}</div>
```

### Runtime (JavaScript Cliente)

Los datos se cargan **en el navegador del usuario**:
- ❌ Más lento
- ❌ Peor SEO
- ✅ Datos siempre frescos

Usar solo para contenido que cambie constantemente.

---

## 📋 Checklist de Integración

- [ ] Crear cuenta en Strapi (local o en línea)
- [ ] Crear colección "films" en Strapi
- [ ] Crear colección "news" en Strapi
- [ ] Generar API token en Strapi
- [ ] Crear `.env.local` con variables
- [ ] Actualizar `src/services/api.ts`
- [ ] Crear `src/utils/strapiTransform.ts`
- [ ] Modificar componentes para usar Strapi
- [ ] Probar conexión en desarrollo
- [ ] Probar en producción
- [ ] Configurar WebHooks en Strapi (opcional)

---

## 🔄 WebHooks (Revalidación de Caché)

Para que los cambios en Strapi se reflejen inmediatamente en la web:

1. Configurar WebHook en Strapi
   - URL: `https://tudominio.com/api/revalidate`
   - Evento: Film/News creada, actualizada, eliminada

2. Crear API endpoint en Astro
   - Recibir WebHook
   - Revalidar caché
   - Rebuild sitio

---

## 🐛 Troubleshooting

### "Error: STRAPI_API_URL is undefined"
- Verificar `.env.local` existe
- Verificar nombre exacto de variables
- Reiniciar servidor de desarrollo

### "401 Unauthorized"
- Verificar token API en `.env.local`
- Verificar token no expiró en Strapi
- Verificar permisos del token

### "CORS error"
- Verificar CORS configurado en Strapi
- Verificar dominio en lista blanca
- Usar `http://localhost:3000` en desarrollo

---

## 📞 Soporte

Para problemas con la integración:
- Documentación Strapi: https://docs.strapi.io
- Documentación Astro: https://docs.astro.build
- API REST: https://docs.strapi.io/dev-docs/api/rest

