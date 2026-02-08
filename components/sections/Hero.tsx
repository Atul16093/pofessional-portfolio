'use client'

import React from 'react'
import { Box, Typography, Stack, Container } from '@mui/material'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Avatar } from '@/components/ui/Avatar'
import { designTokens } from '@/theme/muiTheme'
import { SiteConfig } from '@/lib/types'

interface HeroProps {
  siteConfig: SiteConfig
}

export function Hero({ siteConfig }: HeroProps) {
  const { ownerName, ownerTitle, ownerSummary } = siteConfig
console.log(siteConfig.ownerSummary,"ownerSummary")
console.log(siteConfig.ownerTitle,"ownerTitle")
console.log(siteConfig.ownerName,"ownerName")
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
          {/* Avatar with Gradient Background */}
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <Box
              className="gradient-bg"
              sx={{
                background: designTokens.colors.primaryGradient,
                position: 'relative',
                display: 'inline-block',
                borderRadius: '50%',
              }}
            >
              <Avatar
                size="xl"
                sx={{
                  background: designTokens.colors.primaryGradient,
                  width: '100%',
                  height: '100%',
                }}
                src="/images/avatar.svg"
                alt={ownerName}
                initials={ownerName.substring(0, 2).toUpperCase()}
                withBorder={false}
              />
            </Box>
          </Box>

          {/* Headline with Gradient Text */}
          <Box>
            <Typography
              component="h1"
              variant="h1"
              sx={{
                color: designTokens.colors.primaryText,
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: 1.2,
              }}
            >
              {ownerTitle.split(" ").slice(0, 3).join(" ")}
              <Box
                component="span"
                className="gradient-text"
                sx={{
                  fontWeight: 700,
                  display: 'block',
                }}
              >
                {ownerTitle.split(" ").slice(3).join(" ")}
              </Box>
            </Typography>
          </Box>

          {/* Summary */}
          <Typography
            variant="body1"
            sx={{
              color: designTokens.colors.primaryText,
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            {ownerSummary}
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
                  backgroundColor: designTokens.colors.ctaPrimaryBg,
                  color: designTokens.colors.ctaPrimaryText,
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#F0F0F0',
                  },
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
                backgroundColor: designTokens.colors.backgroundPrimary,
                color: designTokens.colors.primaryText,
                border: `2px solid ${designTokens.colors.primaryText}`,
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: designTokens.colors.backgroundSecondary,
                  borderColor: designTokens.colors.primaryText,
                },
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
