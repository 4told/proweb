export const translations = {
    ua: {
        heroTitle: 'Починаємо Влад )',
        about: 'Про нас',
        contacts: 'Контакти',
    },

    ru: {
        heroTitle: 'Начинаем Влад )',
        about: 'О нас',
        contacts: 'Контакты',
    },

    en: {
        heroTitle: 'Get started Vlad )',
        about: 'About Us',
        contacts: 'Contacts',
    },
} as const

export type Lang = keyof typeof translations

export let currentLang: Lang =
    (localStorage.getItem('lang') as Lang) || 'ua'

export function t(key: keyof typeof translations.ua): string {
    return translations[currentLang][key]
}

export function setLang(lang: Lang) {
    currentLang = lang

    localStorage.setItem('lang', lang)

    renderTranslations()
}

export function renderTranslations() {
    document.querySelectorAll('[data-i18]').forEach((element) => {
        const key = element.getAttribute('data-i18')

        if (!key) return

        element.textContent = t(
            key as keyof typeof translations.ua
        )
    })
}

export function setLanguage() {
    document
        .querySelector('[data-lang="ua"]')
        ?.addEventListener('click', () => setLang('ua'))

    document
        .querySelector('[data-lang="ru"]')
        ?.addEventListener('click', () => setLang('ru'))

    document
        .querySelector('[data-lang="en"]')
        ?.addEventListener('click', () => setLang('en'))

}

