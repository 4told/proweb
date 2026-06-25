import heroVideo from './../assets/images/hero-video.mp4'

export function renderHero(): string {
    return `
        <section class="hero" class="fade-up">
            <video class="fade-up" style="transition-delay: 0.5s" loop autoplay muted src="${heroVideo}"></video>
            <div class="container">
                <div class="row">
                    <div class="hero-info">
                        <h1 class="fade-up" style="transition-delay: 1s" data-i18="heroTitle"></h1>
                        <p data-i18="heroText"></p>
                        <p>Edit <code>src/main.ts</code> and save to test <code>HMR</code></p>
                    </div>
                </div>
            </div>
        </section>
    `
}