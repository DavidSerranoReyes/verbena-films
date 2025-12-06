# 🎬 Videos del Hero

Esta carpeta contiene los 3 videos que se muestran en rotación en la sección Hero de la página principal.

## Especificaciones

- **Archivos requeridos:**

  - `hero-1.mp4`
  - `hero-2.mp4`
  - `hero-3.mp4`

- **Duración:** ~10 segundos cada uno
- **Resolución:** Mínimo 1920x1080 (Full HD)
- **Formato:** MP4 (codificado con H.264)
- **Tamaño máximo:** ~2-5 MB por video para óptimo rendimiento web
- **Audio:** Opcional (los videos se reproducen sin sonido - muted)

## Notas

- Los videos se reproducen en bucle automático
- Se muestran con una rotación de 10 segundos por video
- El control de transición es manual (indicadores abajo) o automático (cada 10 segundos)
- Los videos deben ser optimizados para web (usar herramientas como HandBrake o FFmpeg)

## Cómo agregar los videos

1. Guarda los 3 videos en esta carpeta con los nombres especificados
2. Los videos aparecerán automáticamente en la página

## Ejemplos de comandos FFmpeg para optimizar

```bash
# Redimensionar y optimizar para web
ffmpeg -i input.mp4 -vf scale=1920:1080 -c:v libx264 -preset slow -crf 28 -c:a aac -b:a 128k hero-1.mp4

# Comprimir más
ffmpeg -i input.mp4 -vf scale=1920:1080 -c:v libx264 -preset veryslow -crf 32 -c:a aac -b:a 96k hero-1.mp4
```
