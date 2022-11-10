import { styled } from '../../system';

import * as RRadioGroup from '@radix-ui/react-radio-group';

export const RadioGroup = styled(RRadioGroup.Root, {
  color: '$white',
});

export const RadioInputItem = styled(RRadioGroup.Item, {
  all: 'unset',
  bg: '$white',
  size: 20,
  minSize: 20,
  br: '$full',
  cursor: 'pointer',
  transition: '$fast',
  border: '1px solid',

  '&:hover': {
    borderColor: '$pink-600',
  },

  '&:focus, &:focus-within': {
    borderColor: '$teal-500',
  },

  '&:disabled': {
    borderColor: '$grey-600',
    bg: '$grey-400',

    span: {
      borderColor: '$grey-400',

      '&:after': {
        bg: '$grey-600',
      },
    },
  },

  '&:active, &:focus-within': {
    borderColor: '$colors$teal-500',
  },

  '&[aria-checked="true"]': {
    borderColor: '$pink-500',

    '&:disabled': {
      bg: '$grey-400',
      borderColor: '$grey-600',
    },
  },

  variants: {
    error: {
      true: {
        borderColor: '$red-500',
      },
    },
  },
});

export const RadioIndicator = styled(RRadioGroup.Indicator, {
  d: 'flex',
  align: 'center',
  justify: 'center',
  size: '$full',
  position: 'relative',
  transition: '$fast',

  '&:after': {
    content: '',
    d: 'block',
    size: 14,
    bg: '$pink-500',
    br: '$full',
  },
});

export const Label = styled('label', {
  d: 'flex',
  align: 'center',
  color: '$grey-400',
  fontSize: '$sm',
  fontWeight: '$medium',
  gap: '$2',
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
