import { selectedWorksConst } from '../../constants/selected-works.const.ts';

export function renderSelectedWork(): string {
  return `
<section class="selected-work py-5">
  <div class="container">
    <div class="row">
      <h2 class="display-1 py-4 fade-up" data-i18="selectedWork.title"></h2>
    </div>
  </div>

  <div class="works-scroll fade-up">
    <div class="works-track">
      ${selectedWorksConst
        .map(
          (work) => `
            <article class="work-card">
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
    <div class="row">
      <div class="odometer-wrap col-12 col-md-4 fade-up">
        <div class="odometer mb-4" data-value="50+"></div>
        <h4 class="display-6">Реалізовано проектів</h4>
      </div>

      <div class="odometer-wrap col-12 col-md-4 fade-up">
        <div class="odometer mb-4" data-value="10"></div>
        <h4 class="display-6">Постійних клиентів</h4>
      </div>

      <div class="odometer-wrap col-12 col-md-4 fade-up">
        <div class="odometer mb-4" data-value="15"></div>
        <h4 class="display-6">Років Досвіду</h4>
      </div>
    </div>
  </div>
</section>
`;
}

export function initSelectedWorkHorizontalScroll(): void {
  const section = document.querySelector<HTMLElement>('.selected-work');
  const scroll = document.querySelector<HTMLElement>(
    '.selected-work .works-scroll'
  );

  if (!section || !scroll) return;

  let targetScrollLeft = scroll.scrollLeft;
  let animationFrameId: number | null = null;

  const isSectionActive = (): boolean => {
    const rect = section.getBoundingClientRect();
    const viewportCenter = window.innerHeight / 2;

    return rect.top < viewportCenter && rect.bottom > viewportCenter;
  };

  const animateScroll = (): void => {
    const distance = targetScrollLeft - scroll.scrollLeft;

    if (Math.abs(distance) < 0.5) {
      scroll.scrollLeft = targetScrollLeft;
      animationFrameId = null;
      return;
    }

    scroll.scrollLeft += distance * 0.09;
    animationFrameId = requestAnimationFrame(animateScroll);
  };

  const startAnimation = (): void => {
    if (animationFrameId !== null) return;

    animationFrameId = requestAnimationFrame(animateScroll);
  };

  scroll.addEventListener(
    'wheel',
    (event) => {
      const maxScrollLeft = scroll.scrollWidth - scroll.clientWidth;
      const canScrollHorizontally = maxScrollLeft > 0;

      if (!canScrollHorizontally || !isSectionActive()) return;

      const isScrollingDown = event.deltaY > 0;
      const isScrollingUp = event.deltaY < 0;

      const isAtStart = targetScrollLeft <= 0;
      const isAtEnd = targetScrollLeft >= maxScrollLeft;

      if ((isScrollingUp && isAtStart) || (isScrollingDown && isAtEnd)) {
        return;
      }

      event.preventDefault();

      targetScrollLeft += event.deltaY * 1.25;
      targetScrollLeft = Math.max(0, Math.min(targetScrollLeft, maxScrollLeft));

      startAnimation();
    },
    { passive: false }
  );
}
