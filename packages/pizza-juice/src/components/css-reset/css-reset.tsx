import { globalCss } from '../../system';

export const CSSReset = globalCss({
  ':root': {
    colorScheme: 'dark',
  },

  html: {
    lineHeight: 1.5,
    WebkitTextSizeAdjust: '100%',
    fontFamily: '$system',
    WebkitFontSmoothing: 'antialiased',
    textRendering: 'optimizeLegibility',
    MozOsxFontSmoothing: 'grayscale',
    touchAction: 'manipulation',
  },

  '*, *:before, *:after': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: '$full',
    font: 'inherit',
    verticalAlign: 'baseline',
    borderStyle: 'solid',
    borderWidth: '0',
  },

  'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section':
    {
      display: 'block',
    },

  'ol, ul': {
    listStyle: 'none',
  },

  'blockquote, q': {
    quotes: 'none',
  },

  'blockquote:before, blockquote:after, q:before, q:after': {
    content: '',
  },

  table: {
    borderCollapse: 'collapse',
    borderSpacing: 0,
  },

  'a, a:hover': {
    textDecoration: 'none',
  },
});
