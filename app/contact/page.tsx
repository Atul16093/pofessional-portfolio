import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ContactForm } from '@/components/sections/ContactForm'
import { Box } from '@mui/material'
import { designTokens } from '@/theme/muiTheme'

export const metadata = {
  title: 'Contact | Full-Stack Software Engineer',
  description: 'Get in touch with me for project inquiries, collaborations, or to discuss backend systems and architecture.',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <Box sx={{ backgroundColor: designTokens.colors.backgroundPrimary, minHeight: '100vh' }}>
          <ContactForm />
        </Box>
      </main>
      <Footer />
    </>
  )
}
