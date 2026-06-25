import { howItHappensConst } from '../../constants/how-it-happens.const';

export function renderHowItHappens(): string {
  return `
<section class="how-it-happens py-5 mt-5">
  <div class="container">
    <h2 class="how-it-happens__title fade-up" data-i18="howItHappens.title"></h2>

    <div class="how-it-happens__grid">
      ${howItHappensConst
        .map(
          (step, index) => `
            <article class="how-it-happens__step fade-up">
              <span class="how-it-happens__number">
                ${String(index + 1).padStart(2, '0')}
              </span>
              <h3 data-i18="${step.titleKey}"></h3>
              <p data-i18="${step.descriptionKey}"></p>
            </article>
          `
        )
        .join('')}
    </div>
  </div>
</section>
  `;
}
