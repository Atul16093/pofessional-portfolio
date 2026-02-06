import { API_BASE_URL } from '@/lib/api/client'

// Typed response interface based on backend schema
// Note: Backend uses camelCase (shortIntro, yearsOfExperience) which we reflect here
// to match the actual API response structure directly.
export interface AboutData {
  name: string
  title: string
  shortIntro?: string
  description: string[]
  yearsOfExperience?: number
}

interface AboutApiResponse {
  success: boolean
  data: AboutData & {
    id: number
    uuid: string
    isActive: boolean
    createdAt: string
    updatedAt: string
  }
}

/**
 * Fetches the About page data from the backend.
 * Uses native fetch for Server Components with caching.
 * 
 * DESIGN DECISION:
 * We use fetch() instead of Axios here because this is a Server Component data fetch.
 * Next.js extends the native fetch API to allow granular caching and revalidation (ISR),
 * which is essential for SEO-critical pages like 'About'. Axios does not support these
 * Next.js-specific features out of the box.
 */
export async function getAbout(): Promise<AboutData | null> {
  try {
    const url = `${API_BASE_URL}/public/about`
    
    // Note: Request may not appear in browser Network tab as this happens 
    // strictly on the server (Server Component -> Backend).
    const response = await fetch(url, {
      cache: 'force-cache',
      next: { revalidate: 3600 } // Revalidate every hour (ISR)
    })

    if (!response.ok) {
        console.error(`[API Error] GET /public/about failed: ${response.status}`)
        return null
    }

    const json: AboutApiResponse = await response.json()
    
    if (!json.success || !json.data) {
        return null
    }

    // Return just the data part needed for the UI
    return {
      name: json.data.name,
      title: json.data.title,
      shortIntro: json.data.shortIntro,
      description: json.data.description,
      yearsOfExperience: json.data.yearsOfExperience
    }
  } catch (error) {
    console.error('[API Error] Failed to fetch about data:', error)
    return null
  }
}
