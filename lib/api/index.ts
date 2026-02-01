import {
  Project,
  CaseStudy,
  Experience,
  TechStackItem,
  ContactFormData,
  ContactResponse,
  SiteConfig
} from '@/lib/types'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000'

// Helper to handle API requests
async function apiCall<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  })

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`)
  }

  return response.json()
}

// Site Config API
export const getSiteConfig = async (): Promise<SiteConfig> => {
  return apiCall<SiteConfig>('/api/public/site-config', {
    next: { revalidate: 1800 } // 30 mins
  })
}

// Projects API
export const getProjects = async (): Promise<Project[]> => {
  return apiCall<Project[]>('/api/public/projects', {
    next: { revalidate: 300 } // 5 mins
  })
}

export const getProjectBySlug = async (slug: string): Promise<CaseStudy> => {
  return apiCall<CaseStudy>(`/api/public/projects/${slug}`, {
    next: { revalidate: 1800 } // 30 mins
  })
}

// Experience API
export const getExperience = async (): Promise<Experience[]> => {
  return apiCall<Experience[]>('/api/public/experience', {
    next: { revalidate: 3600 } // 1 hour
  })
}

// Tech Stack API
export const getTechStack = async (): Promise<TechStackItem[]> => {
  return apiCall<TechStackItem[]>('/api/public/tech-stack', {
    next: { revalidate: 3600 } // 1 hour
  })
}

// Contact API
export const submitContact = async (data: ContactFormData): Promise<ContactResponse> => {
  return apiCall<ContactResponse>('/api/public/contact', {
    method: 'POST',
    body: JSON.stringify(data),
    cache: 'no-store' // Never cache
  })
}

// Backward compatibility / convenience
export const projectsAPI = {
  getAll: getProjects,
  getBySlug: getProjectBySlug
}

export const experienceAPI = {
  getAll: getExperience
}

export const techStackAPI = {
  getAll: getTechStack
}

export const contactAPI = {
  submit: submitContact
}

export const siteConfigAPI = {
  get: getSiteConfig
}
