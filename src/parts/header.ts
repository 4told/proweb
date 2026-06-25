export function renderHeader() {
    return `
        <header>
            <div class="inner">
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
            </div>
            <div class="scroll-progress"></div>
        </header>
    `
}