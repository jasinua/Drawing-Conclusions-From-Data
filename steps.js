/*
 * Click-through steps for slides marked data-steps="N".
 *
 * Elements marked data-step="k" appear once the slide reaches step k. The step being discussed gets a highlight ring.
 * A Back / counter / Next bar sits at the bottom-left of the slide, styled like the buttons on the STAR slide.
 * The last step turns Next into Replay. Printing shows everything.
 */
(() => {
  if (window.__stepsLoaded) return;
  window.__stepsLoaded = true;

  const style = document.createElement('style');
  style.textContent = `
    [data-step]{transition:opacity .45s ease,transform .45s cubic-bezier(.2,.7,.2,1),outline-color .3s}
    [data-step].step-hidden{opacity:0;transform:translateY(20px);pointer-events:none}
    [data-step].step-now{outline:2px solid rgba(88,183,226,.75);outline-offset:6px;border-radius:8px}
    .steps-bar{position:absolute;left:120px;bottom:16px;display:flex;align-items:center;gap:18px;z-index:5}
    .steps-bar button{padding:12px 28px;border:2px solid #414651;border-radius:4px;background:transparent;color:#fff;font:700 24px Lato,'Helvetica Neue',Arial,sans-serif;cursor:pointer;transition:background .2s,opacity .2s;white-space:nowrap}
    .steps-bar button.primary{background:#1199d6;border-color:#1199d6}
    .steps-bar button:hover:not(:disabled){filter:brightness(1.15)}
    .steps-bar button:disabled{opacity:.35;cursor:default}
    .steps-bar .count{font-size:24px;color:#a4a7ae;font-variant-numeric:tabular-nums;min-width:64px;text-align:center}
    @media print{.steps-bar{display:none!important}[data-step]{opacity:1!important;transform:none!important;outline:none!important}}`;
  document.head.appendChild(style);

  function init(sec) {
    sec.dataset.stepsInit = '1';
    const n = +sec.dataset.steps;
    let step = Math.min(n, Math.max(1, +new URLSearchParams(location.search).get('step') || 1)); // ?step=3 opens every stepped slide at step 3
    const items = [...sec.querySelectorAll('[data-step]')];
    const bar = document.createElement('div');
    bar.className = 'steps-bar';
    bar.innerHTML = '<button type="button" class="back">Back</button><span class="count"></span><button type="button" class="primary next">Next step</button>';
    sec.appendChild(bar);
    const back = bar.querySelector('.back'), next = bar.querySelector('.next'), count = bar.querySelector('.count');
    function render() {
      items.forEach(el => {
        const k = +el.dataset.step;
        el.classList.toggle('step-hidden', k > step);
        el.classList.toggle('step-now', k === step);
      });
      count.textContent = step + ' / ' + n;
      back.disabled = step <= 1;
      next.textContent = step >= n ? 'Replay' : 'Next step';
    }
    sec.__steps = {
      next() { if (step >= n) return false; step++; render(); return true; },
      prev() { if (step <= 1) return false; step--; render(); return true; },
    };
    // Entering a stepped slide starts at step 1 (or at the last step when arriving with the left arrow).
    if (!new URLSearchParams(location.search).get('step')) {
      new MutationObserver(() => {
        if (sec.hasAttribute('data-deck-active')) { step = lastDir === 'back' ? n : 1; lastDir = 'fwd'; render(); }
      }).observe(sec, { attributes: true, attributeFilter: ['data-deck-active'] });
    }
    back.addEventListener('click', e => { e.stopPropagation(); step = Math.max(1, step - 1); render(); back.blur(); });
    next.addEventListener('click', e => { e.stopPropagation(); step = step >= n ? 1 : step + 1; render(); next.blur(); });
    render();
  }

  // → / ← move through the steps of the current slide first, and only change slide once the steps run out.
  // Slides driven by a "Next step" button (marked data-next / data-prev in the deck) are stepped the same way.
  let lastDir = 'fwd';
  window.addEventListener('keydown', e => {
    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const el = e.target;
    if (el && (/^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName) || el.isContentEditable)) return;
    const fwd = e.key === 'ArrowRight';
    lastDir = fwd ? 'fwd' : 'back';
    const sec = document.querySelector('section[data-deck-active]');
    if (!sec) return;
    let done = false;
    if (sec.__steps) done = fwd ? sec.__steps.next() : sec.__steps.prev();
    else {
      const b = sec.querySelector(fwd ? '[data-next]' : '[data-prev]');
      if (b && b.dataset[fwd ? 'last' : 'first'] !== 'y' && !b.disabled) { b.click(); done = true; }
    }
    if (done) { e.preventDefault(); e.stopImmediatePropagation(); lastDir = 'fwd'; }
  }, true);

  function scan() { document.querySelectorAll('section[data-steps]:not([data-steps-init])').forEach(init); }
  new MutationObserver(scan).observe(document.documentElement, { childList: true, subtree: true });
  scan();
  let tries = 0;
  const t = setInterval(() => { scan(); if (++tries > 20) clearInterval(t); }, 500);
})();
