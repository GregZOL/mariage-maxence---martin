(function () {
  'use strict';

  // ── Config ────────────────────────────────────────────────────────────────

  var LINKS = [
    { id: 'venue', href: 'lieu.html',          label: 'Lieu',             labelFull: null },
    { id: 'list',  href: 'liste-mariage.html',  label: 'Liste',            labelFull: 'Liste de mariage' },
    { id: 'rsvp',  href: 'rsvp.html',           label: 'RSVP',             labelFull: null },
  ];

  // ── Assets ────────────────────────────────────────────────────────────────

  function injectAssets() {
    var pc = document.createElement('link');
    pc.rel  = 'preconnect';
    pc.href = 'https://fonts.googleapis.com';
    document.head.appendChild(pc);

    var font = document.createElement('link');
    font.rel  = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,300;0,400;0,500;1,400&display=swap';
    document.head.appendChild(font);

    var style = document.createElement('style');
    style.textContent = [
      'header.nav-hidden { transform: translateY(-100%) !important; }',
      'header[data-solid="true"] { background: radial-gradient(circle at top left, #fef7ee 0, #f7efe9 40%, #f2e5db 100%); }',
      'header[data-solid="true"] a.nav-link[data-active="true"] { color: #c9825e; }',
      'header a.nav-link { font-family: "Noto Serif", Georgia, serif; }',
    ].join('\n');
    document.head.appendChild(style);
  }

  // ── DOM ───────────────────────────────────────────────────────────────────

  function build(activeId, startSolid) {
    var header = document.createElement('header');
    header.dataset.solid = startSolid ? 'true' : 'false';
    header.className = [
      'group sticky top-0 z-50 w-full',
      'transition-all duration-300',
      'data-[solid=true]:backdrop-blur-md',
      'data-[solid=true]:shadow-[0_1px_0_rgba(61,44,42,0.08)]',
    ].join(' ');

    var inner = document.createElement('div');
    inner.className = [
      'max-w-[1120px] mx-auto px-6',
      'flex items-center justify-between',
      'py-5 transition-all duration-300',
      'group-data-[solid=true]:py-3',
    ].join(' ');

    // Brand
    var brand = document.createElement('a');
    brand.href = 'index.html';
    brand.setAttribute('aria-label', 'Retour à l\'accueil');
    brand.className = [
      'font-serif text-[clamp(18px,2vw,24px)] tracking-[0.08em] uppercase no-underline',
      'text-accent-strong transition-colors duration-150',
      'hover:text-[#f3d6c0]',
      'group-data-[solid=true]:text-[#2f1c16]',
    ].join(' ');

    // Nav
    var nav = document.createElement('nav');
    nav.className = [
      'flex items-center gap-5 ml-auto sm:gap-7',
      'overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
    ].join(' ');

    LINKS.forEach(function (link) {
      var a = document.createElement('a');
      a.href = link.href;
      a.dataset.navId = link.id;
      a.dataset.active = link.id === activeId ? 'true' : 'false';
      a.className = [
        'nav-link',
        'py-1 text-[14px] leading-none no-underline whitespace-nowrap',
        'font-noto font-normal',
        'transition-colors duration-150',
        'text-[#f5e6d9] hover:text-white',
        'data-[active=true]:text-white data-[active=true]:font-medium',
        'group-data-[solid=true]:text-[#3d2c2a]',
        'group-data-[solid=true]:hover:text-accent-strong',
      ].join(' ');

      if (link.labelFull) {
        var full  = document.createElement('span');
        full.className = 'hidden sm:inline';
        full.textContent = link.labelFull;
        var short = document.createElement('span');
        short.className = 'sm:hidden';
        short.textContent = link.label;
        a.append(full, short);
      } else {
        a.textContent = link.label;
      }

      nav.appendChild(a);
    });

    inner.append(brand, nav);
    header.appendChild(inner);

    return { header: header, brand: brand };
  }

  // ── Behaviors ─────────────────────────────────────────────────────────────

  function initScrollSolid(header) {
    function update() {
      header.dataset.solid = window.scrollY > 24 ? 'true' : 'false';
    }
    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  function initScrollHide(header) {
    var lastY = window.scrollY;
    window.addEventListener('scroll', function () {
      var y = window.scrollY;
      if (y > lastY && y > 80) {
        header.classList.add('nav-hidden');
      } else {
        header.classList.remove('nav-hidden');
      }
      lastY = y;
    }, { passive: true });
  }

  // ── Labels ────────────────────────────────────────────────────────────────

  function applyLabels(header, brand) {
    if (!window.contentReady) return;
    window.contentReady.then(function (data) {
      if (!data || !data.shared) return;
      var s = data.shared;
      brand.textContent = s.brandMark || '';
      header.querySelectorAll('[data-nav-id]').forEach(function (a) {
        var id = a.dataset.navId;
        if (id === 'venue') {
          a.textContent = s.nav.venue;
        } else if (id === 'list') {
          var full  = a.querySelector('.hidden');
          var short = a.querySelector('.sm\\:hidden');
          if (full)  full.textContent  = s.nav.listFull;
          if (short) short.textContent = s.nav.list;
        } else if (id === 'rsvp') {
          a.textContent = s.nav.rsvp;
        }
      });
    });
  }

  // ── Mount ─────────────────────────────────────────────────────────────────

  function mount() {
    var mountNode = document.querySelector('[data-site-header]');
    if (!mountNode) return;

    var activeId   = mountNode.dataset.headerActive || '';
    var startSolid = mountNode.dataset.headerSolid === 'true';

    injectAssets();

    var result = build(activeId, startSolid);
    var header = result.header;
    var brand  = result.brand;

    if (!startSolid) initScrollSolid(header);
    initScrollHide(header);
    applyLabels(header, brand);

    mountNode.replaceWith(header);
  }

  mount();
})();
