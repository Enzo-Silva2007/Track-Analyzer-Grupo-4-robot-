const puppeteer = require('puppeteer');

const PATRONES_SESION = [
  'session', 'sess', 'sid', 'auth', 'token',
  'jwt', 'bearer', 'login', 'user', 'account',
  'phpsessid', 'jsessionid', 'asp.net_sessionid',
  'connect.sid', '_ga', '_gid', 'csrf', 'xsrf'
];

function esDeSesion(nombre) {
  const nombreLower = nombre.toLowerCase();
  return PATRONES_SESION.some(patron => nombreLower.includes(patron));
}

async function extraerCookiesYSesion(urlObjetivo) {
  let navegador;

  try {
    navegador = await puppeteer.launch({ headless: 'shell' });
    const pagina = await navegador.newPage();
    await pagina.goto(urlObjetivo, { waitUntil: 'networkidle2' });

    // --------------------------------------------------------
    // BLOQUE 1: COOKIES (Borrar comentario guia si se manda el codigo)
    // --------------------------------------------------------
    const todasLasCookies = await pagina.cookies();
    const cookiesClasificadas = todasLasCookies.map(cookie => ({
      nombre:    cookie.name,
      valor:     cookie.value,
      dominio:   cookie.domain,
      path:      cookie.path,
      expira:    cookie.expires !== -1
                   ? new Date(cookie.expires * 1000).toISOString()
                   : 'Sesión (expira al cerrar)',
      segura:    cookie.secure,
      soloHttp:  cookie.httpOnly,    
      sameSite:  cookie.sameSite || 'Sin restricción',
      esDeSesion: esDeSesion(cookie.name)
    }));

    // --------------------------------------------------------
    // BLOQUE 2: ALmacenamiento local
    // --------------------------------------------------------
    const localStorage = await pagina.evaluate(() => {
      const datos = {};
      for (let i = 0; i < window.localStorage.length; i++) {
        const clave = window.localStorage.key(i);
        datos[clave] = window.localStorage.getItem(clave);
      }
      return datos;
    });

    // Filtramos las claves de localStorage que parecen tokens de sesión
    const tokensLocalStorage = Object.entries(localStorage)
      .filter(([clave]) => esDeSesion(clave))
      .map(([clave, valor]) => ({
        clave,
        // Truncamos el valor por si es un JWT largo; mostramos solo los primeros 80 chars
        valorPreview: valor.length > 80 ? valor.substring(0, 80) + '...' : valor,
        longitudTotal: valor.length
      }));

    // --------------------------------------------------------
    // BLOQUE 3: ALMACENAMIENTO DE SESION
    // Similar a localStorage pero solo vive en la pestaña actual
    // --------------------------------------------------------
    const sessionStorage = await pagina.evaluate(() => {
      const datos = {};
      for (let i = 0; i < window.sessionStorage.length; i++) {
        const clave = window.sessionStorage.key(i);
        datos[clave] = window.sessionStorage.getItem(clave);
      }
      return datos;
    });

    const tokensSessionStorage = Object.entries(sessionStorage)
      .filter(([clave]) => esDeSesion(clave))
      .map(([clave, valor]) => ({
        clave,
        valorPreview: valor.length > 80 ? valor.substring(0, 80) + '...' : valor,
        longitudTotal: valor.length
      }));
    // --- Se cierra el navegador ---
    await navegador.close();

    // JSON FINAL
    return {
      cookies: {
        total: cookiesClasificadas.length,
        deSesion: cookiesClasificadas.filter(c => c.esDeSesion).length,
        lista: cookiesClasificadas
      },
      almacenamiento: {
        localStorage: {
          totalClaves: Object.keys(localStorage).length,
          tokensDeSesionDetectados: tokensLocalStorage
        },
        sessionStorage: {
          totalClaves: Object.keys(sessionStorage).length,
          tokensDeSesionDetectados: tokensSessionStorage
        }
      }
    };
  } catch (error) {
    if (navegador) await navegador.close();
    throw new Error(`[extraerCookiesYSesion] Falla: ${error.message}`);
  }
}
module.exports = extraerCookiesYSesion;