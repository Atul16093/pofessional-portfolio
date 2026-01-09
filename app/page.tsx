import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { ProjectHighlights } from '@/components/sections/ProjectHighlights'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProjectHighlights />
      </main>
      <Footer />
    </>
  )
}
