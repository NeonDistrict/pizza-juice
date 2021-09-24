const theme = {
  colors: {
    darkPink: '#C9427D',
    lightGrey: '#A5A5A5',
    grey: '#707070',
    mediumGray: '#747474',
    darkGrey: '#393939',
    darkGrey2: '#1C1C1C',
    lightRed: '#FF5E7C',
    yellow: '#F4D360',
    lightGreen: '#8CBE72',
    lightPink: '#F571AB',
    white: '#FFFFFF',
    black: '#000000'
  },
  radii: {
    full: '9999px'
  },
  space: {
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem'
  },
  fontSizes: {
    sm: '14px',
    md: '16px',
    lg: '20px'
  },
  fontWeights: {
    thin: '300',
    normal: '400',
    medium: '600',
    bold: '700',
    extrabold: '900'
  },
  fonts: {
    system:
      "'Titillium Web', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
  }
} as const;

export default theme;
