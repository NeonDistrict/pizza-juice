import styled, { DefaultTheme } from 'styled-components';

import { TextProps } from '.';

const variants = (theme: DefaultTheme) => ({
  size: {
    xs: {
      fontSize: theme.fontSizes.xs
    },
    sm: {
      fontSize: theme.fontSizes.sm
    },
    md: {
      fontSize: theme.fontSizes.md
    },
    lg: {
      fontSize: theme.fontSizes.lg
    },
    xl: {
      fontSize: theme.fontSizes.xl
    },
    '2xl': {
      fontSize: theme.fontSizes['2xl']
    },
    '3xl': {
      fontSize: theme.fontSizes['3xl']
    },
    '4xl': {
      fontSize: theme.fontSizes['4xl']
    }
  },
  weight: {
    thin: {
      fontWeight: theme.fontWeights.thin
    },
    normal: {
      fontWeight: theme.fontWeights.normal
    },
    medium: {
      fontWeight: theme.fontWeights.medium
    },
    bold: {
      fontWeight: theme.fontWeights.bold
    },
    extrabold: {
      fontWeight: theme.fontWeights.extrabold
    }
  }
});

export const TextStyled = styled.span<TextProps>(({ theme, size, weight }) => ({
  display: 'block',
  lineHeight: 1,
  margin: 0,
  color: theme.colors.white,

  // variant styles
  ...variants(theme).size[size!],
  ...variants(theme).weight[weight!]
}));
