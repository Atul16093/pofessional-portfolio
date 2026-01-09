'use client'

import React, { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Button as MuiButton,
  Drawer,
  List,
  ListItem,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { designTokens } from '@/theme/muiTheme'
import { NAV_LINKS } from '@/lib/constants'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const isActive = (href: string) => {
    return pathname === href
  }

  const navContent = (
    <List
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: 0, sm: 1 },
      }}
    >
      {NAV_LINKS.map((link) => (
        <ListItem
          key={link.href}
          sx={{
            p: 0,
          }}
        >
          <Link href={link.href} passHref legacyBehavior>
            <MuiButton
              component="a"
              sx={{
                color: isActive(link.href)
                  ? designTokens.colors.accentHighlight
                  : designTokens.colors.primaryText,
                fontWeight: 600,
                textTransform: 'none',
                fontSize: { xs: '1rem', sm: '0.95rem' },
                py: { xs: 2, sm: 1 },
                px: { xs: 0, sm: 2 },
                borderBottom: { xs: isActive(link.href) ? `2px solid ${designTokens.colors.accentHighlight}` : 'none', sm: 'none' },
                '&:hover': {
                  color: designTokens.colors.accentHighlight,
                },
              }}
            >
              {link.label}
            </MuiButton>
          </Link>
        </ListItem>
      ))}
    </List>
  )

  return (
    <Box
      component="header"
      sx={{
        backgroundColor: designTokens.colors.backgroundPrimary,
        borderBottom: `1px solid ${designTokens.colors.borderDivider}`,
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: 2,
            px: 2,
          }}
        >
          {/* Logo/Brand */}
          <Link href="/" passHref legacyBehavior>
            <Typography
              component="a"
              variant="h6"
              sx={{
                fontWeight: 700,
                color: designTokens.colors.accentHighlight,
                fontSize: '1.25rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  opacity: 0.8,
                },
              }}
            >
              ∆
            </Typography>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {navContent}
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              color="inherit"
              onClick={handleDrawerToggle}
              sx={{
                color: designTokens.colors.primaryText,
                '&:hover': {
                  backgroundColor: designTokens.colors.backgroundSecondary,
                },
              }}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          )}

          {/* Mobile Drawer */}
          <Drawer
            anchor="top"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              '& .MuiDrawer-paper': {
                backgroundColor: designTokens.colors.backgroundSecondary,
                borderBottom: `1px solid ${designTokens.colors.borderDivider}`,
              },
            }}
          >
            <Box sx={{ p: 2 }}>
              {navContent}
            </Box>
          </Drawer>
        </Box>
      </Container>
    </Box>
  )
}
