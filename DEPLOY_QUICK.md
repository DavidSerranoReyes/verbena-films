# 🚀 QUICK START - Deploy en Vercel

## 3 Pasos para Desplegar

### Paso 1: Push a GitHub
```bash
git push origin main
```

### Paso 2: Conectar en Vercel.com
1. Ir a https://vercel.com/dashboard
2. Click "Add New" → "Project"
3. Seleccionar repositorio `verbena-films`
4. Click "Import"

### Paso 3: Configurar Variables de Entorno
En el formulario de Vercel, agregar:
```
PUBLIC_STRAPI_URL = https://verbena-films.com  (o tu URL de Strapi)
STRAPI_API_TOKEN = tu-token-aqui (opcional por ahora)
```

✅ **¡Listo!** Vercel desplegará automáticamente.

---

## Después del Deploy

- URL en vivo: `https://verbena-films.vercel.app`
- Cambios automáticos: Cualquier push a `main` redeploy automáticamente
- Ver logs: Dashboard de Vercel → Deployments

---

## Variables Disponibles

| Variable | Requerida | Descripción |
|----------|-----------|-------------|
| `PUBLIC_STRAPI_URL` | No (por ahora) | URL del CMS Strapi |
| `STRAPI_API_TOKEN` | No (por ahora) | Token de autenticación Strapi |

*Cuando conectes Strapi, estas se vuelven necesarias*

---

## Dominio Custom (Opcional)

Si tienes dominio propio `verbena-films.com`:
1. En Vercel: Settings → Domains
2. Agregar dominio
3. Copiar DNS records a tu registrador
4. Esperar propagación (5-48 horas)

---

Para más detalles: Ver `DEPLOYMENT.md`
