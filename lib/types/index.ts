// CMS-first data types
// These interfaces define the data models that will be consumed from CMS

export interface Project {
  id: string
  title: string
  slug: string
  description: string
  thumbnail?: string
  tags?: string[]
  createdAt?: string
  updatedAt?: string
}

export interface CaseStudy {
  id: string
  slug: string
  title: string
  description: string
  content: string
  featuredImage?: string
  images?: string[]
  techStack?: TechStackItem[]
  project?: Project
  createdAt?: string
  updatedAt?: string
}

export interface Experience {
  id: string
  title: string
  company: string
  location?: string
  startDate: string
  endDate?: string
  description: string
  achievements?: string[]
  techStack?: TechStackItem[]
}

export interface TechStackItem {
  id: string
  name: string
  category?: string
  icon?: string
}

