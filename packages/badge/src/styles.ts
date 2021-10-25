import styled, { DefaultTheme, css } from '@district-ui/system';

import { BadgeProps } from '.';

const sizeVariant = (theme: DefaultTheme) => ({
  sm: css`
    font-size: 9px;
    padding: 2px ${theme.spaces[1]};
  `,
  md: css`
    font-size: ${theme.fontSizes.sm};
    padding: 2px ${theme.spaces[2]};
  `,
  lg: css`
    font-size: ${theme.fontSizes.lg};
    padding: 2px ${theme.spaces[2]};
  `
});

export const BadgeStyles = styled.label<Pick<BadgeProps, 'size'>>`
  ${({ theme, size }) => css`
    user-select: none;
    display: inline-block;
    background-color: ${theme.colors.pink1};
    border-radius: ${theme.radii.sm};

    text-transform: uppercase;
    line-height: 150%;
    font-size: ${theme.fontSizes.sm};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.white};

    ${size && sizeVariant(theme)[size]};
  `}
`;
