/* ====================================================================
   TARGET ANALYZER // main.js  ·  Comisión 04
   ==================================================================== */

const canvas = document.getElementById('matrix-canvas');
const mctx = canvas.getContext('2d');
const glyphs = '01<>/[]{}#$%&*+=01アカサタ0123456789ABCDEF'.split('');
let cols, drops;

function sizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    cols = Math.floor(canvas.width / 14);
    drops = Array(cols).fill(1);
}
function drawMatrix() {
    mctx.fillStyle = 'rgba(3,5,8,0.08)';
    mctx.fillRect(0, 0, canvas.width, canvas.height);
    mctx.font = '14px monospace';
    for (let i = 0; i < cols; i++) {
        const ch = glyphs[Math.floor(Math.random() * glyphs.length)];
        mctx.fillStyle = Math.random() > 0.95 ? '#ff8c1a' : '#1c6e4d';
        mctx.fillText(ch, i * 14, drops[i] * 14);
        if (drops[i] * 14 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    }
}
sizeCanvas();
setInterval(drawMatrix, 55);

function tick() {
    const n = new Date();
    const p = (x) => String(x).padStart(2, '0');
    const el = document.getElementById('ctu-timer');
    if (el) el.textContent = `[ ${p(n.getHours())}:${p(n.getMinutes())}:${p(n.getSeconds())} ]`;
}
setInterval(tick, 1000); tick();

let map, marker;

function initializeSystem() {
    document.getElementById('login-status').textContent = 'DESENCRIPTANDO // ACCESO CONCEDIDO';
    setTimeout(() => {
        document.getElementById('system-terminal').classList.remove('terminal-login-mode');
        initMap();
        setTimeout(() => { map.invalidateSize(); }, 200);
        const input = document.getElementById('target-search-input');
        input.value = 'https://www.wikipedia.org';
        setTimeout(rastrear, 600);
    }, 500);
}

function initMap() {
    if (map) return;
    map = L.map('map-tactico', { zoomControl: false, attributionControl: false }).setView([-34.6081, -58.3816], 3);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { maxZoom: 19, subdomains: 'abcd' }).addTo(map);
    L.control.zoom({ position: 'bottomright' }).addTo(map);
}

function setMarker(lat, lng, label) {
    if (!map) return;
    if (marker) map.removeLayer(marker);
    const icon = L.divIcon({ className: 'ctu-marker', html: '<div class="ping"></div>', iconSize: [14, 14] });
    marker = L.marker([lat, lng], { icon }).addTo(map).bindPopup(label).openPopup();
    map.flyTo([lat, lng], 11, { duration: 1.6 });
}

function log(msg, type) {
    const el = document.getElementById('search-log');
    el.textContent = msg;
    el.style.color = type === 'err' ? 'var(--ctu-red)' : type === 'ok' ? 'var(--ctu-green)' : 'var(--ctu-orange)';
}
function row(k, v, ok) { return `<div class="data-row"><span class="k">${k}</span><span class="v ${ok ? 'ok' : ''}">${v || '—'}</span></div>`; }
function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }
function checkSearchEnter(e) { if (e.key === 'Enter') rastrear(); }

/* --- RENDERIZADO AISLADO PARA NO PISAR ESTRUCTURA HTML --- */
async function showItems(panelId, boxId, items, opts) {
    const box = document.getElementById(boxId);
    if (!box) return;
    if (window.typeItems) {
        await window.typeItems(panelId, box, items, opts);
    } else {
        const html = (items || []).map(itemToHtml).join('');
        if (opts && opts.append) box.insertAdjacentHTML('beforeend', html);
        else box.innerHTML = html;
    }
}

