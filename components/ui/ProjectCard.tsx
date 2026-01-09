'use client'

import React from 'react'
import {
  Card,
  CardContent,
  CardActionArea,
  Box,
  Typography,
  Chip,
  Stack,
} from '@mui/material'
import Link from 'next/link'
import { Project } from '@/lib/types'
import { designTokens } from '@/theme/muiTheme'

interface ProjectCardProps {
  project: Project
  variant?: 'compact' | 'full'
  showFeatured?: boolean
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  variant = 'full',
  showFeatured = false,
}) => {
  const isCompact = variant === 'compact'

  return (
    <Link href={`/projects/${project.slug}`} passHref legacyBehavior>
      <CardActionArea component="a" sx={{ height: '100%', textDecoration: 'none' }}>
        <Card
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: designTokens.colors.cardBackground,
            borderColor: designTokens.colors.borderDivider,
            border: `1px solid ${designTokens.colors.borderDivider}`,
            borderRadius: designTokens.radius.lg,
            transition: 'all 0.3s ease',
            '&:hover': {
              borderColor: designTokens.colors.accentHighlight,
              transform: 'translateY(-4px)',
              boxShadow: `0 12px 40px rgba(255, 77, 141, 0.15)`,
            },
          }}
        >
          <CardContent
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: designTokens.spacing.md,
            }}
          >
            {/* Header with featured badge */}
            <Box>
              {showFeatured && project.featured && (
                <Typography
                  variant="caption"
                  sx={{
                    display: 'inline-block',
                    color: designTokens.colors.accentHighlight,
                    fontWeight: 600,
                    mb: 1,
                    textTransform: 'uppercase',
                  }}
                >
                  Featured
                </Typography>
              )}
              <Typography
                variant="h4"
                sx={{
                  color: designTokens.colors.primaryText,
                  fontWeight: 700,
                  mb: isCompact ? 1 : 0,
                }}
              >
                {project.title}
              </Typography>
            </Box>

            {/* Description */}
            {!isCompact && (
              <Typography
                variant="body2"
                sx={{
                  color: designTokens.colors.secondaryText,
                  lineHeight: 1.6,
                }}
              >
                {project.shortDescription || project.description}
              </Typography>
            )}

            {/* Problem Statement and System Challenge */}
            {!isCompact && (
              <>
                {project.problemStatement && (
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{
                        color: designTokens.colors.secondaryText,
                        fontWeight: 600,
                        textTransform: 'uppercase',
                      }}
                    >
                      Problem
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: designTokens.colors.primaryText,
                        mt: 0.5,
                      }}
                    >
                      {project.problemStatement}
                    </Typography>
                  </Box>
                )}

                {project.systemChallenge && (
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{
                        color: designTokens.colors.secondaryText,
                        fontWeight: 600,
                        textTransform: 'uppercase',
                      }}
                    >
                      System Challenge
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: designTokens.colors.primaryText,
                        mt: 0.5,
                      }}
                    >
                      {project.systemChallenge}
                    </Typography>
                  </Box>
                )}
              </>
            )}

            {/* Tech Stack Tags */}
            {project.tags && project.tags.length > 0 && (
              <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
                {project.tags.slice(0, isCompact ? 2 : 4).map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    sx={{
                      backgroundColor: designTokens.colors.backgroundSecondary,
                      color: designTokens.colors.primaryText,
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      '& .MuiChip-label': {
                        px: 1,
                      },
                    }}
                  />
                ))}
              </Stack>
            )}

            {/* CTA */}
            <Typography
              sx={{
                color: designTokens.colors.accentHighlight,
                fontWeight: 600,
                mt: isCompact ? 0 : 'auto',
              }}
            >
              View Case Study →
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Link>
  )
}
