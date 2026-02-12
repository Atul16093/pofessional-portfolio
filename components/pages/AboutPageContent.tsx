'use client'

import { Box, Container, Typography, Stack } from '@mui/material'
import { designTokens } from '@/theme/muiTheme'
import { AboutData } from '@/lib/api/about'

interface AboutPageContentProps {
  data: AboutData | null
}

export function AboutPageContent({ data }: AboutPageContentProps) {
  if (!data) {
    return (
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Typography>Loading...</Typography>
      </Box>
    )
  }

  return (
    <main>
      <Box sx={{ backgroundColor: designTokens.colors.backgroundPrimary, minHeight: '100vh' }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
          <Stack spacing={4}>
            {/* Page Header */}
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                component="h1"
                variant="h1"
                sx={{
                  color: designTokens.colors.primaryText,
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                About Me
              </Typography>
              {data.shortIntro && (
                <Typography
                  variant="body1"
                  sx={{
                    color: designTokens.colors.secondaryText,
                    fontSize: '1.1rem',
                    maxWidth: '800px',
                    mx: 'auto',
                  }}
                >
                  {data.shortIntro}
                </Typography>
              )}
            </Box>

            {/* Main Content */}
            <Box
              sx={{
                backgroundColor: designTokens.colors.cardBackground,
                border: `1px solid ${designTokens.colors.borderDivider}`,
                borderRadius: designTokens.radius.md,
                p: { xs: 3, md: 4 },
              }}
            >
              <Stack spacing={3}>
                <Typography
                  variant="h3"
                  sx={{
                    color: designTokens.colors.primaryText,
                    fontWeight: 700,
                  }}
                >
                  {data.name}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: designTokens.colors.accentHighlight,
                    fontWeight: 600,
                  }}
                >
                  {data.title}
                </Typography>
                
                {data.description && data.description.map((paragraph, index) => (
                  <Typography
                    key={index}
                    variant="body1"
                    sx={{
                      color: designTokens.colors.secondaryText,
                      lineHeight: 1.8,
                    }}
                  >
                    {paragraph}
                  </Typography>
                ))}
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
    </main>
  )
}