function itemToHtml(it) {
    if (it.t === 'favicon') return `<div class="favicon-line">${it.src ? `<img src="${esc(it.src)}" onerror="this.style.display='none'">` : ''}<strong style="color:var(--ctu-cyan)">${esc(it.title || '')}</strong></div>`;
    if (it.t === 'row') return row(it.k, esc(it.v), it.ok);
    if (it.t === 'desc') return `<div class="meta-desc">${esc(it.text || '')}</div>`;
    if (it.t === 'img') return `<img class="meta-thumb" src="${esc(it.src)}" onerror="this.style.display='none'">`;
    return `<div class="${it.cls || 'idle-line'}">${esc(it.text || '')}</div>`;
}

/* --- LÓGICA DE INYECCIÓN PURA (ARCHIVERO) --- */
function buildStatsHTML() {
    return [
        { label: 'IMG_ASSETS', val: Math.floor(Math.random() * 60 + 40), colorClass: 'bar-cyan' },
        { label: 'DOM_SCRIPTS', val: Math.floor(Math.random() * 50 + 30), colorClass: 'bar-orange' },
        { label: 'TCP_PACKETS', val: Math.floor(Math.random() * 70 + 20), colorClass: 'bar-danger' },
        { label: 'SSL_HANDSHAKE', val: Math.floor(Math.random() * 90 + 10), colorClass: 'bar-cyan' }
    ].map(s => `
        <div class="stat-row">
            <span class="stat-label">${esc(s.label)}</span>
            <div class="stat-bar-bg"><div class="stat-bar-fill ${esc(s.colorClass)} pulse-bar" style="width: ${s.val}%;"></div></div>
            <span class="stat-number">${s.val}</span>
        </div>
    `).join('');
}

function buildTechHTML() {
    const techs = [
        { text: 'NGINX / Reverse Proxy', color: 'orange' },
        { text: 'AWS CloudFront // CDN', color: 'cyan' },
        { text: 'PostgreSQL // Data_Layer', color: 'cyan' },
        { text: 'React.js // VDOM_Tracker', color: 'danger' },
        { text: 'Open Graph Protocol', color: 'orange' },
        { text: 'Socket.io // WSS_Live', color: 'danger' }
    ].sort(() => 0.5 - Math.random()).slice(0, 5);
    return techs.map(p => `<span class="tech-pill ${esc(p.color)}">${esc(p.text)}</span>`).join('');
}

function buildLinksHTML(host) {
    const links = [
        `https://api.${host}/v1/telemetry`,
        `https://auth.${host}/oauth/token`,
        `https://cdn.${host}/assets/core.js`,
        `wss://socket.${host}/live_feed`,
        `https://${host}/api/v2/users/me`,
        `https://${host}/privacy-policy`
    ];
    return links.map(l => `<p class="link-item">▶ ${esc(l)}</p>`).join('');
}

/* ---------------------- FLUJO PRINCIPAL ---------------------- */
let rastreando = false;
async function rastrear() {
    const raw = document.getElementById('target-search-input').value.trim();
    if (!raw) { log('SIN VECTOR // INGRESE UNA URL', 'err'); return; }

    let url = /^https?:\/\//i.test(raw) ? raw : 'https://' + raw;
    let host;
    try { host = new URL(url).hostname; } catch { log('URL INVÁLIDA // VECTOR RECHAZADO', 'err'); return; }

    if (rastreando) return;
    rastreando = true;

    log(`INTERCEPTANDO VECTOR: ${host} ...`);
    resetPanels(host);

    loadScreenshot(url);
    const metaP = fetchMeta(url);
    const ipP   = resolveIp(host);

    try {
        const metaItemsRaw = await metaP || [{ t: 'line', cls: 'err-line', text: 'METADATOS CIFRADOS' }];
        const ip = await ipP;
        const panelMetaItems = [...metaItemsRaw];

        if (ip) {
            const geo = await fetchGeo(ip);
            if (geo) {
                panelMetaItems.push(...buildGeoItems(geo));
                if (geo.latitude && geo.longitude) {
                    setMarker(geo.latitude, geo.longitude, `<b>${esc(host)}</b><br>${esc(ip)}<br>${esc([geo.city, geo.country].filter(Boolean).join(', '))}`);
                    log(`OBJETIVO ${host} LOCALIZADO`, 'ok');
                }
            }
        }

        // --- PANEL 3: Datos (Efecto tipeo) + Métricas (Inyección Directa) ---
        await showItems('panel-meta', 'meta-content', panelMetaItems);
        document.getElementById('metrics-container').style.display = 'block';
        document.getElementById('stats-content').innerHTML = buildStatsHTML();

        // --- PANEL 4: Tecnologías y Enlaces (Pura inyección directa, sin IPs ni Geolocalización) ---
        document.getElementById('tech-content').innerHTML = buildTechHTML();
        document.getElementById('links-content').innerHTML = buildLinksHTML(host);

    } finally {
        rastreando = false;
        if (window.closeGlobe) window.closeGlobe();
    }
}

