/*
 * Language switch (English / Albanian) for the deck.
 *
 *  - A small EN | SQ button (top-right, left of the fullscreen button) switches the language. The choice is remembered.
 *  - Text is translated at runtime from i18n-sq.js, so the slides themselves stay in English and nothing else changes.
 *  - Missing translations stay in English. In the console, window.__i18nMissing lists them.
 */
(() => {
  if (window.__i18nLoaded) return;
  window.__i18nLoaded = true;

  const D = window.I18N_SQ || { exact: {}, rules: [] };
  const rules = D.rules.map(([p, r]) => [new RegExp(p), r]);
  const missing = (window.__i18nMissing = new Set());
  const reverse = {}; // Albanian -> English, for clones made from slides that were already translated (the thumbnail rail)
  Object.keys(D.exact).forEach(k => { reverse[D.exact[k]] = k; });
  const store = new WeakMap(); // text node -> { orig, tr }
  let lang = 'en';
  try { lang = localStorage.getItem('deck-lang') === 'sq' ? 'sq' : 'en'; } catch (e) { /* storage blocked */ }
  const qp = new URLSearchParams(location.search);
  if (qp.get('lang') === 'sq' || qp.get('lang') === 'en') lang = qp.get('lang'); // ?lang=sq opens the deck in Albanian

  const norm = s => s.replace(/\s+/g, ' ').trim();

  function translate(text) {
    const key = norm(text);
    if (!key || !/[A-Za-z]{2}/.test(key)) return text;
    let sq = D.exact[key];
    if (sq === undefined) for (const [re, r] of rules) { if (re.test(key)) { sq = key.replace(re, r); break; } }
    if (sq === undefined) { missing.add(key); return text; }
    const lead = /^\s/.test(text) ? ' ' : '', trail = /\s$/.test(text) ? ' ' : '';
    return lead + sq + trail;
  }

  // Short button labels (Skenari 1, Hapi tjetër) must not wrap; long ones (answer rows, tabs) must.
  function fit(node) {
    const b = node.parentElement && node.parentElement.closest('button');
    if (b) b.classList.toggle('i18n-nowrap', lang === 'sq' && b.textContent.trim().length <= 18);
  }

  function apply(node) {
    const rec = store.get(node);
    if (lang === 'sq') {
      if (rec && node.data === rec.tr) return;
      const cur = node.data, back = reverse[norm(cur)];
      if (back !== undefined && !D.exact[norm(cur)]) { store.set(node, { orig: cur.replace(norm(cur), back), tr: cur }); return; }
      const orig = cur, tr = translate(orig);
      store.set(node, { orig, tr });
      if (tr !== orig) node.data = tr;
      fit(node);
    } else if (rec && node.data === rec.tr) {
      node.data = rec.orig; store.delete(node); fit(node);
    }
  }

  const roots = new Set();
  function walk(root) {
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, {
      acceptNode: n => (n.nodeType === 1 && /^(SCRIPT|STYLE)$/.test(n.tagName)) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
    });
    let n;
    while ((n = w.nextNode())) {
      if (n.nodeType === 3) apply(n);
      else if (n.shadowRoot) watch(n.shadowRoot);
    }
  }

  const mo = new MutationObserver(muts => {
    for (const m of muts) {
      if (m.type === 'characterData') apply(m.target);
      else m.addedNodes.forEach(n => { if (n.nodeType === 3) apply(n); else if (n.nodeType === 1) { if (n.shadowRoot) watch(n.shadowRoot); walk(n); } });
    }
  });
  function watch(root) {
    if (roots.has(root)) return;
    roots.add(root);
    mo.observe(root, { childList: true, characterData: true, subtree: true });
    walk(root);
  }

  function setLang(l) {
    lang = l;
    try { localStorage.setItem('deck-lang', l); } catch (e) { /* ignore */ }
    document.documentElement.lang = l;
    roots.forEach(walk);
    sync();
  }

  const style = document.createElement('style');
  style.textContent = `
    #lang-btn{position:fixed;top:14px;right:70px;z-index:2147483100;height:46px;display:flex;align-items:center;gap:2px;padding:4px;
      border:1px solid rgba(255,255,255,.22);border-radius:10px;background:rgba(24,29,39,.82);color:#fff;cursor:pointer;
      backdrop-filter:blur(6px);font:700 14px Lato,'Helvetica Neue',Arial,sans-serif;letter-spacing:.06em;transition:opacity .35s}
    #lang-btn span{padding:8px 11px;border-radius:7px;color:#a4a7ae}
    #lang-btn span.on{background:#1199d6;color:#fff}
    #lang-btn:hover span:not(.on){color:#fff}
    #lang-btn.lang-idle{opacity:0;pointer-events:none}
    .i18n-nowrap{white-space:nowrap}
    @media print{#lang-btn{display:none!important}}`;
  document.head.appendChild(style);

  const btn = document.createElement('button');
  btn.id = 'lang-btn'; btn.type = 'button';
  btn.innerHTML = '<span data-l="en">EN</span><span data-l="sq">SQ</span>';
  btn.addEventListener('click', e => { e.stopPropagation(); setLang(lang === 'en' ? 'sq' : 'en'); btn.blur(); });
  document.body.appendChild(btn);

  let idle = 0;
  function wake() { btn.classList.remove('lang-idle'); clearTimeout(idle); idle = setTimeout(() => btn.classList.add('lang-idle'), 2500); }
  function sync() {
    btn.querySelectorAll('span').forEach(s => s.classList.toggle('on', s.dataset.l === lang));
    btn.title = btn.ariaLabel = lang === 'en' ? 'Gjuha: kalo në shqip (L)' : 'Language: switch to English (L)';
    wake();
  }
  ['mousemove', 'mousedown', 'touchstart', 'keydown'].forEach(ev => window.addEventListener(ev, wake, { passive: true }));
  window.addEventListener('keydown', e => {
    if ((e.key === 'l' || e.key === 'L') && !e.metaKey && !e.ctrlKey && !e.altKey && !/INPUT|TEXTAREA/.test((e.target || {}).tagName || '')) setLang(lang === 'en' ? 'sq' : 'en');
  });

  document.documentElement.lang = lang;
  sync();
  watch(document.body);
  // The deck mounts its slides after load; pick up late shadow roots too.
  let tries = 0;
  if (qp.has('i18ndebug')) setTimeout(() => { const bad = [...document.querySelectorAll('section[data-label]')].filter(sec => { const r = sec.getBoundingClientRect(); return [...sec.querySelectorAll('*')].some(e => { const b = e.getBoundingClientRect(); return b.height && (b.bottom > r.bottom - 36 || b.right > r.right - 36); }); }).map(sec => 'OVERFLOW ' + sec.dataset.label); document.documentElement.setAttribute('data-i18n-report', JSON.stringify([...missing, ...bad])); }, 6000);
  const t = setInterval(() => { roots.forEach(walk); if (++tries > 20) clearInterval(t); }, 500);
})();
