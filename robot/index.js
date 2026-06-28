// Este archivo es solo para ver por la terminal y ponerle una url


const ejecutarExtraccion = require('./robot');

async function main() {
  const resultado = await ejecutarExtraccion('https://unpilar.edu.ar');
  console.log(JSON.stringify(resultado.seguridad, null, 2));
  console.log(resultado.contentType)
  console.log(resultado.statusHTTP)
  console.log(resultado.identidad)
  console.log(resultado.tecnologias)
}

main().catch(console.error);