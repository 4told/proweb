import whatWeDo from './../assets/what-we-do.png'
import {solutions} from "./../constants/solutions.ts";

export function renderWhatWeDo(): string {
    return `
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
    `
}