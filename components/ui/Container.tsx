'use client'

import React from 'react'
import { Box, Container as MuiContainer, ContainerProps as MuiContainerProps } from '@mui/material'

interface ContainerProps extends MuiContainerProps {
  children: React.ReactNode
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  py?: number | string
  px?: number | string
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, maxWidth = 'lg', py, px, ...props }, ref) => {
    return (
      <MuiContainer
        ref={ref}
        maxWidth={maxWidth}
        sx={{
          py: py || 0,
          px: px || 2,
        }}
        {...props}
      >
        {children}
      </MuiContainer>
    )
  }
)

Container.displayName = 'Container'
