import styled, { css, DefaultTheme } from 'styled-components';

import theme from '../../styles/theme';

import { ButtonProps } from './';

const colorMatch = {
  primary: css`
    background: ${theme.colors.grey['300']};
  `,
  success: css`
    background: ${theme.colors.green['100']};
    color: ${theme.colors.black};
  `,
  error: css`
    background: ${theme.colors.pink['300']};
  `,

  warning:
    // If variant === outline, this should be white color, but if solid, prob black
    css`
      background: ${theme.colors.yellow['100']};
      color: ${theme.colors.black};
    `,

  teal: css`
    background: ${theme.colors.teal['100']};
  `
};

const sizesTypes = {
  md: css`
    padding: 0.65rem 2.5rem;
    letter-spacing: 0.48px;
  `,
  lg: css`
    padding: 0.82rem 2.8rem;
    letter-spacing: 0.72px;
    font-size: 1.35rem;
  `
};

const variantTypes = {
  solid: (_, color: keyof typeof colorMatch) => css`
    border-color: transparent;
    ${colorMatch[color]}
  `,
  outline: (theme: DefaultTheme, color: keyof typeof colorMatch) => css`
    background: transparent;
    color: ${color === 'teal' ? theme.colors.pink['100'] : colorMatch[color]};
    border-color: ${colorMatch[color]};
  `,
  icon: (_, color: keyof typeof colorMatch) => css`
    padding: 0.5rem 0.5rem;
    background: ${colorMatch[color]};
  `
};

const buttonStylesModifiers = {
  fluid: css`
    width: 100%;
  `,
  disabled: css`
    &:disabled {
      filter: grayscale(1);
      cursor: not-allowed;
    }
  `,
  rounded: (theme: DefaultTheme) => css`
    border-radius: ${theme.radii.full};
  `
};

export const ButtonStyles = styled.button<ButtonProps>`
  ${({ theme, variant, size, fluid, color, disabled, rounded }) => css`
    font-weight: 600;
    font-family: inherit;
    text-transform: uppercase;
    color: white;
    border-width: 1;
    border-style: solid;
    cursor: pointer;

    ${rounded && buttonStylesModifiers.rounded(theme)}
    ${disabled && buttonStylesModifiers.disabled}
    ${fluid && buttonStylesModifiers.fluid}

    ${sizesTypes[size!]};

    ${variantTypes[variant!](theme, color!)}
  `}
`;
