# 🎬 Verbena Films

Página web profesional para una productora audiovisual. Sitio dinámico, sobrio y elegante con dark mode nativo, construido con **Astro + React + TypeScript**.

## 🛠️ Tech Stack

- **Framework:** Astro 5 + React 18
- **Lenguaje:** TypeScript (strict mode)
- **Estilos:** CSS-in-Astro con variables personalizadas
- **Tipografía:** Montserrat (100, 400, 700)
- **Internacionalización:** i18n (ES/EN)
- **Optimización:** WebP, lazy loading, responsive design

## 🚀 Comandos

```bash
# Instalar dependencias
npm install

# Desarrollo local (http://localhost:4321)
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📁 Estructura del Proyecto

```
src/
├── components/        # Componentes Astro + React
│   ├── Hero/         # Hero section con carrusel de videos
│   ├── Navigation/   # Navbar con logo y selector de idioma
│   ├── Films/        # Grid de películas
│   ├── Footer/       # Footer con ubicación y redes
├── pages/            # Rutas (home, films, about, news)
├── layouts/          # Layout base (MainLayout.astro)
├── styles/           # CSS global y variables
├── utils/            # Utilidades (i18n, etc)
├── types/            # Tipos TypeScript
└── config/           # Configuración del sitio
```

## 🌍 Internacionalización

Soporta **Español (ES) e Inglés (EN)** con detección automática del navegador y almacenamiento en localStorage.

## 🎨 Características

- ✅ Dark Mode nativo
- ✅ Responsive (Mobile-first)
- ✅ Animaciones suaves
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
