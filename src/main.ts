import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
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
<section class="selected-work container py-5">
  <h1 class="fade-up text-center mb-5">Selected work</h1>

  <div class="row g-4">

    <div class="col-12 col-md-6 col-lg-4">
      <div class="work-card fade-up p-3 border rounded">
        <img class="img-fluid mb-3" src="${selectedWork}" alt="project" />
        <h3>Project One</h3>
        <p>Landing page / UI design</p>
      </div>
    </div>

    <div class="col-12 col-md-6 col-lg-4">
      <div class="work-card fade-up p-3 border rounded">
        <img class="img-fluid mb-3" src="${whatWeDo}" alt="project" />
        <h3>Project Two</h3>
        <p>E-commerce interface</p>
      </div>
    </div>

  </div>
</section>
  
    <section class="how-it-happens container py-5">
  <h1 class="fade-up text-center mb-5">How it happens</h1>

  <div class="row g-4">

    <div class="col-md-4">
      <div class="step fade-up">
        <h3>01</h3>
        <p>Discovery & planning</p>
      </div>
    </div>

    <div class="col-md-4">
      <div class="step fade-up">
        <h3>02</h3>
        <p>Design & prototyping</p>
      </div>
    </div>

    <div class="col-md-4">
      <div class="step fade-up">
        <h3>03</h3>
        <p>Development & launch</p>
      </div>
    </div>

  </div>
</section>

<section class="contact container py-5">

  <div class="text-center mb-5">
    <h1 class="fade-up">Let’s work together</h1>
    <p class="fade-up">Tell us about your project</p>
  </div>

  <div class="row justify-content-center">

    <div class="col-md-6">

      <form class="contact-form fade-up">

        <div class="mb-3">
          <input type="text" class="form-control" placeholder="Your name">
        </div>

        <div class="mb-3">
          <input type="email" class="form-control" placeholder="Email">
        </div>

        <div class="mb-3">
          <textarea class="form-control" rows="5" placeholder="Project details"></textarea>
        </div>

        <button class="btn btn-primary w-100">
          Send message
        </button>

      </form>

    </div>

  </div>
</section>

<section class="about container py-5">
  <h1 class="fade-up">About us</h1>

  <p class="fade-up">
    We are a small development team focused on modern web solutions,
    UI/UX and performance-driven products.
  </p>
</section>

<section class="testimonials container py-5">
  <h1 class="fade-up text-center">What clients say</h1>

  <div class="row g-4 mt-4">

    <div class="col-md-4">
      <div class="card p-3 fade-up">
        <p>“Great communication and fast delivery.”</p>
        <strong>John Doe</strong>
      </div>
    </div>

  </div>
</section>

<footer class="footer text-center py-4">
  <p>© 2026 Pro Web. All rights reserved.</p>
</footer>

  
</main>
`

initTheme()
renderTranslations()
setLanguage()

initLangDropdown()
updateLanguageDropdown()
observer()
