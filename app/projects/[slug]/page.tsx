import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
// import { CaseStudyCard } from '@/components/cards/CaseStudyCard'
import { getProjectBySlug, getSiteConfig } from '@/lib/api'
import { Box, Container, Typography } from '@mui/material'
import { designTokens } from '@/theme/muiTheme'

export const dynamic = 'force-dynamic'

export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params
  
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
        <Box sx={{ py: 8, textAlign: 'center' }}>
            <Typography variant="h4">{error || 'Project not found'}</Typography>
        </Box>
        <Footer siteConfig={siteConfig || undefined} />
      </>
    )
  }

  return (
    <>
      <Header />
      <main>
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Typography variant="h3">{caseStudy.title}</Typography>
            {/* <CaseStudyCard caseStudy={caseStudy} /> */}
            <pre>{JSON.stringify(caseStudy, null, 2)}</pre>
        </Container>
      </main>
      <Footer siteConfig={siteConfig || undefined} />
    </>
  )
}
