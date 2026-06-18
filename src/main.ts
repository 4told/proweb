import './style.css'
import heroImg from './assets/hero.png'
import { initTheme } from './theme'
import {setLanguage, renderTranslations} from './i18'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

<header>
<div class="logo">PRO WEB</div>
    <nav>
      <a data-i18="about" href="/services.html"></a>
      <a data-i18="contacts" href="/contacts.html"></a>
    </nav>
    <div class="theme-controls">
        <button id="theme-toggle"></button>
        <div class="lang-switcher">
            <button data-lang="ua">UA</button>
            <button data-lang="ru">RU</button>
            <button data-lang="en">EN</button>
        </div>
    </div>
</header>


<section id="center">
    <img src="${heroImg}" class="base" width="170" height="179">
    <h1 data-i18="heroTitle"></h1>
    <p data-i18="heroText"></p>

<a href="#about" data-i18="about"></a>
<a href="#contacts" data-i18="contacts"></a>
    <p>Edit <code>src/main.ts</code> and save to test <code>HMR</code></p>
  </div>
</section>

  <section id="social">
    <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#social-icon"></use></svg>
    <h2>Connect with us</h2>
    <p>Join the Vite community</p>

  </div>
</section>

`
initTheme()
renderTranslations()
setLanguage()

