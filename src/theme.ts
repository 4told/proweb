export function initTheme() {
  const root = document.documentElement
  const toggleBtn = document.getElementById('theme-toggle')
  const savedTheme = localStorage.getItem('theme') || 'dark'

  root.setAttribute('data-theme', savedTheme)

  if (toggleBtn) {
    toggleBtn.textContent =
        savedTheme === 'dark' // create enum
            ? '☀️'
            : '🌙'
  }

  toggleBtn?.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme')

    const newTheme =
        currentTheme === 'dark'
            ? 'light'
            : 'dark'

    root.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)

    toggleBtn.textContent =
        newTheme === 'dark'
            ? '☀️'
            : '🌙'
  })
}

export function observer() {
  const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          }
        })
      },
      {
        threshold: 0.2
      }
  )

  document.querySelectorAll('.fade-up').forEach(el => {
    observer.observe(el)
  })

}

export function initScrollProgress(): void {
  const progressBar = document.querySelector<HTMLElement>('.scroll-progress');

  if (!progressBar) return;

  const updateProgress = () => {
    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = (scrollTop / documentHeight) * 100;

    progressBar.style.width = `${progress}%`;
  };

  window.addEventListener('scroll', updateProgress);
  updateProgress();
}