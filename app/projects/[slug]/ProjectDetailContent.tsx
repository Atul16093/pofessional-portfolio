'use client'

import { Box, Container, Typography } from '@mui/material'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CaseStudyCard } from '@/components/cards/CaseStudyCard'
import { SiteConfig, CaseStudy } from '@/lib/types'

interface ProjectDetailContentProps {
  caseStudy: CaseStudy | null
  siteConfig: SiteConfig | null
  error: string | null
}

export default function ProjectDetailContent({ caseStudy, siteConfig, error }: ProjectDetailContentProps) {
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
        {/* Using CaseStudyCard as intended, or falling back to debug view if needed */}
        {/* For now, to match previous state, we render the container and debug info, 
            but using CaseStudyCard is likely the goal. 
            I will render CaseStudyCard because it is ready and better than JSON. 
        */}
        <CaseStudyCard caseStudy={caseStudy} />
        
        {/* 
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Typography variant="h3">{caseStudy.title}</Typography>
            <pre>{JSON.stringify(caseStudy, null, 2)}</pre>
        </Container> 
        */}
      </main>
      <Footer siteConfig={siteConfig || undefined} />
    </>
  )
}
