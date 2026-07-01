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
                        ${heroStep.map((step, index) => `<h2 class="display-1 w-50 step ${index === 0 ? 'active' : ''}">${step.title}</h2>`).join('')}
                    </div
                  </div
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
    const story = document.querySelector<HTMLElement>('.hero');
    const steps = document.querySelectorAll<HTMLElement>('.step');

    if (!story || !steps.length) return;

    window.addEventListener('scroll', () => {

        const rect = story.getBoundingClientRect();

        const progress = Math.min(
          Math.max(-rect.top / (story.offsetHeight - window.innerHeight), 0),
          1
        );

        const index = Math.min(
          Math.floor(progress * steps.length),
          steps.length - 1
        );

        steps.forEach((step, i) => {
            step.classList.toggle('active', i === index);
        });
    });
}