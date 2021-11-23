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
      bg: '$pink-600',
    },
  },
  '&:after': {
    content: '',
    d: 'block',
    size: 14,
    br: '$full',
    bg: '$pink-500',
  },
});

export const RadioInputItem = styled(RadioGroupBase.Item, {
  all: 'unset',
  bg: '$white',
  size: 20,
  br: '$full',
  bs: '0 0 0 1px $colors$grey-600',
  cursor: 'pointer',
  transition: '$fast',

  '&:hover': {
    bs: '0 0 0 1px $colors$pink-600',
    '&[aria-checked="true"]': {
      bs: '0 0 0 1px $colors$pink-600',
    },
  },

  '&:focus': {
    bs: '0 0 0 2px $colors$grey-400',
  },

  '&:disabled': {
    bs: '0 0 0 1px $colors$grey-600',
    bg: '$grey-400',
    '>span': {
      bs: '0 0 0 1px $grey-400',
      '&:after': {
        bg: '$grey-400',
      },
    },
  },

  variants: {
    error: {
      true: {
        bs: '0 0 0 1px $colors$red-500',
      },
    },
  },

  '&[aria-checked="true"]': {
    bs: '0 0 0 1px $colors$pink-500',
    '&:disabled': {
      bg: '$grey-400',
      bs: '0 0 0 1px $colors$grey-600',
    },
  },

  // TODO: discuss this. Active for radio just works at the first time.
  // '&:active': {
  //   bs: '0 0 0 2px $colors$teal-500',
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
  color: '$grey-400',
  fontSize: '$md',
  pl: '$1',
  lineHeight: 1,
  userSelect: 'none',
  cursor: 'pointer',
  textTransform: 'uppercase',
  variants: {
    error: {
      true: {
        color: '$red-500',
      },
    },
    disabled: {
      true: {
        color: '$grey-700',
      },
    },
  },
});
