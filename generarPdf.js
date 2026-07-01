import puppeteer from 'puppeteer';
 
async function generarPdf(urlObjetivo){
    let navegador;

    try {
        navegador = await puppeteer.launch({ headless: 'shell' });
        const pagina = await navegador.newPage();
        await pagina.goto(urlObjetivo, { waitUntil: 'networkidle2' });
        
        
        const pdfBuffer = await pagina.pdf({
            format: 'A4',
            printBackground: true,
            margin: { left: "0.5cm", right: "0.5cm", top: "2cm", bottom: "2cm" },
            displayHeaderFooter: true,
            headerTemplate: '<div style="font-size: 10px; text-align: center; width: 100%;"><span class="title"></span></div>',
            footerTemplate: '<div style="font-size: 10px; text-align: center; width: 100%;"><span class="pageNumber"></span> / <span class="totalPages"></span></div>'
        });
        
        await navegador.close();
        navegador = null;

        return{
            pdfBase64: pdfBuffer.toString('base64'),
        } 
        
    }   catch (error) {
        if (navegador) await navegador.close();
        throw new Error(`[generarPdf] Falla: ${error.message}`);
    }
}

export default generarPdf;