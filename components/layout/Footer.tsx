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
import TwitterIcon from '@mui/icons-material/Twitter'
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

  const socialLinks = siteConfig?.socialLinks || {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    email: 'mailto:hello@example.com'
  }

  const socialIcons = {
    github: <GitHubIcon />,
    linkedin: <LinkedInIcon />,
    email: <EmailIcon />,
    twitter: <TwitterIcon />,
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
              {socialLinks.github && (
                <MuiLink
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
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
                >
                  {socialIcons.github}
                </MuiLink>
              )}
              {socialLinks.linkedin && (
                <MuiLink
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
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
                >
                  {socialIcons.linkedin}
                </MuiLink>
              )}
              {socialLinks.twitter && (
                <MuiLink
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
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
                >
                  {socialIcons.twitter}
                </MuiLink>
              )}
              {socialLinks.email && (
                <MuiLink
                  href={socialLinks.email.startsWith('mailto:') ? socialLinks.email : `mailto:${socialLinks.email}`}
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
                >
                  {socialIcons.email}
                </MuiLink>
              )}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
