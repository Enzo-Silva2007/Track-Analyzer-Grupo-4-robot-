const WORLD=[[-59.6,-80.0,-62.3,-80.9,-64.0,-80.3,-59.6,-80.0],[-45.2,-78.0,-44.9,-80.3,-54.0,-80.2,-48.7,-78.0,-45.2,-78.0],[-68.5,-71.0,-70.0,-72.3,-72.4,-72.5,-73.9,-71.3,-71.8,-70.7,-71.2,-69.0,-69.7,-69.3,-68.5,-71.0],[-58.6,-64.2,-62.5,-65.1,-62.8,-66.4,-65.3,-68.4,-61.5,-71.1,-61.4,-74.1,-72.2,-76.7,-76.9,-77.1,-74.8,-78.2,-78.0,-78.8,-76.8,-79.5,-57.0,-82.9,-29.3,-80.0,-35.9,-79.1,-33.9,-77.9,-16.6,-74.8,-14.4,-73.0,-5.8,-71.0,0.9,-71.3,8.5,-70.1,28.1,-70.3,34.9,-68.7,39.7,-69.5,55.4,-65.9,62.4,-68.0,69.7,-69.0,67.9,-70.7,68.9,-71.1,68.7,-72.2,71.0,-72.1,74.5,-69.8,88.4,-66.5,100.4,-66.9,103.5,-65.7,107.2,-67.0,114.4,-66.1,120.9,-67.2,135.0,-65.7,135.7,-65.6,138.6,-66.9,146.2,-67.2,171.1,-72.1,163.5,-76.7,165.2,-78.9,160.9,-79.7,161.1,-81.3,172.3,-84.0,-180,-90,-179.9,-84.7,-177.3,-84.5,-142.9,-84.6,-153.4,-83.2,-154.5,-81.8,-154.4,-81.2,-146.8,-79.9,-156.0,-78.7,-157.9,-77.0,-150.0,-77.2,-146.1,-76.1,-144.9,-75.2,-134.4,-74.4,-113.3,-74.0,-100.1,-74.9,-102.9,-72.8,-95.0,-73.5,-88.4,-73.0,-73.9,-73.7,-67.1,-72.0,-68.4,-69.3,-67.3,-66.9,-62.0,-64.6,-57.2,-63.5,-58.6,-64.2],[-67.8,-53.9,-65.5,-55.2,-70.0,-55.2,-73.8,-53.0,-70.6,-53.6,-68.6,-52.6,-67.8,-53.9],[-58.5,-51.1,-59.4,-52.2,-60,-51.2,-58.5,-51.1],[145.4,-40.8,148.4,-42.1,147.6,-42.9,145.4,-42.7,145.4,-40.8],[173.0,-40.9,174.2,-41.8,172.3,-43.9,168.4,-46.6,166.5,-45.9,173.0,-40.9],[174.6,-36.2,177.4,-38.0,178.3,-38.6,175.1,-41.4,173.9,-39.1,174.3,-36.7,173.0,-34.5,174.6,-36.2],[50.1,-13.6,50.2,-16.0,46.3,-25.2,43.8,-24.5,43.4,-21.3,44.9,-16.2,48.0,-14.1,49.5,-12.5,50.1,-13.6],[143.6,-13.8,145.3,-15.4,147.5,-19.5,153.2,-26.6,152.5,-32.6,149.4,-37.8,145.5,-38.6,140.0,-37.4,137.7,-35.1,137.4,-34.7,137.0,-33.8,135.2,-34.5,133.0,-32.0,129.5,-31.6,117.3,-35.0,115.0,-33.6,115.2,-30.6,113.8,-26.5,114.2,-22.5,121.4,-19.2,126.1,-14.3,129.4,-14.4,131.2,-12.2,132.6,-11.6,132.4,-11.1,137.0,-12.4,136.3,-15.6,140.9,-17.4,142.5,-10.7,143.6,-13.8],[124.4,-10.1,123.6,-9.9,125.0,-8.9,127.0,-8.7,124.4,-10.1],[108.6,-6.8,112.6,-6.9,114.6,-8.8,106.3,-6.9,107.3,-6.0,108.6,-6.8],[152.0,-5.5,149.7,-6.3,148.4,-5.4,151.1,-5.1,152.3,-4.3,152.0,-5.5],[134.1,-1.2,136.3,-2.3,139.2,-2.1,145.3,-4.4,150.0,-10.7,143.9,-7.9,142.1,-9.2,138.0,-7.6,136.0,-4.5,132.8,-3.7,133.1,-2.5,132.2,-2.2,131.9,-0.7,134.1,-1.2],[125.2,1.4,122.7,0.4,120.0,-0.5,121.5,-1.0,123.3,-1.1,122.5,-3.2,122.6,-5.6,120.3,-2.9,119.8,-5.7,119.7,-4.5,119.2,-2.1,120.9,1.3,125.2,1.4],[128.7,1.1,127.7,-0.3,127.9,2.2,128.7,1.1],[105.8,-5.9,102.2,-3.6,95.9,5.4,98.4,4.3,103.4,-0.7,105.9,-4.3,105.8,-5.9],[117.9,1.8,117.8,0.8,116.0,-3.7,110.1,-1.6,109.0,0.4,110.4,1.7,117.1,6.9,119.1,5.0,118.0,2.3,117.9,1.8],[126.4,8.4,124.2,6.2,123.3,7.4,122.3,8.0,126.2,9.3,126.4,8.4],[81.2,6.2,79.7,8.2,80.8,9.3,81.6,6.5,81.2,6.2],[121.3,18.5,122.3,16.3,122.3,14.2,123.9,13.2,123.3,13.0,119.9,15.4,121.3,18.5],[-72.6,19.9,-68.7,18.2,-74.5,18.3,-72.8,19.1,-73.2,19.9,-72.6,19.9],[110.3,18.7,109.1,19.8,111.0,19.7,110.3,18.7],[-79.7,22.8,-74.3,20.1,-77.1,20.4,-82.8,22.7,-84.4,22.2,-81.4,23.1,-79.7,22.8],[121.2,22.8,120.2,22.8,120.7,24.5,122.0,25.0,121.2,22.8],[15.5,38.2,14.3,37.0,12.6,38.1,15.5,38.2],[9.2,41.2,9.2,39.2,8.4,39.2,8.7,40.9,9.2,41.2],[141.0,37.1,139.0,34.7,135.1,33.8,133.3,34.4,132.0,33.1,130.7,31.0,130.4,32.3,130.4,33.6,134.6,35.7,140.1,39.4,141.4,41.4,141.0,38.2,141.0,37.1],[143.9,44.2,144.1,43.0,139.8,42.6,141.7,44.8,143.1,44.5,143.9,44.2],[-56.1,50.7,-56.1,50.2,-53.8,48.5,-53.0,48.2,-53.5,46.6,-55.4,46.9,-59.4,47.9,-55.9,51.6,-56.1,50.7],[143.6,50.7,143.2,49.3,143.5,46.8,142.7,46.7,141.9,46.8,142.6,53.8,143.6,50.7],[-6.8,52.3,-9.2,52.9,-8.3,54.7,-6.2,53.9,-6.8,52.3],[-3.0,58.6,-3.1,57.7,-2.2,56.9,-2.1,55.9,1.6,52.1,0.6,50.8,-5.8,50.2,-5.0,51.6,-3.1,53.4,-3.6,54.6,-5.6,56.3,-5.8,57.8,-3.0,58.6],[-85.2,65.7,-81.0,63.4,-86.4,64.0,-85.2,65.7],[-14.5,66.5,-14.9,64.4,-20.0,63.6,-21.8,64.4,-23.7,66.3,-14.5,66.5],[-175.0,66.6,-170.9,65.5,-172.6,64.5,-173.9,64.3,-179.9,65.9,-177.6,68.2,-175.0,66.6],[-90.5,69.5,-89.2,69.3,-86.3,67.9,-84.1,69.8,-81.3,69.2,-81.4,67.1,-86.1,66.1,-94.2,60.9,-93.2,58.8,-90.9,57.3,-82.4,54.3,-79.1,51.5,-79.1,54.1,-78.2,55.1,-76.6,57.2,-77.3,59.9,-77.4,62.6,-72.9,62.1,-69.6,60.2,-66.2,58.8,-63.8,59.4,-60.5,55.8,-56.9,53.8,-56.4,51.8,-61.7,50.1,-67.2,49.5,-70.3,47.0,-64.2,48.7,-64.8,47.0,-63.2,45.7,-60.4,46.3,-61.0,45.3,-66.1,43.6,-66.0,45.3,-67.0,44.8,-70.7,43.0,-70.6,41.5,-72.2,41.1,-74.3,40.5,-75.0,39.2,-75.3,39.0,-76.0,37.3,-76.5,38.7,-76.4,34.8,-81.5,30.7,-80.7,25.1,-85.1,29.6,-89.6,30.2,-89.8,29.3,-94.7,29.5,-97.1,27.8,-97.7,21.9,-95.9,18.8,-90.8,19.3,-89.6,21.3,-86.8,21.3,-88.6,15.7,-84.5,15.9,-83.2,14.9,-83.7,10.9,-81.8,9.0,-79.0,9.6,-76.1,9.3,-74.3,11.1,-71.4,12.4,-71.3,9.1,-70.2,11.4,-69.6,11.5,-64.3,10.4,-62.7,10.4,-55.9,5.8,-51.1,3.7,-49.9,1.0,-50.4,-0.1,-47.8,-0.6,-44.4,-2.1,-43.4,-2.4,-38.5,-3.7,-34.9,-6.7,-35.1,-9.0,-39.0,-13.8,-41.8,-22.4,-48.5,-25.9,-49.6,-29.2,-54.9,-35.0,-58.5,-34.4,-56.8,-36.9,-59.2,-38.7,-62.1,-39.4,-63.8,-41.2,-65.0,-42.1,-64.4,-42.9,-66.6,-47.0,-67.2,-48.7,-68.8,-51.8,-68.6,-52.3,-71.4,-53.9,-75.3,-51.6,-75.2,-47.7,-74.7,-45.8,-73.4,-42.1,-74.0,-41.8,-73.2,-37.1,-71.7,-30.9,-70.4,-18.3,-76.4,-13.8,-80.9,-5.7,-81.1,-4.0,-80.0,-2.2,-80.8,-2.0,-80.6,-0.9,-77.5,4.1,-78.4,8.4,-79.8,8.6,-81.1,7.8,-85.8,10.1,-87.8,13.4,-103.9,18.7,-105.7,20.4,-106.9,23.8,-114.2,31.5,-114.3,29.8,-109.4,23.2,-112.1,25.5,-115.0,27.8,-114.9,29.3,-117.9,33.6,-120.7,35.2,-124.2,41.1,-124.6,48.4,-122.3,47.4,-123.0,49.0,-128.0,51.7,-135.0,58.2,-148.2,60.7,-148.6,59.9,-151.9,59.7,-151.9,60.7,-155.3,57.7,-159.6,55.6,-164.9,54.6,-158.5,57.2,-158.2,58.6,-162.1,59.3,-165.7,62.1,-161.0,64.2,-161.4,64.8,-166.4,64.7,-166.7,66.1,-162.5,66.7,-164.4,68.9,-155.1,71.1,-135.6,69.3,-127.4,70.4,-107.8,67.9,-108.2,68.7,-105.3,68.6,-99.9,67.8,-96.1,68.2,-95.5,68.1,-95.3,69.7,-96.4,71.2,-93.9,71.8,-90.5,69.5],[-114.2,73.1,-109.0,72.6,-107.7,72.1,-107.5,73.2,-105.4,72.7,-102.8,70.5,-102.7,69.5,-104.2,68.9,-117.3,70.0,-114.3,70.6,-118.4,70.9,-117.7,71.3,-118.6,72.3,-114.2,73.1],[-86.6,73.2,-84.9,73.3,-80.6,72.7,-71.2,70.9,-67.0,69.2,-66.4,68.1,-62.2,66.2,-65.1,65.4,-68.1,65.7,-65.0,62.7,-67.4,62.9,-68.9,62.3,-74.8,64.4,-78.6,64.6,-74.3,65.8,-73.3,68.1,-79.5,69.9,-89.5,70.8,-89.9,71.2,-88.4,73.5,-86.6,73.2],[-100.4,73.8,-97.1,73.5,-96.5,72.6,-98.4,71.3,-102.5,72.8,-101.5,73.4,-100.4,73.8],[-93.2,72.8,-96.0,72.9,-95.5,73.9,-92.0,73.0,-93.2,72.8],[-120.5,71.4,-123.6,71.3,-125.6,72.2,-121.5,74.4,-116.6,73.9,-116.8,73.2,-120.5,71.4],[-98.5,76.7,-99.8,74.9,-102.6,76.3,-98.5,76.7],[-108.2,76.2,-105.7,75.5,-109.7,74.8,-116.3,76.2,-110.5,76.4,-108.2,76.2],[57.5,70.7,51.5,72.0,57.9,75.6,68.2,76.2,57.0,73.3,55.6,71.5,57.5,70.7],[-94.7,77.1,-80.5,74.7,-92.8,75.4,-96.7,77.2,-94.7,77.1],[-116.2,77.6,-118.0,76.5,-121.2,76.9,-116.2,77.6],[107.0,77.0,113.9,75.3,110.6,74.0,123.3,73.7,128.6,73.0,129.7,71.2,132.3,71.8,139.1,72.4,149.5,72.2,157.0,71.0,159.8,70.5,162.3,69.6,170.8,69.0,173.6,69.8,180,69.0,180.0,65.0,178.3,64.1,179.2,62.3,172.2,61.0,168.9,60.6,163.2,59.2,162.1,57.8,163.1,56.2,161.7,55.3,160.4,54.3,156.4,51.7,156.8,57.4,163.3,62.5,159.3,61.8,154.2,59.8,152.8,58.9,148.5,59.2,139.0,57.1,136.7,54.6,141.4,52.2,138.6,47.0,133.5,42.8,130.9,42.6,127.5,39.3,129.5,35.6,128.2,34.9,126.4,34.9,126.2,37.7,125.0,38.5,124.7,39.7,121.6,39.4,120.8,40.6,118.1,38.1,122.5,36.9,120.2,34.4,121.9,30.9,121.1,28.1,117.3,23.6,114.8,22.7,109.9,20.3,108.1,21.6,105.7,19.1,109.3,13.4,108.4,11.0,104.8,9.2,101.7,12.6,100.0,12.3,99.9,9.2,103.4,4.2,103.5,1.2,101.3,3.3,99.0,7.9,98.2,8.4,98.4,12.0,96.5,16.4,94.5,17.3,90.5,22.8,89.8,22.0,87.0,20.7,80.0,15.1,79.3,10.3,76.6,8.9,73.1,17.9,71.2,20.8,64.5,25.2,57.0,27.0,55.7,27.0,52.5,27.6,48.6,29.9,49.3,27.5,50.7,25.5,51.6,25.2,52.6,24.2,54.7,24.8,56.5,26.3,57.4,23.9,59.4,21.7,54.2,17.0,48.2,13.9,43.2,13.2,42.3,17.1,34.8,28.6,34.6,29.1,33.6,28.0,32.3,29.8,37.2,21.0,37.9,18.4,43.3,12.0,43.1,11.5,45.6,10.7,51.1,11.7,50.8,10.3,46.6,2.9,40.1,-3.3,38.7,-5.9,40.5,-15.4,34.7,-20.5,35.5,-24.1,32.7,-26.1,31.5,-29.3,25.2,-33.8,19.2,-34.5,18.2,-33.9,17.6,-30.7,11.7,-17.3,13.4,-10.4,11.1,-4.0,8.8,-0.8,8.9,3.9,7.5,4.4,5.4,4.9,3.6,6.3,-2.9,5.0,-9.9,5.6,-16.7,12.4,-17.2,14.9,-16.3,19.1,-16.6,22.2,-13.8,26.6,-9.8,31.2,-5.2,35.8,-1.2,35.7,10.2,37.2,10.6,36.4,10.9,33.8,19.6,30.5,22.9,32.6,29.7,31.2,34.3,31.2,35.6,36.6,27.0,37.7,27.3,40.4,35.2,42.0,39.5,41.1,41.5,42.6,37.4,45.4,38.2,47.1,35.0,45.7,35.2,44.9,33.3,44.6,32.6,45.5,31.7,46.3,30.4,46.0,28.0,42.0,27.6,41.0,22.8,39.7,23.1,37.9,21.7,36.8,19.3,40.7,19.4,41.9,12.3,45.4,15.1,42.0,18.3,39.8,16.4,39.8,17.1,38.9,15.7,37.9,15.0,40.2,8.4,44.2,3.0,42.5,-3.4,36.7,-5.9,36.0,-7.5,37.1,-8.7,37.7,-8.0,43.7,-1.2,46.0,-3.3,48.9,1.6,50.9,6.1,53.5,8.8,54.0,9.4,57.2,10.5,57.2,9.9,55.0,12.0,54.2,19.9,54.9,21.1,56.0,22.5,57.8,24.3,57.8,24.6,59.5,28.1,60.5,22.3,60.4,21.5,61.7,22.4,63.8,25.3,65.5,21.2,65.0,17.1,61.3,17.9,59.0,16.4,57.0,14.7,56.2,12.6,56.3,8.4,58.3,5.3,59.7,5.9,62.6,21.4,70.3,26.4,71.0,41.1,66.8,33.9,66.8,34.8,65.9,36.2,64.1,37.1,64.3,39.6,64.5,39.8,65.5,43.0,66.4,44.5,66.8,46.3,68.3,45.6,67.6,47.9,66.9,54.5,68.8,61.1,68.9,63.5,69.5,69.2,68.6,67.3,69.9,68.5,71.9,72.8,72.2,72.5,71.1,73.2,67.7,72.8,66.5,74.5,68.3,73.8,69.1,74.9,72.1,75.2,72.9,76.4,71.2,79.7,72.3,80.6,72.6,82.3,73.9,86.0,74.5,92.9,75.8,106.1,77.4,107.0,77.0],[-100.1,78.3,-104.2,78.7,-103.5,79.2,-100.1,78.3],[18.3,79.7,19.0,78.6,13.8,77.4,13.2,78.0,13.2,80.0,18.3,79.7],[25.4,80.4,25.9,79.5,20.1,79.6,20.5,80.6,25.4,80.4],[99.9,78.9,93.8,81.0,100.2,79.8,99.9,78.9],[-87.0,79.7,-87.2,79.0,-92.9,78.3,-93.9,79.1,-95.0,79.4,-96.0,80.6,-91.1,80.7,-87.0,79.7],[-68.5,83.1,-64.3,81.9,-75.5,79.2,-79.6,77.0,-83.2,76.5,-87.8,77.2,-87.7,78.0,-86.3,78.2,-87.2,78.8,-86.5,79.7,-84.2,80.2,-84.1,80.6,-90.1,82.1,-68.5,83.1],[-27.1,83.5,-22.7,82.3,-27.9,82.1,-22.1,81.7,-20.6,81.5,-16.3,80.6,-17.7,80.1,-19.7,77.6,-20.0,76.9,-19.8,76.1,-21.6,74.2,-22.2,73.3,-22.3,72.6,-24.3,72.6,-23.4,72.1,-23.5,70.5,-25.2,70.8,-23.7,70.2,-25.0,69.3,-40.7,64.8,-42.4,61.9,-44.8,60.0,-49.2,61.4,-52.1,64.3,-53.0,68.4,-52.0,69.6,-54.8,70.3,-53.1,71.2,-54.7,72.6,-61.3,76.1,-69.7,76.4,-68.8,77.3,-71.0,77.6,-73.2,78.4,-65.3,79.8,-63.7,81.2,-57.2,82.2,-46.9,82.2,-35.1,83.6,-27.1,83.5]];

