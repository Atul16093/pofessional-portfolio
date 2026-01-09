'use client'

import React, { useEffect, useState } from 'react'
import {
  Box,
  Typography,
  Stack,
  Container,
  CircularProgress,
} from '@mui/material'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { designTokens } from '@/theme/muiTheme'
import { Project } from '@/lib/types'
import { projectsAPI } from '@/lib/api'

interface ProjectsSectionProps {
  limit?: number
  showFeaturedOnly?: boolean
}

export function ProjectsSection({ limit, showFeaturedOnly = false }: ProjectsSectionProps) {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await projectsAPI.getAll()
        let filtered = data

        if (showFeaturedOnly) {
          filtered = filtered.filter((p) => p.featured)
        }

        if (limit) {
          filtered = filtered.slice(0, limit)
        }

        setProjects(filtered)
      } catch (err) {
        setError('Failed to load projects')
        console.error('Failed to fetch projects:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [limit, showFeaturedOnly])

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '400px',
          py: { xs: 6, md: 8 },
        }}
      >
        <CircularProgress />
      </Box>
    )
  }

  if (error) {
    return (
      <Box sx={{ py: { xs: 6, md: 8 }, textAlign: 'center' }}>
        <Typography
          variant="body1"
          sx={{
            color: designTokens.colors.accentHighlight,
          }}
        >
          {error}
        </Typography>
      </Box>
    )
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
              Projects
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: designTokens.colors.secondaryText,
              }}
            >
              Building scalable systems that matter. Max 3 projects showcasing backend and system design expertise.
            </Typography>
          </Box>

          {/* Projects Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: projects.length === 1 ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
              },
              gap: designTokens.spacing.md,
            }}
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                variant="full"
                showFeatured
              />
            ))}
          </Box>

          {projects.length === 0 && (
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
