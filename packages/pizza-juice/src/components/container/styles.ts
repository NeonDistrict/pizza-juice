import { styled } from '../../system';

export const Wrapper = styled('div', {
  // reset
  flexShrink: 0,

  w: '$full',
  m: '0 auto',
  px: '$4',

  /**
   * Variants
   */
  variants: {
    maxWidth: {
      xs: { maxW: '$xs' },
      sm: { maxW: '$sm' },
      md: { maxW: '$md' },
      lg: { maxW: '$lg' },
      xl: { maxW: '$xl' },
      '2xl': { maxW: '$2xl' },
    },
  },

  /**
   * Default variants
   */
  defaultVariants: {
    maxWidth: '2xl',
  },
});
