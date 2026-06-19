export function initTheme() {
  const root = document.documentElement
  const toggleBtn = document.getElementById('theme-toggle')
  const savedTheme = localStorage.getItem('theme')

  if (savedTheme) {
    root.setAttribute('data-theme', savedTheme)

    if (toggleBtn) {
      toggleBtn.textContent =
          savedTheme === 'dark'
              ? '☀️'
              : '🌙'
    }
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
export function g() {
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