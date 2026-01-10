import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ProjectsPageContent } from '@/components/pages/ProjectsPageContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Full-Stack Software Engineer',
  description: 'Explore my recent projects and case studies showcasing scalable backend systems and technical solutions.',
}

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <ProjectsPageContent />
      <Footer />
    </>
  )
}
