import { styled } from '../../system';

import * as RadioGroupBase from '@radix-ui/react-radio-group';

export const RadioIndicator = styled(RadioGroupBase.Indicator, {
  d: 'flex',
  align: 'center',
  justify: 'center',
  size: '$full',
  position: 'relative',
  transition: '$fast',

  '&:hover': {
    '&:after': {
      bg: '$pink2',
    },
  },
  '&:after': {
    content: '',
    d: 'block',
    size: 14,
    br: '$full',
    bg: '$pink1',
  },
});

export const RadioInputItem = styled(RadioGroupBase.Item, {
  all: 'unset',
  bg: '$white',
  size: 20,
  br: '$full',
  bs: '0 0 0 1px $colors$grey2',
  cursor: 'pointer',
  transition: '$fast',

  '&:hover': {
    bs: '0 0 0 1px $colors$pink2',
    '&[aria-checked="true"]': {
      bs: '0 0 0 1px $colors$pink2',
    },
  },

  '&:focus': {
    bs: '0 0 0 2px $colors$grey1',
  },

  '&:disabled': {
    bs: '0 0 0 1px $colors$grey3',
    bg: '$grey1',
    '>span': {
      bs: '0 0 0 1px $grey7',
      '&:after': {
        bg: '$grey7',
      },
    },
  },

  variants: {
    error: {
      true: {
        bs: '0 0 0 1px $colors$red1',
      },
    },
  },

  '&[aria-checked="true"]': {
    bs: '0 0 0 1px $colors$pink1',
    '&:disabled': {
      bg: '$grey6',
      bs: '0 0 0 1px $colors$grey3',
    },
  },

  // TODO: discuss this. Active for radio just works at the first time.
  // '&:active': {
  //   bs: '0 0 0 2px $colors$teal1',
  // },
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
          mr: '$4',
        },
      },
      column: {},
    },
  },

  /**
   * Default variants
   */
  defaultVariant: {
    direction: 'column',
  },
});

export const Wrapper = styled('div', {
  d: 'flex',
  align: 'center',
  my: '$3',
});

export const Label = styled('label', {
  color: '$grey1',
  fontSize: '$md',
  pl: '$1',
  lineHeight: 1,
  userSelect: 'none',
  cursor: 'pointer',
  textTransform: 'uppercase',
  variants: {
    error: {
      true: {
        color: '$red1',
      },
    },
    disabled: {
      true: {
        color: '$grey4',
      },
    },
  },
});
