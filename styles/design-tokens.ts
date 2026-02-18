export const designTokens = {
  colors: {
    background: '#0B0B0F',
    accent: '#C6A96B',
    text: '#D8D8D8',
    muted: '#A8A8A8',
    border: 'rgba(198, 169, 107, 0.24)',
    surface: 'rgba(255, 255, 255, 0.06)',
    surfaceStrong: 'rgba(255, 255, 255, 0.12)'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
    xxl: '2rem',
    section: '2.5rem'
  },
  typography: {
    fontFamily: "'Avenir Next', 'Inter', 'Segoe UI', sans-serif",
    headingFamily: "'Didot', 'Bodoni MT', 'Times New Roman', serif",
    letterSpacingTight: '0.01em',
    letterSpacingWide: '0.08em',
    sizes: {
      xxs: '0.625rem',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.25rem',
      xl: '1.5rem'
    }
  },
  radius: {
    sm: '0.75rem',
    md: '0.875rem',
    lg: '1rem'
  },
  shadows: {
    soft: '0 10px 30px rgba(0, 0, 0, 0.35)',
    glow: '0 0 30px rgba(198, 169, 107, 0.18)'
  },
  transition: {
    standard: '220ms cubic-bezier(0.4, 0, 0.2, 1)'
  }
} as const;

export type DesignTokens = typeof designTokens;
