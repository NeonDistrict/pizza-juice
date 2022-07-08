import { styled } from '../../../system';

export const Wrapper = styled('ul', {
  // reset
  m: 0,
  p: 0,

  d: 'flex',
  w: '$full',
});

export const ItemWrapper = styled('li', {
  d: 'flex',
  w: '$full',
  h: 36,
  justify: 'space-between',
  align: 'center',
  bg: '$grey-700',
  color: '$grey-600',
  borderBottom: '2px solid $white',
  textTransform: 'uppercase',
  fontWeight: '$medium',
  userSelect: 'none',
  pl: '$6',

  // hide icon of the last item
  '&:last-of-type': {
    span: {
      d: 'none',
    },
  },

  '&[aria-current="true"]': {
    bg: '$white',
    color: '$grey-700',

    svg: {
      color: '$white',
    },
  },
});

export const IconWrapper = styled('span', {
  w: '24px',
  h: '$full',
  bg: '$black',
  d: 'flex',
  justify: 'center',
  align: 'center',
  '& svg': {
    width: '12px',
    height: '12px',
  },
});
