'use client'

import React from 'react'
import {
  Box,
  Typography,
  Stack,
  Container,
} from '@mui/material'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { designTokens } from '@/theme/muiTheme'
import { Project } from '@/lib/types'

interface ProjectsSectionProps {
  projects: Project[]
  limit?: number
  showFeaturedOnly?: boolean
}

export function ProjectsSection({ projects, limit, showFeaturedOnly = false }: ProjectsSectionProps) {
  // Filter based on props
  let displayProjects = projects

  if (showFeaturedOnly) {
    displayProjects = displayProjects.filter((p) => p.featured)
  }

  if (limit) {
    displayProjects = displayProjects.slice(0, limit)
  }


  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
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
                mb: 2,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              All Projects
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: designTokens.colors.secondaryText,
              }}
            >
              Building scalable systems that matter. Showcasing backend and system design expertise.
            </Typography>
          </Box>

          {/* Projects Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: displayProjects.length === 1 ? '1fr' : displayProjects.length === 2 ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(350px, 1fr))',
              },
              gap: { xs: 3, md: 4 },
              maxWidth: '1400px',
              mx: 'auto',
            }}
          >
            {displayProjects.map((project) => (
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

          {displayProjects.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 6 }}>
              <Typography
                variant="body1"
                sx={{
                  color: designTokens.colors.secondaryText,
                }}
              >
                No projects found yet. Check back soon!
              </Typography>
            </Box>
          )}
        </Stack>
      </Container>
    </Box>
  )
}
