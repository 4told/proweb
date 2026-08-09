const marquee = [
  { name: 'Scroll Animations', icon: 'bi-arrows-move' },
  { name: 'Mobile', icon: 'bi-phone' },
  { name: 'Angular', icon: 'bi-code-slash' },
  { name: 'React', icon: 'bi-braces' },
  { name: 'Responsive', icon: 'bi-display' },
  { name: 'E-Commerce', icon: 'bi-cart3' },
  { name: 'WordPress', icon: 'bi-wordpress' },
  { name: 'PrestaShop', icon: 'bi-shop' },
  { name: 'MapBox Maps API', icon: 'bi-map' },
  { name: 'Google Maps', icon: 'bi-geo-alt' },
  { name: 'E-Charts', icon: 'bi-graph-up' },
  { name: 'Analytics 4', icon: 'bi-bar-chart-line' },
  { name: 'AdSense', icon: 'bi-badge-ad' },
  { name: 'SEO', icon: 'bi-search' },
  { name: 'Dashboards', icon: 'bi-speedometer2' },

  //todo add another items
];

const heroStep = [
  { title: 'hero.title1' },
  { title: 'hero.title2' },
  { title: 'hero.title3' },
];

export function renderHero(): string {
  return `
        <section class="hero">
            <div class="sticky">
                <div class="canvas-bg">
                  <canvas id="bg"></canvas>
                </div>
                <div class="content">
  <div class="container">
    <div class="row">
      ${heroStep
        .map(
          (step, index) => `
            <h1
              class="display-1 col-xs-12 col-md-6 lh-1 step ${index === 0 ? 'active' : ''}"
              data-i18="${step.title}"
            ></h1>
          `
        )
        .join('')}
    </div>
  </div>

  <div class="hero-actions">
    
      <button
        type="button"
        class="hero-cta"
        data-open-contact
        data-lead-context="hero"
        data-i18="hero.cta"
      ></button>
    
  </div>
</div>
        </section>
        <section>
            <div class="marquee"> 
                <div class="marquee-track">
                   ${[...marquee, ...marquee]
                     .map(
                       (i) => `
      <span class="marquee-item">
        <i class="bi ${i.icon}" aria-hidden="true"></i>
        <span>${i.name}</span>
      </span>
      <span class="marquee-separator">•</span>
    `
                     )
                     .join('')}
                </div>
            </div>
        </section>
    `;
}

export function stickyScroll(): void {
  const hero = document.querySelector<HTMLElement>('.hero');
  const steps = Array.from(document.querySelectorAll<HTMLElement>('.step'));

  if (!hero || !steps.length) return;

  const update = () => {
    const rect = hero.getBoundingClientRect();
    const scrollable = hero.offsetHeight - window.innerHeight;

    if (scrollable <= 0) return;

    const scrolled = Math.min(Math.max(-rect.top, 0), scrollable);

    let index = Math.round(scrolled / window.innerHeight);
    index = Math.max(0, Math.min(index, steps.length - 1));

    steps.forEach((step, i) => {
      step.classList.toggle('active', i === index);
    });
  };

  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
}
