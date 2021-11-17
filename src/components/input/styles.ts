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
        color: '$grey3',
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
    borderBottomColor: '$pink2',
  },

  '&:focus': {
    borderBottomColor: '$teal1',
    borderBottomWidth: '1px',
  },

  '&:disabled': {
    color: '$grey4',
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
        border: '1px solid $grey3',
      },
      line: {
        borderBottom: '1px solid $grey2',
      },
    },

    /**
     * Error variant
     */
    error: {
      true: {
        borderBottom: '1px solid  $red1',
      },
    },
  },

  compoundVariants: [
    {
      variant: 'line',
      css: {
        '&:disabled': {
          border: '1px solid $grey4',
        },
      },
    },
    {
      variant: 'default',
      css: {
        '&:disabled': {
          bg: '#525252',
          color: '$grey4',
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
  color: '$grey1',
  fontSize: '$sm',

  variants: {
    disabled: {
      true: {
        color: '$grey4',
      },
    },
  },
});

export const Error = styled('div', {
  color: '$red1',
  fontSize: '$sm',
  mt: '$1',
});
