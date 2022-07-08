import { styled } from '../../system';

import * as CheckboxBase from '@radix-ui/react-checkbox';

export const CheckboxInput = styled(CheckboxBase.Root, {
  all: 'unset',
  bg: '$black',
  color: '$pink-500',
  d: 'flex',
  justify: 'center',
  align: 'center',
  border: '1px solid',
  borderColor: '$grey-600',

  '&:hover': {
    borderColor: '$pink-500',
  },

  '&:active, &:focus-within': {
    borderColor: '$teal-500',
  },

  '&:disabled': {
    bg: '$grey-400',
    color: '$grey-600',
  },

  /**
   * Variants
   */
  variants: {
    /**
     * Size variant
     */
    size: {
      sm: {
        size: 12,
        minSize: 12,
      },
      md: {
        size: 16,
        minSize: 16,
      },
      lg: {
        size: 20,
        minSize: 20,
      },
    },
  },

  /**
   * Default variants
   */
  defaultVariants: {
    size: 'md',
  },
});

export const CheckboxIndicator = styled(CheckboxBase.Indicator, {
  color: 'currentColor',
});

export const Label = styled('label', {
  d: 'flex',
  align: 'center',
  color: '$grey-400',
  cursor: 'pointer',
  gap: '$2',

  /**
   * Variants
   */
  variants: {
    /**
     * Size variant
     */
    size: {
      sm: {
        fontSize: '$xs',
      },
      md: {
        fontSize: '$sm',
      },
      lg: {
        fontSize: '$md',
      },
    },
  },

  /**
   * Default variants
   */
  defaultVariants: {
    size: 'md',
  },
});
