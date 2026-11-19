import { useMemo, useState } from 'react'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { AdditionalProjects } from '../../components/AdditionalProjects'
import { ProjectModal } from '../../components/ProjectModal'
import { ProjectVisual } from '../../components/ProjectVisual'
import { SectionHeading } from '../../components/SectionHeading'
import { getProjects } from '../../data/projects'
import { useLanguage } from '../../providers/LanguageProvider'
import type { Project } from '../../types'
import styles from './Projects.module.scss'

export function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState<Project['id'] | null>(null)
  const [showAdditional, setShowAdditional] = useState(true)
  const { language, text } = useLanguage()
  const localizedProjects = useMemo(() => getProjects(language, 'featured'), [language])
  const localizedAdditionalProjects = useMemo(() => getProjects(language, 'additional'), [language])
  const selectedProject = [...localizedProjects, ...localizedAdditionalProjects].find(
    ({ id }) => id === selectedProjectId,
  )

  return (
    <section className={styles.section} id="projects">
      <SectionHeading number="01" label={text.projectsLabel}>
        {text.projectsTitleStart}
        <br />
        <em>{text.projectsTitleAccent}</em>.
      </SectionHeading>

      <div className={styles.list}>
        {localizedProjects.map((project) => (
          <article className={styles.project} key={project.id}>
            <ProjectVisual project={project} />

            <div className={styles.info}>
              <span className={styles.role}>{project.role}</span>

              <div className={styles.classification}>
                <span>{text.projectType}</span>
                <div className={styles.typeTags}>
                  {project.projectTypes.map((type) => (
                    <span key={type}>{type}</span>
                  ))}
                </div>
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <p className={styles.contribution}>{project.contribution}</p>

              <div className={styles.technologies}>
                <span>{text.technologies}</span>
                <div className={styles.technologyTags}>
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>

              <button
                className={styles.detailsButton}
                type="button"
                onClick={() => setSelectedProjectId(project.id)}
              >
                {text.details} <ArrowUpRight />
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.additionalSection}>
        <button
          className={styles.additionalToggle}
          type="button"
          aria-expanded={showAdditional}
          aria-controls="additional-projects"
          onClick={() => setShowAdditional((current) => !current)}
        >
          <span>{showAdditional ? text.hideOtherProjects : text.otherProjects}</span>
          <ChevronDown className={showAdditional ? styles.rotated : ''} />
        </button>

        {showAdditional && (
          <AdditionalProjects
            projects={localizedAdditionalProjects}
            onSelect={setSelectedProjectId}
          />
        )}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProjectId(null)} />
      )}
    </section>
  )
}
