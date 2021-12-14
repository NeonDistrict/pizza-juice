import { styled } from '../../system';

export const Wrapper = styled('div', {
  // variables
  $$width: '360px',
  $$height: '100%',

  w: '$$width',
  h: '$$height',
  color: '$white',
  bg: '$grey-850',
});
