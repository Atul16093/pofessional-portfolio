// CMS-first data types
// These interfaces define the data models that will be consumed from CMS

export interface TechStackItem {
  id: string
  name: string
  category: string
  icon?: string
}

export interface Project {
  id: string
  title: string
  slug: string
  description: string
  shortDescription?: string
  problemStatement?: string
  systemChallenge?: string
  thumbnail?: string
  tags?: string[]
  techStack?: TechStackItem[]
  featured?: boolean
  createdAt?: string
  updatedAt?: string
}

export interface CaseStudySection {
  id: string
  title: string
  content: string
  type: 'text' | 'image' | 'callout' | 'code' | 'list'
  image?: string
  order: number
}

export interface CaseStudy {
  id: string
  slug: string
  title: string
  description: string
  content?: string
  shortDescription?: string
  problemStatement?: string
  keyChallengeSolved?: string
  systemArchitecture?: {
    image?: string
    description?: string
  }
  keyTechnicalDecisions?: string[]
  tradeOffs?: string[]
  improvements?: string[]
  featuredImage?: string
  images?: string[]
  techStack?: TechStackItem[]
  project?: Project
  sections?: CaseStudySection[]
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

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface ContactResponse {
  success: boolean
  message?: string
  error?: string
}

export interface SiteConfig {
  ownerName: string
  ownerTitle: string
  ownerSummary?: string
  socialLinks?: {
    github?: string
    linkedin?: string
    twitter?: string
    email?: string
  }
  contactEmail?: string
  seo?: {
    title?: string
    description?: string
    keywords?: string[]
  }
  footerText?: string
}

