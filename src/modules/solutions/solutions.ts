import {solutions} from "./../constants/solutions.ts";

export function renderWhatWeDo(): string {
    return `
        <section class="solutions py-5">
            <div class="container">
                <div class="row">
                    <h1 class="fade-up py-4" data-i18="solutions.title"></h1>
                    <div class="slider">
                        ${solutions.map(solution => `
                            <div class="card fade-up">
                                 <h3>${solution.title}</h3>
                                <div class="description my-3 pb-4">
                                    <p>${solution.description}</p>
                                </div>
                                <a href="${solution.linkUrl}">Детальніше</a>
                            </div>
                        `).join('')}
                    </div>
                </div>       
            </div>       
        </section>
    `
}

export function initCardTilt() {
    const cards = document.querySelectorAll<HTMLElement>('.card');

    cards.forEach((card) => {
        card.addEventListener('mousemove', (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);

            const rotateY = ((x / rect.width) - 0.5) * 20;
            const rotateX = (0.5 - y / rect.height) * 20;

            card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale(1.03)
            `;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform =
                'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}