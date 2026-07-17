import { whoWeWorkWithConst } from '../../constants/who-we-work-with.const';

export function renderWhoWeWorkWith(): string {
  return `
<section class="who-we-work-with py-5">
  <div class="container">
    <div class="row">
      <div class="section-heading col-12 col-lg-8 py-4">
        <p
          class="eyebrow mb-3 fade-up"
          data-i18="whoWeWorkWith.eyebrow"
        ></p>

        <h2
          class="display-1 mb-4 fade-up"
          data-i18="whoWeWorkWith.title"
        ></h2>

        <p
          class="section-description mb-0 fade-up"
          data-i18="whoWeWorkWith.description"
        ></p>
      </div>

      <div class="audience-list col-12 mt-4">
        ${whoWeWorkWithConst
          .map(
            (item, index) => `
              <button
                class="audience-item fade-up"
                type="button"
                data-open-contact
                data-lead-context="${item.leadContext}"
                ${
                  item.projectType
                    ? `data-project-type="${item.projectType}"`
                    : ''
                }
              >
                <span class="audience-number">
                  ${String(index + 1).padStart(2, '0')}
                </span>

                <div class="audience-content">
                  <h3
                    class="audience-title mb-2"
                    data-i18="${item.titleKey}"
                  ></h3>

                  <p
                    class="audience-description mb-0"
                    data-i18="${item.descriptionKey}"
                  ></p>
                </div>

                <span class="audience-arrow" aria-hidden="true">
                  →
                </span>
              </button>
            `
          )
          .join('')}
      </div>
    </div>
  </div>
</section>
  `;
}
