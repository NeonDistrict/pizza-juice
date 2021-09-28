const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    pink: {
      100: '#F571AB',
      200: '#C9427D',
      300: '#A43F6B'
    },
    grey: {
      100: '#A5A5A5',
      200: '#707070',
      300: '#747474',
      400: '#393939',
      500: '#1C1C1C'
    },
    red: {
      100: '#FF5E7C',
      200: '#FF002F',
      300: '#B60323',
      400: '#84041C'
    },
    teal: {
      100: '#0FB4B6'
    },
    yellow: {
      100: '#F4D360'
    },
    green: {
      100: '#8CBE72'
    }
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
