export function renderFooter() {
const foundationYear = 2026
const currentYear = new Date().getFullYear()

const copyrightYear =
  foundationYear === currentYear
    ? foundationYear
    : `${foundationYear}-${currentYear}`


    return `
<footer class="footer text-center py-4">
  <p>© ${copyrightYear} Pro Web. All rights reserved.</p>
</footer>
  `
}