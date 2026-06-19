export interface ISolutions {
    title: string
    description: string
    price: string
}

export const solutions: ISolutions[] = [
    {
        title: 'Разработка сайтов',
        description: 'Корпоративные сайты, лендинги, каталоги',
        price: 'от $300'
    },
    {
        title: 'WordPress',
        description: 'Разработка и поддержка WordPress',
        price: 'от $250'
    },
    {
        title: 'SEO оптимизация',
        description: 'Техническое SEO и продвижение',
        price: 'от $150'
    },
    {
        title: 'Интеграции API',
        description: 'CRM, платежи, Telegram боты',
        price: 'от $100'
    }
]