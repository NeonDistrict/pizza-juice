import { styled } from '../../system';

export const LabelStyles = styled('div', {
  p: '$1 $2',
  d: 'inline-flex',
  align: 'center',
  gap: '$2',
  color: '$grey5',

  /**
   * Variants
   */
  variants: {
    /**
     * Variant variant
     */
    variant: {
      success: {
        bg: '$green1',
      },
      warning: {
        bg: '$yellow1',
      },
      danger: {
        bg: '$red1',
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
