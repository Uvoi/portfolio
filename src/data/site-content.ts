import type { Language, Service, Stat } from '../types'

interface SiteContent {
  services: Service[]
  stats: Stat[]
  additionalExperience: string[]
}

const siteContent = {
  ru: {
    services: [
      {
        number: '01',
        title: 'Сайты',
        description:
          'Лендинги, сайты-визитки и корпоративные сайты с адаптивной вёрсткой и SEO-оптимизацией.',
      },
      {
        number: '02',
        title: 'Веб-приложения',
        description:
          'Личные кабинеты, административные панели, системы бронирования и интеграции с REST API.',
      },
      {
        number: '03',
        title: 'Дизайн и развитие',
        description:
          'Проектирование интерфейсов, редизайн, оптимизация производительности и поддержка проектов.',
      },
    ],
    stats: [
      { value: '3+', label: 'года опыта' },
      { value: '20+', label: 'проектов' },
      { value: '5', label: 'индустрий' },
    ],
    additionalExperience: [
      'Благотворительные сервисы для помощи пожилым людям и поиска потерянных животных',
    ],
  },
  en: {
    services: [
      {
        number: '01',
        title: 'Websites',
        description:
          'Landing pages, company websites and corporate sites with responsive layouts and SEO optimization.',
      },
      {
        number: '02',
        title: 'Web applications',
        description:
          'User accounts, admin panels, booking systems and services with REST API integrations.',
      },
      {
        number: '03',
        title: 'Design and growth',
        description:
          'Interface design, redesign, performance optimization and ongoing product support.',
      },
    ],
    stats: [
      { value: '3+', label: 'years of experience' },
      { value: '20+', label: 'projects' },
      { value: '5', label: 'industries' },
    ],
    additionalExperience: ['Charity services helping older adults and finding lost pets'],
  },
} satisfies Record<Language, SiteContent>

export function getSiteContent(language: Language): SiteContent {
  return siteContent[language]
}
