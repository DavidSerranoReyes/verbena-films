# 🚀 GUÍA DE DEPLOY - Verbena Films

## Vercel Deployment Checklist

### 1. **Preparación Previa**

- ✅ Código limpio y testeado
- ✅ Todos los commits en `main` branch
- ✅ Variables de entorno documentadas (`.env.example`)
- ✅ Build local ejecuta sin errores

### 2. **Conectar Repositorio a Vercel**

1. Ir a https://vercel.com/dashboard
2. Click en "Add New" → "Project"
3. Seleccionar repositorio `verbena-films` de GitHub
4. Click "Import"

### 3. **Configurar Variables de Entorno**

En **Settings → Environment Variables** agregar:

```
PUBLIC_STRAPI_URL = https://tu-strapi.com (o http://localhost:1337 para dev)
STRAPI_API_TOKEN = your-api-token-here
```

**Importante:**

- `PUBLIC_STRAPI_URL` debe estar disponible en el cliente (es pública)
- `STRAPI_API_TOKEN` es privada y solo en backend

### 4. **Build & Deploy**

- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Node.js Version:** 18.x (default)

### 5. **Validar Deploy**

Después del deploy automático:

- ✅ Revisar que todos los assets cargan
- ✅ Probar navegación en todos los idiomas
- ✅ Verificar imágenes WebP se cargan correctamente
- ✅ Probar modales y videos
- ✅ Verificar Lighthouse score (idealmente > 80)

---

## 📊 Lighthouse Performance

**Objetivos Iniciales:**

- Performance: > 80
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 95

**Optimizaciones Ya Aplicadas:**

- ✅ Imágenes en WebP (60-97% reducción)
- ✅ Lazy loading de imágenes
- ✅ CSS crítico inlining
- ✅ Minificación automática en Vercel
- ✅ Caché agresivo en CDN

---

## 🔧 Troubleshooting

### Problema: "Cannot find module 'astro-icon'"

**Solución:** Ya fue removido en refactor. No debería ocurrir.

### Problema: Imágenes no cargan

**Solución:**

- Verificar que `PUBLIC_STRAPI_URL` está correcto
- Comprobar rutas relativas en `/public/images/`
- Revisar CORS en Strapi si aplica

### Problema: Build falla en Vercel

**Pasos:**

1. Verificar logs en Vercel dashboard
2. Ejecutar `npm run build` localmente para reproducir
3. Comprobar que no hay imports circulares
4. Revisar variables de entorno

---

## 📝 URLs Útiles

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Sitio en Producción:** https://verbena-films.vercel.app (o custom domain)
- **GitHub Repo:** https://github.com/DavidSerranoReyes/verbena-films
- **Astro Deployment Docs:** https://docs.astro.build/en/guides/deploy/vercel/

---

## 🔄 Próximos Pasos

### Después del Deploy Inicial:

1. **Configurar Dominio Custom**

   - Agregar DNS records
   - Verificar SSL/HTTPS automático

2. **Conectar Strapi**

   - Crear cuenta en Strapi Cloud (o self-hosted)
   - Configurar API endpoints
   - Agregar token en Vercel env vars
   - Migrar datos gradualmente

3. **Monitoreo Continuo**

   - Configurar Web Analytics en Vercel
   - Monitorear errores (Sentry, etc)
   - Performance monitoring

4. **Mantenimiento**
   - Actualizaciones de dependencias
   - Backups regulares
   - Monitoreo de SEO

---

## 📧 Contacto & Soporte

Para preguntas sobre el deployment:

- Repo Issues: https://github.com/DavidSerranoReyes/verbena-films/issues
- Documentación Vercel: https://vercel.com/docs
- Documentación Astro: https://docs.astro.build

---

**Última actualización:** 14 de diciembre de 2025
