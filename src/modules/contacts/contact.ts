export function renderContact(): string {
  return `
<section class="contact py-5 min-vh-100">
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

      <h2 class="display-6 mb-5" data-i18="contact.formTitle"></h2>

      <form class="form">
        <input type="text" data-i18-placeholder="contact.name" />
        <input type="email" data-i18-placeholder="contact.email" />
        <input type="text" data-i18-placeholder="contact.phone" />
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

    setTimeout(() => {
      document.body.style.overflow = '';
    }, 600);
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
