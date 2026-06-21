import selectedWork from './assets/selected-works.png'

export function renderSelectedWork() {
    return `
        <section class="Selected work">
                <h1 class="fade-up">Selected work</h1>
                <img src="${selectedWork}" class="vite" alt="Vite logo" />
        </section>
    
        <section class="How it happens">
            <h1 class="fade-up">How it happens</h1>
    
        </section>
    `
}