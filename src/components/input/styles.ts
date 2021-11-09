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
        bg: '$white',
        color: '$black',
        borderBottomStyle: 'solid',
        borderBottomWidth: '1px',
        borderBottomColor: '$grey3',
      },
      line: {
        border: '1px solid',
        borderColor: '$grey2',
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
        bg: '$red1',
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
  mt: '$1',
  d: 'block',
});

export const Error = styled('div', {
  color: '$red1',
});
