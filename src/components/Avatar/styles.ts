import styled, { css, DefaultTheme } from 'styled-components';
import { AvatarProps } from '.';

const variants = (theme: DefaultTheme) => ({
  sizes: {
    xxl: css`
      width: 231px;
      height: 231px;
    `,
    xl: css`
      width: 185px;
      height: 188px;
    `,
    lg: css`
      width: 154px;
      height: 157px;
    `,
    md: css`
      width: 85px;
      height: 86px;
    `,
    sm: css`
      width: 77px;
      height: 76px;
    `,
    xs: css`
      width: 61px;
      height: 62px;
    `,
    xss: css`
      width: 23px;
      height: 23px;
      border-radius: ${theme.radii.full};
    `
  }
});

export const AvatarStyles = styled.img<Partial<AvatarProps>>`
  ${({ theme, size }) => css`
    ${size && variants(theme).sizes[size]}
  `}
`;
