'use client'

import React from 'react'
import { Avatar as MuiAvatar, AvatarProps as MuiAvatarProps, Box } from '@mui/material'
import { designTokens } from '@/theme/muiTheme'

interface AvatarProps extends Omit<MuiAvatarProps, 'src'> {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  src?: string
  alt?: string
  initials?: string
  withBorder?: boolean
}

const sizeMap = {
  sm: 80,
  md: 120,
  lg: 160,
  xl: 200,
}

export const Avatar: React.FC<AvatarProps> = ({
  size = 'lg',
  src,
  alt = 'Avatar',
  initials,
  withBorder = true,
  ...props
}) => {
  const dimension = sizeMap[size]

  return (
    <Box
      sx={{
        position: 'relative',
        width: dimension,
        height: dimension,
        borderRadius: '50%',
        backgroundColor: designTokens.colors.backgroundPrimary,
        padding: '4px',
        ...(withBorder && {
          border: `3px solid ${designTokens.colors.accentHighlight}`,
          boxShadow: `0 0 0 1px ${designTokens.colors.backgroundSecondary}`,
        }),
      }}
    >
      <MuiAvatar
        src={src}
        alt={alt}
        sx={{
          width: '100%',
          height: '100%',
          fontSize: dimension / 3,
          backgroundColor: designTokens.colors.backgroundSecondary,
          color: designTokens.colors.accentHighlight,
          fontWeight: 700,
          border: 'none',
        }}
        {...props}
      >
        {initials}
      </MuiAvatar>
    </Box>
  )
}
