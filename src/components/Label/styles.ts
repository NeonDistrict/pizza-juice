import styled, { css, DefaultTheme } from 'styled-components';
import { LabelProps } from '.';

const sizeVariant = (theme: DefaultTheme) => ({
  sm: css`
    font-size: 9px;
    padding: 2px ${theme.spaces['1']};
  `,
  md: css`
    font-size: ${theme.fontSizes.sm};
    padding: 2px ${theme.spaces['2']};
  `,
  lg: css`
    font-size: ${theme.fontSizes.lg};
    padding: 2px ${theme.spaces['2']};
  `
});

export const LabelStyles = styled.label<Pick<LabelProps, 'size'>>`
  ${({ theme, size }) => css`
    display: inline-block;
    background-color: ${theme.colors.pink['100']};
    border-radius: 4px;

    text-transform: uppercase;
    color: ${theme.colors.white};
    line-height: 150%;
    font-weight: ${theme.fontWeights.bold};

    ${size && sizeVariant(theme)[size]}
  `}
`;
