import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { useLanguage } from '../../providers/LanguageProvider'
import type { Project } from '../../types'
import styles from './ProjectModal.module.scss'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const modalRef = useRef<HTMLElement>(null)
  const { text } = useLanguage()
  const projectImages = [...(project.cover ? [project.cover] : []), ...(project.gallery ?? [])]

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    const previousActiveElement = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()

      if (event.key === 'Tab') {
        const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
          'button, a[href], [tabindex]:not([tabindex="-1"])',
        )

        if (!focusableElements?.length) return

        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault()
          lastElement.focus()
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault()
          firstElement.focus()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
      previousActiveElement?.focus()
    }
  }, [onClose])

  return createPortal(
    <div
      className={styles.backdrop}
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <article
        ref={modalRef}
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-${project.id}-title`}
      >
        <header className={styles.header}>
          <div>
            <span>
              {text.case} / {project.number}
            </span>
            <p>{project.role}</p>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label={text.closeDialog}
          >
            <X />
          </button>
        </header>

        <div className={styles.content}>
          <div className={styles.intro}>
            <h2 id={`project-${project.id}-title`}>{project.title}</h2>
            <p>{project.description}</p>
          </div>

          {projectImages.length > 0 && (
            <div className={styles.gallery}>
              {projectImages.map((image, index) => (
                <figure key={image}>
                  <img
                    src={image}
                    alt={`${project.title}: ${text.screen} ${index + 1}`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </figure>
              ))}
            </div>
          )}

          <div className={styles.meta}>
            <div>
              <span className={styles.label}>{text.projectType}</span>
              <div className={styles.typeTags}>
                {project.projectTypes.map((type) => (
                  <span key={type}>{type}</span>
                ))}
              </div>
            </div>

            <div>
              <span className={styles.label}>{text.technologies}</span>
              <div className={styles.technologyTags}>
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </div>

          <section className={styles.contribution}>
            <span className={styles.label}>{text.contribution}</span>
            <ul>
              {project.contributionPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>

          {project.note && (
            <aside className={styles.note}>
              <span>{text.important}</span>
              <p>{project.note}</p>
            </aside>
          )}
        </div>
      </article>
    </div>,
    document.body,
  )
}
