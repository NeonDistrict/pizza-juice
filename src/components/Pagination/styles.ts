import styled, { css } from 'styled-components';

export const PaginationContainer = styled.div`
  ${({ theme }) => css`
    border: 1px dashed ${theme.colors.pink[100]};
    border-radius: ${theme.radii.small};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${theme.space['6']};
    // use the theme space prop
    padding: 16px 24px;
  `}
`;

interface NumberProp {
  active?: boolean;
}

export const NumberContainer = styled.div<NumberProp>`
  ${({ theme, active }) => css`
    // use the theme space prop
    padding: 8px 16px;
    color: ${active ? theme.colors.pink[100] : theme.colors.white};
    display: flex;
    :hover {
      cursor: pointer;
      color: ${theme.colors.pink[100]};
    }
  `}
`;

export const Number = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.s};
    font-weight: ${theme.fontWeights.medium};
  `}
`;

export const MobileContainer = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
