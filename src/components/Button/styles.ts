import styled, { css, DefaultTheme } from 'styled-components';
import { transparentize } from 'polished';

import { ButtonProps } from './';

const tealBorder = (theme: DefaultTheme) => css`
  box-shadow: 0 0 0 1px ${theme.colors.teal[100]} inset;
`;

const variantTypes = (theme: DefaultTheme) => ({
  primary: css`
    background: ${theme.colors.pink['100']};

    :hover {
      background: ${theme.colors.pink['200']};
    }

    :active {
      background: ${theme.colors.pink['300']};
    }

    :disabled {
      background: ${theme.colors.grey['100']};
      color: ${theme.colors.grey['300']};
    }

    :focus {
      background: ${theme.colors.pink['200']};
      ${tealBorder(theme)};
    }
  `,

  secondary: css`
    background: ${theme.colors.grey['400']};

    :hover {
      background: ${theme.colors.grey['500']};
    }

    :active {
      background: ${transparentize(0.5, theme.colors.grey['500'])};
    }

    :disabled {
      background: ${theme.colors.grey['100']};
      color: ${theme.colors.grey['300']};
    }

    :focus {
      background: ${theme.colors.grey['500']};
      ${tealBorder(theme)};
    }
  `,

  outline: css`
    background: transparent;
    box-shadow: 0 0 0 1px ${theme.colors.pink['100']} inset;

    :hover {
      box-shadow: 0 0 0 1px ${theme.colors.pink['200']} inset;
    }

    :active {
      box-shadow: 0 0 0 1px ${theme.colors.pink['200']} inset;
    }

    :disabled {
      box-shadow: 0 0 0 1px ${theme.colors.grey['300']} inset;
      color: ${theme.colors.grey['300']};
    }

    :focus {
      ${tealBorder(theme)};
    }
  `,

  naked: css`
    background: transparent;
    color: ${theme.colors.pink['100']};

    :hover {
      color: ${theme.colors.pink['200']};
      background: ${transparentize(0.8, theme.colors.pink['200'])};
    }

    :active {
      color: ${theme.colors.pink['200']};
      background: ${transparentize(0.8, theme.colors.pink['200'])};
    }

    :disabled {
      color: ${theme.colors.grey['300']};
    }

    :focus {
      ${tealBorder(theme)};
    }
  `,

  destructive: css`
    background: transparent;
    color: ${theme.colors.red['100']};
    box-shadow: 0 0 0 1px ${theme.colors.red['100']} inset;

    :hover {
      color: ${theme.colors.red['100']};
      background: ${transparentize(0.9, theme.colors.red['100'])};
    }

    :active {
      color: ${theme.colors.red['100']};
      background: ${transparentize(0.8, theme.colors.red['100'])};
      ${tealBorder(theme)};
    }

    :disabled {
      color: ${theme.colors.grey['300']};
      background: ${transparentize(0.8, theme.colors.grey['100'])};
    }
  `
});

const sizesTypes = (roundedOrSquared?: boolean) => ({
  md: css`
    padding: ${roundedOrSquared ? '0' : '0.5rem 2rem'};
    font-size: 14px;
    line-height: 24px;
    width: ${roundedOrSquared && '40px'};
    height: ${roundedOrSquared && '40px'};
  `,
  sm: css`
    padding: ${roundedOrSquared ? '0' : '0.5rem 1rem'};
    width: ${roundedOrSquared && '32px'};
    height: ${roundedOrSquared && '32px'};
  `
});

const buttonStylesModifiers = {
  fluid: css`
    width: 100%;
  `,
  disabled: css`
    &:disabled {
      cursor: not-allowed;
    }
  `,

  rounded: (theme: DefaultTheme) => css`
    border-radius: ${theme.radii.full};
  `
};

export const ButtonStyles = styled.button<ButtonProps>`
  ${({ theme, variant, size, fluid, disabled, rounded, squared }) => css`
    border: none;
    background: none;
    font-weight: 600;
    font-family: inherit;
    text-transform: uppercase;
    color: white;
    cursor: pointer;
    user-select: none;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    ${sizesTypes(rounded || squared)[size!]};

    ${variantTypes(theme)[variant!]}

    ${disabled && buttonStylesModifiers.disabled}
    ${rounded && buttonStylesModifiers.rounded(theme)}

    ${fluid && buttonStylesModifiers.fluid}
  `}
`;
