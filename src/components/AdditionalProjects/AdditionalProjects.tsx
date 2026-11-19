import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../../providers/LanguageProvider'
import type { Project } from '../../types'
import styles from './AdditionalProjects.module.scss'

interface AdditionalProjectsProps {
  projects: Project[]
  onSelect: (projectId: Project['id']) => void
}

export function AdditionalProjects({ projects, onSelect }: AdditionalProjectsProps) {
  const { text } = useLanguage()

  return (
    <div className={styles.grid} id="additional-projects">
      {projects.map((project) => (
        <article className={styles.card} key={project.id}>
          <button type="button" onClick={() => onSelect(project.id)}>
            <div className={styles.visual}>
              {project.cover ? (
                <img
                  src={project.cover}
                  alt={`${text.projectImage}: ${project.title}`}
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <span>{project.number}</span>
              )}
            </div>

            <div className={styles.content}>
              <span className={styles.role}>{project.role}</span>

              <div className={styles.titleRow}>
                <h3>{project.title}</h3>
                <ArrowUpRight />
              </div>

              <p>{project.description}</p>

              <div className={styles.technologies}>
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </button>
        </article>
      ))}
    </div>
  )
}
