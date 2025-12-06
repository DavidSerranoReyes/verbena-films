# 🎬 Guía de Desarrollo - Verbena Films

**Última actualización:** 5 de diciembre de 2025

---

## 📋 Visión General del Proyecto

Página web profesional para una productora audiovisual. Sitio dinámico, sobrio y elegante con dark mode nativo. La experiencia del usuario debe reflejar profesionalismo y calidad cinematográfica.

### Referencia de Inspiración

- **Sitio:** https://avalon.me/
- **Características clave:** Diseño minimalista, dark mode, navegación limpia, contenido visual impactante

---

## 🛠️ Stack Tecnológico

### Frontend

- **Framework principal:** React + Astro (meta-framework)
- **Lenguaje:** TypeScript
- **Tipado:** Strict mode habilitado
- **Gestión de Estado:** A definir según necesidad (Context API, Zustand, etc.)

### CMS & Backend

- **Headless CMS:** Strapi
- **Propósito:** Permitir al cliente hacer cambios sin intervención de desarrollo
- **Integración:** API REST con React/Astro

### Diseño

- **Fuente principal:** Montserrat
  - **Pesos:**
    - Thin: 100 (titulares elegantes)
    - Regular: 400 (cuerpo de texto)
    - Ajustar según necesidad visual
- **Tema:** Dark Mode como default
- **Idiomas:** Español / Inglés (detección automática del navegador)

### Control de Versiones

- **Integración:** GitHub
- **Estrategia:** Commits frecuentes, ramas por feature

---

## 🎯 Estructura de Navegación

La web tendrá **4 secciones principales:**

### 1. **Home**

- Landing page con propuesta de valor
- Hero section impactante
- Destacados/últimas producciones
- Call-to-action principal

### 2. **Films**

- Galería de producciones
- Filtros por tipo/año (si aplica)
- Reproducción de videos
- Detalles de cada proyecto

### 3. **About**

- Información de la productora
- Equipo creativo
- Historia y valores
- Credibilidad y logros

### 4. **News**

- Últimas noticias/actualizaciones
- Blog de proyectos
- Comunicados

---

## 🌍 Internacionalización (i18n)

- **Detección automática:** Basada en `navigator.language`
- **Fallback:** Español como idioma por defecto
- **Almacenamiento:** LocalStorage para preferencia del usuario
- **Implementación:** Librerías como `react-i18next` o similar

---

## 🎨 Guía de Diseño

### Paleta de Colores

- **Base:** Dark Mode (fondos oscuros, textos claros)
- **Acentos:** A definir según identidad de marca
- **Contraste:** WCAG AA mínimo para accesibilidad

### Responsividad

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

### **Fase 1: Setup & Configuración** ✅

- [ ] Inicializar proyecto (Astro + React)
- [ ] Configurar TypeScript
- [ ] Instalar dependencias base
- [ ] Configurar git y repositorio
- [ ] Setup de Strapi (local o staging)
- [ ] Importar fuente Montserrat

### **Fase 2: Home** 🎯 (SIGUIENTE)

- [ ] Estructura HTML/Astro
- [ ] Componente Navigation
- [ ] Componente Hero
- [ ] Sección destacados
- [ ] Componente Footer
- [ ] Estilos Dark Mode
- [ ] Responsividad completa
- [ ] i18n configurado
- **Verificación:** Todos los elementos renderizan correctamente

### **Fase 3: Films**

- [ ] Conexión a Strapi
- [ ] Galería dinámica
- [ ] Filtros
- [ ] Lightbox/Modal para videos
- [ ] Responsividad

### **Fase 4: About**

- [ ] Contenido dinámico de Strapi
- [ ] Sección de equipo
- [ ] Timeline/Historia

### **Fase 5: News**

- [ ] Blog desde Strapi
- [ ] Paginación
- [ ] Categorías

### **Fase 6: Polish & Deployment**

- [ ] Optimización de rendimiento
- [ ] SEO
- [ ] Testing
- [ ] Deploy en producción

---

## 📊 Verificación Continua

Después de **cada fase completada**, verificar:

- ✅ **Visual:** Coincide con referencia (avalon.me)
- ✅ **Funcional:** Todas las características funcionan
- ✅ **Responsivo:** Mobile, tablet, desktop
- ✅ **Accesibilidad:** Colores, contraste, navegación
- ✅ **Rendimiento:** Lighthouse score > 80
- ✅ **i18n:** Ambos idiomas funcionan
- ✅ **Dark Mode:** Aplicado correctamente
- ✅ **TypeScript:** Sin errores
- ✅ **Git:** Cambios commiteados

---

## 🔗 Integración Strapi

### Endpoints Básicos

```
GET /api/films
GET /api/films/:id
GET /api/news
POST /api/news (administración)
GET /api/team
```

### Autenticación

- Si es necesaria: JWT tokens
- Gestionar credenciales en `.env`

---

## 📝 Notas Importantes

1. **Cliente:** Debe poder actualizar contenido en Strapi sin conocimiento técnico
2. **Mantenibilidad:** Código limpio, componentes reutilizables
3. **Performance:** Optimizar imágenes, lazy loading
4. **SEO:** Meta tags, Open Graph
5. **Disponibilidad:** 24/7 con HTTPS

---

## 🎓 Recursos Útiles

- Documentación Astro: https://docs.astro.build
- Documentación React: https://react.dev
- Documentación Strapi: https://docs.strapi.io
- Inspiración: https://avalon.me/

---

**Próximo paso:** Inicializar proyecto con Astro + React + TypeScript ✨
