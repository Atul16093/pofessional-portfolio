import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Box, Container, Typography, Stack } from '@mui/material'
import { designTokens } from '@/theme/muiTheme'
import { OWNER_NAME, OWNER_TITLE, OWNER_SUMMARY } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `About | ${OWNER_NAME}`,
  description: `Learn more about ${OWNER_NAME}, a ${OWNER_TITLE}. ${OWNER_SUMMARY}`,
}

export default function AboutPage() {
  return (
    <>
      <Header />
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
                <Typography
                  variant="body1"
                  sx={{
                    color: designTokens.colors.secondaryText,
                    fontSize: '1.1rem',
                    maxWidth: '800px',
                    mx: 'auto',
                  }}
                >
                  {OWNER_SUMMARY}
                </Typography>
              </Box>

              {/* Main Content */}
              <Box
                sx={{
                  backgroundColor: designTokens.colors.cardBackground,
                  border: `1px solid ${designTokens.colors.borderDivider}`,
                  borderRadius: designTokens.radius.lg,
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
                    {OWNER_NAME}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      color: designTokens.colors.accentHighlight,
                      fontWeight: 600,
                    }}
                  >
                    {OWNER_TITLE}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: designTokens.colors.secondaryText,
                      lineHeight: 1.8,
                    }}
                  >
                    I am a seasoned full-stack software engineer with over 8 years of professional experience, 
                    specializing in backend development. My expertise lies in crafting robust and scalable 
                    SaaS-based architectures on the Amazon AWS platform.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: designTokens.colors.secondaryText,
                      lineHeight: 1.8,
                    }}
                  >
                    Throughout my career, I've focused on building high-performance systems that can handle 
                    scale, designing distributed architectures, and implementing real-time solutions that 
                    deliver exceptional user experiences.
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Container>
        </Box>
      </main>
      <Footer />
    </>
  )
}

