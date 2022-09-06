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
        color: '$grey-600',
        justifyContent: 'center',
        fontSize: '$4xl',
      },
      md: {
        color: '$pink-500',
        borderTop: '1px solid $grey-600',
        borderBottom: '1px solid $grey-600',
        textShadow: '0px 0px 4px rgba(245, 113, 171, 0.52)',
        fontSize: '50px',
        py: '$4',
      },
    },
  },

  /**
   * Default variants
   */
  defaultVariants: {
    size: 'md',
  },
});
