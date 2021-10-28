import styled, { DefaultTheme } from '@neon-district/system';

import { AvatarProps } from '.';

const variants = (theme: DefaultTheme) => ({
  sizes: {
    '3xl': {
      width: 240,
      height: 240
    },
    '2xl': {
      width: 192,
      height: 192
    },
    xl: {
      width: 160,
      height: 160
    },
    lg: {
      width: 88,
      height: 88
    },
    md: {
      width: 80,
      height: 80
    },
    sm: {
      width: 64,
      height: 64
    },
    xs: {
      width: 40,
      height: 40
    },
    '2xs': {
      width: 32,
      height: 32
    },
    '3xs': {
      width: 24,
      height: 24,
      borderRadius: theme.radii.full
    }
  }
});

export const AvatarStyled = styled('img')<AvatarProps>(({ theme, size }) => ({
  // variant styles
  ...(size && variants(theme).sizes[size!])
}));
