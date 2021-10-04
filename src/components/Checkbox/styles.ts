import styled, { css, DefaultTheme } from 'styled-components';

import * as CheckboxBase from '@radix-ui/react-checkbox';

import { CheckboxProps } from '.';

const checkboxInputModifiers = (theme: DefaultTheme) => ({
  size: {
    sm: css`
      width: 12px;
      height: 12px;
    `,
    md: css`
      width: 16px;
      height: 16px;
    `,
    lg: css`
      width: 20px;
      height: 20px;
    `
  },
  disabled: css`
    &:disabled {
      background-color: ${theme.colors.grey[100]};
      color: ${theme.colors.grey[300]};
    }
  `
});

export const CheckboxInput = styled(CheckboxBase.Root)<CheckboxProps>`
  ${({ theme, size, disabled }) => css`
    all: unset;
    background-color: ${theme.colors.black};
    color: ${theme.colors.pink[100]};
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    border-color: ${theme.colors.grey[100]};

    ${disabled && checkboxInputModifiers(theme).disabled}
    ${checkboxInputModifiers(theme).size[size!]}

    &:hover {
      border-color: ${theme.colors.pink[100]};
    }

    &:active {
      border-color: ${theme.colors.teal[100]};
    }
  `}
`;

export const CheckboxIndicator = styled(CheckboxBase.Indicator)<CheckboxProps>`
  color: currentColor;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const labelModifiers = (theme: DefaultTheme) => ({
  size: {
    sm: css`
      font-size: 11px;
    `,
    md: css`
      font-size: ${theme.fontSizes.sm};
    `,
    lg: css`
      font-size: ${theme.fontSizes.md};
    `
  }
});

export const Label = styled.label<CheckboxProps>`
  ${({ theme, size }) => css`
    color: ${theme.colors.grey[100]};
    padding-left: ${theme.spaces[1]};
    line-height: 1;
    user-select: none;

    ${labelModifiers(theme).size[size!]}
  `}
`;
