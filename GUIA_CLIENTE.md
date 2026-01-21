# 📖 Guía de Usuario - Verbena Films CMS

**Última actualización:** 5 de enero de 2026

---

## 🎯 ¿Qué es Strapi?

Strapi es el panel de administración donde puedes gestionar el contenido de tu sitio web (películas, noticias, etc.) sin necesidad de programar.

---

## 🔐 Acceso al Panel

**URL de acceso:**

```
https://verbena-films-strapi.onrender.com/admin
```

**Tus credenciales:**

- **Email:** [Tu correo será proporcionado por separado]
- **Contraseña:** [Tu contraseña será proporcionada por separado]

**Pasos:**

1. Ve a https://verbena-films-strapi.onrender.com/admin
2. Ingresa con tu correo y contraseña
3. ¡Ya estás dentro! Verás el panel principal con las opciones de Content Manager

---

## 🎬 Gestionar Películas

### Ver películas existentes

1. En el menú lateral, haz clic en **"Content Manager"**
2. Selecciona **"Film"** en la lista
3. Verás todas las películas agregadas

### Agregar una nueva película

1. Haz clic en **"Create new entry"** (botón azul arriba a la derecha)
2. Completa los campos:

   **Campos obligatorios:**

   - **Title** (Título): Nombre de la película
   - **Year** (Año): Año de producción (ej: 2026)
   - **Director**: Nombre del director
   - **Country** (País): País de producción

   **Campos opcionales:**

   - **Poster**: URL de la imagen del póster
   - **Synopsis ES**: Sinopsis en español
   - **Synopsis EN**: Sinopsis en inglés
   - **Trailer URL**: Enlace al trailer (YouTube, Vimeo, etc.)
   - **IMDB URL**: Enlace a la página de IMDB
   - **Featured** (Destacada): Marcar si quieres que aparezca destacada
   - **Writer** (Guionista): Nombre del guionista
   - **Producers** (Productores): Lista de productores
   - **Executive Producer** (Productor Ejecutivo)
   - **Production** (Producción): Casa productora
   - **Awards** (Premios): Premios obtenidos
   - **Images**: URLs adicionales de imágenes

3. Haz clic en **"Save"**
4. Luego en **"Publish"** para que aparezca en el sitio web

### Editar una película

1. En la lista de películas, haz clic en el nombre de la película que quieres editar
2. Modifica los campos necesarios
3. Haz clic en **"Save"** y luego **"Publish"**

### Eliminar una película

1. En la lista de películas, marca la casilla de la película a eliminar
2. Haz clic en el botón de la papelera (🗑️)
3. Confirma la eliminación

---

## 📰 Gestionar Noticias

### Ver noticias existentes

1. En **"Content Manager"**
2. Selecciona **"Article"**
3. Verás todas las noticias

### Agregar una nueva noticia

1. Haz clic en **"Create new entry"**
2. Completa los campos:

   **Campos obligatorios:**

   - **Title** (Título): Título de la noticia
   - **Description** (Descripción): Contenido completo de la noticia
   - **Date** (Fecha): Fecha de publicación
   - **Category** (Categoría): Selecciona entre:
     - Festival
     - Award (Premio)
     - Release (Estreno)
     - Production (Producción)
     - News (Noticia general)

   **Campos opcionales:**

   - **External URL**: Si es un enlace externo, pega la URL completa
   - **Image**: URL de imagen para la noticia

3. **"Save"** y **"Publish"**

### Editar/Eliminar noticias

Mismo proceso que con las películas.

---

## ✅ Buenas Prácticas

### Imágenes

- Usa URLs completas (ej: `https://ejemplo.com/imagen.jpg`)
- Formatos recomendados: JPG, PNG, WebP
- Tamaño recomendado posters: mínimo 800x1200px
- Peso máximo recomendado: 500KB por imagen

### Textos

- **Title**: Máximo 100 caracteres
- **Synopsis**: Entre 150-300 palabras para mejor lectura
- **Description (noticias)**: Sin límite, pero sé conciso

### URLs

- Siempre incluye `http://` o `https://`
- Verifica que los enlaces funcionen antes de publicar
- Para trailers de YouTube, usa la URL completa

### Fechas

- Formato: DD/MM/AAAA
- Para noticias, usa la fecha real de publicación

---

## 🔄 Proceso de Publicación

```
Crear/Editar → Save (Guardar) → Publish (Publicar) → Visible en web
```

**Importante:** Si solo guardas sin publicar, el contenido NO aparecerá en el sitio web.

---

## 📱 Contenido Híbrido

Tu sitio web combina:

- ✨ **Contenido de Strapi**: Lo que agregues aquí
- 📚 **Contenido estático**: Las 6 películas originales

Ambos se mostrarán juntos automáticamente en el sitio.

---

## ❓ Preguntas Frecuentes

**¿Cuántas películas puedo agregar?**
Sin límite. Agrega todas las que necesites.

**¿Puedo agregar videos directamente?**
No, pero puedes agregar enlaces a YouTube, Vimeo, etc. en el campo "Trailer URL".

**¿Los cambios son inmediatos?**
Sí, una vez que publicas, el cambio aparece en el sitio web inmediatamente.

**¿Puedo borrar las películas originales?**
Las 6 películas originales están en el código, no en Strapi. Solo puedes agregar nuevas.

**¿Qué hago si me equivoco?**
Puedes editar cualquier entrada en cualquier momento. No hay problema.

---

## 🆘 Soporte Técnico

Para cualquier problema técnico o duda:

- **Contacta con el desarrollador:**
- **Email:** david-serrano@outlook.com
- **Website:** https://verbenafilms.com

---

**¡Listo! Ya puedes gestionar todo el contenido de tu sitio web fácilmente. 🎉**
