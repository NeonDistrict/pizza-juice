import { styled } from '../../system';

export const LabelStyles = styled('div', {
  p: '$1 $2',
  d: 'inline-flex',
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
});

export const Text = styled('label', {
  userSelect: 'none',
  textTransform: 'uppercase',
  lineHeight: '150%',
  fontSize: '$sm',
});
