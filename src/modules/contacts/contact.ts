export function renderContact(): string {
  return `
<section id="contact" class="contact py-5 min-vh-100">
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <h2 class="display-1 py-4 fade-up" data-i18="contact.title"></h2>
        <p class="lead mb-4 fade-up" data-i18="contact.subtitle"></p>
        <button class="btn contact-open px-4 py-3 fade-up" type="button" data-i18="contact.button"></button>
      </div>
    </div>
  </div>

  <div class="modal" aria-hidden="true">
    <div class="panel w-100 h-100 p-4 p-md-5">
      <button class="close" type="button" aria-label="Close">×</button>

      <h2 class="display-6 mb-4" data-i18="contact.formTitle"></h2>

      <form class="form">
        <input type="text" data-i18-placeholder="contact.name" />
        <input type="email" data-i18-placeholder="contact.email" />
        <input type="tel" data-i18-placeholder="contact.phone" />
        <input type="text" data-i18-placeholder="contact.company" />

        <select required>
          <option value="" selected disabled data-i18="contact.projectType"></option>
          <option value="new-website" data-i18="contact.projectTypes.newWebsite"></option>
          <option value="redesign" data-i18="contact.projectTypes.redesign"></option>
          <option value="landing" data-i18="contact.projectTypes.landing"></option>
          <option value="support" data-i18="contact.projectTypes.support"></option>
        </select>

    <select required>
  <option value="" selected disabled data-i18="contact.budget"></option>
  <option value="not-sure" data-i18="contact.budgetRanges.notSure"></option>
  <option value="under500" data-i18="contact.budgetRanges.under500"></option>
  <option value="from500" data-i18="contact.budgetRanges.from500"></option>
  <option value="from1000" data-i18="contact.budgetRanges.from1000"></option>
  <option value="from2500" data-i18="contact.budgetRanges.from2500"></option>
</select>

        <select required>
          <option value="" selected disabled data-i18="contact.timeline"></option>
          <option value="asap" data-i18="contact.timelines.asap"></option>
          <option value="month" data-i18="contact.timelines.month"></option>
          <option value="flexible" data-i18="contact.timelines.flexible"></option>
        </select>

        <input type="url" data-i18-placeholder="contact.website" />
        <textarea rows="3" data-i18-placeholder="contact.message"></textarea>

        <button class="btn submit px-4 py-3 mt-4" type="submit" data-i18="contact.send"></button>
      </form>
    </div>
  </div>
</section>
`;
}

export function initContact(): void {
  const contact = document.querySelector<HTMLElement>('.contact');
  const modal = contact?.querySelector<HTMLElement>('.modal');
  const openBtn = contact?.querySelector<HTMLButtonElement>('.contact-open');
  const closeBtn = contact?.querySelector<HTMLButtonElement>('.close');

  const externalOpenButtons = document.querySelectorAll<HTMLButtonElement>(
    '[data-open-contact]'
  );

  if (!contact || !modal || !openBtn || !closeBtn) return;

  const openModal = (): void => {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = (): void => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');

    setTimeout(() => {
      document.body.style.overflow = '';
    }, 600);
  };

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);

  externalOpenButtons.forEach((button) => {
    button.addEventListener('click', openModal);
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}