/* ====================================================================
   TARGET ANALYZER // efectos.js  ·  Comisión 04   (v4)
   - UN sonido al loguearse  +  UN sonido al iniciar el rastreo (sin loops)
   - Globo táctico CREÍBLE: costas reales de los continentes (Natural Earth
     110m) proyectadas con proyección ortográfica sobre una esfera que gira.
   Se carga DESPUÉS de main.js.   (la constante WORLD está arriba)
   ==================================================================== */

let audioCtx = null;
let sfxMuted = false;

/* ====================== 1) AUDIO ====================== */
function initAudio() {
    if (audioCtx) { if (audioCtx.state === 'suspended') audioCtx.resume(); return; }
    try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
    catch (e) { console.warn('Audio no disponible:', e); }
}
function tone(freq, dur, type, vol, when) {
    if (!audioCtx || sfxMuted) return;
    type = type || 'square'; vol = (vol == null) ? 0.14 : vol; when = when || 0;
    const t0 = audioCtx.currentTime + when;
    const o = audioCtx.createOscillator(), g = audioCtx.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t0);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.linearRampToValueAtTime(vol, t0 + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g).connect(audioCtx.destination);
    o.start(t0); o.stop(t0 + dur + 0.02);
}
function sweep(f1, f2, dur, type, vol) {
    if (!audioCtx || sfxMuted) return;
    type = type || 'sawtooth'; vol = (vol == null) ? 0.12 : vol;
    const t0 = audioCtx.currentTime;
    const o = audioCtx.createOscillator(), g = audioCtx.createGain();
    o.type = type; o.frequency.setValueAtTime(f1, t0);
    o.frequency.exponentialRampToValueAtTime(f2, t0 + dur);
    g.gain.setValueAtTime(vol, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g).connect(audioCtx.destination);
    o.start(t0); o.stop(t0 + dur + 0.02);
}
function sfxBeep() { tone(900, 0.05, 'square', 0.10); }
function sfxBoot() {                       // sonido ÚNICO al loguearse
    sweep(110, 880, 0.45, 'sawtooth', 0.10);
    tone(523, 0.07, 'square', 0.12, 0.12);
    tone(659, 0.07, 'square', 0.12, 0.22);
    tone(988, 0.16, 'square', 0.14, 0.32);
}
function sfxSearch() {                      // sonido ÚNICO al rastrear
    sweep(180, 1400, 0.30, 'sawtooth', 0.10);
    tone(1200, 0.05, 'square', 0.08, 0.18);
    tone(760,  0.05, 'square', 0.08, 0.26);
    tone(1500, 0.06, 'square', 0.09, 0.34);
}

