import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../../providers/LanguageProvider'
import styles from './Header.module.scss'

const navigationLinks = ['#projects', '#about', '#expertise', '#contact']

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [scrollProgress, setScrollProgress] = useState(0)
  const { language, setLanguage, text } = useLanguage()

  useEffect(() => {
    const close = () => setMenuOpen(false)

    window.addEventListener('resize', close)

    return () => window.removeEventListener('resize', close)
  }, [])

  useEffect(() => {
    const sections = navigationLinks
      .map((href) => document.querySelector(href))
      .filter((section): section is Element => Boolean(section))

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]

        if (visibleSection) setActiveSection(`#${visibleSection.target.id}`)
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.25, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))

    const updateProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0)
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', updateProgress)
    }
  }, [])

  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#top" aria-label={text.home}>
        IOVU<span>.dev</span>
      </a>

      <nav
        className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
        aria-label={text.mainNavigation}
      >
        {text.navigation.map((label, index) => (
          <a
            className={activeSection === navigationLinks[index] ? styles.activeNav : ''}
            href={navigationLinks[index]}
            key={navigationLinks[index]}
            onClick={() => setMenuOpen(false)}
          >
            <span>0{index + 1}</span>
            {label}
          </a>
        ))}
      </nav>

      <div className={styles.actions}>
        <div
          className={`${styles.languages} ${language === 'en' ? styles.languagesEn : ''}`}
          aria-label="Language / Язык"
        >
          <button
            className={language === 'ru' ? styles.activeLanguage : ''}
            type="button"
            aria-label="Русский язык"
            aria-pressed={language === 'ru'}
            onClick={() => setLanguage('ru')}
          >
            <span className={styles.flag} aria-hidden="true">
              🇷🇺
            </span>
            <span className={styles.languageCode}>RU</span>
          </button>
          <button
            className={language === 'en' ? styles.activeLanguage : ''}
            type="button"
            aria-label="English language"
            aria-pressed={language === 'en'}
            onClick={() => setLanguage('en')}
          >
            <span className={styles.flag} aria-hidden="true">
              🇺🇸
            </span>
            <span className={styles.languageCode}>EN</span>
          </button>
        </div>

        <a className={styles.availability} href="#contact">
          <span /> {text.available}
        </a>

        <button
          className={styles.menuButton}
          type="button"
          aria-label={menuOpen ? text.closeMenu : text.openMenu}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div className={styles.progress} style={{ transform: `scaleX(${scrollProgress})` }} />
    </header>
  )
}
