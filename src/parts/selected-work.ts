
import { selectedWorksConst } from '../constants/selected-works.const.ts'

export function renderSelectedWork() {
    return `
<section class="selected-work py-5">
  <div class="container">

    <h1 class="fade-up text-center mb-5" data-i18="selectedWork.title"></h1>

    <div class="row g-4">

      ${selectedWorksConst.map(work => `
        <div class="col-12 col-md-6 col-lg-4">
          <div class="card fade-up h-100">

            <img class="card-img-top" src="${work.image}" alt="project" />

            <div class="card-body">
              <h3>${work.title}</h3>
              <p>${work.description}</p>
            </div>

          </div>
        </div>
      `).join('')}

    </div>

  </div>
</section>
    `
}