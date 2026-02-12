import { getProjectBySlug, getSiteConfig } from '@/lib/api'
import ProjectDetailContent from './ProjectDetailContent'

export const dynamic = 'force-dynamic'

export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params
  
  let caseStudy = null
  let siteConfig = null
  let error = null

  try {
    [caseStudy, siteConfig] = await Promise.all([
      getProjectBySlug(slug),
      getSiteConfig()
    ])
  } catch (e: any) {
    console.error('Failed to fetch data:', e)
    error = 'Failed to load project details'
  }

  return (
    <ProjectDetailContent 
      caseStudy={caseStudy} 
      siteConfig={siteConfig} 
      error={error} 
    />
  )
}
