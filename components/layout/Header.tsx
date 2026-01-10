'use client'

import React, { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Typography,
  Button as MuiButton,
  Drawer,
  List,
  ListItem,
  IconButton,
  Avatar,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { designTokens } from '@/theme/muiTheme'
import { NAV_LINKS, OWNER_NAME, CTA_PRIMARY } from '@/lib/constants'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 900)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleGetInTouch = () => {
    router.push('/contact')
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
          {/* Logo/Brand with Name */}
          <Link href="/" passHref legacyBehavior>
            <Box
              component="a"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  opacity: 0.9,
                },
              }}
            >
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  bgcolor: designTokens.colors.accentHighlight,
                  color: designTokens.colors.primaryText,
                  fontWeight: 700,
                  fontSize: '1.1rem',
                }}
              >
                {OWNER_NAME.charAt(0).toUpperCase()}
              </Avatar>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: designTokens.colors.primaryText,
                  fontSize: '1.25rem',
                }}
              >
                {OWNER_NAME}
              </Typography>
            </Box>
          </Link>

          {/* Desktop Navigation and CTA */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {navContent}
              </Box>
              <MuiButton
                variant="contained"
                onClick={handleGetInTouch}
                sx={{
                  backgroundColor: designTokens.colors.accentHighlight,
                  color: designTokens.colors.primaryText,
                  fontWeight: 600,
                  textTransform: 'none',
                  px: 3,
                  py: 1,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#E63B7C',
                    transform: 'translateY(-2px)',
                    boxShadow: `0 4px 12px rgba(255, 77, 141, 0.4)`,
                  },
                }}
              >
                {CTA_PRIMARY}
              </MuiButton>
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <MuiButton
                variant="contained"
                onClick={handleGetInTouch}
                size="small"
                sx={{
                  backgroundColor: designTokens.colors.accentHighlight,
                  color: designTokens.colors.primaryText,
                  fontWeight: 600,
                  textTransform: 'none',
                  px: 2,
                  py: 0.5,
                  fontSize: '0.875rem',
                  display: { xs: 'none', sm: 'flex' },
                }}
              >
                {CTA_PRIMARY}
              </MuiButton>
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
            </Box>
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
              <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
                <MuiButton
                  variant="contained"
                  onClick={() => {
                    handleGetInTouch()
                    handleDrawerToggle()
                  }}
                  fullWidth
                  sx={{
                    backgroundColor: designTokens.colors.accentHighlight,
                    color: designTokens.colors.primaryText,
                    fontWeight: 600,
                    textTransform: 'none',
                    py: 1.5,
                  }}
                >
                  {CTA_PRIMARY}
                </MuiButton>
              </Box>
            </Box>
          </Drawer>
        </Box>
      </Container>
    </Box>
  )
}
