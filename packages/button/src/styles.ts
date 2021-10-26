import styled, { css, DefaultTheme } from '@neon-district/system';

import { transparentize } from 'polished';

import { ButtonProps } from './';

const tealBorder = (theme: DefaultTheme) => css`
  box-shadow: 0 0 0 1px ${theme.colors.teal1} inset;
`;

const variantTypes = (theme: DefaultTheme) => ({
  primary: css`
    background: ${theme.colors.pink1};

    &:hover {
      background: ${theme.colors.pink2};
    }

    &:active {
      background: ${theme.colors.pink3};
    }

    &:disabled {
      background: ${theme.colors.grey1};
      color: ${theme.colors.grey3};
    }

    &:focus {
      background: ${theme.colors.pink2};
      ${tealBorder(theme)};
    }
  `,

  secondary: css`
    background: ${theme.colors.grey4};

    &:hover {
      background: ${theme.colors.grey5};
    }

    &:active {
      background: ${transparentize(0.5, theme.colors.grey5)};
    }

    &:disabled {
      background: ${theme.colors.grey1};
      color: ${theme.colors.grey3};
    }

    &:focus {
      background: ${theme.colors.grey5};
      ${tealBorder(theme)};
    }
  `,

  outline: css`
    background: transparent;
    box-shadow: 0 0 0 1px ${theme.colors.pink1} inset;

    &:hover {
      box-shadow: 0 0 0 1px ${theme.colors.pink2} inset;
    }

    &:active {
      box-shadow: 0 0 0 1px ${theme.colors.pink2} inset;
    }

    &:disabled {
      box-shadow: 0 0 0 1px ${theme.colors.grey3} inset;
      color: ${theme.colors.grey3};
    }

    &:focus {
      ${tealBorder(theme)};
    }
  `,

  naked: css`
    background: transparent;
    color: ${theme.colors.pink1};

    &:hover {
      color: ${theme.colors.pink2};
      background: ${transparentize(0.8, theme.colors.pink2)};
    }

    &:active {
      color: ${theme.colors.pink2};
      background: ${transparentize(0.8, theme.colors.pink2)};
    }

    &:disabled {
      color: ${theme.colors.grey3};
    }

    &:focus {
      ${tealBorder(theme)};
    }
  `,

  destructive: css`
    background: transparent;
    color: ${theme.colors.red1};
    box-shadow: 0 0 0 1px ${theme.colors.red1} inset;

    &:hover {
      color: ${theme.colors.red1};
      background: ${transparentize(0.9, theme.colors.red1)};
    }

    &:active {
      color: ${theme.colors.red1};
      background: ${transparentize(0.8, theme.colors.red1)};
      ${tealBorder(theme)};
    }

    &:disabled {
      color: ${theme.colors.grey3};
      box-shadow: 0 0 0 1px ${theme.colors.grey1} inset;
      background: ${transparentize(0.8, theme.colors.grey1)};
    }
  `
});

const sizesTypes = (roundedOrSquared?: boolean) => ({
  md: css`
    padding: ${roundedOrSquared ? '0' : '0.5rem 1.5rem'};
    font-size: 14px;
    line-height: 24px;
    width: ${roundedOrSquared && '40px'};
    height: ${roundedOrSquared && '40px'};
  `,
  sm: css`
    padding: ${roundedOrSquared ? '0' : '0.5rem 1rem'};
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

  shape: (theme: DefaultTheme) => ({
    rounded: css`
      border-radius: ${theme.radii.full};
    `,

    squared: css`
      border-radius: 0;
    `
  })
};

export const ButtonStyled = styled.button<ButtonProps>`
  ${({ theme, variant, size, fluid, disabled, shape }) => css`
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
    transition: ${theme.durations.fast};

    ${sizesTypes(!!shape)[size!]};

    ${variantTypes(theme)[variant!]}

    ${disabled && buttonStylesModifiers.disabled}
    ${shape && buttonStylesModifiers.shape(theme)[shape]}

    ${fluid && buttonStylesModifiers.fluid}
  `}
`;
