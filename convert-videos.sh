#!/bin/bash
# 🎬 Script para convertir y optimizar videos para web

echo "🎬 Iniciando conversión de videos..."

cd public/videos

# Función para convertir video
convert_video() {
    local input=$1
    local output=$2
    
    if [ -f "$input" ]; then
        echo "📹 Convirtiendo $input → $output"
        ffmpeg -i "$input" \
            -vcodec libx264 \
            -preset slow \
            -quality:v 0 \
            -crf 22 \
            -acodec libmp3lame \
            -q:a 4 \
            "$output" \
            -y
        echo "✅ $output completado"
    else
        echo "⚠️  $input no encontrado"
    fi
}

# Convertir videos
convert_video "BIENVENUS_HOME.mp4" "bienvenus-home.mp4"
convert_video "MVAP_CORTE HOME.mp4" "mvap-corte-home.mp4"
convert_video "ELNCS_HOME.mov" "elncs-home.mp4"

echo "✅ Conversión completada"
