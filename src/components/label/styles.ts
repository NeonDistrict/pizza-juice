import styled, { css, DefaultTheme } from 'styled-components';
import { LabelProps } from '.';

const variants = (theme: DefaultTheme) => ({
  success: css`
    color: ${theme.colors.white};
    background: ${theme.colors.green1};
  `,
  warning: css`
    color: ${theme.colors.grey5};
    background: ${theme.colors.yellow1};
  `,
  danger: css`
    color: ${theme.colors.white};
    background: ${theme.colors.red1};
  `
});

export const LabelStyles = styled.div<Pick<LabelProps, 'variant' | 'icon'>>`
  ${({ theme, variant, icon }) => css`
    padding: ${theme.spaces[1]} ${theme.spaces[2]};
    display: inline-flex;
    align-items: center;
    gap: 10px;

    ${icon &&
    css({
      paddingLeft: '10px'
    })}
    ${variant && variants(theme)[variant]}
  `}
`;

export const Text = styled.label`
  ${({ theme }) => css`
    user-select: none;
    text-transform: uppercase;
    line-height: 150%;
    font-size: ${theme.fontSizes.sm};
  `}
`;
