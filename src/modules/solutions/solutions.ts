import { solutionsConst } from '../../constants/solutions.const.ts';

export function renderWhatWeDo(): string {
  return `
    <section class="solutions py-5">
      <div class="container">
        <div class="row">
          <h2
            class="display-1 fade-up py-4"
            data-i18="solutions.title"
          ></h2>

          <div class="slider">
            ${solutionsConst
              .map(
                (solution) => `
                  <article class="card">
                    <h3 data-i18="${solution.titleKey}"></h3>

                    <p
                      class="description"
                      data-i18="${solution.descriptionKey}"
                    ></p>

                    ${
                      solution.detailsUrl
                        ? `
                          <a
                            class="solution-details"
                            href="${solution.detailsUrl}"
                            data-i18="solutions.details"
                          ></a>
                        `
                        : ''
                    }

                    <button
                      class="solution-cta"
                      type="button"
                      data-open-contact
                      data-project-type="${solution.projectType}"
                      data-lead-context="${solution.leadContext}"
                      data-i18="solutions.cta"
                    ></button>
                  </article>
                `
              )
              .join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}

export function improveSolutionCard(): void {
  const cards = document.querySelectorAll<HTMLElement>('.solutions .card');

  cards.forEach((card) => {
    card.addEventListener('mousemove', (event: MouseEvent) => {
      const rect = card.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      const rotateY = (x / rect.width - 0.5) * 20;
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
