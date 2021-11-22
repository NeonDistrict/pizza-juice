import { styled } from '../../system';

export const Wrapper = styled('div', {
  d: 'inline-block',
  color: '$pink-500',
  fontWeight: 400,
  fontFamily: '"Syne Mono", serif',
  borderTop: '1px solid $grey-600',
  borderBottom: '1px solid $grey-600',
  textShadow: '0px 0px 4px rgba(245, 113, 171, 0.52)',

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
        py: '$1',
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
