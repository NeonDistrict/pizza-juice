import { styled } from '../../system';

export const Button = styled('button', {
  appearance: 'none',
  border: '1px solid',
  borderColor: 'transparent',
  bg: 'transparent',
  fontFamily: 'inherit',
  outline: 0,

  // base styles
  fontWeight: 600,
  textTransform: 'uppercase',
  color: '$white',
  d: 'flex',
  align: 'center',
  justify: 'center',
  gap: '$2',
  userSelect: 'none',
  transition: '$fast',

  '&:not(:disabled)': {
    cursor: 'pointer',
  },

  /**
   * Variants
   */
  variants: {
    /**
     * Variant variant
     */
    variant: {
      primary: {
        bg: '$pink1',

        '&:hover': {
          bg: '$pink2',
        },
        '&:focus': {
          borderColor: '$teal1',
        },
        '&:active': {
          bg: '$pink3',
        },
        '&:disabled': {
          bg: '$grey1',
          color: '$grey3',
        },
      },
      secondary: {
        bg: '$grey4',

        '&:hover': {
          bg: '$grey5',
        },
        '&:focus': {
          bg: '$grey5',
          borderColor: '$teal1',
        },
        '&:active': {
          bg: '$grey5',
        },
        '&:disabled': {
          bg: '$grey1',
          color: '$grey3',
        },
      },
      destructive: {
        color: '$red1',
        borderColor: '$red1',

        '&:hover': {
          bg: '$red50',
        },
        '&:focus': {
          borderColor: '$teal1',
        },
        '&:active': {
          bg: '$red50',
        },
        '&:disabled': {
          color: '$grey3',
          borderColor: '$grey1',
          bg: '$grey50',
        },
      },
      outline: {
        borderColor: '$pink1',

        '&:focus': {
          borderColor: '$teal1',
        },
        '&:disabled': {
          color: '$grey3',
          borderColor: '$grey1',
        },
      },
      naked: {
        color: '$pink1',

        '&:hover': {
          color: '$pink2',
          bg: '$pink50',
        },
        '&:focus': {
          borderColor: '$teal1',
        },
        '&:active': {
          color: '$pink2',
          bg: 'transparent',
        },
        '&:disabled': {
          color: '$grey3',
          bg: 'transparent',
        },
      },
    },
    /**
     * Shape types
     */
    shape: {
      rounded: {
        br: '$full',
      },
      squared: {
        br: 0,
      },
    },
    /**
     * Size types
     */
    size: {
      sm: {
        minW: 32,
        h: 32,
        fontSize: '$xs',
        p: '0 $4',
      },
      md: {
        minW: 40,
        h: 40,
        fontSize: '$sm',
        p: '0 $6',
      },
    },
  },

  /**
   * Default variants
   */
  defaultVariants: {
    variant: 'primary',
    shape: 'squared',
    size: 'md',
  },
});
