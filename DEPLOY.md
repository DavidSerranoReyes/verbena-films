# 🚀 Guía de Deploy - Verbena Films

**Última actualización:** 5 de enero de 2026

---

## 🎯 Hosting: CDmon

**URL:** https://www.cdmon.com/es/hosting  
**Cuenta:** anapuentesm@gmail.com

---

## 📦 Deploy Frontend (Astro) en CDmon

### Preparación Local

1. **Build del proyecto**

   ```bash
   cd /home/david/repos/verbena-films
   npm run build
   ```

   Esto genera la carpeta `dist/` con todos los archivos estáticos.

2. **Verificar archivos generados**
   ```bash
   ls -la dist/
   ```
   Deberías ver: index.html, \_astro/, about/, films/, news/, etc.

---

### Subir a CDmon

#### Opción A: Por FTP (FileZilla)

1. **Descargar FileZilla**

   - https://filezilla-project.org/

2. **Conectar a CDmon**

   - Host: ftp.tudominio.com (o el que proporcione CDmon)
   - Usuario: tu usuario de CDmon
   - Contraseña: tu contraseña
   - Puerto: 21

3. **Navegar a la carpeta web**

   - Generalmente es: `/public_html/` o `/httpdocs/`
   - Si tienes subdominio, puede ser `/public_html/subdominio/`

4. **Subir archivos**

   - Selecciona TODO el contenido de la carpeta `dist/`
   - Arrástralo a `/public_html/`
   - Espera a que termine la transferencia

5. **Verificar permisos**
   - Todos los archivos deben tener permisos 644
   - Todas las carpetas deben tener permisos 755

#### Opción B: Por cPanel (más rápido)

1. **Acceder a cPanel**

   - Ve al panel de CDmon
   - Busca "Administrador de archivos" o "File Manager"

2. **Comprimir archivos localmente**

   ```bash
   cd dist/
   zip -r verbena-films.zip .
   ```

3. **Subir ZIP**

   - En File Manager, ve a `public_html/`
   - Haz clic en "Upload"
   - Sube `verbena-films.zip`

4. **Extraer archivos**
   - Click derecho en `verbena-films.zip`
   - "Extract" o "Extraer"
   - Elimina el ZIP después

---

### Configurar .htaccess (Importante)

CDmon usa Apache, necesitas un archivo `.htaccess` para redirecciones:

1. **Crear archivo `.htaccess` en `public_html/`**

   ```apache
   # Habilitar compresión
   <IfModule mod_deflate.c>
     AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
   </IfModule>

   # Cache de archivos estáticos
   <IfModule mod_expires.c>
     ExpiresActive On
     ExpiresByType image/jpg "access plus 1 year"
     ExpiresByType image/jpeg "access plus 1 year"
     ExpiresByType image/png "access plus 1 year"
     ExpiresByType image/webp "access plus 1 year"
     ExpiresByType text/css "access plus 1 month"
     ExpiresByType application/javascript "access plus 1 month"
   </IfModule>

   # Forzar HTTPS (si tienes SSL)
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

   # Manejo de errores
   ErrorDocument 404 /404.html
   </IfModule>
   ```

2. **Subir el archivo**
   - Asegúrate de que esté en la raíz (`public_html/`)
   - Debe llamarse exactamente `.htaccess` (con el punto)

---

## 🗄️ Deploy Backend (Strapi)

⚠️ **Problema:** CDmon hosting compartido NO soporta Node.js/Strapi

### Solución: Strapi en Railway (Gratis/Barato)

1. **Crear cuenta en Railway**

   - Ve a https://railway.app
   - Conecta con GitHub

2. **Deploy Strapi**

   - "New Project" → "Deploy from GitHub repo"
   - Selecciona tu repo de Strapi

3. **Agregar PostgreSQL**

   - En tu proyecto → "+ New" → "Database" → "PostgreSQL"

4. **Variables de entorno** (Railway las configura automáticamente)

   ```
   NODE_ENV=production
   DATABASE_CLIENT=postgres
   JWT_SECRET=[genera uno aleatorio]
   API_TOKEN_SALT=[genera uno aleatorio]
   ADMIN_JWT_SECRET=[genera uno aleatorio]
   APP_KEYS=[4 keys separadas por comas]
   ```

