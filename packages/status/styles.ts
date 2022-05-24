import { styled } from '../../system';

export const Wrapper = styled('span', {
  d: 'inline-flex',
  size: 10,
  br: '$full',

  /**
   * Variants
   */
  variants: {
    /**
     * Color variants
     */
    variant: {
      white: {
        bg: '$white',
      },
      teal: {
        bg: '$teal-500',
      },
      green: {
        bg: '$green-500',
      },
      pink: {
        bg: '$pink-500',
      },
      yellow: {
        bg: '$yellow-500',
      },
    },
  },

  /**
   * Default variants
   */
  defaultVariants: {
    variant: 'white',
  },
});