/* --- sonidos de la CASCADA de paneles (estilo hacker) --- */
function sfxType() {                        // tick al escribir cada caracter
    if (!audioCtx || sfxMuted) return;
    tone(1500 + Math.random() * 600, 0.012, 'square', 0.025);
}
function sfxLineDone() {                     // blip al terminar una línea
    tone(1180, 0.035, 'square', 0.05);
}
function sfxPanelOpen() {                     // sonido al empezar a llenar un panel
    sweep(300, 900, 0.12, 'sawtooth', 0.06);
    tone(880, 0.04, 'square', 0.06, 0.06);
}
function sfxPanelDone() {                     // confirmación al terminar un panel
    tone(660, 0.05, 'square', 0.07, 0);
    tone(990, 0.09, 'square', 0.08, 0.07);
}
function scanPing(d) {                         // ping de barrido del globo
    if (!audioCtx || sfxMuted) return;
    d = d || 0;
    const t = audioCtx.currentTime + d;
    const o = audioCtx.createOscillator(), g = audioCtx.createGain();
    o.type = 'sine';
    o.frequency.setValueAtTime(1500, t);
    o.frequency.exponentialRampToValueAtTime(2100, t + 0.08);
    g.gain.setValueAtTime(0.04, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.14);
    o.connect(g).connect(audioCtx.destination);
    o.start(t); o.stop(t + 0.15);
}
function sfxUplink() {                          // barrido grave al abrir el globo
    if (!audioCtx || sfxMuted) return;
    const t = audioCtx.currentTime;
    const o = audioCtx.createOscillator(), f = audioCtx.createBiquadFilter(), g = audioCtx.createGain();
    o.type = 'sawtooth';
    o.frequency.setValueAtTime(120, t);
    o.frequency.exponentialRampToValueAtTime(900, t + 1.0);
    f.type = 'lowpass';
    f.frequency.setValueAtTime(300, t);
    f.frequency.exponentialRampToValueAtTime(2600, t + 1.0);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.05, t + 0.15);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 1.25);
    o.connect(f); f.connect(g); g.connect(audioCtx.destination);
    o.start(t); o.stop(t + 1.3);
    scanPing(0.9); scanPing(1.1);
}
function toggleMute() {
    sfxMuted = !sfxMuted;
    const b = document.getElementById('btn-mute');
    if (b) { b.textContent = sfxMuted ? '🔇 SFX OFF' : '🔊 SFX ON'; b.classList.toggle('muted', sfxMuted); }
    if (!sfxMuted) sfxBeep();
}

