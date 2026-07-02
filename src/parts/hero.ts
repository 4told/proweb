const marquee = [
    {name: 'Scroll Animations'},
    {name: 'Mobile'},
    {name: 'Angular'},
    {name: 'React'},
    {name: 'Responsive'},
    {name: 'E-Commerce'},
    {name: 'WordPress'},
    {name: 'PrestaShop'},
    {name: 'MapBox Maps API'},
    {name: 'Google Maps'},
    {name: 'E-Charts'},
    {name: 'Analytics 4'},
    {name: 'AdSense'},
    {name: 'SEO'},
    {name: 'Dashboards'},

  //todo add another items
];

const heroStep = [
    {title: 'We Make Brands \n  Impossible \n   To Ignore'},
    {title: 'We build\n   web sites\n that move.'},
    {title: ' Let\'s Build\n Something\n Legendary'},
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
                        ${heroStep.map((step, index) => `<h2 class="display-1 col-xs-12 col-md-6 step ${index === 0 ? 'active' : ''}">${step.title}</h2>`).join('')}
                    </div>
                  </div>
                </div>
            </div>
        </section>
        <section>
            <div class="marquee"> 
                <div class="marquee-track">
                    ${[...marquee, ...marquee].map(i => `
                        <span>${i.name}</span>
                        <span>•</span>
                    `).join('')}
                </div>
            </div>
        </section>
    `
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