'use client'

import React from 'react'
import {
  Box,
  Container,
  Typography,
  Stack,
  Link as MuiLink,
  Divider,
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import InstagramIcon from '@mui/icons-material/Instagram'
import { designTokens } from '@/theme/muiTheme'
import { OWNER_NAME, OWNER_TITLE } from '@/lib/constants'
import { SiteConfig } from '@/lib/types'

const currentYear = new Date().getFullYear()

interface FooterProps {
  siteConfig?: SiteConfig
}

export function Footer({ siteConfig }: FooterProps) {
  const name = siteConfig?.ownerName || OWNER_NAME
  const title = siteConfig?.ownerTitle || OWNER_TITLE

  const socialLinks = siteConfig?.socialLinks?.length ? siteConfig.socialLinks : [
    { platform: 'github', url: 'https://github.com' },
    { platform: 'linkedin', url: 'https://linkedin.com' },
    { platform: 'instagram', url: 'https://instagram.com' },
    { platform: 'email', url: 'mailto:hello@example.com' }
  ]

  const socialIcons: Record<string, React.ReactNode> = {
    github: <GitHubIcon />,
    linkedin: <LinkedInIcon />,
    email: <EmailIcon />,
    instagram: <InstagramIcon />,
  }

  // Helper to normalize platform names
  const getIcon = (platform: string) => {
    const normalized = platform.toLowerCase().trim()
    return socialIcons[normalized] || null
  }

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: designTokens.colors.backgroundPrimary,
        borderTop: `1px solid ${designTokens.colors.borderDivider}`,
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 3 },
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={{ xs: 4, md: 6 }}>
          {/* Main Footer Content */}
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
            {/* About Section */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: designTokens.colors.primaryText,
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                {name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: designTokens.colors.secondaryText,
                  lineHeight: 1.8,
                }}
              >
                {title}
              </Typography>
            </Box>

            {/* Quick Links */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: designTokens.colors.primaryText,
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Quick Links
              </Typography>
              <Stack spacing={1}>
                <MuiLink
                  href="/"
                  sx={{
                    color: designTokens.colors.secondaryText,
                    textDecoration: 'none',
                    fontWeight: 500,
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: designTokens.colors.accentHighlight,
                    },
                  }}
                >
                  Home
                </MuiLink>
                <MuiLink
                  href="/projects"
                  sx={{
                    color: designTokens.colors.secondaryText,
                    textDecoration: 'none',
                    fontWeight: 500,
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: designTokens.colors.accentHighlight,
                    },
                  }}
                >
                  Projects
                </MuiLink>
                <MuiLink
                  href="/contact"
                  sx={{
                    color: designTokens.colors.secondaryText,
                    textDecoration: 'none',
                    fontWeight: 500,
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: designTokens.colors.accentHighlight,
                    },
                  }}
                >
                  Contact
                </MuiLink>
              </Stack>
            </Box>
          </Box>

          <Divider sx={{ borderColor: designTokens.colors.borderDivider }} />

          {/* Bottom Footer */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', sm: 'center' },
              gap: 2,
            }}
          >
            {/* Copyright */}
            <Typography
              variant="body2"
              sx={{
                color: designTokens.colors.secondaryText,
              }}
            >
              {siteConfig?.footerText || `© ${currentYear} ${name}. All rights reserved.`}
            </Typography>

            {/* Social Links */}
            <Stack direction="row" spacing={2}>
              {socialLinks.map((link) => {
                const icon = getIcon(link.platform)
                if (!icon) return null

                // Handle email specifically or generic URL
                const href = link.platform.toLowerCase() === 'email' && !link.url.startsWith('mailto:') 
                   ? `mailto:${link.url}` 
                   : link.url

                return (
                  <MuiLink
                    key={link.platform + link.url}
                    href={href}
                    target={link.platform.toLowerCase() === 'email' ? undefined : '_blank'}
                    rel={link.platform.toLowerCase() === 'email' ? undefined : 'noopener noreferrer'}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: designTokens.colors.secondaryText,
                      transition: 'color 0.3s ease',
                      '&:hover': {
                        color: designTokens.colors.accentHighlight,
                      },
                    }}
                    title={link.platform}
                  >
                    {icon}
                  </MuiLink>
                )
              })}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
