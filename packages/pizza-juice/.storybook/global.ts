import { globalCss } from '../src/system';

const global = globalCss({
  '*, *:before, *:after': {
    boxSizing: 'border-box',
    m: 0,
    p: 0,
  },

  body: {
    fontFamily: '$system',
    fontSize: '1rem',
    color: '$white',
  }
});

export default global;
