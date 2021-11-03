import { styled } from '../../system';

export const Badge = styled('label', {
  d: 'inline-block',
  h: 16,
  px: '$1',
  color: '$white',
  bg: '$pink1',
  fontSize: '$xs',
  fontWeight: '$bold',
  textTransform: 'uppercase',
  lineHeight: '150%',
  userSelect: 'none',

  /**
   * Variants
   */
  variants: {
    /**
     * Type variants
     */
    type: {
      default: {}
    }
  },

  /**
   * Default variants
   */
  defaultVariants: {
    type: 'default'
  }
});