5. **Generar secrets**

   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
   ```

6. **Obtener URL de Strapi**

   - Railway te dará algo como: `https://verbena-strapi.up.railway.app`

7. **Actualizar variables en el frontend**

   - Edita `.env` localmente:

   ```
   PUBLIC_USE_STRAPI=true
   PUBLIC_STRAPI_URL=https://verbena-strapi.up.railway.app
   STRAPI_API_TOKEN=[tu_token_de_strapi]
   ```

8. **Re-build y re-deploy**
   ```bash
   npm run build
   # Volver a subir dist/ a CDmon
   ```

---

### Alternativa: Strapi en Render (también gratis)

Similar a Railway pero interfaz diferente:

- https://render.com
- Mismo proceso, solo cambia la plataforma

---

## 🔗 Conectar Frontend (CDmon) con Backend (Railway)

1. **Deploy Strapi en Railway** (ver arriba)

2. **Obtener URL de Strapi**

   - Ej: `https://verbena-strapi.up.railway.app`

3. **Crear admin en Strapi**

   - Ve a `https://verbena-strapi.up.railway.app/admin`
   - Crea usuario administrador

4. **Generar API Token**

   - Settings → API Tokens → "Create new"
   - Type: "Read-only"
   - Duration: "Unlimited"
   - Copia el token

5. **Configurar permisos**

   - Settings → Roles → Public
   - Marca: Film (find, findOne) y Article (find, findOne)

6. **Actualizar frontend**

   - Edita `.env`:

   ```
   PUBLIC_STRAPI_URL=https://verbena-strapi.up.railway.app
   STRAPI_API_TOKEN=tu_token_copiado
   ```

7. **Re-build**

   ```bash
   npm run build
   ```

8. **Re-subir a CDmon**
   - Sube de nuevo el contenido de `dist/` por FTP

---

## ✅ Checklist de Deploy CDmon

### Antes de subir:

- [ ] `npm run build` ejecutado sin errores
- [ ] Variables `.env` configuradas con Strapi en Railway
- [ ] Archivos en `dist/` generados correctamente
- [ ] `.htaccess` preparado

### Al subir:

- [ ] Conectado por FTP a CDmon
- [ ] Todos los archivos de `dist/` subidos a `public_html/`
- [ ] `.htaccess` en la raíz
- [ ] Permisos correctos (644 archivos, 755 carpetas)

### Después de subir:

- [ ] Probar URL del sitio
- [ ] Verificar que carga sin errores
- [ ] Probar navegación entre páginas
- [ ] Verificar que carga datos de Strapi
- [ ] Configurar SSL/HTTPS en panel de CDmon

---

## 🔧 Configuración SSL en CDmon

1. **Acceder al panel de CDmon**
2. **Buscar "Certificados SSL" o "Let's Encrypt"**
3. **Activar SSL gratuito para tu dominio**
4. **Esperar 15-30 minutos a que se active**
5. **Forzar HTTPS** (ya incluido en el `.htaccess`)

---

## 🐛 Troubleshooting CDmon

### "Página no encontrada" o 404

- Verifica que `index.html` esté en `public_html/`
- Revisa que no esté en una subcarpeta
- Comprueba permisos (644)

### CSS/JS no cargan

- Verifica que la carpeta `_astro/` se haya subido completa
- Revisa rutas en el navegador (DevTools → Network)
- Comprueba permisos de la carpeta (755)

### Errores de CORS con Strapi

- En Railway, configura CORS en Strapi
- Agrega tu dominio de CDmon a la whitelist

### SSL no funciona

- Espera 30 minutos tras activarlo
- Limpia caché del navegador
- Verifica en panel de CDmon que esté activo

---

## 🔄 Workflow de Actualización

Cada vez que hagas cambios:

```bash
# 1. Desarrollo local
npm run dev

# 2. Probar cambios
# Verifica que todo funciona

# 3. Build
npm run build

# 4. Subir por FTP
# Conecta y sube archivos de dist/

# 5. Verificar
# Abre el sitio y prueba
```

---

## 💰 Costos

- **CDmon Hosting:** Según tu plan actual
- **Railway (Strapi):** $5/mes de crédito gratis, luego ~$5-10/mes
- **Alternativa Render:** Gratis con limitaciones

**Total estimado:** Tu plan CDmon + $5-10/mes para Strapi

