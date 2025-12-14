# 🚀 GUÍA PASO A PASO - DEPLOY EN VERCEL

## OPCIÓN 1: La Más Fácil (Recomendada)

### Paso 1: Haz clic en este enlace

```
https://vercel.com/new?repository-url=https://github.com/DavidSerranoReyes/verbena-films
```

### Paso 2: Te abrirá Vercel

- Si no tienes cuenta, crea una con GitHub
- Si ya tienes cuenta, inicia sesión

### Paso 3: Vercel te pedirá permiso para acceder a tu GitHub

- Click en "Authorize Vercel"
- Confirma que verbena-films esté seleccionado

### Paso 4: Configuración automática

Vercel detectará automáticamente:

- ✅ Framework: Astro
- ✅ Build Command: npm run build
- ✅ Output Directory: dist

**NO CAMBIES NADA**, solo déjalo como está.

### Paso 5: Click en "Deploy"

¡Listo! Espera 3-5 minutos y tu sitio estará en vivo.

---

## OPCIÓN 2: Si prefieres desde el Dashboard

### Paso 1: Ir a Vercel

https://vercel.com/dashboard

### Paso 2: Click en "Add New"

(En la esquina superior derecha)

### Paso 3: Selecciona "Project"

### Paso 4: Selecciona tu repositorio

- Busca: `verbena-films`
- Click en él

### Paso 5: Click en "Import"

### Paso 6: Configuración

- Framework: Astro ✅
- Build: npm run build ✅
- Output: dist ✅

**NO CAMBIES NADA**

### Paso 7: Click en "Deploy"

---

## ⏱️ Espera...

Una vez que hagas click en "Deploy":

1. **Primera fase (1-2 min):** Vercel descarga tu código de GitHub
2. **Segunda fase (2-3 min):** Ejecuta `npm run build`
3. **Tercera fase (30 seg):** Sube archivos a CDN

**Total: 3-5 minutos**

---

## ✅ Cuando termine...

Vercel te mostrará:

```
✅ Deployment successful!
```

Y tu URL será algo como:

```
https://verbena-films.vercel.app
```

---

## 🎯 Después del Deploy

Tu sitio estará en vivo. Cada vez que hagas `git push` a GitHub:

- Vercel lo detecta automáticamente
- Hace un nuevo build
- Lo despliega en segundos

**Sin hacer nada manual más.**

---

## ❌ Si algo sale mal

### Error: "Build failed"

- Verifica los logs en Vercel
- 99% de veces es por variables de entorno faltantes
- Por ahora NO necesitas variables, déjalas en blanco

### Error: "Repository not found"

- Asegúrate que el repo está en GitHub
- Que tienes permiso para acceder
- Reinicia el proceso

### Error: "Timeout"

- A veces Vercel tarda más
- Intenta de nuevo
- Rara vez ocurre

---

## 💡 Tips

✅ **Dominio personalizado:** Después puedes agregar `verbena-films.com`
✅ **SSL/HTTPS:** Automático, no hay que hacer nada
✅ **Redeploy automático:** Con cada push a GitHub
✅ **Analytics:** Vercel te da estadísticas gratis

---

## 📞 Resumen

1. Click en: https://vercel.com/new?repository-url=https://github.com/DavidSerranoReyes/verbena-films
2. Vercel auto-detecta todo
3. Click "Deploy"
4. Espera 3-5 minutos
5. ¡Listo! Tienes URL en vivo

---

**¿Necesitas ayuda?** Dime en qué paso te queda trabado.
