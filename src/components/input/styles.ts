import { styled } from '../../system';

export const Wrapper = styled('div', {
  color: '$white',
});

export const Label = styled('label', {
  d: 'block',
  mb: '$1',
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

export const Input = styled('input', {
  // reset
  appearance: 'none',
  border: '1px solid transparent',
  outline: 0,
  fontFamily: 'inherit',

  w: '$full',
  h: 40,
  px: '$4',
  fontSize: '$md',
  bg: '$black',
  color: '$white',
  transition: '$fast',

  '&:hover': {
    borderBottomColor: '$pink-600',
  },

  '&:focus': {
    borderBottomColor: '$teal-500',
    borderBottomWidth: '1px',
  },

  '&:disabled': {
    color: '$grey-700',
    cursor: 'not-allowed',
  },

  /**
   * Variants
   */
  variants: {
    /**
     * Variant variant
     */
    variant: {
      default: {
        border: '1px solid $grey-600',
      },
      line: {
        borderBottom: '1px solid $grey-600',
      },
    },

    /**
     * Error variant
     */
    error: {
      true: {
        borderBottom: '1px solid  $red-500',
      },
    },
  },

  compoundVariants: [
    {
      variant: 'line',
      css: {
        '&:disabled': {
          border: '1px solid $grey-700',
        },
      },
    },
    {
      variant: 'default',
      css: {
        '&:disabled': {
          bg: '#525252',
          color: '$grey-700',
        },
      },
    },
  ],

  /**
   * Default variants
   */
  defaultVariants: {
    variant: 'default',
  },
});

export const Message = styled('small', {
  color: '$grey-400',
  fontSize: '$sm',

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
  fontSize: '$sm',
  mt: '$1',
});
