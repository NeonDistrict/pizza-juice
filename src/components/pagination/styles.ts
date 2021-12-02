import { styled } from '../../system';

export const PaginationContainer = styled('div', {
  d: 'flex',
  gap: '$2',
  br: '$sm',
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

export const Number = styled('div', {
  fontSize: '$sm',
  fontWeight: '$medium',
});

export const MobileContainer = styled('div', {
  d: 'flex',
  color: '$white',
  gap: '$4',
});

const iconVariant = {
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
    color: '$pink-500',
    cursor: 'pointer',
  },
};

const resetButton = {
  bg: 'transparent',
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
  ...iconVariant,
});

export const LastPageArrow = styled('button', {
  ...resetButton,
  ...iconStyle,
  ...iconVariant,
});
