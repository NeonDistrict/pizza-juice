import { styled } from '../../system';

export const Wrapper = styled('div', {
  d: 'inline-flex',
  fontWeight: '$normal',
  fontFamily: '"Syne Mono", serif',

  /**
   * Variants
   */
  variants: {
    /**
     * Size variant
     */
    size: {
      sm: {
        fontSize: '20px',
      },
      md: {
        fontSize: '50px',
        py: '$4',
      },
    },

    variant: {
      small: {
        color: '$grey-600',
        justifyContent: 'center',
        fontSize: '$4xl',
      },
      normal: {
        color: '$pink-500',
        borderTop: '1px solid $grey-600',
        borderBottom: '1px solid $grey-600',
        textShadow: '0px 0px 4px rgba(245, 113, 171, 0.52)',
      },
    },
  },

  /**
   * Default variants
   */
  defaultVariants: {
    size: 'md',
    variant: 'normal',
  },
});
