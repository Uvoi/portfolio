import profilePhoto from '../../assets/me.jpg'
import { getSiteContent } from '../../data/site-content'
import { useLanguage } from '../../providers/LanguageProvider'
import styles from './About.module.scss'

export function About() {
  const { language, text } = useLanguage()
  const { stats, additionalExperience } = getSiteContent(language)

  return (
    <section className={styles.section} id="about">
      <div className={styles.portrait}>
        <img src={profilePhoto} alt={text.portrait} loading="lazy" decoding="async" />
      </div>

      <div className={styles.intro}>
        <div className={styles.kicker}>
          <span>02</span> {text.aboutLabel}
        </div>

        <h2>
          {text.aboutTitleStart}
          <br />
          <em>{text.aboutTitleAccent}</em>
        </h2>

        <p className={styles.lead}>{text.aboutLead}</p>
      </div>

      <div className={styles.columns}>
        <p>{text.aboutColumnOne}</p>
        <p>{text.aboutColumnTwo}</p>
      </div>

      <div className={styles.details}>
        <div className={styles.stats}>
          {stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.additional}>
          <span>{text.additionalExperience}</span>

          <ul>
            {additionalExperience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
