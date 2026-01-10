import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { AboutPageContent } from '@/components/pages/AboutPageContent'
import { OWNER_NAME, OWNER_TITLE, OWNER_SUMMARY } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `About | ${OWNER_NAME}`,
  description: `Learn more about ${OWNER_NAME}, a ${OWNER_TITLE}. ${OWNER_SUMMARY}`,
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <AboutPageContent />
      <Footer />
    </>
  )
}

