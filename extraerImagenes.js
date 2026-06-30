import puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';

const PESO_MAXIMO_BYTES = 5 * 1024 * 1024; // 5MB por imagen, para no colgar el robot con archivos gigantes
const TIMEOUT_DESCARGA_MS = 15000;
const LIMITE_IMAGENES = 40; // tope defensivo: sitios con catálogos pueden tener cientos de <img>

function resolverUrl(href, baseUrl) {
  try {
    return new URL(href, baseUrl).href;
  } catch {
    return null;
  }
}

function extensionDesdeUrl(url) {
  const path = url.split('?')[0].split('#')[0];
  const ext  = path.split('.').pop().toLowerCase();
  return /^[a-z0-9]{2,5}$/.test(ext) ? ext : null;
}

function primeraUrlDeSrcset(srcset) {
  if (!srcset) return null;
  const primerCandidato = srcset.split(',')[0].trim();
  return primerCandidato.split(/\s+/)[0] || null;
}

function urlDesdeBackgroundInline(style) {
  if (!style) return null;
  const match = style.match(/background(-image)?\s*:\s*url\(\s*['"]?([^'")]+)['"]?\s*\)/i);
  return match ? match[2] : null;
}

function recolectarUrlsDeImagenes(html, urlObjetivo) {
  const $ = cheerio.load(html);
  const encontradas = new Map(); // urlAbsoluta -> { origen, alt }

  const agregar = (urlAbsoluta, origen, alt = null) => {
    if (!urlAbsoluta || encontradas.has(urlAbsoluta)) return;
    if (urlAbsoluta.startsWith('data:')) return; // ya viene embebida, no hace falta descargarla
    encontradas.set(urlAbsoluta, { origen, alt });
  };

  $('img').each((_, el) => {
    const $el = $(el);
    const src = $el.attr('src');
    if (src) agregar(resolverUrl(src, urlObjetivo), 'img', $el.attr('alt') || null);

    const srcsetUrl = primeraUrlDeSrcset($el.attr('srcset'));
    if (srcsetUrl) agregar(resolverUrl(srcsetUrl, urlObjetivo), 'img[srcset]', $el.attr('alt') || null);
  });

  $('picture source[srcset]').each((_, el) => {
    const srcsetUrl = primeraUrlDeSrcset($(el).attr('srcset'));
    agregar(resolverUrl(srcsetUrl, urlObjetivo), 'picture>source');
  });

  $('[style]').each((_, el) => {
    const bgUrl = urlDesdeBackgroundInline($(el).attr('style'));
    if (bgUrl) agregar(resolverUrl(bgUrl, urlObjetivo), 'css-inline');
  });

  $('style').each((_, el) => {
    const contenido = $(el).html() || '';
    const regex = /background(-image)?\s*:\s*url\(\s*['"]?([^'")]+)['"]?\s*\)/gi;
    let match;
    while ((match = regex.exec(contenido)) !== null) {
      agregar(resolverUrl(match[2], urlObjetivo), 'css-style-tag');
    }
  });

  $('link[rel~="icon"]').each((_, el) => {
    const href = $(el).attr('href');
    if (href) agregar(resolverUrl(href, urlObjetivo), 'favicon');
  });

  $('meta[property="og:image"], meta[name="twitter:image"]').each((_, el) => {
    const content = $(el).attr('content');
    if (content) agregar(resolverUrl(content, urlObjetivo), 'meta-tag');
  });

  return Array.from(encontradas.entries()).map(([url, datos]) => ({ url, ...datos }));
}

async function descargarComoBase64(urlImagen) {
  const controller = new AbortController();
  const timeoutId  = setTimeout(() => controller.abort(), TIMEOUT_DESCARGA_MS);

  try {
    const respuesta = await fetch(urlImagen, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!respuesta.ok) {
      throw new Error(`HTTP ${respuesta.status}`);
    }

    const contentLength = respuesta.headers.get('content-length');
    if (contentLength && Number(contentLength) > PESO_MAXIMO_BYTES) {
      throw new Error(`Imagen supera el peso máximo (${(Number(contentLength) / 1024 / 1024).toFixed(2)}MB)`);
    }

    const arrayBuffer = await respuesta.arrayBuffer();
    if (arrayBuffer.byteLength > PESO_MAXIMO_BYTES) {
      throw new Error(`Imagen supera el peso máximo (${(arrayBuffer.byteLength / 1024 / 1024).toFixed(2)}MB)`);
    }

    const buffer      = Buffer.from(arrayBuffer);
    const contentType  = respuesta.headers.get('content-type') || 'application/octet-stream';

    return {
      base64:    buffer.toString('base64'),
      mimeType:  contentType,
      pesoBytes: buffer.byteLength,
    };
  } finally {
    clearTimeout(timeoutId);
  }
}

async function extraerImagenes(urlObjetivo) {
  let navegador;

  try {
    navegador = await puppeteer.launch({ headless: 'shell' });
    const pagina = await navegador.newPage();
    await pagina.goto(urlObjetivo, { waitUntil: 'networkidle2', timeout: 60000 });
    const codigoHtml = await pagina.content();
    await navegador.close();
    navegador = null;

    const candidatas = recolectarUrlsDeImagenes(codigoHtml, urlObjetivo).slice(0, LIMITE_IMAGENES);

    const resultados = await Promise.allSettled(
      candidatas.map(async (candidata) => {
        const { base64, mimeType, pesoBytes } = await descargarComoBase64(candidata.url);
        return {
          url:           candidata.url,
          origen:        candidata.origen,
          alt:           candidata.alt,
          extension:     extensionDesdeUrl(candidata.url),
          mimeType,
          pesoBytes,
          imagenBase64:  base64,
        };
      })
    );

    const imagenes = [];
    const fallidas  = [];

    resultados.forEach((resultado, indice) => {
      if (resultado.status === 'fulfilled') {
        imagenes.push(resultado.value);
      } else {
        fallidas.push({
          url:     candidatas[indice].url,
          motivo:  resultado.reason?.message || 'Error desconocido',
        });
      }
    });

    return {
      totalEncontradas: candidatas.length,
      totalDescargadas: imagenes.length,
      totalFallidas:    fallidas.length,
      imagenes,
      fallidas,
    };

  } catch (error) {
    if (navegador) await navegador.close();
    throw new Error(`[extraerImagenes] Falla: ${error.message}`);
  }
}

export default extraerImagenes;