import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { ProjectHighlights } from '@/components/sections/ProjectHighlights'
import { Experience } from '@/components/sections/Experience'
import { getSiteConfig, getProjects, getExperience } from '@/lib/api'

export default async function HomePage() {
  const [siteConfig, projects, experience] = await Promise.all([
    getSiteConfig(),
    getProjects(),
    getExperience()
  ])

  return (
    <>
      <Header />
      <main>
        <Hero siteConfig={siteConfig} />
        <ProjectHighlights projects={projects} />
        <Experience experience={experience} />
      </main>
      <Footer siteConfig={siteConfig} />
    </>
  )
}
