import { globalCss } from '../src/system';

const global = globalCss({
  '*': {
    boxSizing: 'border-box',
    m: 0,
    p: 0,
  },

  body: {
    fontFamily: '$system',
    fontSize: '16px',
    color: '$white',
  }
});

export default global;
