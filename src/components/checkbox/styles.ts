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
  borderColor: '$grey-400',

  '&:hover': {
    borderColor: '$pink-500',
  },
  '&:active': {
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
      },
      md: {
        size: 16,
      },
      lg: {
        size: 20,
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

export const Wrapper = styled('div', {
  d: 'flex',
  align: 'center',
});

export const Label = styled('label', {
  color: '$grey-400',
  pl: '$1',
  lineHeight: 1,
  userSelect: 'none',

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
