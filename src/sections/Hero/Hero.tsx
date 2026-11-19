import { ArrowDown, Asterisk } from 'lucide-react'
import { DeveloperShowcase } from '../../components/DeveloperShowcase'
import { useLanguage } from '../../providers/LanguageProvider'
import styles from './Hero.module.scss'

export function Hero() {
  const { text } = useLanguage()

  return (
    <section className={styles.hero} id="top">
      <div className={styles.eyebrow}>
        <Asterisk /> {text.heroEyebrow}
      </div>

      <h1>
        {text.heroTitleStart} <em>{text.heroTitleAccent}</em>
        <br />
        {text.heroTitleEnd}
        <span>.</span>
      </h1>

      <div className={styles.bottom}>
        <p>{text.heroDescription}</p>

        <a className={styles.circleLink} href="#projects" aria-label={text.viewProjects}>
          <ArrowDown />
        </a>
      </div>

      <div className={styles.visual} aria-label={text.heroVisual}>
        <div className={styles.noise} />
        <div className={`${styles.orb} ${styles.orbOne}`} />
        <div className={`${styles.orb} ${styles.orbTwo}`} />
        <div className={styles.monogram}>DI</div>
        <DeveloperShowcase />

        <span>Frontend / Design / Web</span>
        <small>Portfolio © 2026</small>
      </div>
    </section>
  )
}
