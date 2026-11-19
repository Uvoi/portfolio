import { ArrowUpRight } from 'lucide-react'
import { EngineeringPrinciples } from '../../components/EngineeringPrinciples'
import { SectionHeading } from '../../components/SectionHeading'
import { TechStack } from '../../components/TechStack'
import { getSiteContent } from '../../data/site-content'
import { useLanguage } from '../../providers/LanguageProvider'
import styles from './Expertise.module.scss'

export function Expertise() {
  const { language, text } = useLanguage()
  const { services } = getSiteContent(language)

  return (
    <section className={styles.section} id="expertise">
      <SectionHeading number="03" label={text.expertiseLabel} light>
        {text.expertiseTitleStart}
        <br />
        <em>{text.expertiseTitleAccent}</em>
      </SectionHeading>

      <div>
        {services.map((service) => (
          <article className={styles.service} key={service.number}>
            <span>{service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ArrowUpRight />
          </article>
        ))}
      </div>

      <EngineeringPrinciples />
      <TechStack />
    </section>
  )
}
