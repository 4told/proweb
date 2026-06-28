import { howItHappensConst } from '../../constants/how-it-happens.const';

const lineClasses = [
  'line-desktop-both line-tablet-both line-mobile-bottom',
  'line-desktop-both line-tablet-bottom line-mobile-bottom',
  'line-desktop-bottom line-tablet-both line-mobile-bottom',
  'line-desktop-vertical line-tablet-bottom line-mobile-bottom',
  'line-desktop-vertical line-tablet-vertical line-mobile-bottom',
  'line-none',
];

export function renderHowItHappens(): string {
  return `
<section class="how-it-happens py-5 mt-5">
  <div class="container">
    <h2 class="display-2 mx-auto text-center mb-5 fade-up" data-i18="howItHappens.title"></h2>

    <div class="grid">
      ${howItHappensConst
        .map(
          (step, index) => `
            <article class="step p-4 p-md-5 ${lineClasses[index]}">
              <span class="number d-block mb-4">
                ${String(index + 1).padStart(2, '0')}
              </span>
              <h3 class="mb-3" data-i18="${step.titleKey}"></h3>
              <p class="description m-0" data-i18="${step.descriptionKey}"></p>
            </article>
          `
        )
        .join('')}
    </div>
  </div>
</section>
  `;
}

export function initHowItHappensScroll(): void {
  const steps = document.querySelectorAll<HTMLElement>('.how-it-happens .step');

  if (!steps.length) return;

  const offsets = [
    { x: -90, y: -44, rotate: -2 },
    { x: 0, y: -72, rotate: 1 },
    { x: 90, y: -44, rotate: 2 },
    { x: -90, y: 44, rotate: 2 },
    { x: 0, y: 72, rotate: -1 },
    { x: 90, y: 44, rotate: -2 },
  ];

  const clamp = (value: number, min: number, max: number): number =>
    Math.min(Math.max(value, min), max);

  const easeOutCubic = (value: number): number => 1 - Math.pow(1 - value, 3);

  const easeOutQuad = (value: number): number => 1 - Math.pow(1 - value, 2);

  const update = (): void => {
    const viewportHeight = window.innerHeight;

    steps.forEach((step, index) => {
      const rect = step.getBoundingClientRect();
      const offset = offsets[index] || { x: 0, y: 0, rotate: 0 };

      const start = viewportHeight * 0.95;
      const end = viewportHeight * 0.35;

      const progress = clamp((start - rect.top) / (start - end), 0, 1);

      const delayedProgress = clamp(progress - index * 0.02, 0, 1);
      const easedProgress = easeOutCubic(delayedProgress);

      const opacityProgress = clamp(progress - index * 0.01, 0, 1);
      const easedOpacity = easeOutQuad(opacityProgress);

      const x = offset.x * (1 - easedProgress);
      const y = offset.y * (1 - easedProgress);
      const rotate = offset.rotate * (1 - easedProgress);
      const scale = 0.94 + 0.06 * easedProgress;
      const opacity = 0.35 + 0.65 * easedOpacity;

      step.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale}) rotate(${rotate}deg)`;
      step.style.opacity = String(opacity);
    });
  };

  window.addEventListener('scroll', update);
  window.addEventListener('resize', update);

  update();
}
