import { Braces, Gauge, PanelsTopLeft, Workflow } from 'lucide-react'
import { useLanguage } from '../../providers/LanguageProvider'
import styles from './EngineeringPrinciples.module.scss'

const principles = {
  ru: [
    {
      icon: <Workflow />,
      title: 'Архитектура',
      text: 'Понятная структура, разделение ответственности и решения, которые можно развивать.',
    },
    {
      icon: <Braces />,
      title: 'Качество кода',
      text: 'Строгая типизация, переиспользуемые компоненты и предсказуемое состояние.',
    },
    {
      icon: <Gauge />,
      title: 'Производительность',
      text: 'Контроль загрузки, рендеринга и поведения интерфейса на реальных устройствах.',
    },
    {
      icon: <PanelsTopLeft />,
      title: 'Product thinking',
      text: 'Сначала задача пользователя и бизнеса, затем интерфейс и техническая реализация.',
    },
  ],
  en: [
    {
      icon: <Workflow />,
      title: 'Architecture',
      text: 'Clear structure, separated responsibilities and solutions designed to evolve.',
    },
    {
      icon: <Braces />,
      title: 'Code quality',
      text: 'Strict typing, reusable components and predictable state management.',
    },
    {
      icon: <Gauge />,
      title: 'Performance',
      text: 'Careful loading, rendering and interface behavior on real devices.',
    },
    {
      icon: <PanelsTopLeft />,
      title: 'Product thinking',
      text: 'User and business needs first, followed by interface and technical implementation.',
    },
  ],
}

export function EngineeringPrinciples() {
  const { language } = useLanguage()

  return (
    <section className={styles.wrapper}>
      <div className={styles.heading}>
        <span>~/approach</span>
        <p>{language === 'ru' ? 'Инженерные принципы' : 'Engineering principles'}</p>
      </div>

      <div className={styles.grid}>
        {principles[language].map((principle, index) => (
          <article className={styles.card} key={principle.title}>
            <div className={styles.cardTop}>
              {principle.icon}
              <span>0{index + 1}</span>
            </div>
            <h3>{principle.title}</h3>
            <p>{principle.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
