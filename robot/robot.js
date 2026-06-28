const cheerio          = require('cheerio');
const puppeteer        = require('puppeteer');
const auditarCabeceras = require('./auditoria');
const detectarWAF      = require('./waf');
const extraerSSL       = require('./ssl');

function esURLValida(url) {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

async function ejecutarExtraccion(urlObjetivo) {
  if (!esURLValida(urlObjetivo)) {
    throw new Error('URL inválida. Debe comenzar con http:// o https://');
  }

  let navegador;
  try {
    navegador = await puppeteer.launch({ headless: 'shell' });
    const pagina       = await navegador.newPage();
    const tiempoInicio = Date.now();
    const respuestaRed = await pagina.goto(urlObjetivo, { waitUntil: 'networkidle2', timeout: 60000 });
    const codigoHtml   = await pagina.content();
    const headers      = respuestaRed.headers();
    const statusHTTP   = respuestaRed.status();
    const [contentType, charset] = (headers['content-type'] || 'No declarado').split(';').map(s => s.trim());
    const tiempoRespuestaMs = Date.now() - tiempoInicio;
    const pesoDocumentoKb   = (Buffer.byteLength(codigoHtml, 'utf8') / 1024).toFixed(2);

    const $ = cheerio.load(codigoHtml);
    const tituloPagina      = $('title').text().trim()                              || 'Sin título';
    const descripcionPagina = $('meta[name="description"]').attr('content')        || 'Sin descripción';
    const idiomaPagina      = $('html').attr('lang')                               || 'No declarado';
    const openGraph = {
      type:        $('meta[property="og:type"]').attr('content')        || 'No declarado',
      title:       $('meta[property="og:title"]').attr('content')       || 'No declarado',
      image:       $('meta[property="og:image"]').attr('content')       || 'No declarado',
      description: $('meta[property="og:description"]').attr('content') || 'No declarado',
    };

    let frameworkFront = 'Desconocido';
    if ($('[data-reactroot], #root').length > 0)   frameworkFront = 'React';
    else if ($('[data-v-app], #app').length > 0)   frameworkFront = 'Vue';
    else if ($('[ng-version], ng-app').length > 0) frameworkFront = 'Angular';

    let lenguaje = 'HTML Estático / Desconocido';
    if ($('meta[name="generator"]').attr('content')?.toLowerCase().includes('wordpress'))
      lenguaje = 'PHP (WordPress)';

    await navegador.close();

    return {
      identidad: {
        titulo:      tituloPagina,
        descripcion: descripcionPagina,
        idioma:      idiomaPagina,
        openGraph,
      },
      tecnologias: { servidor: headers['server'] || 'Oculto', lenguaje, frameworkFront },
      metricas:    { tiempoRespuestaMs, pesoDocumentoKb },
      seguridad: {
        statusHTTP,
        contentType,
        charset:   charset || 'No declarado',
        cabeceras: auditarCabeceras(headers),
        waf:       detectarWAF(headers),
        ssl:       extraerSSL(respuestaRed),
      },
    };

  } catch (error) {
    if (navegador) await navegador.close();
    console.error('Error real:', error.message);

    if (error.message.includes('Navigation timeout')) {
      throw new Error('La página tardó demasiado en responder.');
    }
    if (error.message.includes('net::ERR')) {
      throw new Error('No se pudo conectar a la URL indicada.');
    }
    throw new Error('Falla en la intercepción de datos. Objetivo inalcanzable.');
  }
}

module.exports = ejecutarExtraccion;