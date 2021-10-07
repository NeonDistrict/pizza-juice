import styled, { css, DefaultTheme } from 'styled-components';

import { InputProps } from '.';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: white;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    display: block;
    margin-bottom: 5px;
    text-transform: uppercase;
    font-weight: ${theme.fontWeights.medium};
  `}
`;

const colorTypes = {
  white: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.grey['300']};
  `,
  black: (theme: DefaultTheme) => css`
    border: 1px solid;
    border-color: ${theme.colors.grey['200']};
  `,
  primary: (theme: DefaultTheme) => css`
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.pink['300']};
    background: ${theme.colors.pink['100']};

    &:focus {
      background: ${theme.colors.pink['100']};
    }

    &:hover {
      background: ${theme.colors.pink['200']};
    }
  `
};

const sizeTypes = {
  sm: css`
    height: 31px;
  `,
  md: css`
    height: 40px;
  `
};

const inputStylesModifiers = {
  disabled: css`
    &:disabled {
      background: #ccc;
    }
  `,
  hasError: (theme: DefaultTheme) => css`
    background: ${theme.colors.red['100']};
  `
};

type InputStylesProps = {
  hasError: boolean;
} & Pick<InputProps, 'color' | 'disabled' | 'error' | 'inputSize'>;

export const InputStyles = styled.input<InputStylesProps>`
  ${({ theme, color, inputSize, disabled, error }) => css`
    width: 100%;
    padding: 0 16px;
    font-size: 16px;
    outline: none;
    background: ${theme.colors.black};
    color: ${theme.colors.white};
    border: none;
    transition: 0.2s;

    &:hover {
      border-color: ${theme.colors.pink['200']};
    }

    &:focus {
      border-color: ${theme.colors.teal['100']};
      border-bottom-width: 1px;
    }

    /* Color */
    ${colorTypes[color!](theme)}

    /* Size */
    ${sizeTypes[inputSize!]}

    /* Modifiers */
    ${disabled && inputStylesModifiers.disabled}
    ${error && inputStylesModifiers.hasError(theme)}
  `}
`;

export const Message = styled.small`
  ${({ theme }) => css`
    color: ${theme.colors.grey['100']};
    margin-top: 5px;
    display: block;
  `}
`;

export const Error = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.red['100']};
  `}
`;
