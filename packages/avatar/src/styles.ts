import styled, { DefaultTheme } from '@neon-district/system';

import { AvatarProps } from '.';

const variants = (theme: DefaultTheme) => ({
  sizes: {
    '240': {
      width: 240,
      height: 240
    },
    '192': {
      width: 192,
      height: 192
    },
    '160': {
      width: 160,
      height: 160
    },
    '88': {
      width: 88,
      height: 88
    },
    '80': {
      width: 80,
      height: 80
    },
    '64': {
      width: 64,
      height: 64
    },
    '40': {
      width: 40,
      height: 40
    },
    '32': {
      width: 32,
      height: 32
    },
    '24': {
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
