# 🚀 Verbena Films - Setup & Configuración

## 📋 Quick Start

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno
cp .env.example .env.local

# 3. Iniciar desarrollo
npm run dev
```

---

## ⚙️ Configuración

### Variables de Entorno (.env.local)

```env
# Strapi (opcional - usa datos estáticos por defecto)
PUBLIC_USE_STRAPI=false
PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=

# Sitio
PUBLIC_SITE_URL=https://verbenafilms.com
```

---

## 🔧 Configuración Centralizada

Todo está en **`src/config/index.ts`**

```typescript
import { STRAPI_CONFIG, SITE_INFO, COLORS } from '@/config';
```

**Configuraciones disponibles:**

- `STRAPI_CONFIG` - Strapi
- `SITE_INFO` - Info del sitio
- `CONTACT_INFO` - Contacto
- `SOCIAL_LINKS` - Redes sociales
- `NAVIGATION` - Menú
- `BREAKPOINTS` - Responsive
- `COLORS` - Colores
- `ANIMATION` - Animaciones
- `Z_INDEX` - Capas

---

## 📊 Sistema de Datos

### Modo Estático (Default)

```typescript
import { getFilms, getNews } from '@/services/dataService';

const films = await getFilms();
const news = await getNews();
```

Usa archivos en `src/data/`:

- `films.ts` - Películas
- `news.ts` - Noticias
- `hero.ts` - Videos del hero
- `team.ts` - Equipo

### Modo Strapi (Opcional)

1. **Instalar Strapi:**

   ```bash
   npx create-strapi-app@latest verbena-strapi --quickstart
   ```

2. **Crear Content Types:**

   - **Film:** title, director, year, country, poster, images, trailer, awards
   - **News:** title, description, date, category, image, externalUrl

3. **Generar API Token:**

   - Settings → API Tokens → Create (Read-only)

4. **Activar en .env.local:**
   ```env
   PUBLIC_USE_STRAPI=true
   STRAPI_API_TOKEN=tu_token
   ```

**El sistema hace fallback automático a datos estáticos si Strapi falla.**

---

## 🌍 Internacionalización (i18n)

### Sistema Dual (ES/EN)

```typescript
import { t } from '@/utils/i18n';

const title = t('films.title', 'es'); // 'Nuestras Películas'
const titleEN = t('films.title', 'en'); // 'Our Films'
```

**Traducciones en:** `src/utils/i18n.ts`

**Features:**

- Detección automática del navegador
- LocalStorage para preferencia
- Títulos de películas traducidos

---

## 📁 Estructura

```
src/
├── config/index.ts        # ⭐ Configuración centralizada
├── services/
│   ├── api.ts            # Cliente Strapi
│   └── dataService.ts    # Servicio unificado (Strapi + estático)
├── data/                 # Datos estáticos (fallback)
├── components/           # Componentes Astro
├── pages/                # Páginas
└── utils/
    ├── i18n.ts           # Sistema i18n
    └── strapiTransform.ts # Transformadores Strapi
```

---

## 🎨 Gestión de Contenido

### Films

**Estático:** Editar `src/data/films.ts`

**Strapi:** Crear/editar en Strapi Admin

**Campos importantes:**

- `titleKey` - Para traducciones (ej: 'film.title.taranta')
- `year` - Año de la película
- `awards` - Array de strings

### News

**Estático:** Editar `src/data/news.ts`

**Strapi:** Crear/editar en Strapi Admin

**Categorías:** award, competition, team, general

---

## 📦 Scripts

```bash
npm run dev          # Desarrollo
npm run build        # Build producción
npm run preview      # Preview build
npm run check        # TypeScript check
```

---

## 🚢 Deployment

### Vercel (Recomendado)

1. Conectar repo en vercel.com
2. Configurar variables de entorno
3. Deploy automático en cada push

**Build Settings:**

- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### Variables en Vercel:

```
PUBLIC_USE_STRAPI=true (si usas Strapi)
PUBLIC_STRAPI_URL=https://tu-strapi.com
STRAPI_API_TOKEN=tu_token
PUBLIC_SITE_URL=https://tu-dominio.com
```

---

## 🔍 Troubleshooting

### Strapi no conecta

```env
# Usar modo estático
PUBLIC_USE_STRAPI=false
```

### Errores de TypeScript

```bash
npm run check
```

### Build falla

```bash
rm -rf node_modules dist .astro
npm install
npm run build
```

---

## 📚 Documentación Adicional

- **AGENTS.md** - Guía de desarrollo completa
- **README.md** - Información del proyecto

---

**✨ Listo para desarrollar ✨**
