import {
  Project,
  CaseStudy,
  Experience,
  TechStackItem,
  ContactFormData,
  ContactResponse,
  SiteConfig
} from '@/lib/types'
import { apiClient, API_BASE_URL } from './client'
import { OWNER_NAME, OWNER_TITLE, OWNER_SUMMARY, SOCIAL_LINKS } from '@/lib/constants'

// Generic API Response wrapper from backend
interface ApiResponse<T> {
  success: boolean
  code?: string
  message?: string
  data: T
}

// Helper to handle Server-Side API requests (using fetch for Next.js caching)
// We bypass Next.js API routes and hit the backend directly.
// We also unwrap the 'data' property and adapt it to frontend models.
async function serverFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<any> {
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
  try {
    const response = await serverFetch<ApiResponse<any>>('/public/site-config', {
      next: { revalidate: 60 } // 30 mins
    })
    console.dir(response, { depth: null })
    
    const data = response.data || response

    // Adapt backend data to SiteConfig
    return {
      ownerName: data.ownerName || OWNER_NAME,
      ownerTitle: data.heroTitle || OWNER_TITLE,
      ownerSummary: data.heroDescription || OWNER_SUMMARY,
      socialLinks: Array.isArray(data.socialLinks) ? data.socialLinks : [],
      contactEmail: data.contactEmail,
      seo: data.seo,
      footerText: data.footerText,
      primaryCtaLink: data.primaryCtaLink,
      secondaryCtaLink: data.secondaryCtaLink,
      aboutContent: data.aboutContent
    }
  } catch (error) {
    // We'll log this as info rather than a warning because it's expected during initial setup
    if (error instanceof Error && error.message.includes('404')) {
      console.log("Site config not found (404), using default fallback configuration.")
    } else {
      console.warn("Error fetching site config, utilizing fallback defaults:", error)
    }
    
    // Return default config from constants if API fails
    return {
      ownerName: OWNER_NAME,
      ownerTitle: OWNER_TITLE,
      ownerSummary: OWNER_SUMMARY,
      socialLinks: SOCIAL_LINKS.map(link => ({
        platform: link.label.toLowerCase(),
        url: link.href
      })),
      contactEmail: 'hello@example.com',
      footerText: `© ${new Date().getFullYear()} ${OWNER_NAME}. All rights reserved.`,
      primaryCtaLink: '/contact',
      secondaryCtaLink: '/resume.pdf' // Placeholder
    }
  }
}

// Projects API
export const getProjects = async (): Promise<Project[]> => {
  const response = await serverFetch<ApiResponse<any[]>>('/public/projects', {
    next: { revalidate: 3 } // 5 mins
  })
  console.log("Projects API response")
  console.dir(response, { depth: null })
  const rawData = response.data || []
  
  // Adapt backend project to Project interface
  return rawData.map((item: any) => ({
    id: item.id,
    title: item.title,
    slug: item.slug,
    description: item.summary || '',
    shortDescription: item.summary,
    featured: item.isFeatured,
    techStack: item.techStack, // Assuming structure matches or is accepted
    createdAt: item.createdAt,
    updatedAt: item.updatedAt
    // Missing: thumbnail, tags, problemStatement, etc. can be undefined or picked if present
  }))
}

export const getProjectBySlug = async (slug: string): Promise<CaseStudy | null> => {
  try {
    const response = await serverFetch<ApiResponse<any>>(`/public/projects/${slug}`, {
      next: { revalidate: 6 } // 30 mins
    })
    
    const item = response.data || response

    // Adapt backend detail to CaseStudy
    // Note: Backend might not return full CaseStudy fields yet, providing best effort mapping
    return {
      id: item.id,
      slug: item.slug,
      title: item.title,
      description: item.summary || '', // Required field
      shortDescription: item.summary,
      techStack: item.techStack,
      project: item, // Link back to project if needed
      // Defaults for missing required fields if any (CaseStudy interface seems to have many optionals)
    }
  } catch (error) {
    console.warn(`Error fetching project by slug "${slug}", returning null:`, error)
    return null
  }
}

// Experience API
export const getExperience = async (): Promise<Experience[]> => {
  const response = await serverFetch<ApiResponse<any[]>>('/public/experience', {
    next: { revalidate: 3} // 1 hour
  })
  console.log("Experience API response",response)
  
  const rawData = response.data || []

  return rawData.map((item: any) => ({
    id: item.id,
    title: item.role || item.title,  // Adapt 'role' -> 'title'
    company: item.company,
    startDate: item.start_date || item.startDate, // Adapt snake_case
    endDate: item.end_date || item.endDate,
    description: item.description,
    location: item.location,
    achievements: item.achievements, // Optional
    techStack: item.techStack
  }))
}

// Tech Stack API
export const getTechStack = async (): Promise<TechStackItem[]> => {
  const response = await serverFetch<ApiResponse<any>>('/public/tech-stack', {
    next: { revalidate: 3 } // 1 hour
  })
  
  const data = response.data || {}
  
  // Flatten keys if data is grouped by category
  if (!Array.isArray(data) && typeof data === 'object') {
    const allItems: TechStackItem[] = []
    Object.values(data).forEach((group: any) => {
      if (Array.isArray(group)) {
        allItems.push(...group)
      }
    })
    return allItems
  }

  return Array.isArray(data) ? data : []
}

// Contact API
// Uses centralized Axios instance for Client-Side interaction
export const submitContact = async (data: ContactFormData): Promise<ContactResponse> => {
  // Directly POST to backend /public/contact
  const response = await apiClient.post<ContactResponse>('/public/contact', data)
  const result = response.data
  // Ensure we return ContactResponse shape
  // Backend returns { success: true, message: ..., data: ... }
  // ContactResponse requires success (boolean)
  return result
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
