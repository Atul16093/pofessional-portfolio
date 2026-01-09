import { Project, CaseStudy, Experience, TechStackItem, ContactFormData, ContactResponse } from '@/lib/types'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || ''

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

// Projects API
export const projectsAPI = {
  getAll: async (): Promise<Project[]> => {
    return apiCall<Project[]>('/api/projects')
  },

  getBySlug: async (slug: string): Promise<CaseStudy> => {
    return apiCall<CaseStudy>(`/api/projects/${slug}`)
  },
}

// Experience API
export const experienceAPI = {
  getAll: async (): Promise<Experience[]> => {
    return apiCall<Experience[]>('/api/experience')
  },
}

// Tech Stack API
export const techStackAPI = {
  getAll: async (): Promise<TechStackItem[]> => {
    return apiCall<TechStackItem[]>('/api/tech-stack')
  },

  getByCategory: async (category: string): Promise<TechStackItem[]> => {
    return apiCall<TechStackItem[]>(`/api/tech-stack?category=${category}`)
  },
}

// Contact API
export const contactAPI = {
  submit: async (data: ContactFormData): Promise<ContactResponse> => {
    return apiCall<ContactResponse>('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  },
}

// CMS API
export const cmsAPI = {
  getProjects: async (): Promise<Project[]> => {
    return projectsAPI.getAll()
  },

  getProjectBySlug: async (slug: string): Promise<CaseStudy> => {
    return projectsAPI.getBySlug(slug)
  },

  getExperience: async (): Promise<Experience[]> => {
    return experienceAPI.getAll()
  },

  getTechStack: async (): Promise<TechStackItem[]> => {
    return techStackAPI.getAll()
  },
}
