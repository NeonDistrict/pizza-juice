import { styled } from '../../system';

export const PaginationContainer = styled('div', {
  display: 'flex',
  p: '$4 $6',
  justify: 'center',
  align: 'center',
  gap: '$2',
  border: '1px dashed $pink1',
  br: '$sm',
});

export const NumberContainer = styled('div', {
  d: 'flex',
  p: '$2 $4',
  color: '$white',

  '&:hover': {
    color: '$pink2',
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
        color: '$pink1',
      },
    },
  },
});

export const Number = styled('div', {
  fontSize: '$sm',
  fontWeight: '$medium',
});

export const MobileContainer = styled('div', {
  d: 'flex',
  align: 'center',
  justify: 'center',
  color: '$white',
  gap: '$4',
});

const iconVariant = {
  svg: {
    color: '$grey4',
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
          color: '$pink1',
          cursor: 'pointer',
        },
      },
    },
  },
};

export const IconContainer = styled('div', {
  d: 'flex',
  align: 'center',
});

const iconStyle = {
  d: 'flex',
  align: 'center',
  justify: 'center',
  svg: {
    fontSize: '$kg',
    color: '$pink1',
    cursor: 'pointer',
  },
};

const resetButton = {
  background: 'transparent',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
};

export const ArrowLeft = styled('button', {
  ...resetButton,
  ...iconStyle,
  ...iconVariant,
});

export const ArrowRight = styled('button', {
  ...resetButton,
  ...iconStyle,
  ...iconVariant,
});

export const FirstPageArrow = styled('button', {
  ...resetButton,
  ...iconStyle,
});

export const LastPageArrow = styled('button', {
  ...resetButton,
  ...iconStyle,
});
