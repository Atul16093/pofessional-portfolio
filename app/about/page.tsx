import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { AboutPageContent } from '@/components/pages/AboutPageContent'
import { getAbout } from '@/lib/api/about'
import { getSiteConfig } from '@/lib/api'
import type { Metadata } from 'next'

// Generate dynamic metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
  const data = await getAbout()
  
  if (!data) {
    return {
      title: 'About | Portfolio',
      description: 'About the portfolio owner.'
    }
  }

  return {
    title: `About | ${data.name}`,
    description: `Learn more about ${data.name}, a ${data.title}. ${data.shortIntro || ''}`,
  }
}

export default async function AboutPage() {
  // Fetch data on the server (cached)
  // We use fetch() implicitly via getAbout() to support ISR
  const [aboutData, siteConfig] = await Promise.all([
    getAbout(),
    getSiteConfig() // Site config for the Footer
  ])

  return (
    <>
      <Header />
      <AboutPageContent data={aboutData} />
      <Footer siteConfig={siteConfig} />
    </>
  )
}
