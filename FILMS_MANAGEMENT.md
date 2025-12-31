# 🎬 Guía: Gestión de Films en Strapi

## Descripción General

La sección de **Films** está lista para ser gestionada completamente desde Strapi. El cliente podrá añadir, editar, eliminar y reordenar sus películas sin necesidad de intervención de desarrollo.

---

## 🎯 Estructura de una Película

Cada película debe tener estos campos en Strapi:

### Campos Obligatorios

| Campo | Tipo | Descripción | Ejemplo |
|-------|------|-------------|---------|
| **ID** | String | Identificador único (sin espacios) | `taranta`, `flores-madre` |
| **Título** | String | Nombre de la película | `Taranta`, `Flores para una madre ausente` |
| **Director** | String | Nombre del director/a | `Samuel Nacar`, `Ana Puentes` |
| **Año** | String | Año de producción o estado | `2024`, `En Producción` |
| **País** | String | País de origen | `España`, `España-Francia` |
| **Póster** | Image | Imagen principal (portada) | `/images/movies/TARANTA.png` |

### Campos Opcionales

| Campo | Tipo | Descripción | Ejemplo |
|-------|------|-------------|---------|
| **Guionista** | String | Autor/a del guion | `Ana Puentes` |
| **Productores** | String | Lista de productores | `Ana Puentes, José Carlos de Isla` |
| **Productor Ejecutivo** | String | Productor/a ejecutivo/a | `Adriana Vera` |
| **Producción** | String | Empresas productoras | `Verbena Films, White Leaf` |
| **Premios** | Array/Text | Premios y festivales | `Premio Alice Guy`, `ICAA 2025` |
| **Tráiler** | String | URL de Vimeo (solo ID) | `123456789` |
| **Imágenes** | Array | Galería de imágenes | Array de URLs |

---

## 📐 Comportamiento del Grid Responsivo

El grid está diseñado para adaptarse de forma elegante al número de películas:

### Regla de Distribución

```
1-2 películas → Centradas (1 por línea en mobile, 1-2 en desktop)
3 películas    → 3 en línea (desktop), 1 en mobile
4 películas    → 3 en línea, con la 4ª centrada en línea nueva
5 películas    → 3 en línea, 2 en línea nueva centradas
6 películas    → 3 en línea en ambas líneas
7 películas    → 3 en línea, 3 en línea nueva, 1 centrada
...
```

### Ejemplos Visuales

#### 1 película
```
    [PELÍCULA 1]
```

#### 2 películas
```
  [PELÍCULA 1]  [PELÍCULA 2]
```

#### 3 películas
```
[PELÍCULA 1]  [PELÍCULA 2]  [PELÍCULA 3]
```

#### 4 películas
```
[PELÍCULA 1]  [PELÍCULA 2]  [PELÍCULA 3]
      [PELÍCULA 4]
```

#### 5 películas
```
[PELÍCULA 1]  [PELÍCULA 2]  [PELÍCULA 3]
    [PELÍCULA 4]  [PELÍCULA 5]
```

#### 6 películas
```
[PELÍCULA 1]  [PELÍCULA 2]  [PELÍCULA 3]
[PELÍCULA 4]  [PELÍCULA 5]  [PELÍCULA 6]
```

### CSS que lo controla

El comportamiento se logra con CSS Grid y se describe en:
- Archivo: `src/components/Films/FilmsGrid.astro`
- Clase: `.films-grid`
- Propiedades: `grid-template-columns` con `auto-fit` y `minmax`

---

## 🚀 Cómo Añadir una Película en Strapi

### Paso a Paso

1. **Accede a Strapi** en tu panel de administración
2. **Navega** a Colecciones → **Films**
3. **Haz clic** en "+ Crear nueva película"
4. **Completa los campos:**
   - Título (obligatorio)
   - Director/a (obligatorio)
   - Año (obligatorio)
   - País (obligatorio)
   - Póster (obligatorio - imagen)
   - Guionista (opcional)
   - Productores (opcional)
   - Productor Ejecutivo (opcional)
   - Producción (opcional)
   - Premios (opcional - lista)
   - Tráiler (opcional - solo el ID de Vimeo)
   - Imágenes (opcional - galería)

5. **Haz clic** en "Guardar"
6. **¡Listo!** La película aparecerá automáticamente en el grid

---

## 📝 Ejemplo Práctico: Añadir "Taranta"

```
Título: Taranta
Director: Samuel Nacar
Año: 2018
País: España
Póster: /images/movies/TARANTA.png

Guionista: Claudia Barthelemy y Ana Puentes
Productores: Ana Puentes, José Carlos de Isla y Paco Ortiz
Productor Ejecutivo: (dejar vacío)
Producción: Verbena Films, Sarao Films

Premios (cada uno en una línea):
- Premio Abycine Lanza
- Premio Abycine WIP
- Premio Zinebi Networking
- ICAA
- Junta de Andalucía
- Canal Sur
- RTVE

Tráiler: (dejar vacío)
Imágenes: (opcional - galería)
```

