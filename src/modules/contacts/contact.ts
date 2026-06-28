export function renderContact(): string {
  return `
<section class="contact py-5">
  <div class="container">
    <div class="inner d-flex flex-column justify-content-center">
      <div class="content">
        <h2 class="display-3 mb-4 fade-up" data-i18="contact.title"></h2>

        <p class="lead mb-4 fade-up" data-i18="contact.subtitle"></p>

        <button class="btn contact-open px-4 py-3 fade-up" type="button" data-i18="contact.button"></button>
      </div>
    </div>
  </div>

  <div class="modal" aria-hidden="true">
    <div class="panel">
      <button class="close" type="button" aria-label="Close">×</button>

      <h2 class="display-6 mb-5" data-i18="contact.formTitle"></h2>

      <form>
        <input type="text" data-i18-placeholder="contact.name" />
        <input type="email" data-i18-placeholder="contact.email" />
        <input type="text" data-i18-placeholder="contact.company" />
        <input type="text" data-i18-placeholder="contact.projectType" />
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

  if (!contact || !modal || !openBtn || !closeBtn) return;

  const openModal = (): void => {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = (): void => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}
