import { selectedWorksConst } from '../../constants/selected-works.const.ts';

export function renderSelectedWork(): string {
  return `
<section class="selected-work py-5">
  <div class="container">
    <div class="row justify-content-center mb-5">
      <div class="col-lg-8 text-center">
        <h2 class="display-2 text-heading lh-1 fade-up" data-i18="selectedWork.title"></h2>
      </div>
    </div>

    <div class="works-grid">
      ${selectedWorksConst
        .map(
          (work) => `
            <article class="work-card ${work.size || ''} fade-up">
              <div class="preview">
                <img src="${work.image}" alt="project" loading="lazy" />
              </div>

             <div class="info">
  <h3 data-i18="${work.titleKey}"></h3>
  <p data-i18="${work.categoryKey}"></p>
</div>
            </article>
          `
        )
        .join('')}
    </div>
  </div>
</section>

<section class="selected-stats py-5">
  <div class="container">
    <div class="row g-4 text-center">
      <div class="odometer-wrap col-12 col-md-4 fade-up">
        <div class="odometer mb-4" data-value="50+"></div>
        <h4 class="display-6">Реализовано проектов</h4>
      </div>

      <div class="odometer-wrap col-12 col-md-4 fade-up">
        <div class="odometer mb-4" data-value="10"></div>
        <h4 class="display-6">Постоянных клиентов</h4>
      </div>

      <div class="odometer-wrap col-12 col-md-4 fade-up">
        <div class="odometer mb-4" data-value="15"></div>
        <h4 class="display-6">Лет опыта</h4>
      </div>
    </div>
  </div>
</section>
`;
}

export function initSelectedWorkScroll(): void {
  const cards = document.querySelectorAll<HTMLElement>(
    '.selected-work .work-card'
  );

  if (!cards.length) return;

  const clamp = (value: number, min: number, max: number): number =>
    Math.min(Math.max(value, min), max);

  const update = (): void => {
    const viewportCenter = window.innerHeight / 2;

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;
      const distance = Math.abs(viewportCenter - cardCenter);

      const maxDistance = window.innerHeight * 0.65;
      const progress = 1 - clamp(distance / maxDistance, 0, 1);

      const delay = index * 0.015;
      const easedProgress = clamp(progress - delay, 0, 1);

      const y = 34 * (1 - easedProgress);
      const scale = 0.97 + 0.03 * easedProgress;
      const opacity = 0.35 + 0.65 * easedProgress;

      card.style.transform = `translate3d(0, ${y}px, 0) scale(${scale})`;
      card.style.opacity = String(opacity);
    });
  };

  window.addEventListener('scroll', update);
  window.addEventListener('resize', update);

  update();
}
