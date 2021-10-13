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
    full: '9999px',
    half: '50%',
    sm: '5px',
    md: '12px'
  },
  sizes: {
    full: '100%'
  },
  spaces: {
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px'
  },
  fontSizes: {
    '3xs': '8px',
    '2xs': '10px',
    xs: '12px',
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
  },
  durations: {
    fast: '0.2s'
  }
} as const;

export default theme;
