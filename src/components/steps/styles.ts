import { styled } from '../../system';

export const Main = styled('div', {
  d: 'flex',
  flexWrap: 'nowrap',
  justify: 'space-between',
  textTransform: 'uppercase',
  width: '$full',
  fontWeight: '$bold',
  letterSpacing: '0.8px',

  '@md': {
    flexWrap: 'wrap'
  }
});

export const StepsItemWrapper = styled('div', {
  width: '100%',
  d: 'flex',
  justify: 'space-between',
  align: 'center',
  borderBottom: '1px solid $white',
  color: '$grey4',

  '&:last-of-type': {
    svg: {
      d: 'none'
    }
  },

  /**
   * Variants
   */
  variants: {
    /**
     * Active variant
     */
    active: {
      true: {
        color: '$white'
      }
    }
  }
});

export const StepsItem = styled('div', {
  p: '0.41rem',
  w: '$full',
  bg: '$grey4',
  color: '$grey3',

  /**
   * Variants
   */
  variants: {
    /**
     * Active variant
     */
    active: {
      true: {
        bg: '$white',
        color: '$grey5'
      }
    }
  }
});
