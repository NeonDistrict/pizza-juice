import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styled, { css, DefaultTheme } from 'styled-components';

export const PaginationContainer = styled.div`
  ${({ theme }) => css`
    border: 1px dashed ${theme.colors.pink[100]};
    border-radius: ${theme.radii.small};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${theme.spaces['6']};
    padding: 16px 24px;
  `}
`;

interface NumberProp {
  active?: boolean;
}

export const NumberContainer = styled.div<NumberProp>`
  ${({ theme, active }) => css`
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
    gap: 25px;
  `}
`;

const iconStyle = (theme: DefaultTheme, canGo?: boolean) => css`
  color: ${canGo ? theme.colors.pink[100] : theme.colors.grey[400]};
  cursor: ${canGo ? 'pointer' : 'default'};
`;

export const ArrowLeft = styled(FaArrowLeft)<{
  canGo?: boolean;
}>`
  ${({ theme, canGo }) => css`
    ${iconStyle(theme, canGo)}
  `}
`;

export const ArrowRight = styled(FaArrowRight)<{
  active?: boolean;
  canGo?: boolean;
}>`
  ${({ theme, canGo }) => css`
    ${iconStyle(theme, canGo)}
  `}
`;