---

## 📞 Soporte CDmon

Si tienes problemas con CDmon:

- Panel de soporte: https://www.cdmon.com/es/soporte
- Email: soporte@cdmon.com
- Teléfono: +34 93 545 00 05

---

## 🎯 Próximos Pasos

1. ✅ Build local (`npm run build`)
2. ✅ Conectar por FTP a CDmon
3. ✅ Subir archivos de `dist/`
4. ✅ Crear `.htaccess`
5. ⏳ Deploy Strapi en Railway
6. ⏳ Conectar frontend con backend
7. ⏳ Activar SSL
8. ⏳ Probar todo funcione

---

**¿Listo para el deploy en CDmon? 🚀**

#### Pasos:

1. **Crear cuenta en Vercel**

   - Ve a [vercel.com](https://vercel.com)
   - Inicia sesión con GitHub

2. **Conectar repositorio**

   - Haz clic en "Add New Project"
   - Selecciona el repositorio `verbena-films`
   - Vercel detectará automáticamente que es Astro

3. **Configurar variables de entorno**

   - En la sección "Environment Variables", agrega:

   ```
   PUBLIC_USE_STRAPI=true
   PUBLIC_STRAPI_URL=https://tu-strapi.com
   STRAPI_API_TOKEN=tu_token_aqui
   ```

4. **Deploy**
   - Haz clic en "Deploy"
   - Espera 2-3 minutos
   - ¡Listo! Tu sitio estará en `https://verbena-films.vercel.app`

#### Dominio personalizado:

- En tu proyecto de Vercel → Settings → Domains
- Agrega tu dominio (ej: verbenafilms.com)
- Configura los DNS según las instrucciones

---

### Opción 2: Netlify

#### Pasos:

1. **Crear cuenta en Netlify**

   - Ve a [netlify.com](https://netlify.com)
   - Conecta con GitHub

2. **Nuevo sitio**

   - "Add new site" → "Import an existing project"
   - Selecciona tu repositorio

3. **Configuración de build**

   ```
   Build command: npm run build
   Publish directory: dist
   ```

4. **Variables de entorno**

   - Site settings → Environment variables
   - Agrega las mismas variables que en Vercel

5. **Deploy**
   - Haz clic en "Deploy site"

---

### Opción 3: Hosting Tradicional (cPanel, etc.)

#### Pasos:

1. **Build local**

   ```bash
   npm run build
   ```

2. **Subir archivos**

   - La carpeta `dist/` contiene todo el sitio
   - Sube TODO el contenido de `dist/` a tu hosting
   - Normalmente va en `public_html/` o `www/`

3. **Configurar servidor**
   - Asegúrate de que el servidor soporte archivos estáticos
   - Configurar redirecciones para SPA (si aplica)

---

## 🗄️ Deploy de Strapi

### Opción 1: Railway (Fácil y gratis) ⭐

1. **Crear cuenta en Railway**

   - Ve a [railway.app](https://railway.app)
   - Conecta con GitHub

2. **Nuevo proyecto**

   - "New Project" → "Deploy from GitHub repo"
   - Selecciona tu repositorio de Strapi

3. **Variables de entorno**

   ```
   NODE_ENV=production
   DATABASE_CLIENT=postgres
   DATABASE_HOST=${{POSTGRES.POSTGRES_HOST}}
   DATABASE_PORT=${{POSTGRES.POSTGRES_PORT}}
   DATABASE_NAME=${{POSTGRES.POSTGRES_DB}}
   DATABASE_USERNAME=${{POSTGRES.POSTGRES_USER}}
   DATABASE_PASSWORD=${{POSTGRES.POSTGRES_PASSWORD}}
   JWT_SECRET=tu_jwt_secret_aleatorio
   API_TOKEN_SALT=tu_salt_aleatorio
   ADMIN_JWT_SECRET=tu_admin_secret_aleatorio
   APP_KEYS=key1,key2,key3,key4
   ```

4. **Agregar base de datos**

   - En tu proyecto, haz clic en "+ New"
   - Selecciona "Database" → "Add PostgreSQL"
   - Railway conectará automáticamente las variables

5. **Generar secrets**

   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
   ```

   Ejecuta esto 4 veces para generar los secrets

6. **Deploy**
   - Railway detecta Strapi automáticamente
   - Espera 5-10 minutos
   - Tu Strapi estará en `https://tu-proyecto.railway.app`

---

### Opción 2: Render

Similar a Railway pero con interfaz diferente.

1. Ve a [render.com](https://render.com)
2. "New +" → "Web Service"
3. Conecta repositorio
4. Configuración:
   - Build: `npm install`
   - Start: `npm run start`
5. Agrega PostgreSQL desde el dashboard
6. Configura variables de entorno

---

### Opción 3: DigitalOcean / VPS

Para hosting tradicional, necesitas:

- Servidor Ubuntu 22.04+
- Node.js 18+
- PostgreSQL 14+
- PM2 para proceso
- Nginx como proxy

---

## 🔗 Conectar Frontend con Strapi

Una vez que Strapi esté en producción:

1. **Obtener URL de Strapi**

   - Ej: `https://verbena-strapi.railway.app`

2. **Actualizar variables en Vercel/Netlify**

   ```
   PUBLIC_STRAPI_URL=https://verbena-strapi.railway.app
   ```

3. **Re-deploy el frontend**
   - En Vercel/Netlify → Deployments → Re-deploy

---

## ✅ Checklist Pre-Deploy

### Frontend (Astro):

- [ ] `npm run build` funciona sin errores
- [ ] Variables de entorno configuradas en `.env`
- [ ] Imágenes optimizadas
- [ ] URLs de Strapi actualizadas
- [ ] Dominio personalizado configurado (opcional)

### Backend (Strapi):

- [ ] Base de datos PostgreSQL configurada
- [ ] Todos los secrets generados
- [ ] API tokens creados
- [ ] Permisos públicos configurados (find, findOne)
- [ ] URL del frontend agregada en CORS

---

## 🔧 Configuración Post-Deploy

1. **Crear usuario admin en Strapi**

   - Ve a tu URL de Strapi + `/admin`
   - Crea el primer usuario administrador
   - Guarda las credenciales de forma segura

2. **Generar API Token**

   - Settings → API Tokens → Create new
   - Tipo: "Read-only"
   - Duración: "Unlimited"
   - Copia el token

3. **Actualizar token en frontend**

   - Ve a Vercel/Netlify
   - Environment Variables
   - Actualiza `STRAPI_API_TOKEN`
   - Re-deploy

4. **Configurar CORS en Strapi**

   - En tu Strapi: `config/middlewares.ts`
   - Agrega la URL de tu frontend en la whitelist

5. **Agregar contenido**
   - Usa la guía `GUIA_CLIENTE.md`
   - Agrega películas y noticias
   - Publica el contenido

---

## 🐛 Troubleshooting

### Frontend no carga datos de Strapi

- Verifica `PUBLIC_STRAPI_URL` en variables de entorno
- Verifica que el token sea válido
- Revisa permisos públicos en Strapi (find, findOne)
- Abre DevTools → Network para ver errores

### CORS errors

- En Strapi, actualiza `config/middlewares.ts`
- Agrega tu dominio frontend a la whitelist

### Build fails

- Verifica que todas las dependencias estén en `package.json`
- Revisa que la versión de Node sea compatible (18+)

---

## 📊 Monitoreo

Una vez en producción:

- Vercel/Netlify tienen analytics incluidos
- Railway/Render tienen logs en tiempo real
- Configura alertas para caídas del servicio

---

## 🔄 Workflow de Desarrollo

```
Desarrollo local → Commit → Push → Auto-deploy
```

Tanto Vercel como Railway hacen auto-deploy al hacer push a `main`.

---

## 💰 Costos Estimados

### Gratis (Tier gratuito):

- Vercel: Frontend (gratis hasta 100GB bandwidth)
- Railway: Strapi + DB ($5/mes de crédito gratis)
- Netlify: Frontend (gratis hasta 100GB)
- Render: Strapi (gratis con limitaciones)

### Recomendado para producción:

- Vercel Pro: $20/mes
- Railway: ~$10-20/mes
- **Total: ~$30-40/mes**

---

## 🎯 Siguiente Paso

1. Elige tu plataforma de deploy
2. Sigue los pasos específicos
3. Configura variables de entorno
4. Verifica que todo funcione
5. Comparte las URLs con el cliente

---

**¿Listo para desplegar? ¡Adelante! 🚀**
