import styled, { css, DefaultTheme } from '@district-ui/system';
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

export const LabelStyles = styled.div<Pick<LabelProps, 'variant'>>`
  ${({ theme, variant }) => css`
    width: 105px;
    height: 29px;
    display: flex;
    align-items: center;

    ${variant && variants(theme)[variant]}
  `}
`;

export const Text = styled.label`
  ${({ theme }) => css`
    padding: 4px 0px 4px 8px;
    user-select: none;
    text-transform: uppercase;
    line-height: 150%;
    font-size: ${theme.fontSizes.sm};
  `}
`;
