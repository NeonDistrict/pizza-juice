import styled, { DefaultTheme } from 'styled-components';

import { ButtonProps } from '.';

export const variants = (theme: DefaultTheme) => ({
  /**
   * Variant types
   */
  variant: {
    primary: {
      background: theme.colors.pink1,

      '&:hover': {
        background: theme.colors.pink2
      },
      '&:focus': {
        borderColor: theme.colors.teal1
      },
      '&:active': {
        background: theme.colors.pink3
      },
      '&:disabled': {
        background: theme.colors.grey1,
        color: theme.colors.grey3
      }
    },
    secondary: {
      background: theme.colors.grey4,

      '&:hover': {
        background: theme.colors.grey5
      },
      '&:focus': {
        background: theme.colors.grey5,
        borderColor: theme.colors.teal1
      },
      '&:active': {
        background: theme.colors.grey5
      },
      '&:disabled': {
        background: theme.colors.grey1,
        color: theme.colors.grey3
      }
    },
    destructive: {
      color: theme.colors.red1,
      borderColor: theme.colors.red1,

      '&:hover': {
        background: theme.colors.red50
      },
      '&:focus': {
        borderColor: theme.colors.teal1
      },
      '&:active': {
        background: theme.colors.red50
      },
      '&:disabled': {
        color: theme.colors.grey3,
        borderColor: theme.colors.grey1,
        background: theme.colors.grey50
      }
    },
    outline: {
      borderColor: theme.colors.pink1,

      '&:focus': {
        borderColor: theme.colors.teal1
      },
      '&:disabled': {
        color: theme.colors.grey3,
        borderColor: theme.colors.grey1
      }
    },
    naked: {
      color: theme.colors.pink1,

      '&:hover': {
        color: theme.colors.pink2,
        background: theme.colors.pink50
      },
      '&:focus': {
        borderColor: theme.colors.teal1
      },
      '&:active': {
        color: theme.colors.pink2,
        background: 'transparent'
      },
      '&:disabled': {
        color: theme.colors.grey3,
        background: 'transparent'
      }
    }
  },
  /**
   * Shape types
   */
  shape: {
    rounded: {
      squared: {
        borderRadius: 0
      },
      borderRadius: theme.radii.full
    }
  },
  /**
   * Size types
   */
  size: {
    sm: {
      minWidth: 32,
      height: 32,
      fontSize: theme.fontSizes.xs,
      padding: `0 ${theme.spaces[4]}`
    },
    md: {
      minWidth: 40,
      height: 40,
      fontSize: theme.fontSizes.sm,
      padding: `0 ${theme.spaces[6]}`
    }
  },
  fluid: {
    width: theme.sizes.full
  }
});

export const ButtonStyled = styled('button')<ButtonProps>(
  ({ theme, variant, size, fluid, shape }) => ({
    // reset
    appearance: 'none',
    border: '1px solid',
    borderColor: 'transparent',
    background: 'transparent',
    fontFamily: 'inherit',
    outline: 0,

    // base styles
    fontWeight: 600,
    textTransform: 'uppercase',
    color: theme.colors.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spaces[2],
    userSelect: 'none',
    transition: theme.durations.fast,

    '&:not(:disabled)': {
      cursor: 'pointer'
    },

    // conditional styles
    ...(fluid && variants(theme).fluid),

    // variant styles
    ...variants(theme).variant[variant!],
    ...variants(theme).shape[shape!],
    ...variants(theme).size[size!]
  })
);
