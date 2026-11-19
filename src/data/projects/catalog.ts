import type { Language, Project, ProjectDefinition, ProjectPlacement } from '../../types'

const imageModules = import.meta.glob<string>(
  '../../assets/projects/**/*.{avif,jpeg,jpg,png,webp}',
  { eager: true, import: 'default' },
)

function getProjectMedia(projectId: string) {
  const projectDirectory = `/projects/${projectId}/`
  const images = Object.entries(imageModules)
    .filter(([path]) => path.includes(projectDirectory))
    .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))

  const cover = images.find(([path]) => /\/cover\.[^.]+$/.test(path))?.[1]

  if (!cover) {
    throw new Error(`Project "${projectId}" must have a cover image`)
  }

  const gallery = images
    .filter(([path]) => /\/gallery-\d+\.[^.]+$/.test(path))
    .map(([, image]) => image)

  return { cover, gallery }
}

const projectCatalog = [
  {
    id: 'car-control',
    placement: 'featured',
    order: 10,
    accent: '#011E46',
    layout: 'dashboard',
    content: {
      ru: {
        title: 'Управление автомобилем',
        description:
          'PWA-версия приложения для управления автомобилем и сигнализацией: охрана, автозапуск, история событий, поездки и сценарии автоматизации.',
        contribution:
          'Разработал раздел истории событий, участвовал в переносе мобильной функциональности и проектировал новые интерфейсы продукта.',
        contributionPoints: [
          'Разработал раздел истории событий.',
          'Совместно со вторым frontend-разработчиком реализовывал виджеты и другие части приложения.',
          'Участвовал в переносе возможностей мобильного приложения в веб и работал с архитектурой Feature-Sliced Design.',
          'После первоначального переноса самостоятельно проектировал новые интерфейсы и изменения дизайна.',
        ],
        role: 'Frontend Developer / UI Designer',
        projectTypes: ['Коммерческий продукт', 'PWA', 'Командная разработка'],
        technologies: ['Next.js', 'SCSS', 'Feature-Sliced Design'],
      },
      en: {
        title: 'Remote car control',
        description:
          'A PWA version of an application for remote vehicle and security system control, including arming, remote start, event history, trips and automation scenarios.',
        contribution:
          'Built the event history section, helped transfer mobile functionality to the web and designed new product interfaces.',
        contributionPoints: [
          'Built the event history section.',
          'Worked with a second frontend developer on widgets and other parts of the application.',
          'Helped bring mobile functionality to the web and worked with Feature-Sliced Design architecture.',
          'Independently designed new interfaces and design changes after the initial migration.',
        ],
        role: 'Frontend Developer / UI Designer',
        projectTypes: ['Commercial product', 'PWA', 'Team development'],
        technologies: ['Next.js', 'SCSS', 'Feature-Sliced Design'],
      },
    },
  },
  {
    id: 'tennis-platform',
    placement: 'featured',
    order: 20,
    accent: '#8DC63F',
    layout: 'editorial',
    content: {
      ru: {
        title: 'Теннисная платформа',
        description:
          'Платформа спортивного клуба с онлайн-бронированием, рейтингами игроков, QR-доступом и взаимодействием с электронными шкафчиками.',
        contribution:
          'Самостоятельно переписал frontend, переработал архитектуру и организовал кодовую базу по Feature-Sliced Design.',
        contributionPoints: [
          'Полностью переписал frontend существующего проекта.',
          'Устранил проблемы запутанной структуры и плохо организованного кода.',
          'Переработал архитектуру и компоненты по Feature-Sliced Design.',
          'Привёл кодовую базу к понятной и поддерживаемой структуре.',
        ],
        role: 'Frontend Developer',
        projectTypes: ['Веб-платформа', 'Спорт', 'Полный рефакторинг'],
        technologies: ['React', 'JavaScript', 'SCSS', 'Feature-Sliced Design'],
      },
      en: {
        title: 'Tennis platform',
        description:
          'A sports club platform with online booking, player ratings, QR access and integration with electronic lockers.',
        contribution:
          'Independently rewrote the frontend, redesigned the architecture and reorganized the codebase using Feature-Sliced Design.',
        contributionPoints: [
          'Completely rewrote the existing frontend.',
          'Resolved issues caused by a confusing structure and poorly organized code.',
          'Redesigned the architecture and components using Feature-Sliced Design.',
          'Turned the codebase into a clearer, maintainable foundation.',
        ],
        role: 'Frontend Developer',
        projectTypes: ['Web platform', 'Sports', 'Complete refactoring'],
        technologies: ['React', 'JavaScript', 'SCSS', 'Feature-Sliced Design'],
      },
    },
  },
  {
    id: 'alarmtrade',
    placement: 'featured',
    order: 30,
    accent: '#0C1B24',
    layout: 'dashboard',
    content: {
      ru: {
        title: 'Alarmtrade',
        description:
          'Сайт с информацией о компании, интернет-магазином продукции, поддержкой пользователей, новостями и другими разделами экосистемы бренда.',
        contribution:
          'Самостоятельно проектирую дизайн и разрабатываю весь сайт на Next.js, Payload и SCSS.',
        contributionPoints: [
          'Самостоятельно проектирую UI/UX и визуальную систему сайта.',
          'Разрабатываю frontend на Next.js и SCSS.',
          'Настраиваю управление контентом и данными с помощью Payload CMS.',
          'Реализую каталог и интернет-магазин продукции, разделы о компании, поддержки и новостей.',
        ],
        role: 'Fullstack Developer / UI/UX Designer',
        projectTypes: ['Корпоративный сайт', 'E-commerce', 'В разработке'],
        technologies: ['Next.js', 'Payload CMS', 'SCSS'],
        note: 'Проект находится в активной разработке.',
      },
      en: {
        title: 'Alarmtrade',
        description:
          'A company website with an online product store, customer support, news and other sections across the brand ecosystem.',
        contribution:
          'Independently designing and developing the entire website with Next.js, Payload and SCSS.',
        contributionPoints: [
          'Independently designing the UI/UX and visual system.',
          'Developing the frontend with Next.js and SCSS.',
          'Configuring content and data management with Payload CMS.',
          'Building the product catalogue and online store, company, support and news sections.',
        ],
        role: 'Full-stack Developer / UI/UX Designer',
        projectTypes: ['Corporate website', 'E-commerce', 'In development'],
        technologies: ['Next.js', 'Payload CMS', 'SCSS'],
        note: 'The project is currently in active development.',
      },
    },
  },
  {
    id: 'food-delivery',
    placement: 'featured',
    order: 40,
    accent: '#0F2F22',
    layout: 'editorial',
    content: {
      ru: {
        title: 'Сервис доставки еды',
        description:
          'Полноценный сайт заказа роллов, пиццы и других блюд с каталогом, корзиной, оформлением заказа и передачей данных в административную систему.',
        contribution:
          'Полностью самостоятельно разработал frontend на React и TypeScript в составе команды из двух человек примерно за один месяц.',
        contributionPoints: [
          'Реализовал всю frontend-часть сайта.',
          'Разработал каталог, корзину и процесс оформления заказа.',
          'Интегрировал передачу заказов в административную систему.',
          'Завершил работу в условиях сжатого срока — примерно за один месяц.',
        ],
        role: 'Frontend Developer',
        projectTypes: ['Коммерческий заказ', 'E-commerce', 'Быстрый запуск'],
        technologies: ['React', 'TypeScript'],
      },
      en: {
        title: 'Food delivery service',
        description:
          'A complete ordering website for sushi, pizza and other dishes, with a catalogue, cart, checkout and transfer of orders to an administration system.',
        contribution:
          'Independently developed the entire frontend with React and TypeScript in a two-person team in approximately one month.',
        contributionPoints: [
          'Implemented the complete frontend independently.',
          'Built the catalogue, cart and checkout flow.',
          'Integrated order transfer with the administration system.',
          'Delivered the work under a tight deadline of approximately one month.',
        ],
        role: 'Frontend Developer',
        projectTypes: ['Commercial project', 'E-commerce', 'Fast launch'],
        technologies: ['React', 'TypeScript'],
      },
    },
  },
  {
    id: 'medical-organization',
    placement: 'featured',
    order: 50,
    accent: '#0DB02B',
    layout: 'editorial',
    content: {
      ru: {
        title: 'Сайт медицинской организации',
        description:
          'Корпоративный сайт для представления деятельности медицинской организации, её услуг и необходимой информации для посетителей.',
        contribution:
          'Полностью отвечал за frontend-разработку по готовым дизайн-макетам и интеграцию с серверной частью.',
        contributionPoints: [
          'Разработал frontend-часть сайта по готовому дизайну.',
          'Реализовал адаптивную вёрстку для компьютеров, планшетов и мобильных устройств.',
          'Создал переиспользуемые компоненты, страницы и пользовательскую навигацию.',
          'Интегрировал frontend с backend API, настроил взаимодействия и отображение данных.',
          'Исправлял ошибки и дорабатывал интерфейсы до завершения проекта.',
        ],
        role: 'Frontend Developer',
        projectTypes: ['Корпоративный сайт', 'Медицина', 'Завершённый проект'],
        technologies: ['Frontend', 'REST API', 'Адаптивная вёрстка'],
      },
      en: {
        title: 'Medical organization website',
        description:
          'A corporate website presenting a medical organization, its services and essential information for visitors.',
        contribution:
          'Owned the complete frontend implementation based on provided designs and integrated it with the server-side API.',
        contributionPoints: [
          'Built the frontend from approved design layouts.',
          'Implemented responsive layouts for desktop, tablet and mobile devices.',
          'Created reusable components, pages and user navigation.',
          'Integrated the frontend with the backend API and handled data display and interactions.',
          'Fixed issues and refined the interface through project completion.',
        ],
        role: 'Frontend Developer',
        projectTypes: ['Corporate website', 'Healthcare', 'Completed project'],
        technologies: ['Frontend', 'REST API', 'Responsive layout'],
      },
    },
  },
  {
    id: 'admin-platform',
    placement: 'featured',
    order: 60,
    accent: '#494949',
    layout: 'dashboard',
    private: true,
    content: {
      ru: {
        title: 'Admin-платформа',
        description:
          'Закрытая внутренняя система для управления автомобильным каталогом, логами и другими сервисами компании с ролевым доступом.',
        contribution:
          'Спроектировал UI/UX всего проекта и разработал 2 из 4 панелей.',
        contributionPoints: [
          'Разработал автомобильный каталог с многоуровневыми вложенными секциями и режимами редактирования.',
          'Продумал независимое управление состоянием вложенных компонентов и предотвращение конфликтов.',
          'Контролировал производительность, потребление памяти и корректное отображение изменений.',
          'Разработал интерфейс модуля логов и самостоятельно занимался UI/UX-дизайном.',
        ],
        role: 'Frontend Developer / UI/UX Designer',
        projectTypes: ['Внутренний продукт', 'Admin-платформа', 'NDA'],
        technologies: ['React', 'Architecture', 'UI/UX'],
        note: 'В кейсе не используются реальные конфиденциальные данные.',
      },
      en: {
        title: 'Admin platform',
        description:
          'A private internal system for managing a vehicle catalogue, logs and other company services with role-based access.',
        contribution:
          'Independently developed the complex vehicle catalogue and log module and designed the UI/UX for these interfaces.',
        contributionPoints: [
          'Built a vehicle catalogue with deeply nested sections and editing modes.',
          'Designed independent state management for nested components and prevented conflicts.',
          'Controlled performance, memory use and correct rendering after data edits.',
          'Built the log module interface and independently handled UI/UX design.',
        ],
        role: 'Frontend Developer / UI/UX Designer',
        projectTypes: ['Internal product', 'Admin platform', 'NDA'],
        technologies: ['React', 'Architecture', 'UI/UX'],
        note: 'No real confidential data is shown in this case study.',
      },
    },
  },
  {
    id: 'lighting-control',
    placement: 'additional',
    order: 70,
    accent: '#FF6B33',
    layout: 'mobile',
    content: {
      ru: {
        title: 'Управление освещением',
        description:
          'Дизайн мобильного приложения для настройки и управления промышленными и уличными светильниками.',
        contribution:
          'Самостоятельно спроектировал в Figma несколько экранов интерфейса. Разработкой приложения занимался другой специалист.',
        contributionPoints: [
          'Спроектировал интерфейсы настройки и управления осветительным оборудованием.',
          'Продумал мобильные сценарии для промышленных и уличных светильников.',
          'Самостоятельно подготовил несколько экранов приложения в Figma.',
        ],
        role: 'UI/UX Designer',
        projectTypes: ['UI/UX дизайн', 'Мобильное приложение', 'Промышленность'],
        technologies: ['Figma'],
        note: 'Моя роль ограничивалась UI/UX-дизайном. Разработкой приложения занимался другой специалист.',
      },
      en: {
        title: 'Lighting control',
        description:
          'Mobile application design for configuring and controlling industrial and outdoor lighting equipment.',
        contribution:
          'Independently designed several application screens in Figma. Another specialist developed the application.',
        contributionPoints: [
          'Designed interfaces for configuring and controlling lighting equipment.',
          'Planned mobile scenarios for industrial and outdoor lights.',
          'Independently prepared multiple application screens in Figma.',
        ],
        role: 'UI/UX Designer',
        projectTypes: ['UI/UX design', 'Mobile application', 'Industrial'],
        technologies: ['Figma'],
        note: 'My role was limited to UI/UX design. Another specialist developed the application.',
      },
    },
  },
  {
    id: 'passgen',
    placement: 'additional',
    order: 80,
    accent: '#C9FF2F',
    layout: 'dashboard',
    content: {
      ru: {
        title: 'Passgen',
        description:
          'Собственный генератор паролей, выполняющий вычисления локально на устройстве.',
        contribution:
          'Разработал концепцию и реализацию инструмента с акцентом на локальную работу.',
        contributionPoints: [
          'Реализовал генерацию паролей.',
          'Организовал вычисления локально на устройстве.',
        ],
        role: 'Собственный проект',
        projectTypes: ['Pet project', 'Инструмент', 'Безопасность'],
        technologies: ['Frontend', 'Local calculations'],
      },
      en: {
        title: 'Passgen',
        description:
          'A personal password generator that performs all calculations locally on device.',
        contribution: 'Designed and implemented the tool with a focus on local operation.',
        contributionPoints: [
          'Implemented password generation.',
          'Kept calculations local to the device.',
        ],
        role: 'Personal project',
        projectTypes: ['Pet project', 'Utility', 'Security'],
        technologies: ['Frontend', 'Local calculations'],
      },
    },
  },
  {
    id: 'passman',
    placement: 'additional',
    order: 90,
    accent: '#3458F5',
    layout: 'editorial',
    content: {
      ru: {
        title: 'Passman',
        description:
          'Приложение для управления данными генерации паролей с frontend и серверной частью.',
        contribution: 'Разработал собственный fullstack-проект на React, FastAPI и PostgreSQL.',
        contributionPoints: [
          'Разработал пользовательский интерфейс на React.',
          'Использовал FastAPI для серверной части и PostgreSQL для хранения данных.',
        ],
        role: 'Собственный проект',
        projectTypes: ['Pet project', 'Fullstack', 'Безопасность'],
        technologies: ['React', 'Python', 'FastAPI', 'PostgreSQL'],
      },
      en: {
        title: 'Passman',
        description:
          'An application for managing password-generation data with a frontend and API.',
        contribution: 'Built a personal full-stack project using React, FastAPI and PostgreSQL.',
        contributionPoints: [
          'Built the user interface with React.',
          'Used FastAPI for the server and PostgreSQL for data storage.',
        ],
        role: 'Personal project',
        projectTypes: ['Pet project', 'Full stack', 'Security'],
        technologies: ['React', 'Python', 'FastAPI', 'PostgreSQL'],
      },
    },
  },
] satisfies ProjectDefinition[]

