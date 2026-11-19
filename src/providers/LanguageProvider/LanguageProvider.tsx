import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import type { Language } from '../../types'

const copy = {
  ru: {
    navigation: ['Проекты', 'Обо мне', 'Экспертиза', 'Контакты'],
    home: 'На главную',
    mainNavigation: 'Основная навигация',
    available: 'Доступен для проектов',
    openMenu: 'Открыть меню',
    closeMenu: 'Закрыть меню',
    heroEyebrow: 'Frontend-разработчик / Калуга',
    heroTitleStart: 'Создаю',
    heroTitleAccent: 'сильные',
    heroTitleEnd: 'веб-продукты',
    heroDescription:
      'Разрабатываю сайты и веб-приложения, которые красиво выглядят, удобно работают и решают реальные задачи бизнеса.',
    viewProjects: 'Смотреть проекты',
    heroVisual: 'Абстрактная технологичная композиция',
    projectsLabel: 'Избранные проекты',
    projectsTitleStart: 'Работы, которыми',
    projectsTitleAccent: 'я горжусь',
    projectType: 'Тип проекта',
    technologies: 'Технологии',
    details: 'Подробнее',
    otherProjects: 'Другие проекты',
    hideOtherProjects: 'Скрыть другие проекты',
    projectImage: 'Интерфейс проекта',
    privateImage: 'Без конфиденциальных данных',
    case: 'Кейс',
    closeDialog: 'Закрыть окно',
    screen: 'экран',
    contribution: 'Мой вклад',
    important: 'Важно',
    portrait: 'Портрет Дмитрия Иову',
    aboutLabel: 'Обо мне',
    aboutTitleStart: 'Опыт — это не цифра.',
    aboutTitleAccent: 'Это качество решений.',
    aboutLead:
      'Меня зовут Дмитрий Иову. Я веб-разработчик и веб-дизайнер с опытом более трёх лет и 20+ реализованными проектами.',
    aboutColumnOne:
      'Разрабатываю лендинги, корпоративные сайты и сложные веб-приложения: личные кабинеты, административные панели, системы бронирования и сервисы с интеграциями.',
    aboutColumnTwo:
      'Уделяю внимание архитектуре, чистоте кода, производительности и мобильным устройствам. Работаю самостоятельно и в команде — от идеи и интерфейса до запуска и развития.',
    additionalExperience: 'Также в опыте',
    expertiseLabel: 'Экспертиза',
    expertiseTitleStart: 'От идеи',
    expertiseTitleAccent: 'до результата.',
    stackTitle: 'Технологический стек',
    stackDescription: 'Инструменты, которые использую в ежедневной работе',
    contacts: 'Контакты',
    contactTitle: 'Есть задача?',
    contactAccent: 'Давайте обсудим.',
    writeMe: 'Написать мне',
    hideContacts: 'Скрыть контакты',
    chooseContact: 'Выберите удобный способ связи',
    telegramHint: 'Обычно отвечаю быстрее всего',
    emailHint: 'Для подробного описания задачи',
    linkedinHint: 'Профессиональный профиль',
    profileComingSoon: 'Профиль готовится',
    toTop: 'Наверх ↑',
  },
  en: {
    navigation: ['Projects', 'About', 'Expertise', 'Contacts'],
    home: 'Back to top',
    mainNavigation: 'Main navigation',
    available: 'Available for projects',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    heroEyebrow: 'Frontend Developer / Moscow',
    heroTitleStart: 'I build',
    heroTitleAccent: 'powerful',
    heroTitleEnd: 'web products',
    heroDescription:
      'I build websites and web applications that look refined, feel intuitive and solve real business problems.',
    viewProjects: 'View projects',
    heroVisual: 'Abstract technology composition',
    projectsLabel: 'Selected projects',
    projectsTitleStart: 'Work that',
    projectsTitleAccent: 'I am proud of',
    projectType: 'Project type',
    technologies: 'Technologies',
    details: 'View details',
    otherProjects: 'Other projects',
    hideOtherProjects: 'Hide other projects',
    projectImage: 'Project interface',
    privateImage: 'No confidential data',
    case: 'Case study',
    closeDialog: 'Close dialog',
    screen: 'screen',
    contribution: 'My contribution',
    important: 'Important',
    portrait: 'Portrait of Dmitry Iovu',
    aboutLabel: 'About me',
    aboutTitleStart: 'Experience is not a number.',
    aboutTitleAccent: 'It is the quality of decisions.',
    aboutLead:
      'I am Dmitry Iovu, a web developer and web designer with over three years of experience and more than 20 completed projects.',
    aboutColumnOne:
      'I build landing pages, corporate websites and complex web applications: user accounts, admin panels, booking systems and integrated services.',
    aboutColumnTwo:
      'I focus on architecture, clean code, performance and mobile experiences. I work independently and in teams, from concept and interface to launch and growth.',
    additionalExperience: 'Other experience',
    expertiseLabel: 'Expertise',
    expertiseTitleStart: 'From idea',
    expertiseTitleAccent: 'to outcome.',
    stackTitle: 'Technology stack',
    stackDescription: 'Tools I use in my everyday work',
    contacts: 'Contacts',
    contactTitle: 'Have a project?',
    contactAccent: "Let's talk.",
    writeMe: 'Contact me',
    hideContacts: 'Hide contacts',
    chooseContact: 'Choose a convenient way to reach me',
    telegramHint: 'Usually the fastest way to reach me',
    emailHint: 'Best for a detailed project brief',
    linkedinHint: 'Professional profile',
    profileComingSoon: 'Profile coming soon',
    toTop: 'Back to top ↑',
  },
} as const

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  text: (typeof copy)[Language]
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('portfolio-language')
    return savedLanguage === 'en' ? 'en' : 'ru'
  })

  useEffect(() => {
    localStorage.setItem('portfolio-language', language)
    document.documentElement.lang = language
    document.title =
      language === 'ru' ? 'Дмитрий Иову — Frontend-разработчик' : 'Dmitry Iovu — Frontend Developer'

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')

    if (description) {
      description.content =
        language === 'ru'
          ? 'Портфолио Дмитрия Иову — frontend-разработка, веб-приложения, современные сайты и дизайн интерфейсов.'
          : 'Dmitry Iovu portfolio — frontend development, web applications, modern websites and interface design.'
    }
  }, [language])

  const value = useMemo(() => ({ language, setLanguage, text: copy[language] }), [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider')
  }

  return context
}
