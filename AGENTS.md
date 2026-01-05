# 🎬 Guía de Desarrollo - Verbena Films

**Última actualización:** 31 de diciembre de 2025

---

## 📋 Visión del Proyecto

Página web profesional para productora audiovisual. Dark mode, minimalista, contenido visual impactante.

**Inspiración:** https://avalon.me/

---

## 🛠️ Stack Tecnológico

- **Framework:** Astro + React
- **Lenguaje:** TypeScript (strict mode)
- **CMS:** Strapi (opcional, con fallback estático)
- **Fuente:** Montserrat (100, 400, 700)
- **Idiomas:** ES / EN (detección automática)

---

## 🎯 Secciones

1. **Home** - Hero con carrusel de videos
2. **Films** - Galería de producciones con modales
3. **About** - Info de la productora y equipo
4. **News** - Noticias y actualizaciones

---

## 🎨 Diseño

- **Tema:** Dark Mode por defecto
- **Colores:** Fondos oscuros (#0f0f0f), acentos rosados (#d4a8b8)
- **Responsive:** Mobile-first
- **Contraste:** WCAG AA mínimo

- Mobile First
- Breakpoints: Mobile (320px), Tablet (768px), Desktop (1024px+)
- Imágenes optimizadas para web

### Tipografía

- **Headings (H1-H6):** Montserrat 100 o 400 según jerarquía
- **Cuerpo:** Montserrat 400
- **Línea base:** 1.6-1.8 para legibilidad

---

## 📁 Estructura de Carpetas (Propuesta)

```
verbena-films/
├── public/
│   ├── images/
│   │   ├── movies/
│   │   ├── team/
│   │   └── branding/
│   ├── videos/
│   └── fonts/
├── src/
│   ├── components/
│   │   ├── Navigation/
│   │   ├── Hero/
│   │   ├── Footer/
│   │   ├── Films/
│   │   └── Common/
│   ├── pages/
│   │   ├── index.astro (home)
│   │   ├── films.astro
│   │   ├── about.astro
│   │   ├── news.astro
│   │   └── [404].astro
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── styles/
│   │   ├── global.css
│   │   ├── variables.css
│   │   └── tailwind.config.js (si se usa)
│   ├── hooks/
│   ├── utils/
│   └── lib/
├── strapiConfig/ (si aplica)
├── package.json
├── tsconfig.json
├── astro.config.mjs
└── AGENTS.md (esta guía)
```

---

## 🚀 Fases de Desarrollo

### **Fase 1: Setup & Configuración** ✅ COMPLETADA

- [x] Inicializar proyecto (Astro + React)

---

## 🚀 Estado Actual

### ✅ Completado

- [x] Setup inicial (Astro + React + TypeScript)
- [x] Sistema i18n (ES/EN) funcionando
- [x] Configuración centralizada (`src/config/index.ts`)
- [x] Sistema de datos (Strapi ready con fallback)
- [x] Componentes principales (Hero, Navigation, Films, News, Footer)
- [x] Dark mode nativo
- [x] Responsive design
- [x] Títulos multiidioma
- [x] Datos actualizados (años 2026)

### 🎯 Próximos Pasos

1. **Setup Strapi** (cuando se necesite)

   - Instalar y configurar
   - Crear content types
   - Migrar datos

2. **Deploy** (cuando esté listo)
   - Vercel/Netlify
   - Configurar dominio
   - Variables de entorno

---

## 📚 Documentación

- **`SETUP.md`** - Configuración completa
- **`README.md`** - Overview del proyecto

---

**✨ Proyecto listo para desarrollo y producción ✨**
