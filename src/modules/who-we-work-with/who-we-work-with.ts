import { whoWeWorkWithConst } from '../../constants/who-we-work-with.const';

export function renderWhoWeWorkWith(): string {
  return `
<section class="who-we-work-with py-5">
  <div class="container">
    <div class="row">
      <div class="section-heading col-12 col-lg-8 py-4">
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

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="audience-arrow bi bi-arrow-up-right"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.636 3.5a.5.5 0 0 0 0 1h3.657L3.146 13.646a.5.5 0 0 0 .708.708L13 5.207v3.657a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5"
                  />
                </svg>
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
