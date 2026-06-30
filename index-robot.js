import extraerIdentidad       from './extraerIdentidad.js';
import extraerInfraestructura from './extraerInfraestructura.js';
import extraerRendimiento     from './extraerRendimiento.js';
import extraerCookiesYSesion  from './extraerCookiesYSesion.js';
import extraerIpYRed          from './extraerIpYRed.js';
import extraerDocumentos      from './extraerDocumentos.js';
import extraerImagenes        from './extraerImagenes.js';

function resolver(resultado, nombre) {
  if (resultado.status === 'fulfilled') return resultado.value;
  return {
    error:   true,
    modulo:  nombre,
    mensaje: resultado.reason?.message || 'Error desconocido',
  };
}

export async function ejecutarRobot(urlObjetivo) {
  const [
    identidad,
    infraestructura,
    rendimiento,
    cookiesYSesion,
    ipYRed,
    documentos,
    imagenes,
  ] = await Promise.allSettled([
    extraerIdentidad(urlObjetivo),
    extraerInfraestructura(urlObjetivo),
    extraerRendimiento(urlObjetivo),
    extraerCookiesYSesion(urlObjetivo),
    extraerIpYRed(urlObjetivo),
    extraerDocumentos(urlObjetivo),
    extraerImagenes(urlObjetivo),
  ]);

  return {
    url:             urlObjetivo,
    timestamp:       new Date().toISOString(),
    identidad:       resolver(identidad,       'extraerIdentidad'),
    infraestructura: resolver(infraestructura, 'extraerInfraestructura'),
    rendimiento:     resolver(rendimiento,     'extraerRendimiento'),
    cookiesYSesion:  resolver(cookiesYSesion,  'extraerCookiesYSesion'),
    ipYRed:          resolver(ipYRed,          'extraerIpYRed'),
    documentos:      resolver(documentos,      'extraerDocumentos'),
    imagenes:        resolver(imagenes,        'extraerImagenes'),
  };
}