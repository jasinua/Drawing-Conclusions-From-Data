/*
 * "Run it yourself" lab for slide 35. Fills <div data-coinflip> (an overlay on the Figure 7.7 panel).
 *
 * A toggle swaps the book figure for a live simulation. A 3D hand (three.js, vendor/three.min.js, loaded on first use)
 * flicks real-looking coins: three slow, one at a time, then a fast-forward where 100 trials of 100 fair flips run
 * and every trial drops one chip onto a histogram. The whole run takes about 10 seconds.
 *
 * Label text is static and numbers sit in their own spans, so the Albanian switch can translate it.
 */
(() => {
  if (window.__coinflipLoaded) return;
  window.__coinflipLoaded = true;

  const LO = 30, HI = 70, TRIALS = 100, MICHAEL = 60;
  const SLOW = [0.35, 1.55, 2.75], FAST_START = 3.7, FAST_STEP = 0.062; // seconds; 3 slow flips, then 100 trials
  const SW = 620, SH = 270; // 3D scene size in px

  const style = document.createElement('style');
  style.textContent = `
    .cf-root{position:absolute;inset:0;pointer-events:none;letter-spacing:normal;font-family:Lato,'Helvetica Neue',Arial,sans-serif;color:#fff}
    .cf-toggle{position:absolute;top:12px;right:16px;z-index:3;pointer-events:auto;padding:10px 20px;border:2px solid #1199d6;border-radius:4px;background:#1199d6;color:#fff;font:700 22px Lato,'Helvetica Neue',Arial,sans-serif;cursor:pointer;white-space:nowrap;transition:filter .2s}
    .cf-toggle.on{background:#181d27;border-color:#414651}
    .cf-toggle:hover{filter:brightness(1.15)}
    .cf-lab{position:absolute;left:-21px;right:-21px;top:-17px;height:640px;display:none;flex-direction:column;background:#181d27;border:1px solid #252b37;border-radius:8px;pointer-events:auto;z-index:2;overflow:hidden}
    .cf-lab.on{display:flex}
    .cf-head{flex:none;height:56px;padding:16px 20px 0;font-size:24px;font-weight:700;letter-spacing:.16em;color:#58b7e2;white-space:nowrap}
    .cf-top{flex:none;display:flex;height:${SH}px}
    .cf-scene{position:relative;flex:none;width:${SW}px;height:${SH}px}
    .cf-scene canvas{display:block;width:${SW}px;height:${SH}px}
    .cf-side{flex:1;min-width:0;display:flex;flex-direction:column;justify-content:center;gap:10px;padding:30px 24px 0 8px;font-size:24px;color:#a4a7ae;font-variant-numeric:tabular-nums}
    .cf-phase{font-size:19px;font-weight:700;letter-spacing:.1em;color:#fdb022;min-height:26px;white-space:nowrap}
    .cf-side b{color:#fff;font-size:34px}
    .cf-side .hit b{color:#f97066}
    .cf-last{font-size:26px;color:#d5d7da;min-height:34px}
    .cf-last b{font-size:26px;color:#fdb022}
    .cf-done{font-size:24px;line-height:1.3;color:#d5d7da}
    .cf-go{align-self:flex-start;margin-top:4px;padding:12px 24px;border:none;border-radius:4px;background:#1199d6;color:#fff;font:700 24px Lato,'Helvetica Neue',Arial,sans-serif;cursor:pointer;white-space:nowrap;transition:filter .2s}
    .cf-go:hover:not(:disabled){filter:brightness(1.15)}
    .cf-go:disabled{opacity:.4;cursor:default}
    .cf-nogl{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:22px;color:#717680}
    @keyframes cf-drop{from{transform:translateY(-60px);opacity:0}to{transform:translateY(0);opacity:1}}
    .cf-chip{animation:cf-drop .16s ease-out}`;
  document.head.appendChild(style);

  const NS = 'http://www.w3.org/2000/svg';
  let threePromise = null;
  function loadThree() {
    if (window.THREE) return Promise.resolve();
    return threePromise || (threePromise = new Promise((res, rej) => {
      const s = document.createElement('script');
      s.src = 'vendor/three.min.js'; s.onload = res; s.onerror = rej; document.head.appendChild(s);
    }));
  }

  /* ---------- 3D scene ---------- */
  function coinTexture(THREE, letter) {
    const c = document.createElement('canvas'); c.width = c.height = 512;
    const g = c.getContext('2d');
    const bg = g.createRadialGradient(190, 170, 30, 256, 256, 280);
    bg.addColorStop(0, '#ffe08a'); bg.addColorStop(.55, '#f2b632'); bg.addColorStop(1, '#b97c0c');
    g.fillStyle = bg; g.fillRect(0, 0, 512, 512);
    g.strokeStyle = 'rgba(120,70,0,.75)'; g.lineWidth = 10; g.beginPath(); g.arc(256, 256, 236, 0, 7); g.stroke();
    g.strokeStyle = 'rgba(255,240,190,.7)'; g.lineWidth = 5; g.beginPath(); g.arc(256, 256, 214, 0, 7); g.stroke();
    g.setLineDash([2, 14]); g.lineWidth = 8; g.strokeStyle = 'rgba(120,70,0,.5)'; g.beginPath(); g.arc(256, 256, 188, 0, 7); g.stroke(); g.setLineDash([]);
    g.font = '900 290px Lato, Helvetica, Arial, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillStyle = 'rgba(90,50,0,.55)'; g.fillText(letter, 262, 270);
    g.fillStyle = '#ffeaa8'; g.fillText(letter, 254, 262);
    g.fillStyle = '#e0a21c'; g.fillText(letter, 256, 264);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
    return t;
  }

  function makeScene(host) {
    const THREE = window.THREE;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    renderer.setSize(SW, SH, false);
    renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(24, SW / SH, .1, 60);
    camera.position.set(2.6, 4.0, 11); camera.lookAt(2.6, 1.75, 0);

    // studio environment so the metal has something to reflect
    const pm = new THREE.PMREMGenerator(renderer), env = new THREE.Scene();
    env.add(new THREE.Mesh(new THREE.SphereGeometry(10, 32, 16), new THREE.MeshBasicMaterial({ color: 0x262d3a, side: THREE.BackSide })));
    const soft = (w, h, x, y, z, k, col) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(col).multiplyScalar(k), side: THREE.DoubleSide })); m.position.set(x, y, z); m.lookAt(0, 0, 0); env.add(m); };
    soft(7, 3, 0, 6, 2, 6, 0xffffff); soft(3, 7, -6, 1, 3, 4, 0xcfe8ff); soft(4, 2, 6, 3, -2, 5, 0xffe2b0); soft(5, 2, 0, -4, 4, 1.5, 0x8899aa);
    scene.environment = pm.fromScene(env, .03).texture;

    scene.add(new THREE.HemisphereLight(0xcfe8ff, 0x1d222b, .8));
    const key = new THREE.DirectionalLight(0xffffff, 2.6); key.position.set(3, 8, 6); key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024); key.shadow.camera.left = -8; key.shadow.camera.right = 9; key.shadow.camera.top = 7; key.shadow.camera.bottom = -4;
    key.shadow.radius = 4; key.shadow.bias = -.0004; scene.add(key);
    const rim = new THREE.DirectionalLight(0x58b7e2, 1.6); rim.position.set(-5, 3, -5); scene.add(rim);

    const table = new THREE.Mesh(new THREE.PlaneGeometry(40, 14), new THREE.ShadowMaterial({ opacity: .55 }));
    table.rotation.x = -Math.PI / 2; table.receiveShadow = true; scene.add(table);
    const edge = new THREE.Mesh(new THREE.PlaneGeometry(40, .02), new THREE.MeshBasicMaterial({ color: 0x414651 }));
    edge.position.set(0, .001, 2.2); edge.rotation.x = -Math.PI / 2; scene.add(edge);

    /* hand: sleeve + forearm, palm, four curled fingers with knuckle joints, two-part thumb on a pivot */
    const skinMat = c => new THREE.MeshPhysicalMaterial({ color: c, roughness: .55, metalness: 0, sheen: 1, sheenColor: new THREE.Color(0xff9d80), sheenRoughness: .5, envMapIntensity: .45 });
    const skin = skinMat(0xe4ae84), skinD = skinMat(0xd09468), nailMat = new THREE.MeshPhysicalMaterial({ color: 0xf6dccb, roughness: .25, clearcoat: .6 });
    const sleeve = new THREE.MeshStandardMaterial({ color: 0x1b6fb0, roughness: .85, metalness: 0, envMapIntensity: .35 });
    const hand = new THREE.Group(); hand.position.set(-1.1, 1.0, 0); scene.add(hand);
    const add = (geo, mat, x, y, z, sx = 1, sy = 1, sz = 1, parent = hand) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.scale.set(sx, sy, sz); m.castShadow = true; parent.add(m); return m; };
    const sph = new THREE.SphereGeometry(1, 48, 32);
    const arm = add(new THREE.CylinderGeometry(.5, .33, 3.2, 48), skin, -1.85, -.04, 0); arm.rotation.z = Math.PI / 2 + .04;
    const cuff = add(new THREE.CylinderGeometry(.66, .6, 1.7, 48), sleeve, -3.2, -.06, 0); cuff.rotation.z = Math.PI / 2 + .04;
    add(sph, skin, .05, 0, 0, .72, .46, .56);                 // wrist-to-palm
    add(sph, skin, .5, -.02, 0, .55, .44, .56);               // heel of the fist
    const fingers = [[.4, .185, 1], [.15, .185, .98], [-.1, .175, .94], [-.34, .15, .86]];
    fingers.forEach(([z, r, k], i) => {
      const P = [[.3, .26], [.62, .34], [.92, .26], [1.04, .02], [.92, -.24], [.62, -.34], [.34, -.26]].map(p => new THREE.Vector3(p[0] * (.7 + .3 * k), p[1] * k, z));
      const curve = new THREE.CatmullRomCurve3(P), m = i % 2 ? skinD : skin;
      add(new THREE.TubeGeometry(curve, 56, r, 20, false), m, 0, 0, 0);
      [.12, .3, .5, .72].forEach(t => { const p = curve.getPoint(t); add(sph, i % 2 ? skin : skinD, p.x, p.y, p.z, r * 1.07, r * 1.07, r * 1.07).castShadow = false; }); // joints
      const e = curve.getPoint(1); add(sph, m, e.x, e.y, e.z, r, r, r);
      const t0 = curve.getPoint(0); add(sph, m, t0.x, t0.y, t0.z, r, r, r);
    });
    // thumb: base on the camera side of the palm, angled up; flicks about its pivot
    const thumb = new THREE.Group(); thumb.position.set(.1, .22, .56); hand.add(thumb);
    const seg1 = add(new THREE.CapsuleGeometry(.2, .42, 14, 24), skin, .36, 0, 0, 1, 1, 1, thumb); seg1.rotation.z = Math.PI / 2;
    const seg = new THREE.Group(); seg.position.set(.72, 0, 0); seg.rotation.z = -.16; thumb.add(seg);
    const seg2 = add(new THREE.CapsuleGeometry(.17, .38, 14, 24), skin, .27, 0, 0, 1, 1, 1, seg); seg2.rotation.z = Math.PI / 2;
    add(sph, skin, .6, 0, 0, .17, .17, .17, seg);
    add(sph, nailMat, .5, .1, 0, .2, .07, .13, seg).rotation.z = .12;
    const tipMark = new THREE.Object3D(); tipMark.position.set(.55, .2, 0); seg.add(tipMark);

    /* coins */
    const faceH = coinTexture(THREE, 'H'), faceT = coinTexture(THREE, 'T');
    faceT.center.set(.5, .5); faceT.rotation = Math.PI; // keeps T upright when seen from below
    const geo = new THREE.CylinderGeometry(.6, .6, .09, 72, 1);
    const sideMat = () => new THREE.MeshStandardMaterial({ color: 0xc08a14, metalness: .95, roughness: .38, transparent: true });
    const faceMat = tex => new THREE.MeshStandardMaterial({ map: tex, metalness: .92, roughness: .3, envMapIntensity: 1.15, transparent: true });
    const makeCoin = () => {
      const mats = [sideMat(), faceMat(faceH), faceMat(faceT)];
      const mesh = new THREE.Mesh(geo, mats); mesh.castShadow = true; mesh.visible = false; scene.add(mesh);
      return { mesh, mats, state: 'idle' };
    };
    const pool = Array.from({ length: 26 }, makeCoin);
    const take = () => pool.find(c => c.state === 'idle');
    const setOpacity = (c, o) => c.mats.forEach(m => { m.opacity = o; });
    const qz = new THREE.Quaternion(), qx = new THREE.Quaternion(), ax = new THREE.Vector3(1, 0, 0), az = new THREE.Vector3(0, 0, 1);

    let ready = null, thumbFlickAt = -9, now = 0;
    const tipWorld = new THREE.Vector3();
    function spawnReady() {
      const c = take(); if (!c) return;
      c.state = 'ready'; c.born = now; c.mesh.visible = true; setOpacity(c, 1); ready = c;
    }
    function placeReady() {
      if (!ready) return;
      hand.updateMatrixWorld(true); tipMark.getWorldPosition(tipWorld);
      const k = Math.min(1, (now - ready.born) / .25), s = k * k * (3 - 2 * k);
      ready.mesh.position.set(tipWorld.x + .04, tipWorld.y + .07, tipWorld.z);
      ready.mesh.scale.setScalar(.2 + .8 * s);
      qz.setFromAxisAngle(az, (thumb.rotation.z - .4) * .5); qx.setFromAxisAngle(ax, .5); ready.mesh.quaternion.copy(qz).multiply(qx);
    }
    const G = -26;
    function launch(heads, T, spread) {
      const c = ready; if (!c) return null;
      ready = null; thumbFlickAt = now;
      c.state = 'fly'; c.t0 = now; c.T = T; c.heads = heads; c.onLand = null; c.big = false;
      c.p0 = c.mesh.position.clone();
      const yT = .05, lx = 1.9 + Math.random() * spread, lz = (Math.random() - .5) * 1.5;
      c.vx = (lx - c.p0.x) / T; c.vz = (lz - c.p0.z) / T; c.vy = (yT - c.p0.y - .5 * G * T * T) / T;
      const turns = spread > 2 ? 3 + Math.floor(Math.random() * 3) : 2 + Math.floor(Math.random() * 3);
      c.total = Math.PI * 2 * turns + (heads ? 0 : Math.PI); c.lx = lx; c.lz = lz; c.yT = yT;
      c.tilt = (Math.random() < .5 ? -1 : 1) * (.18 + Math.random() * .22);
      setTimeout(spawnReady, 90);
      return c;
    }
    function updateCoin(c) {
      const t = now - c.t0, m = c.mesh;
      if (c.state === 'fly') {
        const u = Math.min(1, t / c.T), th = c.total * u;
        m.position.set(c.p0.x + c.vx * t, c.p0.y + c.vy * t + .5 * G * t * t, c.p0.z + c.vz * t);
        m.scale.setScalar(1);
        qz.setFromAxisAngle(az, th); qx.setFromAxisAngle(ax, c.tilt * Math.sin(Math.PI * u));
        m.quaternion.copy(qz).multiply(qx);
        if (t >= c.T) { c.state = 'land'; c.landAt = now; if (c.onLand) c.onLand(c); }
        return;
      }
      if (c.state === 'land') {
        const s = now - c.landAt, h1 = .2, h2 = .11;
        let y = c.yT;
        if (s < h1) y += .13 * 4 * (s / h1) * (1 - s / h1);
        else if (s < h1 + h2) { const w = (s - h1) / h2; y += .045 * 4 * w * (1 - w); }
        const slide = c.vx * .22 * (1 - Math.exp(-s * 6));
        m.position.set(c.lx + slide, y, c.lz);
        const wob = .12 * Math.exp(-s * 6) * Math.sin(s * 34);
        qz.setFromAxisAngle(az, c.total); qx.setFromAxisAngle(ax, wob);
        m.quaternion.copy(qz).multiply(qx);
        const life = c.big ? 1.6 : .55;
        if (s > life) setOpacity(c, Math.max(0, 1 - (s - life) / .25));
        if (s > life + .25) { c.state = 'idle'; m.visible = false; setOpacity(c, 1); }
      }
    }
    function frame(t) {
      now = t;
      const f = t - thumbFlickAt, fl = f < 0 ? 0 : f < .05 ? f / .05 : Math.max(0, 1 - (f - .05) / .16);
      thumb.rotation.z = .4 + fl * .5; hand.position.y = 1.0 + fl * .05; hand.rotation.z = fl * .03;
      placeReady();
      pool.forEach(c => { if (c.state === 'fly' || c.state === 'land') updateCoin(c); });
      renderer.render(scene, camera);
    }
    function reset() { pool.forEach(c => { c.state = 'idle'; c.mesh.visible = false; setOpacity(c, 1); }); ready = null; thumbFlickAt = -9; spawnReady(); }
    reset();
    return { frame, launch, reset, busy: () => pool.some(c => c.state === 'fly' || c.state === 'land') };
  }

  /* ---------- widget ---------- */
  function init(el) {
    el.dataset.cfInit = '1';
    el.className = 'cf-root';
    el.innerHTML =
      '<button type="button" class="cf-toggle">Run it yourself</button>' +
      '<div class="cf-lab"><div class="cf-head">LIVE · 100 TRIALS OF 100 FLIPS</div>' +
      '<div class="cf-top"><div class="cf-scene"></div>' +
      '<div class="cf-side"><div class="cf-phase"></div>' +
      '<div class="r1"><span>Trial</span> <b class="tr">0</b> / ' + TRIALS + '</div>' +
      '<div class="hit r3"><span>60 or more</span> <b class="k">0</b></div>' +
      '<div class="cf-last"></div><div class="cf-done"></div>' +
      '<button type="button" class="cf-go">Start · 10 s</button></div></div>' +
      '<svg class="cf-hist" viewBox="0 0 860 300" style="flex:1;min-height:0;width:100%"></svg></div>';
    const q = s => el.querySelector(s);
    const toggle = q('.cf-toggle'), lab = q('.cf-lab'), go = q('.cf-go'), hist = q('.cf-hist'), host = q('.cf-scene');
    let counts = {}, trial = 0, k = 0, scene = null, raf = 0, runStart = 0, running = false, nextSlow = 0, nextTrial = 0, slowDone = 0;

    const mk = (tag, attrs, text) => { const e = document.createElementNS(NS, tag); for (const a in attrs) e.setAttribute(a, attrs[a]); if (text != null) e.textContent = text; return e; };
    function draw(newHeads) {
      hist.replaceChildren();
      const X0 = 44, X1 = 836, Y1 = 236, Ytop = 34, ux = (X1 - X0) / (HI - LO);
      const tallest = Math.max(9, ...Object.values(counts)), unit = Math.min(22, (Y1 - Ytop) / tallest);
      hist.appendChild(mk('line', { x1: X0, x2: X1, y1: Y1, y2: Y1, stroke: '#414651', 'stroke-width': 2 }));
      for (let v = 30; v <= 70; v += 10) hist.appendChild(mk('text', { x: X0 + (v + .5 - LO) * ux, y: Y1 + 28, 'text-anchor': 'middle', fill: '#a4a7ae', 'font-size': 20 }, v));
      hist.appendChild(mk('text', { x: (X0 + X1) / 2, y: Y1 + 50, 'text-anchor': 'middle', fill: '#fff', 'font-size': 20, 'font-weight': 700 }, 'Number of Heads in 100 flips'));
      const mx = X0 + (MICHAEL - LO) * ux;
      hist.appendChild(mk('line', { x1: mx, x2: mx, y1: Ytop - 8, y2: Y1, stroke: '#f97066', 'stroke-width': 3, 'stroke-dasharray': '8 6' }));
      hist.appendChild(mk('text', { x: mx - 10, y: Ytop + 4, 'text-anchor': 'end', fill: '#f97066', 'font-size': 22, 'font-weight': 700 }, 'Michael: 60'));
      Object.keys(counts).forEach(key => {
        const h = +key, n = counts[h];
        for (let i = 0; i < n; i++) {
          const chip = mk('rect', { x: X0 + (h - LO) * ux + 1, y: Y1 - (i + 1) * unit + 1, width: ux - 2, height: unit - 2, rx: 2, fill: h >= MICHAEL ? '#f97066' : '#1199d6' });
          if (h === newHeads && i === n - 1) chip.setAttribute('class', 'cf-chip');
          hist.appendChild(chip);
        }
      });
    }
    function resetUi() {
      counts = {}; trial = 0; k = 0; slowDone = 0;
      q('.tr').textContent = 0; q('.k').textContent = 0; q('.cf-done').innerHTML = ''; q('.cf-last').innerHTML = ''; q('.cf-phase').textContent = '';
      q('.r1').style.display = q('.r3').style.display = ''; draw(-1);
      if (scene) { scene.reset(); scene.frame(0); }
    }
    function trialTick() {
      let heads = 0; for (let i = 0; i < 100; i++) if (Math.random() < .5) heads++;
      heads = Math.min(HI - 1, Math.max(LO, heads));
      counts[heads] = (counts[heads] || 0) + 1; trial++; if (heads >= MICHAEL) k++;
      q('.tr').textContent = trial; q('.k').textContent = k; draw(heads);
      if (scene) scene.launch(Math.random() < .5, .5 + Math.random() * .14, 3.4);
    }
    function slowFlip() {
      const heads = Math.random() < .5, n = ++slowDone;
      q('.cf-phase').textContent = 'ONE FLIP AT A TIME';
      const c = scene && scene.launch(heads, .78, 1.6);
      if (c) { c.big = true; c.onLand = () => { q('.cf-last').innerHTML = '<span>Flip</span> <b>' + n + '</b>: <b><span>' + (heads ? 'Heads' : 'Tails') + '</span></b>'; }; }
    }
    function finish() {
      running = false; go.disabled = false; go.textContent = 'Run again';
      q('.cf-phase').textContent = ''; q('.cf-last').innerHTML = '';
      q('.r1').style.display = q('.r3').style.display = 'none';
      q('.cf-done').innerHTML = '<b>' + k + '</b> <span>of 100 trials reached 60 or more.</span>';
    }
    function loop(ts) {
      const t = (ts - runStart) / 1000;
      if (running) {
        while (nextSlow < SLOW.length && t >= SLOW[nextSlow]) { nextSlow++; slowFlip(); }
        if (t >= FAST_START - .2) q('.cf-phase').textContent = 'FAST-FORWARD';
        while (nextTrial < TRIALS && t >= FAST_START + nextTrial * FAST_STEP) { nextTrial++; trialTick(); }
        if (nextTrial >= TRIALS && t > FAST_START + TRIALS * FAST_STEP + .2) finish();
      }
      if (scene) scene.frame(t);
      if (running || (scene && scene.busy())) raf = requestAnimationFrame(loop); else raf = 0;
    }
    function start() {
      if (running) return;
      resetUi(); running = true; go.disabled = true; nextSlow = 0; nextTrial = 0; runStart = performance.now();
      if (!raf) raf = requestAnimationFrame(loop);
    }
    go.addEventListener('click', e => { e.stopPropagation(); start(); go.blur(); });
    toggle.addEventListener('click', e => {
      e.stopPropagation();
      const on = lab.classList.toggle('on');
      toggle.classList.toggle('on', on);
      toggle.firstChild.textContent = on ? 'Figure 7.7' : 'Run it yourself';
      if (on && !scene && !host.dataset.tried) {
        host.dataset.tried = '1';
        loadThree().then(() => { scene = makeScene(host); scene.frame(0); }).catch(() => { host.innerHTML = '<div class="cf-nogl">3D view unavailable</div>'; });
      }
      if (!on && running) { running = false; go.disabled = false; go.textContent = 'Start · 10 s'; resetUi(); }
      toggle.blur();
    });
    draw(-1);
  }

  function scan() { document.querySelectorAll('[data-coinflip]:not([data-cf-init])').forEach(init); }
  new MutationObserver(scan).observe(document.documentElement, { childList: true, subtree: true });
  scan();
  let tries = 0;
  const t = setInterval(() => { scan(); if (++tries > 20) clearInterval(t); }, 500);
})();
