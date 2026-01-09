import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ProjectsSection } from '@/components/sections/Projects'
import { Container, Box, Typography } from '@mui/material'
import { designTokens } from '@/theme/muiTheme'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Full-Stack Software Engineer',
  description: 'Explore my recent projects and case studies showcasing scalable backend systems and technical solutions.',
}

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section for Projects Page */}
        <Box
          sx={{
            backgroundColor: designTokens.colors.backgroundPrimary,
            py: { xs: 6, md: 8 },
            px: { xs: 2, md: 3 },
            borderBottom: `1px solid ${designTokens.colors.borderDivider}`,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              component="h1"
              variant="h1"
              sx={{
                color: designTokens.colors.primaryText,
                fontWeight: 700,
                textAlign: 'center',
                mb: 2,
              }}
            >
              My Projects
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: designTokens.colors.secondaryText,
                textAlign: 'center',
                fontSize: '1.1rem',
              }}
            >
              Scalable backend systems, system design, and real-time infrastructure
            </Typography>
          </Container>
        </Box>

        {/* Projects List */}
        <Box sx={{ backgroundColor: designTokens.colors.backgroundPrimary }}>
          <ProjectsSection limit={3} />
        </Box>
      </main>
      <Footer />
    </>
  )
}