/* ====================== 2) GLOBO ORBITAL (proyección ortográfica) ======================
   Costas reales (Natural Earth) tomadas de WORLD_COAST (mundo-data.js).
   Si ese archivo no estuviera, cae al WORLD reducido de arriba.            */
const COAST = (typeof WORLD_COAST !== 'undefined') ? WORLD_COAST : WORLD;
const GLOBE_TILT = 20 * Math.PI / 180;     // inclinación del eje (look natural)
const SIN_T = Math.sin(GLOBE_TILT), COS_T = Math.cos(GLOBE_TILT);
let gctx = null, gCanvas = null, gSize = 0, gRot = 0, gRAF = null;

function globeSetup() {
    gCanvas = document.getElementById('globe-canvas');
    if (!gCanvas) return false;
    const dpr = window.devicePixelRatio || 1;
    const box = gCanvas.clientWidth || 460;
    gSize = box;
    gCanvas.width = Math.round(box * dpr);
    gCanvas.height = Math.round(box * dpr);
    gctx = gCanvas.getContext('2d');
    gctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return true;
}
/* devuelve {x,y,v}: v=true si el punto está en la cara visible */
function project(lon, lat) {
    const cx = gSize / 2, cy = gSize / 2, R = gSize * 0.44;
    const lam = (lon - gRot) * Math.PI / 180, phi = lat * Math.PI / 180;
    const cphi = Math.cos(phi), sphi = Math.sin(phi), clam = Math.cos(lam);
    const cosc = SIN_T * sphi + COS_T * cphi * clam;     // coseno del ángulo central
    return { x: cx + R * cphi * Math.sin(lam), y: cy - R * (COS_T * sphi - SIN_T * cphi * clam), v: cosc >= 0 };
}
/* dibuja un camino [lon,lat,...]; corta el trazo cuando pasa al lado oculto */
function drawFlat(pts) {
    let started = false;
    for (let i = 0; i < pts.length; i += 2) {
        const p = project(pts[i], pts[i + 1]);
        if (p.v) {
            if (!started) { gctx.moveTo(p.x, p.y); started = true; }
            else gctx.lineTo(p.x, p.y);
        } else { started = false; }
    }
}
function globeFrame() {
    if (!gctx) { gRAF = null; return; }
    const cx = gSize / 2, cy = gSize / 2, R = gSize * 0.44;
    gctx.clearRect(0, 0, gSize, gSize);

    // océano (disco con sombreado)
    const grd = gctx.createRadialGradient(cx - R * 0.3, cy - R * 0.3, R * 0.1, cx, cy, R);
    grd.addColorStop(0, 'rgba(0,40,60,0.55)');
    grd.addColorStop(1, 'rgba(0,8,14,0.10)');
    gctx.beginPath(); gctx.arc(cx, cy, R, 0, Math.PI * 2);
    gctx.fillStyle = grd; gctx.fill();

    // grilla (meridianos + paralelos)
    gctx.strokeStyle = 'rgba(31,216,255,0.18)';
    gctx.lineWidth = 0.6;
    gctx.beginPath();
    for (let lon = -180; lon < 180; lon += 30) {
        const a = []; for (let lat = -90; lat <= 90; lat += 4) a.push(lon, lat);
        drawFlat(a);
    }
    for (let lat = -60; lat <= 60; lat += 30) {
        const a = []; for (let lon = -180; lon <= 180; lon += 4) a.push(lon, lat);
        drawFlat(a);
    }
    gctx.stroke();

    // costas: primero halo ámbar grueso, después línea cyan fina (look files7)
    gctx.strokeStyle = 'rgba(255,153,0,0.35)';
    gctx.lineWidth = 2.2;
    gctx.beginPath();
    for (let i = 0; i < COAST.length; i++) drawFlat(COAST[i]);
    gctx.stroke();

    gctx.strokeStyle = 'rgba(0,230,255,0.95)';
    gctx.lineWidth = 1;
    gctx.beginPath();
    for (let i = 0; i < COAST.length; i++) drawFlat(COAST[i]);
    gctx.stroke();

    // limbo (borde brillante del globo)
    gctx.beginPath(); gctx.arc(cx, cy, R, 0, Math.PI * 2);
    gctx.lineWidth = 1.5;
    gctx.strokeStyle = 'rgba(31,216,255,0.9)';
    gctx.shadowColor = 'rgba(31,216,255,0.8)';
    gctx.shadowBlur = 16;
    gctx.stroke();
    gctx.shadowBlur = 0;

    gRot = (gRot + 0.45) % 360;            // velocidad de giro
    gRAF = requestAnimationFrame(globeFrame);
}
function startGlobe() {
    if (!globeSetup()) return;
    if (gRAF) cancelAnimationFrame(gRAF);
    gRAF = requestAnimationFrame(globeFrame);
}
function stopGlobe() { if (gRAF) { cancelAnimationFrame(gRAF); gRAF = null; } }

