import { styled } from '../../system';

export const Main = styled('div', {
  d: 'flex',
  alignItems: 'center',
  userSelect: 'none',
});

export const Section = styled('div', {
  color: '$grey1',
  d: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '$xs',
  gap: '$1',
  fontWeight: 600,

  svg: {
    color: '$pink1',
  },
});

export const Divider = styled('div', {
  p: '0 $2',
  h: '$full',
  color: '$white',
});

export const Text = styled('h1', {
  m: 0,
  fontSize: '$sm',
  fontWeight: 600,
  textTransform: 'uppercase',

  /**
   * Variants
   */
  variants: {
    active: {
      true: {
        color: '$pink1',
      },
    },
  },
});
