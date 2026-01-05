# 🎬 Verbena Films

Página web profesional para productora audiovisual. Dark mode nativo, sistema i18n (ES/EN), gestión dinámica de contenido.

## 🛠️ Tech Stack

- **Framework:** Astro + React + TypeScript (strict)
- **CMS:** Strapi ready (con fallback estático)
- **i18n:** ES/EN automático
- **Optimización:** Responsive, WebP, lazy loading

## 🚀 Quick Start

```bash
npm install
cp .env.example .env.local
npm run dev
```

## 📦 Comandos

```bash
npm run dev       # Desarrollo (localhost:4321)
npm run build     # Build producción
npm run preview   # Preview build
npm run check     # TypeScript check
```

## 📁 Estructura

```
src/
├── config/index.ts      # Configuración centralizada
├── services/            # API & Data services
├── components/          # UI components
├── pages/              # Rutas (home, films, news, about)
├── data/               # Datos estáticos (fallback)
└── utils/              # i18n, transformers, helpers
```

## ⚙️ Configuración

Ver **`SETUP.md`** para configuración completa.

**Variables principales (.env.local):**

```env
PUBLIC_USE_STRAPI=false  # Activar Strapi
PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=
```

## 🌍 Internacionalización

- **Idiomas:** Español / English
- **Detección:** Automática por navegador
- **Storage:** LocalStorage
- **Config:** `src/utils/i18n.ts`

## 📚 Documentación

- **`SETUP.md`** - Configuración y setup completo
- **`AGENTS.md`** - Guía de desarrollo detallada

---

**Desarrollado con ❤️ para Verbena Films**

- ✅ Accesibilidad (WCAG AA)
- ✅ SEO optimizado
- ✅ Carrusel de videos en hero
- ✅ Control de volumen interactivo
- ✅ Modal de detalles de películas
- ✅ Imágenes optimizadas en WebP

## 📝 Próximos Pasos

- [ ] Integración con Strapi CMS
- [ ] Deploy en Vercel
- [ ] Configurar webhooks para redeploy automático

---

**Desarrollado con ❤️ para Verbena Films**
