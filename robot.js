// [Módulos Externos] - Requieren instalación previa vía npm
const puppeteer = require('puppeteer');
// [Módulos Nativos] - Vienen integrados en el núcleo de Node.js (No se instalan)
const dns = require('dns').promises;
@param {string} urlRecibida




// funcion de infraestructura y tecnología 
// 1. CAPTURA DE INFRAESTRUCTURA (Cabeceras de red extendidas)
const respuestaRed = await pagina.goto(urlRecibida, { waitUntil: 'networkidle2' });
const cabeceras = respuestaRed.headers();

const infraestructura = {
    // el servidor web (Nginx, Apache, etc.)
    servidorWeb: cabeceras['server'] || "Desconocido/Oculto",
    
    // x-powered-by suele revelar el lenguaje backend (PHP, Express, ASP.NET)
    tecnologiaBackend: cabeceras['x-powered-by'] || "Desconocido/Oculto",
    
    // detectar CDNs o WAFs por cabeceras específicas
    proteccionWaf: cabeceras['x-sucuri-id'] ? 'Sucuri WAF' : 
                   cabeceras['cf-ray'] ? 'Cloudflare' : 'Ninguna/Oculta'
};

// 2. captura de lenguajes y tecnologías 
const tecnologiasDetectadas = await pagina.evaluate(() => {
    return {
        usaJQuery: typeof window.jQuery !== 'undefined' || typeof window.$ !== 'undefined',
        usaReact: typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined',
        usaAngular: typeof window.angular !== 'undefined',
        
        // frameworks 
        usaVue: typeof window.__VUE__ !== 'undefined',
        usaNextJs: typeof window.__NEXT_DATA__ !== 'undefined',
        usaNuxtJs: typeof window.__NUXT__ !== 'undefined',
        usaGatsby: typeof window.___gatsby !== 'undefined',
        
        // gestores de etiquetas y analíticas 
        usaGoogleAnalytics: typeof window.ga !== 'undefined' || typeof window.gtag !== 'undefined',
        usaGoogleTagManager: typeof window.google_tag_manager !== 'undefined'
    };
});
