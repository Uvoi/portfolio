export type Language = 'ru' | 'en'
export type ProjectAccent = `#${string}`
export type ProjectLayout = 'dashboard' | 'editorial' | 'mobile'
export type ProjectPlacement = 'featured' | 'additional'

export interface ProjectContent {
  title: string
  description: string
  contribution: string
  contributionPoints: string[]
  role: string
  projectTypes: string[]
  technologies: string[]
  note?: string
}

export interface ProjectDefinition {
  id: string
  placement: ProjectPlacement
  order: number
  accent: ProjectAccent
  layout: ProjectLayout
  private?: boolean
  content: Record<Language, ProjectContent>
}

export interface Project extends ProjectContent {
  id: string
  number: string
  accent: ProjectAccent
  layout: ProjectLayout
  cover?: string
  gallery?: string[]
  private?: boolean
}
export interface Service {
  number: string
  title: string
  description: string
}
export interface Stat {
  value: string
  label: string
}
