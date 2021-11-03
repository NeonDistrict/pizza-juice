import { styled } from '../../system';

import * as CheckboxBase from '@radix-ui/react-checkbox';

export const CheckboxInput = styled(CheckboxBase.Root, {
  all: 'unset',
  bg: '$black',
  color: '$pink1',
  d: 'flex',
  justify: 'center',
  align: 'center',
  border: '1px solid',
  borderColor: '$grey1',

  '&:hover': {
    borderColor: '$pink1'
  },
  '&:active': {
    borderColor: '$teal1'
  },
  '&:disabled': {
    bg: '$grey1',
    color: '$grey3'
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
        size: 12
      },
      md: {
        size: 16
      },
      lg: {
        size: 20
      }
    }
  },

  /**
   * Default variants
   */
  defaultVariants: {
    size: 'md'
  }
});

export const CheckboxIndicator = styled(CheckboxBase.Indicator, {
  color: 'currentColor'
});

export const Wrapper = styled('div', {
  d: 'flex',
  align: 'center'
});

export const Label = styled('label', {
  color: '$grey1',
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
        fontSize: '$xs'
      },
      md: {
        fontSize: '$sm'
      },
      lg: {
        fontSize: '$md'
      }
    }
  },

  /**
   * Default variants
   */
  defaultVariants: {
    size: 'md'
  }
});
