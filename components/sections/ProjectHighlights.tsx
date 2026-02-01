'use client'

import React from 'react'
import { Box, Typography, Stack, Container } from '@mui/material'
import Link from 'next/link'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { designTokens } from '@/theme/muiTheme'
import { Project } from '@/lib/types'

interface ProjectHighlightsProps {
  projects: Project[]
}

export function ProjectHighlights({ projects }: ProjectHighlightsProps) {
  // Filter featured and slice top 3
  const highlighted = projects
    .filter((p) => p.featured)
    .slice(0, 3)

  if (highlighted.length === 0) {
    return null
  }

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: designTokens.colors.backgroundSecondary,
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 3 },
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={{ xs: 4, md: 6 }}>
          {/* Section Header */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              component="h2"
              variant="h2"
              sx={{
                color: designTokens.colors.projectsHeading,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              Projects
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: designTokens.colors.secondaryText,
                mt: 2,
              }}
            >
              Solving real problems with scalable backend systems
            </Typography>
          </Box>

          {/* Project Cards Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: highlighted.length === 1 ? '1fr' : highlighted.length === 2 ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(350px, 1fr))',
              },
              gap: { xs: 3, md: 4 },
              maxWidth: '1400px',
              mx: 'auto',
            }}
          >
            {highlighted.map((project) => (
              <Box
                key={project.id}
                sx={{
                  display: 'flex',
                  '& .project-card': {
                    width: '100%',
                  },
                }}
              >
                <ProjectCard
                  project={project}
                  variant="full"
                  showFeatured
                />
              </Box>
            ))}
          </Box>

          {/* View All Projects Link */}
          <Box sx={{ textAlign: 'center', pt: { xs: 2, md: 4 } }}>
            <Link href="/projects" passHref legacyBehavior>
              <Typography
                component="a"
                sx={{
                  color: designTokens.colors.accentHighlight,
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                View All Projects →
              </Typography>
            </Link>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
