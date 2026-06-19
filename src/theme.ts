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