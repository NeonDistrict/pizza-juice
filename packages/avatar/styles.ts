import { styled } from '../../system';

import { Image } from '../image';

export const Avatar = styled(Image, {
  /**
   * Variants
   */
  variants: {
    /**
     * Size variant
     */
    size: {
      '24': {
        size: 24,
        br: '$full',
      },
      '32': {
        size: 32,
      },
      '40': {
        size: 40,
      },
      '64': {
        size: 64,
      },
      '80': {
        size: 80,
      },
      '88': {
        size: 88,
      },
      '160': {
        size: 160,
      },
      '192': {
        size: 192,
      },
      '240': {
        size: 240,
      },
    },
  },

  /**
   * Default variants
   */
  defaultVariants: {
    size: '80',
  },
});
