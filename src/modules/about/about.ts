export function renderAbout(): string {
  return `
<section class="about py-5">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-9 text-center">
        <h2 class="display-2 mb-4 fade-up" data-i18="about.title"></h2>
        <p class="lead fade-up" data-i18="about.text"></p>
      </div>
    </div>
  </div>
</section>
`;
}
