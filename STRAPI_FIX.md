# 🚀 SOLUCIÓN: Strapi No Funciona en Render

## 🔍 Diagnóstico

**Problema:** Render durmió la instancia de Strapi (free tier duerme apps inactivas)
**Email:** "Exited with status 1"
**Síntoma:** Films carga lentamente porque intenta conectar a Strapi caído

---

## ✅ SOLUCIONES (Elige una)

### 🥇 Opción 1: RECOMENDADA - Render Plan Pago ($7/mes)

**La forma correcta de arreglarlo permanentemente:**

1. **Accede a:** https://dashboard.render.com
2. **Busca tu servicio:** `verbena-films-strapi`
3. **Botón "Settings"** → "Instance Type"
4. **Cambia de "Free" → "Starter" ($7/mes)**
5. **Guarda cambios**

**Ventajas:**

- ✅ Nunca duerme
- ✅ Funciona 24/7 sin interrupciones
- ✅ La cliente puede editar sin problemas
- ✅ Soporte técnico

---

### 🥈 Opción 2: TEMPORAL - Uptime Monitor (Gratis pero manual)

**Mantiene Strapi despierto haciendo pings cada 15 min:**

1. Ve a: https://uptimerobot.com (gratis)
2. **Crea un monitor HTTP**
   - URL: `https://verbena-films-strapi.onrender.com/admin`
   - Frecuencia: Cada 15 minutos
3. **Actívalo**

**Ventajas:** Gratis, mantiene la app activa
**Desventaja:** Render puede cancelar si lo detecta

---

### 🥉 Opción 3: Mejorar Timeouts (Solución Inmediata)

**Hacer que el fallback sea más rápido mientras arreglas Render:**

```bash
# 1. Editar .env para agregar timeout
PUBLIC_STRAPI_TIMEOUT=5000  # 5 segundos

# 2. Compilar
npm run build

# 3. Deploy a CDmon
```

**Así si Strapi falla, carga datos estáticos en 5 segundos en lugar de 30+**

---

## 🎯 Recomendación Inmediata

### Ahora (mientras decides)

1. **Reinicia Strapi en Render:**

   - Accede a https://dashboard.render.com
   - Busca `verbena-films-strapi`
   - Botón "Manual Deploy" o "Clear Build Cache" → "Deploy"
   - Espera 2-3 min

2. **Verifica que funcione:**

   ```bash
   curl https://verbena-films-strapi.onrender.com/api/films
   ```

3. **Si sigue fallando**, implementa la Opción 3 (timeouts rápidos)

---

## 📋 Paso a Paso: Reimplementar Timeouts

### Archivo: `src/services/api.ts`

```typescript
// Agregar timeout
const TIMEOUT = 5000; // 5 segundos

private async request<T>(...) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);

    const response = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal
    });

    clearTimeout(timeoutId);
    // ...
```

---

## 💡 Solución Definitiva (Mi recomendación)

**Para que tu cliente pueda usar bien Strapi:**

1. ✅ **Actualiza a Render Plan Pago** ($7/mes) - Lo mejor
2. ✅ **O** usa Vercel + Render PostgreSQL
3. ✅ **O** migra Strapi a un servidor VPS (tipo DigitalOcean $5/mes)

**Con plan pago, tu cliente:**

- Edita Films en Strapi
- Edita News en Strapi
- Todo funciona sin interrupciones
- No hay que preocuparse de timeouts

---

## 🆘 Si necesitas ayuda:

1. **¿Quieres que optimice los timeouts ahora?** → Voy a por ello
2. **¿Upgrade a Render de pago?** → Te paso instrucciones
3. **¿Revisar logs de Render?** → Necesito acceso

¿Cuál prefieres?
