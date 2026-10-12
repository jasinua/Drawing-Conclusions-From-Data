/*
 * Fullscreen option for the deck.
 *
 *  - A small button (top-right) toggles fullscreen. It fades out when the mouse is idle and comes back on movement.
 *  - Press F to toggle as well. Esc leaves fullscreen (browser default).
 *  - While fullscreen, the thumbnail rail is hidden so the slide fills the whole screen. It returns on exit.
 */
(() => {
  if (window.__fullscreenLoaded) return;
  window.__fullscreenLoaded = true;

  const root = document.documentElement;
  const canFs = !!(root.requestFullscreen || root.webkitRequestFullscreen);
  if (!canFs) return;

  const isFs = () => !!(document.fullscreenElement || document.webkitFullscreenElement);
  const enter = () => (root.requestFullscreen ? root.requestFullscreen() : root.webkitRequestFullscreen());
  const exit = () => (document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen());
  const toggle = () => { try { Promise.resolve(isFs() ? exit() : enter()).catch(() => {}); } catch (e) { /* denied */ } };

  const ICON_ENTER = '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>';
  const ICON_EXIT = '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"/></svg>';

  const style = document.createElement('style');
  style.textContent = `
    #fs-btn{position:fixed;top:14px;right:14px;z-index:2147483100;width:46px;height:46px;display:flex;align-items:center;justify-content:center;
      border:1px solid rgba(255,255,255,.22);border-radius:10px;background:rgba(24,29,39,.82);color:#fff;cursor:pointer;
      backdrop-filter:blur(6px);transition:opacity .35s,background .2s}
    #fs-btn:hover,#fs-btn:focus-visible{background:rgba(17,153,214,.9)}
    #fs-btn.fs-idle{opacity:0;pointer-events:none}
    @media print{#fs-btn{display:none!important}}`;
  document.head.appendChild(style);

  const btn = document.createElement('button');
  btn.id = 'fs-btn';
  btn.type = 'button';
  btn.addEventListener('click', e => { e.stopPropagation(); toggle(); btn.blur(); });
  document.body.appendChild(btn);

  let idleTimer = 0, railWasOff = false;

  function wake() {
    btn.classList.remove('fs-idle');
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => btn.classList.add('fs-idle'), 2500);
  }

  function sync() {
    const on = isFs();
    btn.innerHTML = on ? ICON_EXIT : ICON_ENTER;
    btn.title = btn.ariaLabel = on ? 'Exit fullscreen (F or Esc)' : 'Fullscreen (F)';
    // Hide the thumbnail rail while fullscreen so the slide uses the whole screen.
    const stage = document.querySelector('deck-stage');
    if (stage) {
      if (on) { railWasOff = stage.hasAttribute('no-rail'); stage.setAttribute('no-rail', ''); }
      else if (!railWasOff) stage.removeAttribute('no-rail');
    }
    wake();
  }

  document.addEventListener('fullscreenchange', sync);
  document.addEventListener('webkitfullscreenchange', sync);
  window.addEventListener('mousemove', wake, { passive: true });
  window.addEventListener('touchstart', wake, { passive: true });
  window.addEventListener('keydown', e => {
    if (e.key !== 'f' && e.key !== 'F') return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const t = e.target, tag = t && t.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || (t && t.isContentEditable)) return;
    e.preventDefault();
    toggle();
  });

  sync();
})();
