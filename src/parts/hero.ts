import heroVideo from './../assets/hero-video.mp4'

export function renderHero(): string {
    return `
        <section style="position: relative;">
        <video class="fade-up" style="transition-delay: 0.5s" loop autoplay muted src="${heroVideo}"></video>
            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)">
        <h1 class="fade-up" style="transition-delay: 1s" data-i18="heroTitle"></h1>
            <p data-i18="heroText"></p>
            <p>Edit <code>src/main.ts</code> and save to test <code>HMR</code></p>
        </div>
        </section>
    `
}