function resetPanels(host) {
    const shotStatus = document.getElementById('shot-status');
    shotStatus.textContent = 'CAPTURANDO SEÑAL VISUAL...';
    shotStatus.style.color = 'var(--ctu-orange)';
    document.getElementById('shot-img').style.display = 'none';
    const shotPanel = document.getElementById('panel-shot');
    if (shotPanel) shotPanel.classList.add('receiving');

    document.getElementById('meta-content').innerHTML = `<div class="loading-line blink">EXTRAYENDO METADATOS DE ${esc(host)}...</div>`;
    document.getElementById('metrics-container').style.display = 'none';
    document.getElementById('tech-content').innerHTML = '<div class="loading-line blink">ANALIZANDO NODOS...</div>';
    document.getElementById('links-content').innerHTML = '<div class="loading-line blink">RASTREANDO ENLACES...</div>';
}

function loadScreenshot(url) {
    const img = document.getElementById('shot-img');
    const status = document.getElementById('shot-status');
    const panel = document.getElementById('panel-shot');
    const src = 'https://image.thum.io/get/width/1280/crop/1000/noanimate/' + url;

    img.onload = () => {
        img.style.display = 'block';
        status.textContent = 'CAPTURA INTERCEPTADA // ' + new Date().toLocaleTimeString();
        status.style.color = 'var(--ctu-green)';
        if (panel) panel.classList.remove('receiving');
        if (window.sfxPanelDone) window.sfxPanelDone();
    };
    img.onerror = () => {
        status.textContent = 'SEÑAL VISUAL BLOQUEADA // OBJETIVO PROTEGIDO';
        status.style.color = 'var(--ctu-red)';
        if (panel) panel.classList.remove('receiving');
        if (window.sfxBeep) window.sfxBeep();
    };
    img.src = src;
}

async function fetchMeta(url) {
    try {
        const r = await fetch('https://api.microlink.io/?url=' + encodeURIComponent(url) + '&meta=true');
        const j = await r.json();
        if (j.status !== 'success') throw new Error('no data');
        const d = j.data;
        const items = [];
        if (d.logo && d.logo.url) items.push({ t: 'favicon', src: d.logo.url, title: d.title || d.url });
        items.push({ t: 'row', k: 'TÍTULO', v: d.title });
        items.push({ t: 'row', k: 'EDITOR', v: d.publisher });
        items.push({ t: 'row', k: 'URL', v: d.url });
        if (d.description) items.push({ t: 'desc', text: d.description });
        if (d.image && d.image.url) items.push({ t: 'img', src: d.image.url });
        return items;
    } catch (e) { return null; }
}

async function resolveIp(host) {
    try {
        const r = await fetch('https://dns.google/resolve?name=' + encodeURIComponent(host) + '&type=A');
        const j = await r.json();
        const a = (j.Answer || []).find(x => x.type === 1);
        return a ? a.data : null;
    } catch { return null; }
}

async function fetchGeo(ip) {
    try {
        const r = await fetch('https://ipwho.is/' + ip);
        const j = await r.json();
        if (!j.success) throw new Error('geo fail');
        return j;
    } catch { return null; }
}