/* ---------- control del overlay + HUD (coordenadas/progreso) ---------- */
let globeActive = false, globeShownAt = 0, globeSafety = null, globeHud = null;
const GLOBE_MIN = 2500;
function showGlobe() {
    const o = document.getElementById('globe-overlay');
    if (!o) return;
    o.classList.remove('fade-out');
    o.classList.add('active');
    globeActive = true; globeShownAt = Date.now();

    const fill = document.getElementById('globe-progress-fill');
    const coords = document.getElementById('globe-coords');
    const status = document.getElementById('globe-status');
    if (fill) fill.style.width = '0%';
    if (status) status.textContent = 'TRIANGULANDO VECTOR GLOBAL // GEO-INTERCEPCIÓN';

    startGlobe();
    sfxUplink();

    // progreso "vivo": se acerca al 92% mientras dura el rastreo
    let p = 0;
    clearInterval(globeHud);
    globeHud = setInterval(() => {
        p += Math.max(0.4, (92 - p) * 0.05);
        if (fill) fill.style.width = Math.min(92, p).toFixed(1) + '%';
        if (coords) coords.textContent =
            `LAT: ${(Math.random() * 180 - 90).toFixed(4)}  LON: ${(Math.random() * 360 - 180).toFixed(4)}`;
        if (Math.random() > 0.82) scanPing();
    }, 110);

    clearTimeout(globeSafety);
    globeSafety = setTimeout(closeGlobe, 22000);   // watchdog
}
function closeGlobe() {
    if (!globeActive) return;
    const elapsed = Date.now() - globeShownAt;
    if (elapsed < GLOBE_MIN) { setTimeout(closeGlobe, GLOBE_MIN - elapsed); return; }

    clearInterval(globeHud); clearTimeout(globeSafety);
    const o = document.getElementById('globe-overlay');
    const fill = document.getElementById('globe-progress-fill');
    const status = document.getElementById('globe-status');
    if (fill) fill.style.width = '100%';
    if (status) status.textContent = 'BLOQUEO DE COORDENADAS CONFIRMADO ✔';
    scanPing(0); scanPing(0.12);

    setTimeout(() => {
        if (o) { o.classList.add('fade-out'); }
        setTimeout(() => {
            if (o) { o.classList.remove('active'); o.classList.remove('fade-out'); }
            globeActive = false; stopGlobe();
        }, 420);
    }, 350);
}

