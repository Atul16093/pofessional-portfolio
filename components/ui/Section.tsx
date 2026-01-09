'use client'

import React from 'react'
import { Box, BoxProps } from '@mui/material'
import { designTokens } from '@/theme/muiTheme'

interface SectionProps extends BoxProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  py?: number | string
  px?: number | string
}

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  (
    {
      children,
      variant = 'primary',
      py = { xs: 6, md: 8 },
      px = { xs: 2, md: 3 },
      ...props
    },
    ref
  ) => {
    const bgColor =
      variant === 'primary'
        ? designTokens.colors.backgroundPrimary
        : designTokens.colors.backgroundSecondary

    return (
      <Box
        ref={ref}
        component="section"
        sx={{
          backgroundColor: bgColor,
          py,
          px,
          width: '100%',
        }}
        {...props}
      >
        {children}
      </Box>
    )
  }
)

Section.displayName = 'Section'
