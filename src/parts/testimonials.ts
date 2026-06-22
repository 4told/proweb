import { testimonials } from '../constants/testimonials'

export function renderTestimonials() {
  return `
<section class="testimonials py-5">
  <div class="container">

    <h1 class="fade-up text-center" data-i18="testimonials.title"></h1>

    <div class="row g-4 mt-4">

      ${testimonials.map(t => `
        <div class="col-md-4">
          <div class="card fade-up h-100">
            <div class="card-body">
              <p>“${t.text}”</p>
              <strong>${t.author}</strong>
            </div>
          </div>
        </div>
      `).join('')}

    </div>

  </div>
</section>
  `
}