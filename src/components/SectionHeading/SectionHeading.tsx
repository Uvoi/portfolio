import type { ReactNode } from 'react'
import styles from './SectionHeading.module.scss'

interface Props {
  number: string
  label: string
  children: ReactNode
  light?: boolean
}

export function SectionHeading({ number, label, children, light = false }: Props) {
  return (
    <div className={`${styles.heading} ${light ? styles.light : ''}`}>
      <div className={styles.meta}>
        <span>{number}</span>
        <p>{label}</p>
      </div>

      <h2>{children}</h2>
    </div>
  )
}
