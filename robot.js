// [Módulos Externos] - Requieren instalación previa vía npm
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
// [Módulos Nativos] - Vienen integrados en el núcleo de Node.js (No se instalan)
const dns = require('dns').promises;
@param {string} urlRecibida

// Definimos la función principal asincrónica que recibe la URL a escanear
async function ejecutarExtraccion(urlObjetivo) {
    let navegador;
    try {
        // Lanzamos el binario aislado de Chrome suprimiendo la interfaz gráfica por rendimiento
        navegador = await puppeteer.launch({ headless: 'shell'});
        // Abrimos una pestaña limpia en el motor de renderizado
        const pagina = await navegador.newPage();
        // Registramos la marca de tiempo inicial para calcular la latencia posterior
        const tiempoInicio = Date.now();
        // Ejecutamos la navegación esperando a que el tráfico de red se estabilice
        const respuestaRed = await pagina.goto(urlObjetivo, { waitUntil: 'networkidle2'});
        // Extraemos la fotografía estática del DOM ya renderizado por el motor V8
        const codigoHtml = await pagina.content();
        // Calculamos el tiempo total del proceso de carga en milisegundos
        const tiempoRespuestaMs = Date.now() - tiempoInicio;
        // Verificamos criptográficamente si la conexión HTTPS es válida interceptando la red
        const certSslVigente = respuestaRed.securityDetails() !== null;  
        // Medimos el peso del documento HTML capturado en kilobytes
        const pesoDocumentoKb = (Buffer.byteLength(codigoHtml, 'utf8') / 1024).toFixed(2);
        // Montamos el código HTML plano en la memoria del servidor usando la función de consulta
        const $ = cheerio.load(codigoHtml);
        // Rastreamos y limpiamos la etiqueta de título directamente de la cabecera
        const tituloPagina = $('title').text() || 'Sin título';
        // Buscamos y aislamos el atributo de contenido dentro del metadato de descripción
        const descripcionPagina = $('meta[name="description"]').attr('content') || 'Sin descripción';
        // Inicializamos la variable del framework asumiendo que no hay coincidencia
        let frameworkFront = 'Desconocido';
        // Evaluamos la existencia estructural de nodos típicos para identificar la tecnología de renderizado
        if ($('[data-reactroot], #root').length > 0) frameworkFront = 'React';
        else if ($('[data-v-app], #app').length > 0) frameworkFront = 'Vue';
        else if ($('[ng-version], ng-app').length > 0) frameworkFront = 'Angular';
        // Asumimos un documento estático por defecto para la variable del lenguaje
        let lenguaje = 'HTML Estático / Desconocido';
        // Normalizamos y leemos el metadato generador para confirmar la presencia de un CMS como WordPress
        if ($('meta[name="generator"]').attr('content')?.toLowerCase().includes('wordpress')) {
            lenguaje = 'PHP (WordPress)';
        }
        // Interceptamos las cabeceras de red puras para identificar el servidor que aloja el sitio
        const servidor = respuestaRed.headers()['server'] || 'Oculto';
        // Apagamos la instancia de Chrome para liberar la memoria RAM del equipo
        await navegador.close();
        // Ensamblamos y retornamos el objeto JSON con las tres capas de datos tácticos extraídos
        return {
            identidad: {
                titulo: tituloPagina,
                descripcion: descripcionPagina
            },
            tecnologias: {
                servidor: servidor,
                lenguaje: lenguaje,
                frameworkFront: frameworkFront
            },
            metricas: {
                tiempoRespuestaMs: tiempoRespuestaMs,
                pesoDocumentoKb: pesoDocumentoKb,
                certSslVigente: certSslVigente
            }
        };
    } catch (error) {
        // En caso de falla general, garantizamos que el proceso de Chrome no quede huérfano consumiendo RAM
        if (navegador) {
            await navegador.close();
        }
        // Disparamos la alerta de fallo hacia el servidor receptor deteniendo la ejecución
        throw new Error('Falla en la intercepción de datos. Objetivo inalcanzable.');
    }   
}
// Exponemos la función de manera modular para que el archivo de backend principal pueda requerirla
module.exports = ejecutarExtraccion;
