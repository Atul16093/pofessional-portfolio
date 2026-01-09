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

const currentYear = new Date().getFullYear()

export function Footer() {
  const socialIcons: Record<string, React.ReactNode> = {
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
                {OWNER_NAME}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: designTokens.colors.secondaryText,
                  lineHeight: 1.8,
                }}
              >
                {OWNER_TITLE}
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
              © {currentYear} {OWNER_NAME}. All rights reserved.
            </Typography>

            {/* Social Links */}
            <Stack direction="row" spacing={2}>
              <MuiLink
                href="https://github.com"
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
              <MuiLink
                href="https://linkedin.com"
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
              <MuiLink
                href="https://twitter.com"
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
              <MuiLink
                href="mailto:hello@example.com"
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
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
