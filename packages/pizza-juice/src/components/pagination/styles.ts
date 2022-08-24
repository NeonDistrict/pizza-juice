import { styled } from '../../system';

export const PaginationContainer = styled('div', {
  d: 'flex',
  gap: '$2',
  br: '$sm',
  justifyContent: 'center',
  alignItems: 'center',
});

export const NumberContainer = styled('div', {
  d: 'flex',
  p: '$2 $4',
  color: '$white',

  '&:hover': {
    color: '$pink-600',
    cursor: 'pointer',
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
        color: '$pink-500',
      },
    },
  },
});

export const MobileContainer = styled('div', {
  d: 'flex',
  color: '$white',
  gap: '$4',
});

export const ArrowContainer = styled('button', {
  d: 'flex',
  align: 'center',
  justify: 'center',
  bg: 'transparent',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',

  svg: {
    color: '$grey-700',
    cursor: 'default',
  },
  /**
   * Variants
   */
  variants: {
    /**
     * canGo variant
     */
    canGo: {
      true: {
        svg: {
          color: '$pink-500',
          cursor: 'pointer',
        },
      },
    },
  },
});
