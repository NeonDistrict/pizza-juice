import { styled } from '../../system';

export const Avatar = styled('img', {
  /**
   * Variants
   */
  variants: {
    /**
     * Size variants
     */
    size: {
      '3xs': {
        size: 24,
        br: '$full'
      },
      '2xs': {
        size: 32
      },
      xs: {
        size: 40
      },
      sm: {
        size: 64
      },
      md: {
        size: 80
      },
      lg: {
        size: 88
      },
      xl: {
        size: 160
      },
      '2xl': {
        size: 192
      },
      '3xl': {
        size: 240
      }
    }
  },

  /**
   * default variants
   */
  defaultVariants: {
    size: 'md'
  }
});
