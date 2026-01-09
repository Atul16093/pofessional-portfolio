'use client'

import React, { useEffect, useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CaseStudyCard } from '@/components/cards/CaseStudyCard'
import { CaseStudy } from '@/lib/types'
import { projectsAPI } from '@/lib/api'
import { Box, Container, Typography } from '@mui/material'
import { designTokens } from '@/theme/muiTheme'

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [slug, setSlug] = useState<string>('')

  useEffect(() => {
    const loadParams = async () => {
      const resolvedParams = await params
      setSlug(resolvedParams.slug)
    }
    loadParams()
  }, [params])

  useEffect(() => {
    if (!slug) return

    const fetchCaseStudy = async () => {
      try {
        setLoading(true)
        const data = await projectsAPI.getBySlug(slug)
        setCaseStudy(data)
      } catch (err) {
        setError('Failed to load project details')
        console.error('Failed to fetch case study:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchCaseStudy()
  }, [slug])

  if (error) {
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
              {error}
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
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main>
        {caseStudy && <CaseStudyCard caseStudy={caseStudy} isLoading={loading} />}
        {loading && !caseStudy && (
          <Box
            sx={{
              minHeight: '60vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: designTokens.colors.backgroundPrimary,
            }}
          >
            <Typography sx={{ color: designTokens.colors.secondaryText }}>
              Loading...
            </Typography>
          </Box>
        )}
      </main>
      <Footer />
    </>
  )
}
