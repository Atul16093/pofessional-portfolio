'use client'

import React from 'react'
import {
  Box,
  Typography,
  Stack,
  Container,
  Card,
  CardContent,
} from '@mui/material'
import { designTokens } from '@/theme/muiTheme'
import { Experience as ExperienceType } from '@/lib/types'

interface ExperienceProps {
  experience: ExperienceType[]
}

export function Experience({ experience }: ExperienceProps) {
  if (experience.length === 0) {
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
                color: designTokens.colors.experienceHeading,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              Experience
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: designTokens.colors.secondaryText,
                mt: 2,
              }}
            >
              Building expertise in backend systems, distributed architecture, and scalable solutions
            </Typography>
          </Box>

          {/* Experience Timeline */}
          <Stack spacing={3}>
            {experience.map((exp, index) => (
              <Card
                key={exp.id}
                sx={{
                  backgroundColor: designTokens.colors.cardBackground,
                  border: `1px solid ${designTokens.colors.borderDivider}`,
                  borderRadius: designTokens.radius.md,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: designTokens.colors.accentHighlight,
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Stack spacing={2}>
                    {/* Header */}
                    <Box>
                      <Typography
                        variant="h4"
                        sx={{
                          color: designTokens.colors.primaryText,
                          fontWeight: 700,
                          mb: 1,
                        }}
                      >
                        {exp.title}
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          flexWrap: 'wrap',
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            color: designTokens.colors.accentHighlight,
                            fontWeight: 600,
                          }}
                        >
                          {exp.company}
                        </Typography>
                        {exp.location && (
                          <Typography
                            variant="body2"
                            sx={{
                              color: designTokens.colors.secondaryText,
                            }}
                          >
                            {exp.location}
                          </Typography>
                        )}
                      </Box>
                    </Box>

                    {/* Dates */}
                    <Typography
                      variant="caption"
                      sx={{
                        color: designTokens.colors.secondaryText,
                        fontWeight: 500,
                      }}
                    >
                      {exp.startDate && new Date(exp.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                      {exp.endDate && ` – ${new Date(exp.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}`}
                      {!exp.endDate && ' – Present'}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: designTokens.colors.secondaryText,
                        lineHeight: 1.8,
                      }}
                    >
                      {exp.description}
                    </Typography>

                    {/* Achievements */}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <Stack spacing={1}>
                        {exp.achievements.map((achievement, idx) => (
                          <Box
                            key={idx}
                            sx={{
                              display: 'flex',
                              gap: 2,
                            }}
                          >
                            <Typography
                              sx={{
                                color: designTokens.colors.accentHighlight,
                                fontWeight: 700,
                                flexShrink: 0,
                              }}
                            >
                              →
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: designTokens.colors.primaryText,
                              }}
                            >
                              {achievement}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>
                    )}
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
