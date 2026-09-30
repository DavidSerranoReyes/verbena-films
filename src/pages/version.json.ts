/**
 * 🔖 /version.json
 *
 * Huella del contenido del CMS en el momento de construir la web.
 *
 * La usa el publicador automático (.github/workflows/deploy-cdmon.yml) para
 * decidir si merece la pena reconstruir y subir la web:
 *
 *   - Si la huella del CMS y el commit del repo son los mismos que los de la web
 *     publicada → no hay nada nuevo → no se conecta ni a Strapi ni a CDmon.
 *   - Si cambia cualquiera de los dos → se reconstruye y se sube.
 *
 * También sirve para comprobar de un vistazo cuándo se actualizó la web:
 *   https://www.verbenafilms.com/version.json
 */
import type { APIRoute } from 'astro';
import { createHash } from 'node:crypto';

const STRAPI_URL =
  import.meta.env.PUBLIC_STRAPI_URL || 'https://verbena-films-strapi.onrender.com';

// ⚠️ Estas dos URLs deben coincidir EXACTAMENTE con las que consulta el workflow.
const URLS = [
  `${STRAPI_URL}/api/films?populate=*`,
  `${STRAPI_URL}/api/articles?populate=*`,
];

export const GET: APIRoute = async () => {
  let huella = 'sin-cms';

  try {
    const cuerpos = await Promise.all(
      URLS.map((url) =>
        // Si Strapi no responde en 20 s no bloqueamos el build
        fetch(url, { signal: AbortSignal.timeout(20000) }).then((res) =>
          res.ok ? res.text() : '',
        ),
      ),
    );
    huella = createHash('sha256')
      .update(cuerpos.join('\n'))
      .digest('hex')
      .slice(0, 20);
  } catch {
    huella = 'error';
  }

  return new Response(
    JSON.stringify(
      {
        huella,
        commit: process.env.GITHUB_SHA ?? '',
        generado: new Date().toISOString(),
      },
      null,
      2,
    ),
    { headers: { 'Content-Type': 'application/json' } },
  );
};
