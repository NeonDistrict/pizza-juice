import { styled } from '../../system';

import * as RadioGroupBase from '@radix-ui/react-radio-group';

export const RadioInputItem = styled(RadioGroupBase.Item, {
  all: 'unset',
  bg: '$white',
  size: 20,
  br: '$full',
  bs: '0 0 0 1px $grey2',
  cursor: 'pointer',

  '&:hover': {
    bs: '0 0 0 1px $pink2'
  },

  '&:focus': {
    bs: '0 0 0 2px $grey1'
  },

  '&:active': {
    bs: '0 0 0 1px $teal1'
  },

  '&[aria-checked="true"]': {
    bs: '0 0 0 1px $pink1'
  }
});

export const RadioIndicator = styled(RadioGroupBase.Indicator, {
  d: 'flex',
  align: 'center',
  justify: 'center',
  size: '$full',
  position: 'relative',

  '&:after': {
    content: '',
    d: 'block',
    size: 14,
    br: '$full',
    bg: '$pink1'
  }
});

export const RadioInputGroup = styled(RadioGroupBase.Root, {
  color: '$white',

  /**
   * Variants
   */
  variants: {
    /**
     * Direction variant
     */
    direction: {
      row: {
        d: 'flex',

        '& > :not(:last-child)': {
          mr: '$4'
        }
      },
      column: {}
    }
  },

  /**
   * Default variants
   */
  defaultVariant: {
    direction: 'column'
  }
});

export const Wrapper = styled('div', {
  d: 'flex',
  align: 'center',
  my: '$3'
});

export const Label = styled('label', {
  color: '$grey1',
  fontSize: '$md',
  pl: '$1',
  lineHeight: 1,
  userSelect: 'none',
  cursor: 'pointer'
});
