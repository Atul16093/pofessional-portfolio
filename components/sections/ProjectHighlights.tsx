'use client'

import React, { useEffect, useState } from 'react'
import { Box, Typography, Stack, Container, CircularProgress } from '@mui/material'
import Link from 'next/link'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { designTokens } from '@/theme/muiTheme'
import { Project } from '@/lib/types'
import { projectsAPI } from '@/lib/api'

export function ProjectHighlights() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await projectsAPI.getAll()
        // Show only featured projects or first 3
        const highlighted = data
          .filter((p) => p.featured)
          .slice(0, 3)
        setProjects(highlighted)
      } catch (error) {
        console.error('Failed to fetch projects:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return (
      <Box
        component="section"
        sx={{
          backgroundColor: designTokens.colors.backgroundSecondary,
          py: { xs: 6, md: 8 },
          px: { xs: 2, md: 3 },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '300px',
        }}
      >
        <CircularProgress />
      </Box>
    )
  }

  if (projects.length === 0) {
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
                color: designTokens.colors.primaryText,
                fontWeight: 700,
              }}
            >
              Featured Projects
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
                md: projects.length === 1 ? '1fr' : 'repeat(2, 1fr)',
              },
              gap: designTokens.spacing.md,
            }}
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                variant="compact"
                showFeatured
              />
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
