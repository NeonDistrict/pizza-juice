import styled, { css, DefaultTheme } from 'styled-components';
import { opacify } from 'polished';

import { ButtonProps } from './';

const tealBorder = (theme: DefaultTheme) => css`
  box-shadow: 0 0 0 1px ${theme.colors.teal} inset;
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
      background: ${opacify(0.5, theme.colors.grey['500'])};
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
      background: ${opacify(0.2, theme.colors.pink['200'])};
    }

    :active {
      color: ${theme.colors.pink['200']};
      background: ${opacify(0.2, theme.colors.pink['200'])};
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
      background: ${opacify(0.1, theme.colors.red['100'])};
    }

    :active {
      color: ${theme.colors.red['100']};
      background: ${opacify(0.2, theme.colors.red['100'])};
      ${tealBorder(theme)};
    }

    :disabled {
      color: ${theme.colors.grey['300']};
      background: ${opacify(0.2, theme.colors.grey['100'])};
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

  /* I really want this to be something like
  /*   padding-${position}: 1rem;
  /* but I can't figure out how to do that. */
  // WIP
  icon: (position?: 'left' | 'right') => css`
    padding: ${position === 'left' ? '0 1rem 0 0' : '0 0 0 1rem'};
  `,

  // This is something that we need to discuss.
  // A squared button is just a button with a icon.
  // e.g Icon Position would be useless
  // Is possible, but not sure if putting this in the same component is the best way.

  rounded: (theme: DefaultTheme) => css`
    border-radius: ${theme.radii.full};
  `
};

export const ButtonStyles = styled.button<ButtonProps>`
  ${({
    theme,
    variant,
    size,
    fluid,
    disabled,
    rounded,
    squared,
    icon,
    iconPosition
  }) => css`
    border: none;
    background: none;
    font-weight: 600;
    font-family: inherit;
    text-transform: uppercase;
    color: white;
    cursor: pointer;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    ${sizesTypes(rounded || squared)[size!]};

    ${variantTypes(theme)[variant!]}

    ${disabled && buttonStylesModifiers.disabled}
    ${rounded && buttonStylesModifiers.rounded(theme)}
    /* ${icon && buttonStylesModifiers.icon(iconPosition)} */

    ${fluid && buttonStylesModifiers.fluid}
  `}
`;
