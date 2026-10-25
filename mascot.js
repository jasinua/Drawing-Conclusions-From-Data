/*
 * Sigma, the deck's companion. A small character that lives in the bottom-right
 * margin of every slide, changes mood per slide and says one line about it.
 * The speech bubble stays hidden until Sigma is touched: hover with a mouse,
 * or click/tap to pin it open. It closes again on the next slide.
 *
 * It listens to <deck-stage>'s `slidechange` event and lays itself out in the
 * 1920x1080 slide coordinate space, scaled to wherever the active slide is drawn.
 */
(() => {
  // The deck runtime can evaluate this script more than once; only ever build one Sigma.
  if (window.__sigmaLoaded || document.getElementById('sigma-layer')) return;
  window.__sigmaLoaded = true;

  const W = 1920, H = 1080;

  // [mood, line] per slide, in deck order.
  const SLIDES = [
    ['wave', "Hi, I'm Sigma! Let's see what data can really tell us."],
    ['think', 'What can we actually conclude? Think first.'],
    ['point', 'Describe the data first. Then infer.'],
    ['point', 'Your conclusion is only as good as your sample.'],
    ['think', 'Vote first: 500, 1,000 or 2,000?'],
    ['happy', 'Random picks from the whole jar. No favorites.'],
    ['think', '4x the students only halves the margin of error.'],
    ['point', 'Six steps, and the last one loops back to the start.'],
    ['point', 'Know your variables: explanatory, response, confounding.'],
    ['think', 'Only an experiment can talk about cause.'],
    ['skeptic', 'Spot the confounder: course load!'],
    ['skeptic', 'A correlation is not proof of cause.'],
    ['point', 'A large p-value never proves H0.'],
    ['think', 'A mean is not a proportion. Time for the t-test.'],
    ['point', 'Same distance, but less spread means more surprise.'],
    ['think', 'How many standard errors from the claim?'],
    ['point', 'Far from 0 means a very small p-value.'],
    ['point', 'Significant is not the same as important.'],
    ['point', 'You can only generalize to who you sampled.'],
    ['surprised', '18 hours of sleep? A GPA above 4.0?!'],
    ['think', 'False positive or false negative?'],
    ['point', 'An A/B test is an experiment with random assignment.'],
    ['happy', 'Random and simultaneous. Remember both.'],
    ['skeptic', 'A higher average is not yet proof.'],
    ['point', 'January vs December? Time is a confounder.'],
    ['point', 'QuickSight describes. Inference decides.'],
    ['happy', 'Click a chart to zoom in!'],
    ['worried', 'Try, retry... p = 0.04? That is p-hacking.'],
    ['think', 'Take your time, then pick one.'],
    ['cheer', 'Data does not hand us the truth by itself.'],
    ['think', 'Is 60 Heads just luck?'],
    ['point', 'Count 60 or more: 3 of 100 trials.'],
    ['happy', 'Unlikely by chance alone? Then it is significant.'],
    ['point', 'S, T, A, R: tell the story in four steps.'],
    ['point', 'The null is the status quo. It always has an equals sign.'],
    ['happy', 'Reject the null means yes, something changed!'],
    ['think', 'The p-value: how surprising are the data if the null is true?'],
    ['think', 'Try the blanks before you click!'],
    ['happy', 'p < alpha: reject. p >= alpha: fail to reject.'],
    ['cheer', 'Thank you for listening! Any questions?']
  ];

  const INK = '#0a0d12', BODY = '#1199d6', BELLY = '#58b7e2', GOLD = '#fdb022';

  const brows = {
    think: `<path d="M28 44 Q40 36 52 42" stroke="${INK}" stroke-width="3.5" fill="none" stroke-linecap="round"/>`,
    skeptic: `<path d="M30 46 L52 46" stroke="${INK}" stroke-width="3.5" stroke-linecap="round"/><path d="M68 40 Q80 34 92 42" stroke="${INK}" stroke-width="3.5" fill="none" stroke-linecap="round"/>`,
    worried: `<path d="M30 46 L52 38" stroke="${INK}" stroke-width="3.5" stroke-linecap="round"/><path d="M90 46 L68 38" stroke="${INK}" stroke-width="3.5" stroke-linecap="round"/>`,
    surprised: `<path d="M30 38 Q41 30 52 38" stroke="${INK}" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="M68 38 Q79 30 90 38" stroke="${INK}" stroke-width="3.5" fill="none" stroke-linecap="round"/>`
  };
  const mouths = {
    wave: `<path d="M42 84 Q60 108 78 84 Z" fill="${INK}"/>`,
    happy: `<path d="M42 84 Q60 108 78 84 Z" fill="${INK}"/>`,
    cheer: `<path d="M40 82 Q60 114 80 82 Z" fill="${INK}"/><path d="M50 98 Q60 104 70 98" stroke="#f97066" stroke-width="5" fill="none" stroke-linecap="round"/>`,
    point: `<path d="M46 88 Q60 98 74 88" stroke="${INK}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
    think: `<path d="M50 92 Q60 89 72 94" stroke="${INK}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
    skeptic: `<path d="M48 95 Q62 87 76 92" stroke="${INK}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
    worried: `<path d="M46 98 Q60 86 74 98" stroke="${INK}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
    surprised: `<ellipse cx="60" cy="94" rx="8" ry="10" fill="${INK}"/>`
  };
  // Where the pupils look: toward the slide (left/up), or up when thinking.
  const gaze = { think: [-1, -5], skeptic: [-5, 0], surprised: [0, 0], worried: [-3, 2], default: [-4, -1] };

  const arm = (x1, y1, x2, y2, cls = '') =>
    `<g class="${cls}"><line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${BODY}" stroke-width="9" stroke-linecap="round"/><circle cx="${x2}" cy="${y2}" r="7" fill="${BELLY}"/></g>`;

  function arms(mood) {
    if (mood === 'wave') return arm(18, 80, 6, 102) + `<g class="sg-wave" style="transform-origin:102px 80px">${arm(102, 80, 116, 50)}</g>`;
    if (mood === 'cheer') return `<g class="sg-cheer">${arm(18, 78, 4, 42)}${arm(102, 78, 116, 42)}</g>`;
    if (mood === 'point') return arm(102, 82, 114, 104) + `<g class="sg-point">${arm(18, 78, -16, 66)}</g>`;
    if (mood === 'think') return arm(18, 82, 6, 104) + arm(102, 82, 80, 100);
    if (mood === 'surprised') return arm(18, 76, 2, 62) + arm(102, 76, 118, 62);
    return arm(18, 82, 6, 104) + arm(102, 82, 114, 104);
  }

  function extras(mood) {
    if (mood === 'think') return `<text x="100" y="22" font-size="30" font-weight="900" fill="${GOLD}" class="sg-float">?</text>`;
    if (mood === 'surprised') return `<text x="102" y="24" font-size="34" font-weight="900" fill="#f97066" class="sg-float">!</text>`;
    if (mood === 'worried') return `<path d="M96 36 Q101 46 96 52 Q91 46 96 36Z" fill="#88ccea" class="sg-float"/>`;
    if (mood === 'cheer' || mood === 'happy') return `<g class="sg-float" fill="${GOLD}"><path d="M14 22 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3z"/><path d="M104 14 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z"/></g>`;
    return '';
  }

  function svg(mood) {
    const [gx, gy] = gaze[mood] || gaze.default;
    const eye = cx => `<g class="sg-eye"><circle cx="${cx}" cy="62" r="14" fill="#fff"/><circle cx="${cx + gx}" cy="${62 + gy}" r="6.5" fill="${INK}"/><circle cx="${cx + gx + 2}" cy="${62 + gy - 2}" r="2" fill="#fff"/></g>`;
    return `<svg viewBox="0 0 120 140" width="120" height="140" style="overflow:visible;display:block" aria-hidden="true">
      <ellipse cx="60" cy="136" rx="34" ry="5" fill="#000" opacity=".35"/>
      <rect x="36" y="112" width="16" height="20" rx="8" fill="${BODY}"/><rect x="68" y="112" width="16" height="20" rx="8" fill="${BODY}"/>
      <line x1="60" y1="30" x2="60" y2="12" stroke="${BELLY}" stroke-width="4" stroke-linecap="round"/>
      <circle cx="60" cy="9" r="8" fill="${GOLD}"/>
      ${arms(mood)}
      <rect x="14" y="28" width="92" height="92" rx="42" fill="${BODY}"/>
      <ellipse cx="60" cy="102" rx="30" ry="15" fill="${BELLY}" opacity=".45"/>
      <text x="60" y="112" text-anchor="middle" font-size="20" font-weight="900" fill="#fff" opacity=".85" font-family="Georgia,serif">σ</text>
      ${eye(42)}${eye(78)}
      ${brows[mood] || ''}
      <circle cx="30" cy="80" r="6" fill="#f97066" opacity=".35"/><circle cx="90" cy="80" r="6" fill="#f97066" opacity=".35"/>
      ${mouths[mood] || mouths.point}
      ${extras(mood)}
    </svg>`;
  }

  const css = `
  #sigma-layer{position:fixed;left:0;top:0;width:${W}px;height:${H}px;transform-origin:0 0;pointer-events:none;z-index:2147483000;display:none;font-family:Lato,'Helvetica Neue',Arial,sans-serif}
  #sigma-layer .sg-char{position:absolute;left:${W - 124}px;top:${H - 142}px;width:120px;height:140px;pointer-events:auto;cursor:pointer}
  #sigma-layer .sg-bubble{position:absolute;right:136px;bottom:10px;max-width:1100px;padding:9px 24px;border-radius:24px;background:#181d27;border:2px solid #58b7e2;color:#fff;font-size:28px;font-weight:700;line-height:1.25;white-space:nowrap;box-shadow:0 8px 24px rgba(0,0,0,.45)}
  #sigma-layer .sg-bubble:after{content:"";position:absolute;right:-14px;bottom:14px;border:8px solid transparent;border-left:14px solid #58b7e2}
  #sigma-layer .sg-bubble{display:none}
  #sigma-layer.sg-open .sg-bubble{display:block}
  #sigma-layer .sg-eye{transform-box:fill-box;transform-origin:center}
  @media (prefers-reduced-motion:no-preference){
    #sigma-layer .sg-body{animation:sg-bob 3.2s ease-in-out infinite}
    #sigma-layer .sg-eye{animation:sg-blink 5s infinite}
    #sigma-layer .sg-hop{animation:sg-hop .7s cubic-bezier(.3,.8,.4,1)}
    #sigma-layer .sg-bubble.sg-pop{animation:sg-pop .45s cubic-bezier(.2,.8,.3,1.2) both}
    #sigma-layer .sg-wave{animation:sg-wave .8s ease-in-out infinite alternate}
    #sigma-layer .sg-cheer{animation:sg-cheer .6s ease-in-out infinite alternate}
    #sigma-layer .sg-point{animation:sg-point 1s ease-in-out infinite alternate}
    #sigma-layer .sg-float{animation:sg-float 1.6s ease-in-out infinite alternate}
  }
  @keyframes sg-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
  @keyframes sg-blink{0%,92%,100%{transform:scaleY(1)}95%{transform:scaleY(.1)}}
  @keyframes sg-hop{0%{transform:translateY(0)}35%{transform:translateY(-34px) rotate(-4deg)}70%{transform:translateY(0) rotate(3deg)}100%{transform:none}}
  @keyframes sg-pop{from{opacity:0;transform:translateX(24px) scale(.85)}to{opacity:1;transform:none}}
  @keyframes sg-wave{from{transform:rotate(-14deg)}to{transform:rotate(16deg)}}
  @keyframes sg-cheer{from{transform:translateY(0)}to{transform:translateY(-8px)}}
  @keyframes sg-point{from{transform:translateX(0)}to{transform:translateX(-8px)}}
  @keyframes sg-float{from{transform:translateY(0)}to{transform:translateY(-5px)}}
  @media print{#sigma-layer{display:none!important}}`;

  let layer, charEl, bubbleEl, bodyEl, stage, lastIdx = -2, activeSlide = null, pinned = false;

  function build() {
    const st = document.createElement('style');
    st.textContent = css;
    document.head.appendChild(st);
    layer = document.createElement('div');
    layer.id = 'sigma-layer';
    layer.innerHTML = '<div class="sg-bubble"></div><div class="sg-char" title="Touch Sigma"><div class="sg-body"></div></div>';
    document.body.appendChild(layer);
    bubbleEl = layer.querySelector('.sg-bubble');
    charEl = layer.querySelector('.sg-char');
    bodyEl = layer.querySelector('.sg-body');
    // The bubble stays hidden until Sigma is touched: hover on a mouse, tap or click to pin it open.
    charEl.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') open(true); });
    charEl.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse' && !pinned) open(false); });
    charEl.addEventListener('click', e => {
      e.stopPropagation();
      pinned = !pinned;
      open(pinned);
    });
    window.addEventListener('resize', place);
    setInterval(place, 400);
  }

  function open(on) {
    layer.classList.toggle('sg-open', on);
    if (on) { bubbleEl.classList.remove('sg-pop'); void bubbleEl.offsetWidth; bubbleEl.classList.add('sg-pop'); }
  }

  // Map the 1920x1080 layer onto wherever the active slide is drawn.
  function place() {
    if (!layer || !activeSlide) return;
    const r = activeSlide.getBoundingClientRect();
    if (!r.width) return;
    layer.style.display = 'block';
    layer.style.left = r.left + 'px';
    layer.style.top = r.top + 'px';
    layer.style.transform = `scale(${r.width / W})`;
  }

  function show(idx, slide) {
    if (!layer || idx < 0) return;
    activeSlide = slide || activeSlide;
    const entry = SLIDES[idx] || ['point', ''];
    const first = lastIdx === -2;
    lastIdx = idx;
    bodyEl.innerHTML = svg(entry[0]);
    bubbleEl.textContent = entry[1];
    bubbleEl.style.visibility = entry[1] ? 'visible' : 'hidden';
    pinned = false; open(false);
    charEl.classList.remove('sg-hop'); void charEl.offsetWidth;
    if (!first) charEl.classList.add('sg-hop');
    place();
  }

  function slidesOf(stg) { return [...stg.children].filter(el => el.tagName === 'SECTION'); }

  function sync() {
    const active = stage.querySelector('[data-deck-active]');
    if (!active) return;
    const idx = slidesOf(stage).indexOf(active);
    if (idx !== lastIdx) show(idx, active);
    else { activeSlide = active; place(); }
  }

  function init() {
    stage = document.querySelector('deck-stage');
    if (!stage) { setTimeout(init, 200); return; }
    build();
    stage.addEventListener('slidechange', e => show(e.detail.index, e.detail.slide));
    sync();
    // Cover a missed init event and slides that mount late.
    setTimeout(sync, 300); setTimeout(sync, 1200);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
