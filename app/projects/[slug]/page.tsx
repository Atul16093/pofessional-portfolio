import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CaseStudyCard } from '@/components/cards/CaseStudyCard'
import { getProjectBySlug, getSiteConfig } from '@/lib/api'
import { Box, Container, Typography } from '@mui/material'
import { designTokens } from '@/theme/muiTheme'

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  
  let caseStudy = null
  let siteConfig = null
  let error = null

  try {
    [caseStudy, siteConfig] = await Promise.all([
      getProjectBySlug(slug),
      getSiteConfig()
    ])
  } catch (e) {
    console.error('Failed to fetch data:', e)
    error = 'Failed to load project details'
  }

  if (error || !caseStudy) {
    return (
      <>
        <Header />
        <Box
          sx={{
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: designTokens.colors.backgroundPrimary,
            py: 8,
            px: 2,
          }}
        >
          <Container maxWidth="md">
            <Typography
              variant="h3"
              sx={{
                color: designTokens.colors.accentHighlight,
                textAlign: 'center',
                mb: 2,
              }}
            >
              {error || 'Project not found'}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: designTokens.colors.secondaryText,
                textAlign: 'center',
              }}
            >
              Please go back to the projects page and try again.
            </Typography>
          </Container>
        </Box>
        <Footer siteConfig={siteConfig || undefined} />
      </>
    )
  }

  return (
    <>
      <Header />
      <main>
        <CaseStudyCard caseStudy={caseStudy} />
      </main>
      <Footer siteConfig={siteConfig || undefined} />
    </>
  )
}
