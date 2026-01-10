import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ContactPageContent } from '@/components/pages/ContactPageContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Full-Stack Software Engineer',
  description: 'Get in touch with me for project inquiries, collaborations, or to discuss backend systems and architecture.',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactPageContent />
      <Footer />
    </>
  )
}
