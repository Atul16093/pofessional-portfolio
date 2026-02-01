'use client'

import React from 'react'
import {
  Box,
  Container,
  Typography,
  Stack,
  Chip,
  Paper,
  Link as MuiLink,
} from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { CaseStudy } from '@/lib/types'
import { designTokens } from '@/theme/muiTheme'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: designTokens.colors.backgroundPrimary,
          py: { xs: 6, md: 8 },
          px: { xs: 2, md: 3 },
          borderBottom: `1px solid ${designTokens.colors.borderDivider}`,
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={{ xs: 3, md: 4 }}>
            {/* Back Link */}
            <Link href="/projects" passHref legacyBehavior>
              <MuiLink
                component="a"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  color: designTokens.colors.secondaryText,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                  width: 'fit-content',
                  '&:hover': {
                    color: designTokens.colors.accentHighlight,
                  },
                }}
              >
                <ArrowBackIcon fontSize="small" />
                Back to Projects
              </MuiLink>
            </Link>

            {/* Title and Description */}
            <Box>
              <Typography
                component="h1"
                variant="h1"
                sx={{
                  color: designTokens.colors.primaryText,
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                {caseStudy.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: designTokens.colors.secondaryText,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  maxWidth: '600px',
                }}
              >
                {caseStudy.description}
              </Typography>
            </Box>

            {/* Tech Stack */}
            {caseStudy.techStack && caseStudy.techStack.length > 0 && (
              <Box>
                <Typography
                  variant="caption"
                  sx={{
                    color: designTokens.colors.secondaryText,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    display: 'block',
                    mb: 1,
                  }}
                >
                  Tech Stack
                </Typography>
                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
                  {caseStudy.techStack.map((tech) => (
                    <Chip
                      key={tech.id}
                      label={tech.name}
                      size="small"
                      sx={{
                        backgroundColor: designTokens.colors.backgroundSecondary,
                        color: designTokens.colors.primaryText,
                        fontWeight: 500,
                        borderColor: designTokens.colors.accentHighlight,
                        border: `1px solid ${designTokens.colors.accentHighlight}`,
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            )}
          </Stack>
        </Container>
      </Box>

      {/* Case Study Content */}
      <Box
        sx={{
          backgroundColor: designTokens.colors.backgroundPrimary,
          py: { xs: 6, md: 8 },
          px: { xs: 2, md: 3 },
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={{ xs: 8, md: 10 }}>
            {/* Problem & Context */}
            {caseStudy.problemStatement && (
              <Box>
                <Typography
                  component="h2"
                  variant="h2"
                  sx={{
                    color: designTokens.colors.primaryText,
                    fontWeight: 700,
                    mb: 3,
                  }}
                >
                  Problem & Context
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: designTokens.colors.secondaryText,
                    lineHeight: 1.8,
                  }}
                >
                  {caseStudy.problemStatement}
                </Typography>
              </Box>
            )}

            {/* Featured Image */}
            {caseStudy.featuredImage && (
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '400px',
                  borderRadius: designTokens.radius.md,
                  overflow: 'hidden',
                  border: `1px solid ${designTokens.colors.borderDivider}`,
                }}
              >
                <Image
                  src={caseStudy.featuredImage}
                  alt={caseStudy.title}
                  fill
                  style={{
                    objectFit: 'cover',
                  }}
                  priority
                />
              </Box>
            )}

            {/* Key Challenges Solved - Callout Box */}
            {caseStudy.keyChallengeSolved && (
              <Paper
                sx={{
                  backgroundColor: designTokens.colors.cardBackground,
                  border: `2px solid ${designTokens.colors.accentHighlight}`,
                  borderRadius: designTokens.radius.md,
                  p: { xs: 3, md: 4 },
                }}
              >
                <Typography
                  component="h3"
                  variant="h3"
                  sx={{
                    color: designTokens.colors.accentHighlight,
                    fontWeight: 700,
                    mb: 2,
                  }}
                >
                  Key Challenges Solved
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: designTokens.colors.primaryText,
                    lineHeight: 1.8,
                  }}
                >
                  {caseStudy.keyChallengeSolved}
                </Typography>
              </Paper>
            )}

            {/* System Architecture */}
            {caseStudy.systemArchitecture && (
              <Box>
                <Typography
                  component="h2"
                  variant="h2"
                  sx={{
                    color: designTokens.colors.primaryText,
                    fontWeight: 700,
                    mb: 3,
                  }}
                >
                  System Architecture
                </Typography>
                {caseStudy.systemArchitecture.image && (
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: '500px',
                      borderRadius: designTokens.radius.md,
                      overflow: 'hidden',
                      border: `1px solid ${designTokens.colors.borderDivider}`,
                      mb: 3,
                    }}
                  >
                    <Image
                      src={caseStudy.systemArchitecture.image}
                      alt="System Architecture"
                      fill
                      style={{
                        objectFit: 'contain',
                      }}
                    />
                  </Box>
                )}
                {caseStudy.systemArchitecture.description && (
                  <Typography
                    variant="body1"
                    sx={{
                      color: designTokens.colors.secondaryText,
                      lineHeight: 1.8,
                    }}
                  >
                    {caseStudy.systemArchitecture.description}
                  </Typography>
                )}
              </Box>
            )}

            {/* Key Technical Decisions */}
            {caseStudy.keyTechnicalDecisions &&
              caseStudy.keyTechnicalDecisions.length > 0 && (
                <Box>
                  <Typography
                    component="h2"
                    variant="h2"
                    sx={{
                      color: designTokens.colors.primaryText,
                      fontWeight: 700,
                      mb: 3,
                    }}
                  >
                    Key Technical Decisions
                  </Typography>
                  <Stack spacing={2}>
                    {caseStudy.keyTechnicalDecisions.map((decision, index) => (
                      <Box
                        key={index}
                        sx={{
                          pl: 3,
                          borderLeft: `3px solid ${designTokens.colors.accentHighlight}`,
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            color: designTokens.colors.primaryText,
                            lineHeight: 1.8,
                          }}
                        >
                          {decision}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              )}

            {/* Trade-offs */}
            {caseStudy.tradeOffs && caseStudy.tradeOffs.length > 0 && (
              <Box>
                <Typography
                  component="h2"
                  variant="h2"
                  sx={{
                    color: designTokens.colors.primaryText,
                    fontWeight: 700,
                    mb: 3,
                  }}
                >
                  Trade-offs
                </Typography>
                <Stack spacing={2}>
                  {caseStudy.tradeOffs.map((tradeoff, index) => (
                    <Box
                      key={index}
                      sx={{
                        backgroundColor: designTokens.colors.cardBackground,
                        border: `1px solid ${designTokens.colors.borderDivider}`,
                        borderRadius: designTokens.radius.md,
                        p: 2,
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          color: designTokens.colors.primaryText,
                          lineHeight: 1.8,
                        }}
                      >
                        {tradeoff}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            )}

            {/* What I'd Improve Next */}
            {caseStudy.improvements && caseStudy.improvements.length > 0 && (
              <Box>
                <Typography
                  component="h2"
                  variant="h2"
                  sx={{
                    color: designTokens.colors.primaryText,
                    fontWeight: 700,
                    mb: 3,
                  }}
                >
                  What I'd Improve Next
                </Typography>
                <Stack spacing={2}>
                  {caseStudy.improvements.map((improvement, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          minWidth: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          backgroundColor: designTokens.colors.accentHighlight,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: designTokens.colors.backgroundPrimary,
                          fontWeight: 700,
                          fontSize: '0.8rem',
                          mt: 0.5,
                        }}
                      >
                        ✓
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{
                          color: designTokens.colors.primaryText,
                          lineHeight: 1.8,
                        }}
                      >
                        {improvement}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            )}
          </Stack>
        </Container>
      </Box>

      {/* Back to Projects CTA */}
      <Box
        sx={{
          backgroundColor: designTokens.colors.backgroundSecondary,
          py: { xs: 6, md: 8 },
          px: { xs: 2, md: 3 },
          textAlign: 'center',
          borderTop: `1px solid ${designTokens.colors.borderDivider}`,
        }}
      >
        <Container maxWidth="md">
          <Link href="/projects" passHref legacyBehavior>
            <MuiLink
              component="a"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
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
              <ArrowBackIcon fontSize="small" />
              Back to Projects
            </MuiLink>
          </Link>
        </Container>
      </Box>
    </>
  )
}
