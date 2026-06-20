import './style.css'
import heroVideo from './assets/hero-video.mp4'
import whatWeDo from './assets/what-we-do.png'
import selectedWork from './assets/selected-works.png'
import {initTheme, observer} from './theme'
import {setLanguage, renderTranslations, initLangDropdown, updateLanguageDropdown} from './i18'
import {solutions} from "./constants/solutions.ts";

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
        <video class="fade-up" style="transition-delay: 0.5s" loop autoplay muted src="${heroVideo}"></video>
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)">
            <h1 class="fade-up" style="transition-delay: 1s" data-i18="heroTitle"></h1>
            <p data-i18="heroText"></p>
            <p>Edit <code>src/main.ts</code> and save to test <code>HMR</code></p>
      </div>
  </section>
  
  <section class="solutions">
    <h1 class="fade-up" data-i18="solutions.title"></h1>
    <div class="slider">
        ${solutions.map(solution => `
          <div class="solution-card">
            <h3>${solution.title}</h3>
            <p>${solution.description}</p>
            <strong>${solution.price}</strong>
          </div>
        `).join('')}
      </div>
       <img src="${whatWeDo}" class="vite" alt="Vite logo" />
  </section>
  
  
  <br><br><br>
  
  

  
  <br><br><br>
    <section class="Selected work">
            <h1 class="fade-up">Selected work</h1>
            <img src="${selectedWork}" class="vite" alt="Vite logo" />
    </section>
  
    <section class="How it happens">
        <h1 class="fade-up">How it happens</h1>
       
    </section>

  
</main>
`

initTheme()
renderTranslations()
setLanguage()

initLangDropdown()
updateLanguageDropdown()
observer()
