import { styled } from '../../system';

export const Image = styled('img', {
  size: '$full',

  /**
   * Variants
   */
  variants: {
    /**
     * Object fit variant
     */
    objectFit: {
      true: {
        objectFit: 'cover'
      },
      false: {
        objectFit: 'contain'
      }
    },
    /**
     * Cover variant
     */
    cover: {
      true: {
        backgroundSize: 'cover'
      },
      false: {
        backgroundSize: 'contain'
      }
    }
  },

  /**
   * Default variants
   */
  defaultVariants: {
    objectFit: 'true',
    cover: 'true'
  }
});
