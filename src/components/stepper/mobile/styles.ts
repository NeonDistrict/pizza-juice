import { styled } from '../../../system';

export const Wrapper = styled('ul', {
  // reset
  m: 0,
  p: 0,

  d: 'flex',
  justify: 'space-between',
});

export const StepperItem = styled('li', {
  position: 'relative',
  d: 'flex',
  flexDirection: 'column',
  align: 'center',
  flex: 1,

  '&:before': {
    position: 'absolute',
    content: '',
    borderBottom: '2px solid $grey-700',
    w: '$full',
    top: '3px',
    left: '-50%',
    zIndex: 2,
  },

  '&:after': {
    position: 'absolute',
    content: '',
    borderBottom: '2px solid $grey-700',
    w: '$full',
    top: '3px',
    left: '50%',
    zIndex: 2,
  },

  '&:first-child::before': {
    content: 'none',
  },

  '&:last-child::after': {
    content: 'none',
  },

  '&[aria-current="true"] span': {
    bg: '$white',
  },

  /**
   * Variants
   */
  variants: {
    completed: {
      true: {
        span: {
          bg: '$white',
        },

        '&:after': {
          position: 'absolute',
          content: '',
          borderBottom: '2px solid $white',
          w: '$full',
          top: '3px',
          left: '50%',
          zIndex: 3,
        },
      },
    },
  },
});

export const StepperItemIcon = styled('span', {
  position: 'relative',
  size: 8,
  d: 'flex',
  justify: 'center',
  align: 'center',
  bg: '$grey-700',
  br: '$full',
  zIndex: 5,
});
