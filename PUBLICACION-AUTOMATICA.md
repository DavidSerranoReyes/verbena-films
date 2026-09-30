# 🚀 Publicación automática de la web

**Desde:** 30 de septiembre de 2026
**Para qué sirve:** que la dueña pueda subir contenido en Strapi y que la web
(`verbenafilms.com`) se actualice **sola**, sin que nadie tenga que ejecutar
`npm run build` ni subir archivos por FTP a mano.

---

## Cómo funciona

```
Ella publica en Strapi (Content Manager → Save → Publish)
        │
        ▼
GitHub Actions (cada 10 minutos)  .github/workflows/deploy-cdmon.yml
        │  1. Despierta Strapi (el plan Free de Render se duerme)
        │  2. npm install && npm run build  (con PUBLIC_USE_STRAPI=true)
        │  3. Sube dist/ por FTP a CDmon → /public_html/
        ▼
www.verbenafilms.com ya muestra el cambio
```

- **Retraso:** hasta ~10-15 minutos desde que pulsa *Publish*. GitHub puede
  añadir algunos minutos más si tiene carga.
- **Solo sube lo que cambia:** compara con lo que ya hay en el servidor, así que
  los vídeos e imágenes grandes no se reenvían en cada ejecución.
- **No borra nada del servidor:** `dangerous-clean-slate: false`.
- **Si Strapi no responde**, el build usa los datos estáticos (la web nunca se
  queda rota, como mucho muestra la versión anterior).

---

## Lo que hay que configurar UNA vez (solo David)

En GitHub → repo `verbena-films` → **Settings → Secrets and variables → Actions →
New repository secret**:

| Secret | Valor |
| --- | --- |
| `FTP_SERVER` | `134.0.10.132` |
| `FTP_USERNAME` | `verbenaf` |
| `FTP_PASSWORD` | la contraseña FTP de CDmon |

Sin esos tres secretos, el workflow no falla: simplemente avisa y no publica.

Para probar sin tocar el servidor: pestaña **Actions** → *Publicar la web en
CDmon* → **Run workflow** → marca `dry_run` → saldrá la lista de archivos que
subiría. Cuando esté bien, se lanza sin marcar la casilla.

---

## Si algo no se actualiza

1. GitHub → **Actions** → *Publicar la web en CDmon* → mira la última ejecución.
2. Si falla en el paso FTP: revisa la contraseña del secret `FTP_PASSWORD`.
3. Si el build dice que Strapi no respondió: espera 10 minutos (se reintenta solo).
4. Si el contenido no cambió en la web: comprueba en Strapi que la entrada esté
   **Publish** y no en borrador.

---

## Detalles técnicos

- El build se hace con `PUBLIC_USE_STRAPI=true` y
  `PUBLIC_STRAPI_URL=https://verbena-films-strapi.onrender.com`. No hace falta
  token de API: el CMS tiene activada la **lectura pública** de lo publicado.
- `PUBLIC_STRAPI_TIMEOUT=90000` da margen a que Strapi despierte sin abortar el
  build (por defecto son 5 s, pensados para el navegador).
- El contenido del CMS **manda** sobre los datos estáticos: si una película
  existe en los dos sitios (p. ej. *Taranta*), se muestra la del CMS y no sale
  duplicada (`mergeWithStatic` en `src/services/dataService.ts`).
- Los pósteres subidos a Cloudinary se piden en WebP (`f_webp,q_auto`) desde
  `src/utils/images.ts`.
- `.github/workflows/keepalive.yml` hace un commit vacío al mes: GitHub
  desactiva las tareas programadas de un repo que pasa 60 días sin actividad.