/* ====================== 3) MÁQUINA DE ESCRIBIR (carga "hacker") ======================
   Revela los paneles línea por línea y letra por letra, con sonido.
   Recibe una lista de ITEMS (no HTML crudo) para no romper etiquetas al tipear.
   Tipos de item:
     {t:'favicon', src, title}
     {t:'row', k, v, ok}
     {t:'desc', text}
     {t:'img', src}
     {t:'line', text, cls}
   ==================================================================== */
const TYPE_CHAR = 13;       // ms por caracter
const TYPE_LINE_GAP = 110;  // pausa entre líneas
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

function autoScroll(box) {
    const sc = box.closest('.scroll') || box;
    sc.scrollTop = sc.scrollHeight;
}

/* tipea un texto dentro de un nodo, con cursor y ticks de audio */
async function typeText(node, text, box) {
    text = String(text == null ? '' : text);
    const caret = document.createElement('span');
    caret.className = 'type-caret';
    caret.textContent = '▮';
    node.textContent = '';
    node.appendChild(caret);
    for (let i = 0; i < text.length; i++) {
        caret.insertAdjacentText('beforebegin', text[i]);
        if (i % 3 === 0) sfxType();
        if (i % 6 === 0) autoScroll(box);
        // los espacios y signos vuelan un poco más rápido
        await sleep(text[i] === ' ' ? TYPE_CHAR * 0.5 : TYPE_CHAR);
    }
    caret.remove();
}

