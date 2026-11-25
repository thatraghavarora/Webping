/* WebPing site animations (build 6): WATI-style scroll reveals, staggered
   cards, floating orbit, stat count-ups. Progressive: content is only hidden
   when html.anim exists (JS ran); prefers-reduced-motion and ?noanim skip all. */
(function () {
  'use strict';

  /* JS marker (build 27): gates the mobile burger/panel CSS, so visitors
     without JS keep the plain inline nav row. */
  document.documentElement.classList.add('js');

  /* header/footer bindings (pinned nav, dropdowns, mobile menu) — re-runnable,
     so the common-chrome injection below can rebind after swapping in the
     canonical partials. */
  function bindHeaderUI() {
  /* pinned nav bar: offset the sticky header by exactly the announce strip's
     height, so only the nav row remains stuck at viewport top; a soft shadow
     fades in once the bar has engaged. Runs in every mode (before the
     noanim/reduced-motion gate) because pinning is layout, not animation. */
  var ann = document.querySelector('.announce');
  if (ann) document.documentElement.style.setProperty('--head-stick', -Math.round(ann.getBoundingClientRect().height) + 'px');
  var bar = document.querySelector('.site-head .bar');
  if (bar) window.addEventListener('scroll', function () {
    var y = window.scrollY || document.documentElement.scrollTop || 0;
    bar.classList.toggle('scrolled', y > 44);
  }, { passive: true });

  /* nav dropdowns: caret button toggles (click/tap), hover opens on desktop,
     outside click / Escape / focus loss close. The <a> still navigates. On
     narrow screens the nav row scrolls horizontally, so an open menu is
     lifted to position:fixed just under the nav row (escapes the clip). */
  var adrops = document.querySelectorAll('.nav-item');
  var vpSmall = window.matchMedia ? window.matchMedia('(max-width: 680px)') : { matches: false };
  var canHover = window.matchMedia ? window.matchMedia('(hover: hover) and (pointer: fine)') : { matches: false };
  for (var di = 0; di < adrops.length; di++) {
    (function (item) {
      var btn = item.querySelector('.nav-caret');
      if (!btn) return;
      var menu = item.querySelector('.nav-menu');
      var open = false, tm = 0, lastPtr = 'mouse';
      var place = function () {
        if (!open || !menu) return;
        if (vpSmall.matches) {
          /* .bar has backdrop-filter, making it the containing block for the
             fixed menu — compensate for the bar's own viewport offset so the
             menu always sits 10px under the nav row, at any scroll position. */
          var bar = item.closest('.bar') || document.querySelector('.site-head .bar');
          var bTop = bar ? bar.getBoundingClientRect().top : 0;
          menu.style.top = Math.round(item.getBoundingClientRect().bottom + 10 - bTop) + 'px';
        } else {
          menu.style.top = '';
        }
      };
      var set = function (on) {
        open = !!on;
        item.classList.toggle('open', open);
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        if (open) place();
      };
      var clearTimer = function () { if (tm) { clearTimeout(tm); tm = 0; } };
      /* pointerType tracking: a tap on a touch screen fires compatibility
         mouseenter/mouseleave BEFORE the click — those must not fight the tap
         toggle, so hover logic ignores anything but a real mouse. */
      item.addEventListener('pointerdown', function (ev) { lastPtr = ev.pointerType || 'mouse'; }, true);
      if (canHover.matches) {
        item.addEventListener('mouseenter', function () {
          clearTimer();
          if (lastPtr !== 'mouse') return;
          set(true);
        });
        item.addEventListener('mouseleave', function () {
          if (lastPtr !== 'mouse') return;
          clearTimer();
          tm = setTimeout(function () { tm = 0; set(false); }, 200);
        });
      }
      btn.addEventListener('click', function (ev) { ev.preventDefault(); clearTimer(); set(!open); });
      btn.addEventListener('keydown', function (ev) { if (ev.key === 'Escape') { set(false); btn.blur(); } });
      item.addEventListener('focusout', function (ev) { if (!item.contains(ev.relatedTarget)) set(false); });
      document.addEventListener('click', function (ev) { if (!item.contains(ev.target)) set(false); });
      window.addEventListener('scroll', place, { passive: true });
      window.addEventListener('resize', place);
      if (vpSmall.addEventListener) vpSmall.addEventListener('change', place);
      else if (vpSmall.addListener) vpSmall.addListener(place);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(place);
    })(adrops[di]);
  }

  /* mobile menu (build 27): burger toggles the slide-down panel, Features is
     an accordion; Escape / outside tap / resize past 680px close it, and the
     page behind is scroll-locked while the panel is open. Layout, not
     animation — runs before the noanim gate. */
  var mbtn = document.querySelector('.menu-btn');
  var mnav = document.querySelector('.mnav');
  if (mbtn && mnav) {
    var mOpen = false;
    var setM = function (on) {
      mOpen = !!on;
      mnav.classList.toggle('open', mOpen);
      mbtn.classList.toggle('open', mOpen);
      mbtn.setAttribute('aria-expanded', mOpen ? 'true' : 'false');
      document.documentElement.style.overflow = mOpen ? 'hidden' : '';
    };
    mbtn.addEventListener('click', function () { setM(!mOpen); });
    var groups = mnav.querySelectorAll('.mnav-group');
    for (var gi = 0; gi < groups.length; gi++) {
      (function (grp) {
        var gt = grp.querySelector('.mnav-toggle');
        if (!gt) return;
        gt.addEventListener('click', function () {
          var on = grp.classList.toggle('open');
          gt.setAttribute('aria-expanded', on ? 'true' : 'false');
          var subEl = grp.querySelector('.mnav-sub');
          if (!subEl) return;
          if (on) {
            subEl.style.maxHeight = subEl.scrollHeight + 'px';
          } else {
            subEl.style.maxHeight = subEl.scrollHeight + 'px';
            void subEl.offsetHeight;
            subEl.style.maxHeight = '0px';
          }
        });
      })(groups[gi]);
    }
    document.addEventListener('click', function (ev) {
      if (mOpen && !mnav.contains(ev.target) && !mbtn.contains(ev.target)) setM(false);
    });
    document.addEventListener('keydown', function (ev) { if (mOpen && ev.key === 'Escape') setM(false); });
    window.addEventListener('resize', function () { if (window.innerWidth > 680 && mOpen) setM(false); });
  }

  }

  bindHeaderUI();

  if (/[?&]noanim/.test(location.search)) return;
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('anim');
  var SEL = [
    '.section-head', '.page-head > *', '.breadcrumb',
    '.card', '.case-card', '.int-card', '.metric-card', '.step',
    '.plan', '.plan-mini', '.price-card', '.bill-card', '.faq', '.toc li', '.shot', '.stat',
    '.trust-card', '.trust-copy', '.trust-chips > *', '.chip-badge',
    '.codebox', '.tool-box', '.feat-row > div', '.two-col > div',
    '.jt-bar', '.jt-pane > div', '.jt-pane > .shot',
    '.cta-band .wrap > *', '.orbit-wrap > div', '.final-cta .wrap > *',
    '.plan-note', '.chip-pills > *', '.page-final .wrap > *', '.announce', '.check li', '.steps > .step',
    '.foot-brandcol > *', '.foot-cols > div'
  ].join(',');

  /* announce strip ticker: rebuild each announce <p> into a small continuous
     marquee. The static <p> stays for no-JS / reduced-motion / ?noanim. */
  var aticks = document.querySelectorAll('.announce > div > p');
  var ai, aq;
  for (ai = 0; ai < aticks.length; ai++) {
    var ap = aticks[ai];
    var atext = ap.innerHTML;
    if (!atext || !ap.parentNode) continue;
    var arow = ap.parentNode;
    var abox = document.createElement('div');
    abox.className = 'annc';
    abox.setAttribute('aria-label', ap.textContent.trim());
    var atrack = document.createElement('div');
    atrack.className = 'annc-track';
    arow.replaceChild(abox, ap);
    abox.appendChild(atrack);
    var aspan = document.createElement('span');
    aspan.setAttribute('aria-hidden', 'true');
    aspan.innerHTML = atext;
    atrack.appendChild(aspan);
    var aw = aspan.getBoundingClientRect().width;
    if (!aw || !isFinite(aw)) aw = 220;
    var avw = document.documentElement.clientWidth || 900;
    var aneed = Math.max(2, Math.ceil((avw * 1.35) / aw));
    for (aq = 1; aq < aneed; aq++) atrack.appendChild(aspan.cloneNode(true));
    for (aq = 0; aq < aneed; aq++) atrack.appendChild(aspan.cloneNode(true));
    var ahalf = atrack.scrollWidth / 2;
    atrack.style.setProperty('--spd', Math.max(16, Math.round(ahalf / 42)) + 's');
  }

  /* WATI-style side-scrolling team cards: rebuild each .case-grid into two
     duplicated marquee rows (row 1 scrolls left, row 2 scrolls right).
     Runs before the reveal collection so the cloned cards behave identically.
     No-JS keeps the static grid. */
  var grids = document.querySelectorAll('.case-grid');
  var gi;
  for (gi = 0; gi < grids.length; gi++) {
    var grid = grids[gi];
    if (grid.children.length < 4) continue;
    var cards = Array.prototype.slice.call(grid.children);
    while (grid.firstChild) grid.removeChild(grid.firstChild);
    var half = Math.ceil(cards.length / 2);
    var rows = [cards.slice(0, half), cards.slice(half)];
    var k;
    for (k = 0; k < rows.length; k++) {
      if (!rows[k].length) continue;
      var mq = document.createElement('div');
      mq.className = 'case-marquee' + (k ? ' mq2' : '');
      var tr = document.createElement('div');
      tr.className = 'case-track' + (k ? ' rev' : '');
      var dup = [], d;
      for (d = 0; d < rows[k].length; d++) dup.push(rows[k][d].cloneNode(true));
      for (d = 0; d < rows[k].length; d++) dup[d].classList.add('dup');
      var set = rows[k].concat(dup);
      for (d = 0; d < set.length; d++) tr.appendChild(set[d]);
      tr.style.setProperty('--spd', Math.max(22, Math.round(set.length * 2.4)) + 's');
      mq.appendChild(tr);
      grid.parentNode.insertBefore(mq, grid);
    }
    grid.style.display = 'none';
  }

  var els = [], seen = [];
  var all = document.querySelectorAll(SEL);
  var i, j, el;
  for (i = 0; i < all.length; i++) {
    el = all[i];
    if (el.closest && (el.closest('.hero-grid') || el.closest('.case-track'))) continue;
    /* skip cards inside the continuous marquee : they are always in motion */
    var dup = false;
    for (j = 0; j < seen.length; j++) { if (seen[j].contains(el)) { dup = true; break; } }
    if (!dup) { seen.push(el); els.push(el); }
  }

  /* stagger siblings that share a parent (grid cards etc), then hide-all */
  for (i = 0; i < els.length; i++) {
    var parent = els[i].parentElement, k = 0;
    for (j = 0; j < i; j++) { if (els[j].parentElement === parent) k++; }
    els[i].style.setProperty('--d', (k % 4) * 90 + 'ms');
    els[i].classList.add('rv');
  }

  function countUp(b) {
    var t = b.textContent;
    var m = t.match(/^([^0-9]*)(\d[\d,]*(?:\.\d+)?)(.*)$/);
    if (!m) return;
    var n = parseFloat(m[2].replace(/,/g, ''));
    if (!(n > 0) || n > 100000) return;
    var pre = m[1], suf = m[3], t0 = null, dur = 950;
    function stepFn(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min(1, (ts - t0) / dur);
      p = 1 - Math.pow(1 - p, 3);
      b.textContent = pre + String(Math.round(n * p)) + suf;
      if (p < 1) window.requestAnimationFrame(stepFn);
      else b.textContent = t;
    }
    window.requestAnimationFrame(stepFn);
  }

  var io = new IntersectionObserver(function (entries) {
    for (var e = 0; e < entries.length; e++) {
      var en = entries[e];
      if (!en.isIntersecting) continue;
      el = en.target;
      io.unobserve(el);
      el.classList.add('in');
      if (/\b(stat|metric-card)\b/.test(el.className)) {
        var b = el.querySelector('b');
        if (b && !b.getAttribute('data-cdone')) {
          b.setAttribute('data-cdone', '1');
          countUp(b);
        }
      }
      (function (node) {
        window.setTimeout(function () {
          node.classList.remove('rv', 'in');
          node.style.removeProperty('--d');
        }, 1500);
      })(el);
    }
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

  for (i = 0; i < els.length; i++) io.observe(els[i]);

  /* footer back-to-top button (smooth) */
  var totop = document.querySelector('.foot-toplink');
  if (totop) totop.addEventListener('click', function (ev) {
    ev.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ============ continuous chat loop in the homepage hero mock ============ */
  var mock = document.querySelector('.hero-mock');
  if (mock && !mock.getAttribute('data-chatlive')) {
    mock.setAttribute('data-chatlive', '1');
    mock.classList.add('chatlive');
    var glass = mock.querySelector('.mock-glass');
    var rowDim = mock.querySelector('.mock-row-dim');
    var feed = document.createElement('div');
    feed.className = 'chat-feed';
    feed.setAttribute('aria-hidden', 'true');
    mock.insertBefore(feed, glass || null);
    if (rowDim && rowDim.parentNode === mock) mock.insertBefore(rowDim, feed);
    /* drop the static conversation rows : the feed replays them */
    Array.prototype.forEach.call(
      mock.querySelectorAll('.bmsg, .cmsg, .mock-row'),
      function (n) { n.parentNode.removeChild(n); }
    );

    var TURNS = [
      { who: 'c', text: 'Hi! Do you deliver to Nagpur? And what does shipping cost for two units?' },
      { who: 'a', text: 'We do \u2014 same-day dispatch to Nagpur. Catalogue\u2019s here, and tracking updates land right in this chat.', status: 'Auto-reply \u00b7 sent in 2s' },
      { who: 'c', text: 'Nice. Can you reserve 5 units for our store in Pune? Paying at delivery.' },
      { who: 'a', text: 'Done \u2014 5 units reserved, invoice\u2019s in this chat. Pay on delivery or by UPI.', status: 'Auto-reply \u00b7 sent in 2s' }
    ];

    function showTyping(right) {
      var row = document.createElement('div');
      row.className = 'tw-row' + (right ? ' right' : '');
      var t = document.createElement('div');
      t.className = 'typing';
      t.innerHTML = '<i></i><i></i><i></i>';
      row.appendChild(t);
      feed.appendChild(row);
      return row;
    }
    function showMsg(who, text, animCss) {
      var n = document.createElement('div');
      n.className = who === 'a' ? 'cmsg' : 'bmsg';
      n.textContent = text;
      if (animCss) n.style.animation = animCss;
      feed.appendChild(n);
      return n;
    }
    function showStatus(text, animCss) {
      var s = document.createElement('div');
      s.className = 'feed-status';
      s.textContent = text;
      if (animCss) s.style.animation = animCss;
      feed.appendChild(s);
    }
    var SEED = 2; /* turns already on screen before the loop takes over */
    var SEED_DELAYS = ['0.68s', '0.88s']; /* original hero load-in popIn timings */
    function seedFeed(done) {
      var s, t;
      for (s = 0; s < SEED; s++) {
        t = TURNS[s];
        showMsg(t.who, t.text, 'popIn .5s cubic-bezier(.17,.84,.28,1) ' + SEED_DELAYS[s] + ' both');
        if (t.status) showStatus(t.status, 'fadeUp .45s 1.02s both');
      }
      window.setTimeout(done, 1500);
    }
    function resetFeed() {
      feed.style.opacity = '0';
      window.setTimeout(function () {
        while (feed.firstChild) feed.removeChild(feed.firstChild);
        feed.style.opacity = '1';
        seedFeed(function () { window.setTimeout(function () { runTurn(SEED); }, 500); });
      }, 560);
    }
    function runTurn(k) {
      var t = TURNS[k];
      if (!t) { resetFeed(); return; }
      var typing = showTyping(t.who === 'a');
      window.setTimeout(function () {
        if (typing.parentNode) typing.parentNode.removeChild(typing);
        showMsg(t.who, t.text);
        if (t.status) window.setTimeout(function () { showStatus(t.status); }, 240);
        window.setTimeout(function () {
          if (k + 1 >= TURNS.length) window.setTimeout(resetFeed, 3300);
          else runTurn(k + 1);
        }, t.who === 'a' ? 1500 : 2200);
      }, t.who === 'a' ? 1250 : 950);
    }
    seedFeed(function () { runTurn(SEED); });
  }
})();

  /* feature sliders */
  var sliders = document.querySelectorAll('.fx-slider');
  for (var si = 0; si < sliders.length; si++) (function(wrap){
    var track = wrap.querySelector('.fx-track');
    if (!track) return;
    var items = Array.prototype.slice.call(track.children);
    if (items.length < 2) return;
    wrap.classList.add('is-ready');
    var nav = document.createElement('div'); nav.className='fx-slider-nav';
    var prev = document.createElement('button'); prev.type='button'; prev.className='fx-nav'; prev.setAttribute('aria-label','Previous'); prev.innerHTML='&#8592;';
    var next = document.createElement('button'); next.type='button'; next.className='fx-nav'; next.setAttribute('aria-label','Next'); next.innerHTML='&#8594;';
    nav.appendChild(prev); nav.appendChild(next); wrap.insertBefore(nav, track);
    var dotsWrap = wrap.querySelector('.fx-dots');
    if (!dotsWrap){ dotsWrap=document.createElement('div'); dotsWrap.className='fx-dots'; wrap.appendChild(dotsWrap); }
    dotsWrap.innerHTML='';
    var dots=[];
    function pageSize(){ var w=items[0].getBoundingClientRect().width||300; return Math.max(1, Math.round(track.clientWidth/(w+16))); }
    function pages(){ return Math.max(1, Math.ceil(items.length/pageSize())); }
    function idx(){ return Math.max(0, Math.min(pages()-1, Math.round(track.scrollLeft / Math.max(1, track.scrollWidth/pages())))); }
    function buildDots(){ dotsWrap.innerHTML=''; dots=[]; for(var i=0;i<pages();i++){ (function(n){ var b=document.createElement('button'); b.type='button'; b.className='fx-dot'+(n===idx()?' on':''); b.setAttribute('aria-label','Go to slide '+(n+1)); b.addEventListener('click',function(){ track.scrollTo({left:n*(track.scrollWidth/pages()), behavior:'smooth'}); }); dotsWrap.appendChild(b); dots.push(b); })(i); } }
    function paint(){ var k=idx(); for(var i=0;i<dots.length;i++) dots[i].classList.toggle('on',i===k); for(var j=0;j<items.length;j++) items[j].classList.toggle('is-active', j>=k*pageSize() && j<(k+1)*pageSize()); }
    prev.addEventListener('click', function(){ track.scrollBy({left:-track.clientWidth*0.9, behavior:'smooth'}); });
    next.addEventListener('click', function(){ track.scrollBy({left:track.clientWidth*0.9, behavior:'smooth'}); });
    track.addEventListener('scroll', function(){ window.requestAnimationFrame(paint); }, {passive:true});
    window.addEventListener('resize', function(){ buildDots(); paint(); });
    buildDots(); paint();
    if (!/[?&]noanim/.test(location.search) && !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)){
      var tmr=0; function go(){ tmr=setInterval(function(){ if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 10) track.scrollTo({left:0,behavior:'smooth'}); else next.click(); }, 4200); }
      function stop(){ if(tmr){clearInterval(tmr);tmr=0;} }
      wrap.addEventListener('mouseenter', stop); wrap.addEventListener('mouseleave', go); wrap.addEventListener('touchstart', stop, {passive:true}); go();
    }
  })(sliders[si]);
