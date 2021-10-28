import styled, { DefaultTheme } from '@neon-district/system';

import { AlertProps } from '.';

const variants = (theme: DefaultTheme) => ({
  variant: {
    solid: {
      color: theme.colors.white,
      background: theme.colors.black,
      borderColor: theme.colors.grey1
    },
    outline: {
      background: 'transparent'
    }
  },
  type: {
    success: {},
    error: {},
    warning: {},
    default: {}
  }
});

export const Wrapper = styled('div')<AlertProps>(
  ({ theme, type, variant }) => ({
    width: theme.sizes.full,
    display: 'flex',
    justifyContent: 'space-between',
    padding: '16px',
    border: '1px solid',
    textTransform: 'uppercase',

    // variant styles
    ...variants(theme).variant[variant!],
    ...variants(theme).type[type!]
  })
);

export const TextStyled = styled('div')(({ theme }) => ({
  fontWeight: theme.fontWeights.bold
}));