/* construye el nodo contenedor de un item (sin el texto que se tipea) */
function buildItemNode(item) {
    if (item.t === 'favicon') {
        const wrap = document.createElement('div');
        wrap.className = 'favicon-line type-line-in';
        if (item.src) {
            const img = document.createElement('img');
            img.src = item.src; img.onerror = function () { this.style.display = 'none'; };
            wrap.appendChild(img);
        }
        const strong = document.createElement('strong');
        strong.style.color = 'var(--ctu-cyan)';
        wrap.appendChild(strong);
        return { node: wrap, target: strong, text: item.title || '' };
    }
    if (item.t === 'row') {
        const row = document.createElement('div');
        row.className = 'data-row type-line-in';
        const k = document.createElement('span'); k.className = 'k'; k.textContent = item.k;
        const v = document.createElement('span'); v.className = 'v' + (item.ok ? ' ok' : '');
        row.appendChild(k); row.appendChild(v);
        return { node: row, target: v, text: item.v || '—' };
    }
    if (item.t === 'desc') {
        const d = document.createElement('div');
        d.className = 'meta-desc type-line-in';
        return { node: d, target: d, text: item.text || '' };
    }
    if (item.t === 'img') {
        const img = document.createElement('img');
        img.className = 'meta-thumb type-line-in';
        img.src = item.src; img.onerror = function () { this.style.display = 'none'; };
        return { node: img, target: null, text: '' };   // imagen: sin tipeo
    }
    // 'line' genérica
    const ln = document.createElement('div');
    ln.className = (item.cls || 'idle-line') + ' type-line-in';
    return { node: ln, target: ln, text: item.text || '' };
}

