import styled, { css, DefaultTheme } from '@neon-district/system';

import { AvatarProps } from '.';

const variants = (theme: DefaultTheme) => ({
  sizes: {
    240: css`
      width: 240px;
      height: 240px;
    `,
    192: css`
      width: 192px;
      height: 192px;
    `,
    160: css`
      width: 160px;
      height: 160px;
    `,
    88: css`
      width: 88px;
      height: 88px;
    `,
    80: css`
      width: 80px;
      height: 80px;
    `,
    64: css`
      width: 64px;
      height: 64px;
    `,
    48: css`
      width: 40px;
      height: 40px;
    `,
    32: css`
      width: 32px;
      height: 32px;
    `,
    24: css`
      width: 24px;
      height: 24px;
      border-radius: ${theme.radii.full};
    `
  }
});

export const AvatarStyles = styled.img<Partial<AvatarProps>>`
  ${({ theme, size }) => css`
    ${size && variants(theme).sizes[size]}
  `}
`;
