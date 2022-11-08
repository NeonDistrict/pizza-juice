import { styled } from '../../system';

import * as LabelBase from '@radix-ui/react-label';

export const Wrapper = styled('div');

export const SelectWrapper = styled('div', {
  position: 'relative',
  d: 'flex',
  align: 'center',
  w: '$full',
});

export const Select = styled('select', {
  // reset
  appearance: 'none',
  fontFamily: 'inherit',

  w: '$full',
  h: 40,
  fontSize: '$md',
  cursor: 'pointer',
  color: '$white',
  align: 'center',
  d: 'inline-flex',
  justify: 'space-between',
  userSelect: 'none',
  fontWeight: '$medium',
  border: '1px solid',
  pl: '$4',
  pr: '$8',
  transition: '$fast',

  '&:hover': {
    borderColor: '$pink-600',
  },

  '&:focus-within': {
    borderColor: '$teal-500',
  },

  '&:disabled': {
    bg: '$grey-600',
    color: '$grey-700',
    cursor: 'not-allowed',

    '& + svg': {
      color: '$grey-700',
    },
  },

  /**
   * Variants
   */
  variants: {
    /**
     * Variant variant
     */
    variant: {
      solid: {
        bg: '#080808',
        borderColor: 'transparent',
      },
      outline: {
        bg: '$black',
        borderColor: '$grey-700',
      },
    },
  },

  /**
   * Default variants
   */
  defaultVariants: {
    variant: 'outline',
  },
});

export const Option = styled('option', {
  d: 'block',
  m: 0,
  fontFamily: 'inherit',
  p: '$2 $6',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  color: '$white',
  cursor: 'pointer',
  fontWeight: '$medium',
  textTransform: 'uppercase',
});

export const Label = styled(LabelBase.Root, {
  d: 'block',
  mb: '$1',
  fontSize: '$sm',
  textTransform: 'uppercase',
  fontWeight: '$medium',

  variants: {
    disabled: {
      true: {
        color: '$grey-600',
      },
    },
  },
});

export const Hint = styled('small', {
  color: '$grey-400',
  fontSize: '$xs',
  mt: '5px',
  d: 'block',

  variants: {
    disabled: {
      true: {
        color: '$grey-700',
      },
    },
  },
});

export const Error = styled('div', {
  color: '$red-500',
  fontSize: '$xs',
});