/* revela una lista de items dentro de un panel, uno por uno */
async function typeItems(panelId, box, items, opts) {
    opts = opts || {};
    const panel = panelId ? document.getElementById(panelId) : null;
    if (panel) panel.classList.add('receiving');
    if (!opts.append) box.innerHTML = '';
    sfxPanelOpen();

    for (const item of (items || [])) {
        const built = buildItemNode(item);
        box.appendChild(built.node);
        autoScroll(box);
        if (built.target) {
            await typeText(built.target, built.text, box);
            sfxLineDone();
        } else {
            // imagen / bloque sin texto
            sfxLineDone();
            await sleep(180);
        }
        await sleep(TYPE_LINE_GAP);
    }

    if (panel) panel.classList.remove('receiving');
    sfxPanelDone();
    autoScroll(box);
}

/* expuesto para main.js */
window.typeItems = typeItems;
window.showGlobe = showGlobe;
window.closeGlobe = closeGlobe;
window.sfxBeep = sfxBeep;
window.sfxPanelDone = sfxPanelDone;

/* ====================== 4) ENGANCHE ====================== */
const _rastrear = window.rastrear;
if (typeof _rastrear === 'function') {
    window.rastrear = function () {
        initAudio();
        const raw = (document.getElementById('target-search-input').value || '').trim();
        let valid = false;
        if (raw) { try { new URL(/^https?:\/\//i.test(raw) ? raw : 'https://' + raw); valid = true; } catch (e) { valid = false; } }
        if (valid) { sfxSearch(); showGlobe(); }
        return _rastrear.apply(this, arguments);
    };
}
function wireEffects() {
    const btnLogin = document.getElementById('btn-decrypt');
    if (btnLogin) btnLogin.addEventListener('click', () => { initAudio(); sfxBoot(); });
    const btnSearch = document.getElementById('btn-search-target');
    if (btnSearch) btnSearch.addEventListener('click', initAudio);
    const inp = document.getElementById('target-search-input');
    if (inp) inp.addEventListener('keydown', initAudio);
    // El globo ahora se cierra explícitamente al terminar la cascada de paneles
    // (ver final de rastrear() en main.js). El watchdog interno es el respaldo.
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', wireEffects);
else wireEffects();