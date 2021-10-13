import styled, { css, DefaultTheme } from 'styled-components';

import theme from 'styles/theme';

import { ButtonProps } from './';

type Colors = keyof typeof theme.colors;

const sizesTypes = {
  medium: css`
    padding: 0.65rem 2.5rem;
    letter-spacing: 0.48px;
  `,
  large: css`
    padding: 0.82rem 2.8rem;
    letter-spacing: 0.72px;
    font-size: 1.35rem;
  `
};

const variantTypes = {
  solid: (theme: DefaultTheme, color: Colors) => css`
    background: ${theme.colors[color]};
    border-color: transparent;
  `,
  outline: (theme: DefaultTheme, color: Colors) => css`
    background: transparent;
    color: ${theme.colors[color]};
    border-color: ${theme.colors[color]};
  `,
  icon: (theme: DefaultTheme, color: Colors) => css`
    padding: 0.5rem 0.5rem;
    background: ${theme.colors[color]};
  `
};

const buttonStylesModifiers = {
  fluid: css`
    width: 100%;
  `,
  color: (theme: DefaultTheme, color: Colors) => css`
    background: ${theme.colors[color]};
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

    ${sizesTypes[size!]};
    ${rounded && buttonStylesModifiers.rounded(theme)}
    ${disabled && buttonStylesModifiers.disabled}
    ${fluid && buttonStylesModifiers.fluid}
    ${color && buttonStylesModifiers.color(theme, color)}
    ${variantTypes[variant!](theme, color!)}
  `}
`;
