import styled from '@nd-ui/system';

export const Wrapper = styled('button', {
  appearance: 'none',
  border: 0,
  background: 'none',
  fontWeight: 600,
  fontFamily: '$system',
  textTransform: 'uppercase',
  color: '$white',
  cursor: 'pointer',
  userSelect: 'none',
  display: 'flex',
  align: 'center',
  justify: 'center',
  transition: '$fast',
  gap: '$2',

  variants: {
    size: {
      md: {
        p: '$4 $8',
        fontSize: '$sm',
        lineHeight: '24px',
        h: 40
      },
      sm: {
        p: '$4 $8',
        h: 32
      }
    },
    variant: {
      primary: {
        bg: '$pink1',
        '&:hover': {
          bg: '$pink2'
        },
        '&:active': {
          bg: '$pink3'
        },
        '&:disabled': {
          bg: '$grey1',
          color: '$grey3'
        },
        '&:focus': {
          bg: '$pink2',
          boxShadow: '1px solid $teal1'
        }
      },
      secondary: {
        bg: '$grey4',
        '&:hover': {
          bg: '$grey5'
        },
        '&:active': {
          bg: '$grey5'
        },
        '&:disabled': {
          bg: '$grey1',
          color: '$grey3'
        },
        '&:focus': {
          bg: '$grey5',
          border: '1px solid $teal1'
        }
      },
      outline: {
        bg: 'transparent',
        border: '1px solid $pink1',

        '&:hover': {
          border: '1px solid $pink2'
        },
        '&:active': {
          border: '1px solid $pink2'
        },

        '&:disabled': {
          border: '1px solid $grey3',

          color: '$grey3'
        },

        '&:focus': {
          border: '1px solid $teal1'
        }
      },
      naked: {
        bg: 'transparent',
        color: '$pink1',

        '&:hover': {
          bg: '$red1',
          color: '$pink2'
        },
        '&:active': {
          color: '$pink2',
          bg: '$pink2'
        },
        '&:disabled': {
          color: '$grey3'
        },
        '&:focus': {
          border: '1px solid $teal1'
        }
      },
      destructive: {
        bg: 'transparent',
        color: '$red1',
        border: '1px solid $red1',

        '&:hover': {
          color: '$red1',
          bg: '$red1'
        },
        '&:active': {
          color: '$red1',
          bg: '$red1',
          border: '1px solid $teal1'
        },
        '&:disabled': {
          color: '$grey3',
          bg: '$grey1'
        }
      }
    },
    disabled: {
      true: {
        filter: 'grayscale(100%)',
        cursor: 'not-allowed'
      }
    },
    fluid: {
      true: {
        w: '$full'
      }
    },
    rounded: {
      true: {
        br: '$full'
      }
    }
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
});
