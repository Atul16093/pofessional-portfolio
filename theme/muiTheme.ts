import { createTheme } from '@mui/material/styles'

// Design System Colors - Exact palette as specified
const colors = {
  backgroundPrimary: '#0F0F0F',
  backgroundSecondary: '#151515',
  cardBackground: '#1C1C1C',
  primaryText: '#FFFFFF',
  secondaryText: '#B3B3B3',
  accentHighlight: '#FF4D8D',
  projectsHeading: '#FF6B35', // Orange color for Projects heading (matching image)
  experienceHeading: '#4A90E2', // Blue color for Experience heading (matching image)
  gradientPink: '#FF4D8D',
  gradientPurple: '#9B59B6',
  gradientBlue: '#4A90E2',
  ctaPrimaryBg: '#FFFFFF',
  ctaPrimaryText: '#0F0F0F',
  borderDivider: '#2A2A2A',
}

export const muiTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: colors.backgroundPrimary,
      paper: colors.cardBackground,
    },
    primary: {
      main: colors.accentHighlight,
      light: '#FF6BA8',
      dark: '#E63B7C',
      contrastText: colors.primaryText,
    },
    secondary: {
      main: colors.secondaryText,
      light: '#D4D4D4',
      dark: '#9A9A9A',
      contrastText: colors.primaryText,
    },
    error: {
      main: '#FF6B6B',
      light: '#FF8787',
      dark: '#E63B3B',
    },
    warning: {
      main: '#FFA500',
    },
    success: {
      main: '#4CAF50',
    },
    divider: colors.borderDivider,
    text: {
      primary: colors.primaryText,
      secondary: colors.secondaryText,
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      '@media (max-width:600px)': {
        fontSize: '2.25rem',
      },
    },
    h2: {
      fontSize: '2.75rem',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.4,
      '@media (max-width:600px)': {
        fontSize: '1.3rem',
      },
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: '0.015em',
    },
    body2: {
      fontSize: '0.95rem',
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: '0.015em',
    },
    caption: {
      fontSize: '0.85rem',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '1rem',
          padding: '12px 24px',
          borderRadius: 8,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
        contained: {
          backgroundColor: colors.accentHighlight,
          color: colors.primaryText,
          '&:hover': {
            backgroundColor: '#E63B7C',
          },
        },
        outlined: {
          borderColor: colors.borderDivider,
          color: colors.primaryText,
          '&:hover': {
            backgroundColor: colors.backgroundSecondary,
            borderColor: colors.primaryText,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: colors.cardBackground,
          borderColor: colors.borderDivider,
          borderRadius: 10,
          border: `1px solid ${colors.borderDivider}`,
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: colors.accentHighlight,
            transform: 'translateY(-4px)',
            boxShadow: `0 12px 40px rgba(255, 77, 141, 0.15)`,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: colors.backgroundSecondary,
          color: colors.primaryText,
          borderRadius: 6,
          fontWeight: 500,
          fontSize: '0.85rem',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            color: colors.primaryText,
            backgroundColor: colors.backgroundSecondary,
            '& fieldset': {
              borderColor: colors.borderDivider,
            },
            '&:hover fieldset': {
              borderColor: colors.accentHighlight,
            },
            '&.Mui-focused fieldset': {
              borderColor: colors.accentHighlight,
            },
          },
          '& .MuiInputBase-input::placeholder': {
            color: colors.secondaryText,
            opacity: 0.7,
          },
        },
      },
    },
  },
})

export const designTokens = {
  colors,
  spacing: {
    xs: 8,
    sm: 16,
    md: 24,
    lg: 32,
    xl: 48,
    '2xl': 64,
  },
  radius: {
    sm: 6,
    md: 8,
    lg: 10,
    xl: 12,
  },
  shadows: {
    sm: `0 1px 2px rgba(0, 0, 0, 0.05)`,
    md: `0 4px 6px rgba(0, 0, 0, 0.1)`,
    lg: `0 10px 25px rgba(0, 0, 0, 0.2)`,
    xl: `0 20px 50px rgba(0, 0, 0, 0.3)`,
    accent: `0 12px 40px rgba(255, 77, 141, 0.15)`,
  },
}
