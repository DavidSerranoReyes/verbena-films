# 📰 Guía: Gestión de Noticias en Strapi

## Descripción General

La sección de **Noticias** está lista para ser gestionada completamente desde Strapi. El cliente podrá añadir, editar y eliminar noticias sin necesidad de intervención de desarrollo.

### 🎯 Sistema Automático de Destacados

**Las noticias más recientes se muestran automáticamente como destacadas:**

- Las **primeras 2 noticias** (más recientes) aparecen en la sección "Destacados"
- Las **demás noticias** aparecen en el grid "Todas las noticias"
- **Sin necesidad de marcar nada manualmente** - ¡simplemente sube la noticia y aparecerá automáticamente!

### 🌍 Multiidioma Integrado

**Las noticias se muestran automáticamente en el idioma del usuario:**

- Todos los títulos y descripciones están disponibles en **Español** e **Inglés**
- El cambio de idioma es **instantáneo** en toda la página
- Las fechas también se adaptan al idioma seleccionado
- **Sin trabajo adicional** - el sistema se encarga automáticamente

---

## 🎯 Estructura de una Noticia

Cada noticia tiene los siguientes campos:

| Campo           | Tipo   | Obligatorio | Descripción                                      |
| --------------- | ------ | ----------- | ------------------------------------------------ |
| **ID**          | String | ✅ Sí       | Identificador único (ej: `taranta-zinebi-award`) |
| **Título**      | String | ✅ Sí       | Título de la noticia                             |
| **Descripción** | String | ✅ Sí       | Resumen de la noticia                            |
| **Fecha**       | Date   | ✅ Sí       | Fecha de publicación (ISO: YYYY-MM-DD)           |
| **Categoría**   | Select | ✅ Sí       | `award` \| `competition` \| `team` \| `general`  |
| **URL Externa** | String | ❌ No       | Link a la fuente (ej: audiovisual451.com)        |
| **Imagen**      | Image  | ❌ No       | Miniatura de la noticia                          |

---

## 📋 Categorías Disponibles

### 🏆 **award** (Premio)

- Color: Verde
- Usa para: Premios ganados, reconocimientos

### 🏅 **competition** (Competencia)

- Color: Azul
- Usa para: Participaciones en competiciones, festivales

### 👥 **team** (Equipo)

- Color: Morado
- Usa para: Logros de miembros del equipo, reconocimientos personales

### 📢 **general** (Noticia General)

- Color: Gris
- Usa para: Otros tipos de noticias

---

## 🎬 Ejemplos de Noticias Existentes

### 1. TARANTA gana premio Zinebi Networking (Destacada - más reciente)

```
Título: TARANTA gana el premio ZINEBI NETWORKING de 10.000€
Descripción: El documental de Samuel Nacar ha sido galardonado con el premio Zinebi Networking, reconocimiento que destaca la excelencia profesional del proyecto.
Fecha: 2025-01-15
Categoría: award
URL Externa: https://www.audiovisual451.com/correct-me-if-im-wrong-de-hao-zhou-gran-premio-de-la-67a-edicion-de-zinebi/
```

### 2. FLORES PARA UNA MADRE AUSENTE gana Alice Guy (Destacada)

```
Título: FLORES PARA UNA MADRE AUSENTE gana el premio de guion ALICE GUY
Descripción: El guion de Ana Puentes es reconocido en los premios Alice Guy, destacando la escritura cinematográfica de calidad en la industria española.
Fecha: 2025-01-10
Categoría: award
URL Externa: https://www.audiovisual451.com/flores-para-una-madre-ausente-y-olivia-ganan-los-premios-de-guion-mujeres-en-el-cine-alice-guy-2024/
```

### 3. TARANTA compite en Zinebi Networking (En grid)

```
Título: TARANTA compite por el premio de ZINEBI NETWORKING
Descripción: El proyecto de Samuel Nacar es seleccionado entre 11 largometrajes documentales que compiten por los 30.000 euros del octavo foro profesional Zinebi Networking.
Fecha: 2025-01-05
Categoría: competition
URL Externa: https://www.audiovisual451.com/11-proyectos-de-largometraje-documental-compiten-por-los-30-000-euros-del-octavo-foro-profesional-zinebi-networking/
```

### 4. Ana Puentes en lista JASP (En grid)

