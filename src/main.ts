import './style.css'
import heroVideo from './assets/hero-video.mp4'
import { initTheme } from './theme'
import {setLanguage, renderTranslations, initLangDropdown, updateLanguageDropdown} from './i18'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

<header>
    <div class="logo">PRO WEB</div>
    <nav>
      <a data-i18="about" href="/services.html"></a>
      <a data-i18="contacts" href="/contacts.html"></a>
    </nav>
    <div class="theme-controls">
        <button id="theme-toggle"></button>
<!--        <div class="lang-switcher">-->
<!--            <button data-lang="ua">UA</button>-->
<!--            <button data-lang="ru">RU</button>-->
<!--            <button data-lang="en">EN</button>-->
<!--        </div>-->
        <div class="lang-switcher">
            <button class="lang-current">
                <span id="current-lang">UA</span>
                <span class="arrow">▼</span>
            </button>
        
            <div class="lang-dropdown">
                <button data-lang="ua">UA</button>
                <button data-lang="ru">RU</button>
                <button data-lang="en">EN</button>
            </div>
        </div>
    </div>
</header>


<main>
    <section style="position: relative;">
        <video loop autoplay muted src="${heroVideo}"></video>
        
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)">
            <h1 data-i18="heroTitle"></h1>
            <p data-i18="heroText"></p>
        
            <a href="#about" data-i18="about"></a>
            <a href="#contacts" data-i18="contacts"></a>
            <p>Edit <code>src/main.ts</code> and save to test <code>HMR</code></p>
      </div>
  </section>
</main>
`
initTheme()
renderTranslations()
setLanguage()

initLangDropdown()
updateLanguageDropdown()

