export function renderHowItHappens() {
  const steps = [
    { key: 'howItHappens.step1', number: '01' },
    { key: 'howItHappens.step2', number: '02' },
    { key: 'howItHappens.step3', number: '03' }
  ]

  return `
<section class="how-it-happens py-5">
  <div class="container">

    <h1 class="fade-up text-center mb-5" data-i18="howItHappens.title"></h1>

    <div class="row g-4">

      ${steps.map(step => `
        <div class="col-md-4">
          <div class="card fade-up text-center h-100">
            <div class="card-body">
              <h3>${step.number}</h3>
              <p data-i18="${step.key}"></p>
            </div>
          </div>
        </div>
      `).join('')}

    </div>

  </div>
</section>
  `
}