'use client'

import React from 'react'
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  CircularProgress,
} from '@mui/material'
import { designTokens } from '@/theme/muiTheme'

interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: 'primary' | 'secondary' | 'outline'
  isLoading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'start' | 'end'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      isLoading = false,
      icon,
      iconPosition = 'start',
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const muiVariant = variant === 'outline' ? 'outlined' : 'contained'
    const backgroundColor =
      variant === 'primary' ? designTokens.colors.accentHighlight : undefined
    const textColor =
      variant === 'primary' ? designTokens.colors.primaryText : undefined

    return (
      <MuiButton
        ref={ref}
        variant={muiVariant}
        disabled={disabled || isLoading}
        sx={{
          ...(variant === 'primary' && {
            background: designTokens.colors.primaryGradient,
            color: designTokens.colors.primaryText,
            '&:hover': {
              background: designTokens.colors.primaryGradient,
              opacity: 0.9,
              filter: 'brightness(1.1)',
            },
          }),
        }}
        {...props}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {isLoading ? (
            <CircularProgress size={20} color="inherit" />
          ) : icon && iconPosition === 'start' ? (
            icon
          ) : null}
          {children}
          {!isLoading && icon && iconPosition === 'end' ? icon : null}
        </div>
      </MuiButton>
    )
  }
)

Button.displayName = 'Button'
