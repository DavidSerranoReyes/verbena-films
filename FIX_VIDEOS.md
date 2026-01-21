# 🔧 Troubleshooting - Videos no cargan en Desktop

## 🎯 Resumen del Problema

Los videos **NO vienen de Strapi**, vienen de `/public/videos/`.
El error `net::ERR_CONNECTION_RESET` en los videos es porque:

1. Los archivos tienen espacios en el nombre (`MVAP_CORTE HOME.mp4`)
2. El formato `.mov` no es óptimo para web
3. Los archivos pueden no estar siendo servidos correctamente desde CDmon

---

## ✅ Solución (3 pasos)

### Paso 1: Renombrar y convertir videos localmente

**Opción A: Automático (si tienes FFmpeg)**

```bash
# Ejecutar el script
chmod +x convert-videos.sh
./convert-videos.sh
```

**Opción B: Manual**

```bash
cd public/videos

# Renombrar archivos
mv "BIENVENUS_HOME.mp4" "bienvenus-home.mp4"
mv "MVAP_CORTE HOME.mp4" "mvap-corte-home.mp4"
mv "ELNCS_HOME.mov" "elncs-home.mp4"

# Convertir .mov a .mp4 (si tienes FFmpeg)
ffmpeg -i elncs-home.mov -vcodec libx264 -crf 22 elncs-home.mp4
```

**Opción C: Online converter**

- Usa https://cloudconvert.com/ para convertir el `.mov` a `.mp4`

### Paso 2: Subir a CDmon

1. **Build local**

   ```bash
   npm run build
   ```

2. **Verificar que `/public/videos/` esté en `dist/videos/`**

   ```bash
   ls -la dist/videos/
   ```

3. **Subir al FTP de CDmon** (solo carpeta `/videos/`)
   - Usa FileZilla
   - Sube los 3 archivos `.mp4` renombrados

### Paso 3: Verificar en producción

- Ve a `https://verbenafilms.com/videos/bienvenus-home.mp4`
- Debería cargar sin errores

---

## 🔍 Verificación

**En tu navegador (DevTools → Network):**

- Los videos deben mostrar status `200 OK`
- NO debe haber `ERR_CONNECTION_RESET`

**Si aún falla:**

1. Revisa permisos en CDmon (644 para archivos)
2. Vacía caché del navegador (Ctrl+Shift+Del)
3. Verifica que CDmon no tenga limite de tipos MIME

---

## 📋 Checklist Strapi vs Estáticos

| Componente      | Fuente                       | Estado           |
| --------------- | ---------------------------- | ---------------- |
| **Hero Videos** | `/public/videos/` (ESTÁTICO) | ✅ No usa Strapi |
| **Films**       | Strapi (con fallback)        | ⚠️ Strapi caído  |
| **News**        | Strapi (con fallback)        | ⚠️ Strapi caído  |
| **Team**        | `/data/team.ts` (ESTÁTICO)   | ✅ No usa Strapi |

---

## 💡 Próximos Pasos

1. **Arreglar videos** (este documento)
2. **Reparar Strapi en Render** (acceder a logs)
3. **Considerar:** ¿Necesitas Strapi si Films y News funcionan con datos estáticos?
