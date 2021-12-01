import { styled } from '../../system';

export const Wrapper = styled('nav', {
  d: 'flex',
});

export const List = styled('ol', {
  // reset
  appearance: 'none',
  listStyle: 'none',

  d: 'flex',
  m: 0,
  p: 0,
});

export const Item = styled('li', {
  d: 'flex',
  align: 'center',
  m: 5,
  p: 0,
  color: '$grey-400',
  fontWeight: '$medium',
  textTransform: 'uppercase',
  fontSize: '$sm',

  '&:hover': {
    color: '$pink-600',
  },

  '& + &:before': {
    ml: '$1',
    mr: '$3',
    borderRight: '1px solid $grey-700',
    h: '18px',
    content: '',
  },
});

export const Link = styled('a', {
  d: 'flex',
  align: 'center',
  color: 'currentColor',
  textDecoration: 'none',
  gap: '$1',

  // Active page
  '&[aria-current="page"]': {
    fontWeight: '$bold',
    color: '$pink-500',
  },
});