function buildGeoItems(j) {
    const c = j.connection || {};
    return [
        { t: 'row', k: 'PROVEEDOR (ISP)', v: j.isp || c.isp },
        { t: 'row', k: 'PAÍS', v: (j.flag && j.flag.emoji ? j.flag.emoji + ' ' : '') + (j.country || '') },
        { t: 'row', k: 'CIUDAD / REGIÓN', v: [j.city, j.region].filter(Boolean).join(' / ') },
        { t: 'row', k: 'COORDENADAS', v: j.latitude + ', ' + j.longitude, ok: true },
    ];
}

window.addEventListener('resize', () => { sizeCanvas(); if (map) map.invalidateSize(); });

const CoverFlow = {
    panels: [], activeIndex: 0, isActive: false,
    init() {
        this.panels = [...document.querySelectorAll('.grid-4 .panel')];
        if (!this.panels.length) return;
        const dotsContainer = document.getElementById('dots');
        if (dotsContainer) {
            dotsContainer.innerHTML = '';
            this.panels.forEach((_, index) => {
                const dot = document.createElement('button');
                dot.className = 'dot';
                dot.onclick = () => this.goTo(index);
                dotsContainer.appendChild(dot);
            });
        }
        this.bindEvents();
    },
    goTo(targetIndex) {
        if (!this.isActive) return;
        this.activeIndex = Math.max(0, Math.min(this.panels.length - 1, targetIndex));
        this.panels.forEach((panel, i) => {
            const delta = i - this.activeIndex;
            panel.style.transform = `translateX(${delta * 100}%)`;
            panel.style.opacity = Math.abs(delta) <= 1 ? '1' : '0';
            panel.style.pointerEvents = delta === 0 ? 'auto' : 'none';
        });
        document.querySelectorAll('.dot').forEach((dot, idx) => dot.classList.toggle('on', idx === this.activeIndex));
        if (this.activeIndex === 0 && typeof map !== 'undefined' && map) setTimeout(() => { map.invalidateSize(); }, 400);
    },
    bindEvents() {
        let lastAnimationTime = 0;
        window.addEventListener('wheel', (e) => {
            if (!this.isActive) return;
            const targetScrollable = e.target.closest('.scroll');
            if (targetScrollable && (targetScrollable.scrollHeight > targetScrollable.clientHeight)) return;
            e.preventDefault();
            const now = Date.now();
            if (now - lastAnimationTime < 550) return;
            if (Math.abs(e.deltaX) < 15 && Math.abs(e.deltaY) < 15) return;
            let direction = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? (e.deltaX > 0 ? 1 : -1) : (e.deltaY > 0 ? 1 : -1);
            this.goTo(this.activeIndex + direction);
            lastAnimationTime = now;
        }, { passive: false });
        window.addEventListener('keydown', (e) => {
            if (!this.isActive) return;
            if (e.key === 'ArrowLeft') this.goTo(this.activeIndex - 1);
            if (e.key === 'ArrowRight') this.goTo(this.activeIndex + 1);
        });
    },
    toggle() {
        const btn = document.getElementById('btn-toggle-view');
        const nav = document.getElementById('coverflow-nav');
        this.isActive = !this.isActive;
        if (this.isActive) {
            document.body.classList.add('coverflow-active');
            if (nav) nav.classList.remove('hidden');
            if (btn) btn.innerText = '[ MODO: GRILLA 2x2 ]';
            if (this.panels.length === 0) this.init();
            this.goTo(this.activeIndex);
        } else {
            document.body.classList.remove('coverflow-active');
            if (nav) nav.classList.add('hidden');
            if (btn) btn.innerText = '[ MODO: INDIVIDUAL ]';
            this.panels.forEach(panel => {
                panel.style.transform = '';
                panel.style.opacity = '';
                panel.style.pointerEvents = '';
            });
            if (typeof map !== 'undefined' && map) setTimeout(() => map.invalidateSize(), 150);
        }
    }
};

document.addEventListener('DOMContentLoaded', () => CoverFlow.init());
