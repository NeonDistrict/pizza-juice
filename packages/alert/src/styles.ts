import styled, { css } from '@district-ui/system';

import { transparentize } from 'polished';

import theme from '@district-ui/theme';

import { AlertProps } from '.';

type wrapperProps = Pick<AlertProps, 'type' | 'variant'>;

const colorMatch = {
  success: theme.colors.green1,
  error: theme.colors.pink3,
  warning: theme.colors.yellow1,
  default: theme.colors.grey3
};

const variantTypes = {
  solid: (type: wrapperProps['type']) => css`
    background: ${transparentize('0.8', colorMatch[type!])};
  `,
  outline: () => css`
    background: transparent;
  `
};

export const Wrapper = styled.div<wrapperProps>`
  ${({ type, variant }) => css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    text-transform: uppercase;
    border-width: 1px;
    border-style: solid;
    padding-left: 26px;
    padding-right: 16px;
    padding-top: 17px;
    padding-bottom: 17px;
    border-color: ${colorMatch[type!]};
    color: ${colorMatch[type!]};

    ${variantTypes[variant!](type)}
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.fontWeights.bold};
  `}
`;

export const Message = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.fontWeights.bold};
  `}
`;
