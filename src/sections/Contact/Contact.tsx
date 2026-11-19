import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Mail, MoveRight, Send, X } from 'lucide-react'
import { FaLinkedinIn } from 'react-icons/fa6'
import { LocalTime } from '../../components/LocalTime'
import { useLanguage } from '../../providers/LanguageProvider'
import styles from './Contact.module.scss'

export function Contact() {
  const { text } = useLanguage()
  const [contactsOpen, setContactsOpen] = useState(false)
  const methodsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contactsOpen) return

    const frame = window.requestAnimationFrame(() => {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      methodsRef.current?.scrollIntoView({
        behavior: reducedMotion ? 'auto' : 'smooth',
        block: 'center',
      })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [contactsOpen])

  return (
    <section className={styles.section} id="contact">
      <div className={styles.topline}>
        <div className={styles.kicker}>
          <span>04</span> {text.contacts}
        </div>

        <LocalTime />
      </div>

      <div className={styles.body}>
        <h2>
          {text.contactTitle}
          <br />
          <em>{text.contactAccent}</em>
        </h2>

        <button
          className={`${styles.button} ${contactsOpen ? styles.buttonOpen : ''}`}
          type="button"
          aria-expanded={contactsOpen}
          aria-controls="contact-methods"
          onClick={() => setContactsOpen((current) => !current)}
        >
          {contactsOpen ? text.hideContacts : text.writeMe}
          {contactsOpen ? <X /> : <MoveRight />}
        </button>
      </div>

      {contactsOpen && (
        <div ref={methodsRef} className={styles.contactMethods} id="contact-methods">
          <div className={styles.methodsHeading}>
            <span>~/contact</span>
            <p>{text.chooseContact}</p>
          </div>

          <div className={styles.methodsGrid}>
            <a href="https://t.me/duuvmioitru" target="_blank" rel="noreferrer">
              <div className={styles.methodIcon}>
                <Send />
              </div>
              <div>
                <span>Telegram</span>
                <strong>@duuvmioitru</strong>
                <small>{text.telegramHint}</small>
              </div>
              <ArrowUpRight />
            </a>

            <a href="mailto:iovu_dmtr@yahoo.com">
              <div className={styles.methodIcon}>
                <Mail />
              </div>
              <div>
                <span>Email</span>
                <strong>iovu_dmtr@yahoo.com</strong>
                <small>{text.emailHint}</small>
              </div>
              <ArrowUpRight />
            </a>

            <div className={styles.disabledMethod} aria-label={text.profileComingSoon}>
              <div className={styles.methodIcon}>
                <FaLinkedinIn />
              </div>
              <div>
                <span>LinkedIn</span>
                <strong>{text.profileComingSoon}</strong>
                <small>{text.linkedinHint}</small>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className={styles.footer}>
        <p>© 2026 Дмитрий Иову</p>

        <div>
          <a href="https://t.me/duuvmioitru" target="_blank" rel="noreferrer">
            Telegram
          </a>
          <a href="https://github.com/Uvoi" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="mailto:iovu_dmtr@yahoo.com">Email</a>
        </div>

        <a href="#top">{text.toTop}</a>
      </footer>
    </section>
  )
}
