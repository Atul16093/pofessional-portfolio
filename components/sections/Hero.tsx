'use client'

import React from 'react'
import { Box, Typography, Stack, Container } from '@mui/material'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Avatar } from '@/components/ui/Avatar'
import { designTokens } from '@/theme/muiTheme'
import { OWNER_NAME, OWNER_TITLE, OWNER_SUMMARY } from '@/lib/constants'

export function Hero() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: designTokens.colors.backgroundPrimary,
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 3 },
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="md">
        <Stack
          spacing={{ xs: 4, md: 6 }}
          sx={{
            textAlign: 'center',
            animation: 'slide-up 0.8s ease-out',
          }}
        >
          {/* Avatar */}
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar
              size="xl"
              src="/avatar.png"
              alt={OWNER_NAME}
              initials={OWNER_NAME.substring(0, 2).toUpperCase()}
            />
          </Box>

          {/* Headline */}
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
              {OWNER_NAME}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: designTokens.colors.primaryText,
                fontWeight: 600,
                mb: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <span>Full-Stack Software Engineer</span>
              <Box
                component="span"
                sx={{
                  color: designTokens.colors.accentHighlight,
                  fontWeight: 700,
                }}
              >
                (Backend-Focused)
              </Box>
            </Typography>
          </Box>

          {/* Summary */}
          <Typography
            variant="body1"
            sx={{
              color: designTokens.colors.secondaryText,
              fontSize: '1.1rem',
              lineHeight: 1.8,
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            {OWNER_SUMMARY}
          </Typography>

          {/* CTAs */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{
              justifyContent: 'center',
              pt: 2,
            }}
          >
            <Link href="/contact" passHref legacyBehavior>
              <Button
                component="a"
                variant="primary"
                size="large"
                sx={{
                  minWidth: { xs: '100%', sm: 'auto' },
                  px: { xs: 3, sm: 4 },
                  py: 1.5,
                }}
              >
                Get In Touch
              </Button>
            </Link>
            <Button
              variant="outline"
              size="large"
              sx={{
                minWidth: { xs: '100%', sm: 'auto' },
                px: { xs: 3, sm: 4 },
                py: 1.5,
              }}
              onClick={() => {
                // Download CV - placeholder for now
                window.open('#', '_blank')
              }}
            >
              Download CV
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
