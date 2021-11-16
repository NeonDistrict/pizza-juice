import { styled } from '../../system';

export const Wrapper = styled('div', {
  color: '$white',
});

export const Label = styled('label', {
  d: 'block',
  mb: '$1',
  textTransform: 'uppercase',
  fontWeight: '$medium',
});

export const InputStyles = styled('input', {
  w: '$full',
  px: '$4',
  fontSize: '$md',
  outline: 0,
  bg: '$black',
  color: '$white',
  border: 'none',
  transition: '$fast',

  '&:hover': {
    borderColor: '$pink2',
  },
  '&:focus': {
    borderColor: '$teal1',
    borderBottomWidth: '1px',
  },
  '&:disabled': {
    bg: '#ccc',
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
     * Size variant
     */
    size: {
      sm: {
        height: 31,
      },
      md: {
        height: 40,
      },
    },
    /**
     * Error variant
     */
    error: {
      true: {
        borderBottom: '1px solid $red1',
      },
    },
  },

  /**
   * Default variants
   */
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

export const Message = styled('small', {
  color: '$grey1',
  fontSize: '$sm',
});

export const Error = styled('div', {
  color: '$red1',
  fontSize: '$sm',
  mt: '$1',
});