```
Título: ANA PUENTES en la lista de MUJERES "Jóvenes aunque sobradamente preparadas"
Descripción: Ana Puentes es incluida en la selección de mujeres JASP de la industria española por Audiovisual 451, reconociendo su talento y preparación profesional.
Fecha: 2024-12-20
Categoría: team
URL Externa: https://www.audiovisual451.com/las-mujeres-jasp-de-la-industria-espanola-entrega-18/
```

---

## 🚀 Cómo Añadir Noticias (Procedimiento Futuro en Strapi)

1. **Accede a Strapi** en tu panel de administración
2. **Navega** a Colecciones → **News**
3. **Haz clic** en "+ Crear nueva noticia"
4. **Completa los campos en AMBOS idiomas:**
   - Título (Español)
   - Título (English)
   - Descripción (Español)
   - Descripción (English)
   - Fecha (YYYY-MM-DD) ← **¡Lo más importante!**
   - Categoría
   - URL Externa (opcional)
   - Imagen (opcional)
5. **Haz clic** en "Guardar"
6. **¡Listo!** La noticia aparecerá automáticamente en ambos idiomas:
   - Si es una de las 2 más recientes → En "Destacados"
   - Si es más antigua → En "Todas las noticias"
   - Cambia automáticamente al idioma seleccionado por el usuario

---

## 💡 Tips para Crear Buenas Noticias

✅ **Títulos claros y concisos**

- Usa MAYÚSCULAS para nombres de películas/proyectos
- Destaca el logro: "gana", "obtiene", "seleccionado"

✅ **Descripciones impactantes**

- 2-3 líneas máximo
- Responde: ¿Qué es? ¿Por qué es importante?
- Evita tecnicismos innecesarios

✅ **Fechas correctas**

- Usa formato ISO: YYYY-MM-DD
- **¡La fecha determina automáticamente si es destacada!**
- Las 2 noticias más recientes aparecen en "Destacados"

✅ **Categorías apropiadas**

- Elige la que mejor represente el contenido
- Esto ayuda a los visitantes a filtrar y entender

✅ **No hay que marcar nada**

- El sistema automático se encarga de mostrar destacados
- Solo crea noticias con la fecha correcta y ¡listo!

---

## 🔗 Estructura en la Web

### Sección Destacados

Aparecen en grande al inicio, con más prominencia visual.

### Sección "Todas las noticias"

Grid responsivo con todas las demás noticias ordenadas por fecha (más reciente primero).

---

## ⚙️ Integración Técnica (Para Desarrolladores)

La página obtiene datos de: `src/data/news.ts`

Cuando se configure Strapi, los datos provendrán de:

```
GET /api/news?sort=date:desc&populate=*
```

El componente `NewsGrid.astro` maneja automáticamente:

- Ordenamiento por fecha
- Formateo de fechas en español/inglés
- Badges de categoría con colores
- Responsividad completa
- Links externos

---

## 📱 Vista en Dispositivos

- **Desktop:** Destacados con 2-3 columnas, grid normal 2-3 columnas
- **Tablet:** Destacados a ancho completo, grid 2 columnas
- **Mobile:** Todo en una columna, fácil lectura

---

## 💡 Sistema Automático Explicado

### ¿Cómo funciona?

1. Cuando subes una noticia en Strapi, **la fecha es lo importante**
2. El sistema **ordena automáticamente por fecha** (más reciente primero)
3. Las **primeras 2 noticias** (más nuevas) aparecen en "Destacados"
4. Las **demás** aparecen en el grid "Todas las noticias"

### Ejemplo:

**Noticias en orden:**

- 15 enero 2025 ← **Destacada #1**
- 10 enero 2025 ← **Destacada #2**
- 5 enero 2025 ← En grid
- 20 diciembre 2024 ← En grid
- 15 diciembre 2024 ← En grid

### Cuando añades una noticia más reciente:

Si subes una noticia con fecha **20 enero 2025**, automáticamente:

- Esa noticia se convierte en **Destacada #1**
- La del 15 enero se convierte en **Destacada #2**
- La del 10 enero baja al grid regular

**¡Sin tocar nada en el código!** ✨

---

## 📞 Soporte

Si necesitas añadir:

- **Nuevas categorías:** Contacta con desarrollo
- **Campos adicionales:** Contacta con desarrollo
- **Filtros avanzados:** Contacta con desarrollo

Para cambios simples (títulos, descripciones, fechas, categorías), puedes hacerlo directamente desde Strapi.
