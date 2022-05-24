import { styled } from '../../system';

export const Wrapper = styled('span', {
  d: 'inline-flex',
  align: 'center',
  justify: 'center',
  h: 24,
  color: '$grey-600',
  fontSize: '$sm',
  fontWeight: '$medium',
  border: '1px solid $grey-600',
  br: '$md',
  px: '$4',
  gap: '$2',
  cursor: 'default',
  textTransform: 'uppercase',

  /**
   * Variants
   */
  variants: {
    /**
     * Variant variants
     */
    variant: {
      solid: {
        color: '$white',
        bg: '$grey-400',
        borderColor: 'transparent',
      },
      outlined: {},
    },
    removable: {
      true: {
        pr: '$1',
      },
    },
  },

  /**
   * Default variants
   */
  defaultVariants: {
    variant: 'outlined',
  },
});

export const RemovableWrapper = styled('button', {
  border: 'none',
  size: 18,

  d: 'flex',
  justify: 'center',
  align: 'center',
  color: '$white',
  br: '$full',
  cursor: 'pointer',
  bg: '$grey-700',
});
