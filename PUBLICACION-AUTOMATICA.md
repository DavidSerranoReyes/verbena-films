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
        │  Strapi avisa a GitHub en el momento (avisarAlCambiarContenido)
        ▼
GitHub Actions  .github/workflows/deploy-cdmon.yml
        │  0. Compara la huella del CMS con la de la web publicada
        │     (si no hay nada nuevo, termina aquí sin tocar nada)
        │  1. Despierta Strapi (el plan Free de Render se duerme)
        │  2. npm install && npm run build  (con PUBLIC_USE_STRAPI=true)
        │  3. Sube dist/ por FTP a CDmon → /public_html/
        ▼
www.verbenafilms.com ya muestra el cambio
```

- **Retraso:** unos **2-4 minutos** desde que pulsa *Publish*.
- **Dos disparadores:**
  1. **Strapi → GitHub** (el normal): al tocar Film o Article, Strapi pide a GitHub
     que publique. Es inmediato y fiable.
  2. **Cada 20 minutos** (red de seguridad): por si el aviso no llegara. El
     planificador de GitHub es **poco fiable** — comprobado: de ~24 turnos en 8
     horas solo ejecutó 1 —, así que no se depende de él.
- **Solo publica si hay cambios.** La web genera un `version.json` con la huella
  del contenido. El robot la compara con la del CMS: si son iguales, no construye
  ni se conecta al FTP. Así los borradores no publican nada, no se martillea CDmon
  (ni se gasta cuota) y no se despierta Strapi de más.
- **Solo sube lo que cambia:** compara con lo que ya hay en el servidor, así que
  los vídeos e imágenes grandes no se reenvían en cada ejecución.
- **No borra nada del servidor:** `dangerous-clean-slate: false`.
- **Si Strapi no responde**, el build usa los datos estáticos (la web nunca se
  queda rota, como mucho muestra la versión anterior).

### ¿Está la web al día?

Abre **https://www.verbenafilms.com/version.json**. Dice cuándo se generó, con qué
commit y la huella del contenido:

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

### Y en Render: el token para el aviso instantáneo

En **Render → `verbena-films-strapi` → Environment**, añadir:

| Variable | Valor |
| --- | --- |
| `GITHUB_DISPATCH_TOKEN` | un token de GitHub (ver abajo) |

Cómo se crea (2 minutos, una sola vez):

1. GitHub → tu foto → **Settings** → **Developer settings** →
   **Personal access tokens → Fine-grained tokens** → **Generate new token**.
2. Nombre: `verbena-deploy-strapi`. Caducidad: 1 año (apunta la fecha para
   renovarlo).
3. **Repository access** → *Only select repositories* → `verbena-films`.
4. **Permissions → Repository permissions → Contents: Read and write**
   (es lo que exige GitHub para este aviso).
5. Generate → copiar el token → pegarlo en Render. Guardar (redespliega solo).

Sin ese token tampoco se rompe nada: Strapi lo dice en los logs y la web se
actualiza en el siguiente turno del robot (hasta 20 minutos, y a veces más si
GitHub retrasa el programado).

---

## Si algo no se actualiza

1. GitHub → **Actions** → *Publicar la web en CDmon* → mira la última ejecución.
2. Si falla en el paso FTP: revisa la contraseña del secret `FTP_PASSWORD`.
3. Si el build dice que Strapi no respondió: espera 20 minutos (se reintenta solo).
4. Si el contenido no cambió en la web: comprueba en Strapi que la entrada esté
   **Publish** y no en borrador.
5. **Plan B — lanzarlo a mano:** Actions → *Publicar la web en CDmon* →
   **Run workflow** (rama `main`). Tarda ~3 minutos y publica lo que haya ahora
   mismo, sin esperar al turno automático. Con la casilla `dry_run` solo simula.

Las tareas programadas de GitHub pueden retrasarse (o descartarse): comprobado
que en 8 horas solo ejecutó una vez. Por eso el disparador normal es el aviso de
Strapi (`GITHUB_DISPATCH_TOKEN`) y las tareas programadas son solo la red de
seguridad. Si el token caduca, se nota enseguida: en Strapi → Logs aparece
`GitHub respondió 401 al avisar` y la web tarda en actualizarse. Se genera uno
nuevo y se actualiza la variable en Render.

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
- `src/pages/version.json.ts` genera la huella que decide si hay que publicar.
  Ojo: las URLs que consulta (`/api/films?populate=*` y `/api/articles?populate=*`)
  están duplicadas en `deploy-cdmon.yml`; si cambias una, cambia la otra.
- **La primera publicación sube la web entera** (~67 MB, unos minutos, una sola
  vez). A partir de ahí el subidor deja un fichero de estado en el servidor
  (`.ftp-deploy-sync-state.json`) y solo envía lo que cambia (compara hashes).
- Nunca hace un borrado total: solo elimina del servidor ficheros que **él mismo**
  había subido antes y ya no existen (por ejemplo, bundles antiguos de Astro).
  Los archivos que subas tú a mano (`.htaccess`, correo, etc.) no se tocan.
- `.github/workflows/keepalive.yml` hace un commit vacío al mes: GitHub
  desactiva las tareas programadas de un repo que pasa 60 días sin actividad.
