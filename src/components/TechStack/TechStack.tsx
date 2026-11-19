import type { CSSProperties, ReactNode } from 'react'
import { Braces, PanelsTopLeft, SearchCheck } from 'lucide-react'
import {
  SiFigma,
  SiGit,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiReactquery,
  SiRedux,
  SiSass,
  SiTypescript,
  SiVite,
} from 'react-icons/si'
import { useLanguage } from '../../providers/LanguageProvider'
import styles from './TechStack.module.scss'

interface Technology {
  name: string
  group: string
  color: string
  icon: ReactNode
}

const technologies: Technology[] = [
  { name: 'React', group: 'Frontend', color: '#61dafb', icon: <SiReact /> },
  { name: 'Next.js', group: 'Framework', color: '#ffffff', icon: <SiNextdotjs /> },
  { name: 'TypeScript', group: 'Language', color: '#3178c6', icon: <SiTypescript /> },
  { name: 'JavaScript', group: 'Language', color: '#f7df1e', icon: <SiJavascript /> },
  { name: 'Redux', group: 'State', color: '#9b72de', icon: <SiRedux /> },
  { name: 'TanStack Query', group: 'Data', color: '#ff4154', icon: <SiReactquery /> },
  { name: 'SWR', group: 'Data', color: '#ffffff', icon: <strong>SWR</strong> },
  { name: 'SCSS', group: 'Styles', color: '#cc6699', icon: <SiSass /> },
  { name: 'REST API', group: 'Integration', color: '#c9ff2f', icon: <Braces /> },
  { name: 'Figma', group: 'Design', color: '#f24e1e', icon: <SiFigma /> },
  { name: 'Git', group: 'Tools', color: '#f05032', icon: <SiGit /> },
  { name: 'Vite', group: 'Build', color: '#bd8bff', icon: <SiVite /> },
  { name: 'UI / UX', group: 'Design', color: '#6f9cff', icon: <PanelsTopLeft /> },
  { name: 'SEO', group: 'Optimization', color: '#c9ff2f', icon: <SearchCheck /> },
]

export function TechStack() {
  const { text } = useLanguage()

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <span>{text.stackTitle}</span>
        <p>{text.stackDescription}</p>
      </div>

      <div className={styles.grid}>
        {technologies.map((technology) => (
          <article
            className={styles.card}
            key={technology.name}
            style={{ '--technology-color': technology.color } as CSSProperties}
          >
            <div className={styles.icon}>{technology.icon}</div>
            <div>
              <h4>{technology.name}</h4>
              <span>{technology.group}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
