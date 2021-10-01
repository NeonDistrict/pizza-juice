import styled, { css } from 'styled-components';

import { transparentize } from 'polished';

import theme from '../../styles/theme';

import { AlertProps } from '.';

type wrapperProps = Pick<AlertProps, 'type' | 'variant'>;

const colorMatch = {
  success: theme.colors.lightGreen,
  error: theme.colors.darkPink,
  warning: theme.colors.yellow,
  default: theme.colors.mediumGray
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
  ${({ theme, type, variant }) => css`
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
