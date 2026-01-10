'use client'

import { Box } from '@mui/material'
import { ContactForm } from '@/components/sections/ContactForm'
import { designTokens } from '@/theme/muiTheme'

export function ContactPageContent() {
  return (
    <main>
      <Box sx={{ backgroundColor: designTokens.colors.backgroundPrimary, minHeight: '100vh' }}>
        <ContactForm />
      </Box>
    </main>
  )
}