function validateCatalog(catalog: ProjectDefinition[]) {
  const ids = new Set<string>()
  const orders = new Set<number>()

  for (const project of catalog) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.id)) {
      throw new Error(`Project id "${project.id}" must use kebab-case`)
    }

    if (ids.has(project.id)) {
      throw new Error(`Duplicate project id: "${project.id}"`)
    }

    if (orders.has(project.order)) {
      throw new Error(`Duplicate project order: ${project.order}`)
    }

    ids.add(project.id)
    orders.add(project.order)
  }
}

validateCatalog(projectCatalog)

const orderedCatalog = [...projectCatalog].sort((first, second) => first.order - second.order)

function localizeProject(
  definition: ProjectDefinition,
  language: Language,
  index: number,
): Project {
  const { id, accent, layout, private: isPrivate, content } = definition

  return {
    id,
    number: String(index + 1).padStart(2, '0'),
    accent,
    layout,
    ...getProjectMedia(id),
    private: isPrivate,
    ...content[language],
  }
}

export function getProjects(language: Language, placement?: ProjectPlacement): Project[] {
  return orderedCatalog
    .map((project, index) => ({
      definition: project,
      project: localizeProject(project, language, index),
    }))
    .filter(({ definition }) => !placement || definition.placement === placement)
    .map(({ project }) => project)
}
