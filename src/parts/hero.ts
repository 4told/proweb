const marquee = [
    {name: 'Scroll Animations'},
    {name: '3D Experiences'},
    {name: 'Motion Design'},
    {name: 'WebGL'},
    {name: 'Responsive'},
    {name: '60fps'},

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
                        ${heroStep.map(step => `<h2 class="display-1 w-50 step">${step.title}</h2>`).join('')}
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