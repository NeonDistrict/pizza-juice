import styled, { css, DefaultTheme } from '@district-ui/system';

import ResizeTextarea from 'react-textarea-autosize';

import * as LabelBase from '@radix-ui/react-label';

import { TextareaProps } from '.';
import { transparentize } from 'polished';

export const Wrapper = styled.div`
  color: white;
`;

export const Label = styled(LabelBase.Root)`
  ${({ theme }) => css`
    display: block;
    margin-bottom: 5px;
    text-transform: uppercase;
    font-weight: ${theme.fontWeights.medium};
  `}
`;

const textAreaInputVariants = (theme: DefaultTheme) => ({
  disabled: css`
    &:disabled {
      background: ${transparentize('0.5', theme.colors.grey1)};
      cursor: not-allowed;
    }
  `,
  hasError: css`
    background: ${theme.colors.red1};
  `
});

type TextareaStylesProps = {
  hasError: boolean;
} & Pick<TextareaProps, 'color' | 'disabled' | 'error'>;

export const TextAreaInput = styled(ResizeTextarea)<TextareaStylesProps>`
  ${({ theme, disabled, error }) => css`
    width: 100%;
    padding: ${theme.spaces[2]};
    font-size: ${theme.fontSizes.md};
    outline: none;
    background: ${theme.colors.black};
    color: ${theme.colors.white};
    border: 1px solid;
    border-color: ${theme.colors.grey3};

    &:hover {
      border-color: ${theme.colors.pink2};
    }

    &:focus {
      border-color: ${theme.colors.teal1};
    }

    /* Modifiers */
    ${disabled && textAreaInputVariants(theme).disabled}
    ${error && textAreaInputVariants(theme).hasError}
  `}
`;

export const Message = styled.small`
  ${({ theme }) => css`
    margin-top: ${theme.spaces[1]};
    color: ${theme.colors.grey1};
    display: block;
  `}
`;

export const Error = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.red1};
  `}
`;
