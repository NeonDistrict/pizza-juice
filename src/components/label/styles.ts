import { styled } from '../../system';

export const Label = styled('div', {
  userSelect: 'none',
  whiteSpace: 'nowrap',
  textTransform: 'uppercase',

  d: 'inline-flex',
  p: '$2',
  align: 'center',
  gap: '$2',
  color: '$grey-800',

  /**
   * Variants
   */
  variants: {
    /**
     * Variant variant
     */
    variant: {
      success: {
        bg: '$green-500',
      },
      warning: {
        bg: '$yellow-500',
      },
      danger: {
        bg: '$red-500',
      },
    },
    /**
     * Icon variant
     */
    icon: {
      true: {
        pl: '10px',
      },
    },
  },

  /**
   * Default variants
   */
  defaultVariants: {
    variant: 'success',
  },
});