---

## 🎬 Películas Actuales (Línea Base)

Actualmente hay **6 películas** en la web:

1. **Taranta** - Samuel Nacar (2018)
2. **Flores para una madre ausente** - Ana Puentes (2025)
3. **Audición** - Ana Puentes (2025)
4. **En la noche caminamos solos** - Rafa Alberola (2024)
5. **Bienvenus** - (sin datos actuales)
6. **Mi vida al principio** - (sin datos actuales)

---

## 🔄 Cómo Modificar una Película Existente

1. **Accede a Strapi**
2. **Navega** a Colecciones → **Films**
3. **Haz clic** en la película que quieres editar
4. **Modifica los campos** que necesites
5. **Haz clic** en "Guardar"
6. **La web se actualiza** automáticamente en pocos minutos

---

## 🗑️ Cómo Eliminar una Película

1. **Accede a Strapi**
2. **Navega** a Colecciones → **Films**
3. **Haz clic** en la película
4. **Haz clic** en "Eliminar" (botón rojo)
5. **Confirma** la eliminación
6. **La película desaparece** de la web

---

## 🔗 Campos de Relación (Avanzado)

Si en el futuro quieres relacionar películas con otros contenidos:
- Premios (colección separada)
- Festivales
- Actores/Actrices
- Equipo técnico

Contacta con desarrollo para configurar estas relaciones.

---

## 💡 Tips para Subir Películas

✅ **Póster**
- Usa imágenes de alta calidad (mínimo 300x450px)
- Formato: JPG o PNG
- El sistema las optimizará automáticamente

✅ **Tráiler**
- Solo necesitas el ID de Vimeo (no la URL completa)
- Ejemplo: Para `https://vimeo.com/123456789`, solo pon `123456789`
- El sistema incrustará el video automáticamente

✅ **Premios**
- Una línea por premio
- Se mostrarán en el modal de la película
- Formato libre (Abycine 2024, ICAA, etc.)

✅ **Imágenes**
- Puedes subir múltiples imágenes por película
- Se mostrarán en el lightbox/galería
- La primera será la por defecto en el modal

---

## ⚙️ Integración Técnica (Para Desarrolladores)

### Endpoint en Strapi

```
GET /api/films?sort=createdAt:desc&populate=*
```

### Estructura JSON esperada

```json
{
  "id": 1,
  "attributes": {
    "title": "Taranta",
    "director": "Samuel Nacar",
    "year": "2018",
    "country": "España",
    "writer": "Claudia Barthelemy y Ana Puentes",
    "producers": "Ana Puentes, José Carlos de Isla y Paco Ortiz",
    "executiveProducer": null,
    "production": "Verbena Films, Sarao Films",
    "awards": ["Premio Abycine Lanza", "ICAA", ...],
    "trailer": "",
    "poster": { "url": "/uploads/TARANTA.png" },
    "images": [{ "url": "/uploads/image1.png" }, ...]
  }
}
```

### Cómo se conecta en el código

1. El componente `FilmsGrid.astro` solicita datos a Strapi
2. Los datos se formatean al formato esperado por el frontend
3. El grid se renderiza automáticamente
4. Los modales y lightbox funcionan sin cambios

---

## 📞 Preguntas Frecuentes

**¿Cuánto tarda en verse la película nueva en la web?**
- 5-10 minutos máximo después de guardar

**¿Puedo cambiar el orden de las películas?**
- No directamente en Strapi
- El orden se basa en la fecha de creación (más nuevas primero)
- Contacta con desarrollo si necesitas reordenar

**¿Qué pasa si no relleno los campos opcionales?**
- La película aparecerá igual, solo sin esa información
- Los campos opcionales se omiten en la visualización

**¿Puedo subir videos en lugar de solo Vimeo?**
- Actualmente solo Vimeo está soportado
- Contacta con desarrollo para agregar YouTube u otros

**¿Hay límite de películas?**
- No, puedes subir cuantas quieras
- El grid se adaptará automáticamente

---

## 🎨 Campos que se Muestran Dónde

### En la Tarjeta (Grid)
- Póster
- Título (al pasar el ratón)

### En el Modal (Lightbox)
- Póster/Imagen
- Título
- Año
- Director
- Tipo (obtenido de traducciones i18n)
- País
- Idioma (obtenido de traducciones i18n)
- Guionista
- Productores
- Productor Ejecutivo
- Producción
- Premios
- Botón para ver tráiler (si existe)

### En la Galería
- Imágenes adicionales (si se proporcionan)

---

**¡Listo para comenzar a subir películas en Strapi!** 🎬✨
