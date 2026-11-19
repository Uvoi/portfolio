import type { Project } from '../../types'
import { useLanguage } from '../../providers/LanguageProvider'
import styles from './ProjectVisual.module.scss'

function getContrastColor(hexColor: string) {
  const hex = hexColor.replace('#', '')

  if (!/^[0-9a-f]{6}$/i.test(hex)) return '#11120f'

  const [red, green, blue] = [0, 2, 4].map((offset) =>
    Number.parseInt(hex.slice(offset, offset + 2), 16),
  )
  const luminance = (red * 299 + green * 587 + blue * 114) / 1000

  return luminance > 150 ? '#11120f' : '#ffffff'
}

export function ProjectVisual({ project }: { project: Project }) {
  const { text } = useLanguage()

  return (
    <div
      className={`${styles.visual} ${styles[project.layout]}`}
      style={{ backgroundColor: project.accent, color: getContrastColor(project.accent) }}
    >
      <span className={styles.number}>{project.number}</span>
      {project.cover ? (
        <div className={styles.coverWrap}>
          <img
            src={project.cover}
            alt={`${text.projectImage}: ${project.title}`}
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : (
        <>
          <div className={styles.grid} aria-hidden="true" />

          <div className={styles.mockup}>
            <div className={styles.mockupBar}>
              <i />
              <i />
              <i />
              <b>your-project.com</b>
            </div>
            <div className={styles.mockupContent}>
              <small>
                {project.private
                  ? 'NDA / CONCEPT'
                  : `${text.case.toUpperCase()} / ${project.number}`}
              </small>
              <strong>
                {project.title.split(' ')[0]}
                <br />
                {project.title.split(' ').slice(1).join(' ')}
              </strong>
              <i />
            </div>
          </div>

          {project.layout === 'mobile' && (
            <div className={styles.phone}>
              <span>
                YOUR
                <br />
                APP
              </span>
            </div>
          )}
        </>
      )}

      <span className={styles.imageLabel}>
        {project.private ? text.privateImage : text.projectImage}
      </span>
    </div>
  )
}
