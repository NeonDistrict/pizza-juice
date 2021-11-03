import { styled } from '../../system';

export const Wrapper = styled('div', {
  w: '$full',
  d: 'flex',
  justify: 'space-between',
  p: '16px',
  border: '1px solid',
  textTransform: 'uppercase',

  /**
   * Variants
   */
  variants: {
    /**
     * Variant variant
     */
    variant: {
      solid: {
        color: '$white',
        bg: '$black',
        borderColor: '$grey1'
      },
      outline: {
        bg: 'transparent'
      }
    },
    /**
     * Type variants
     */
    type: {
      success: {},
      error: {},
      warning: {},
      default: {}
    }
  }
});

export const TextStyled = styled('div', {
  fontWeight: '$bold'
});
