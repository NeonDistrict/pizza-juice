import styled, { css, DefaultTheme } from 'styled-components';
import { AvatarProps } from '.';

const variants = (theme: DefaultTheme) => ({
  sizes: {
    xxl: css`
      width: 240px;
      height: 240px;
    `,
    xl: css`
      width: 192px;
      height: 192px;
    `,
    lg: css`
      width: 160px;
      height: 160px;
    `,
    md: css`
      width: 88px;
      height: 88px;
    `,
    sm: css`
      width: 80px;
      height: 80px;
    `,
    '3xs': css`
      width: 64px;
      height: 64px;
    `,
    '2xs': css`
      width: 40px;
      height: 40px;
    `,
    xs: css`
      width: 32px;
      height: 32px;
    `,
    xss: css`
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
