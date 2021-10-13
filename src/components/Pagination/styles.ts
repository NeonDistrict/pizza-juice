import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronLeft,
  BsChevronRight
} from 'react-icons/bs';
import styled, { css, DefaultTheme } from 'styled-components';

export const PaginationContainer = styled.div`
  ${({ theme }) => css`
    border: 1px dashed ${theme.colors.pink[100]};
    border-radius: ${theme.radii.small};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${theme.spaces['2']};
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

const iconVariant = (theme: DefaultTheme, canGo?: boolean) => css`
  color: ${canGo ? theme.colors.pink[100] : theme.colors.grey[400]};
  cursor: ${canGo ? 'pointer' : 'default'};
`;

const iconStyle = (theme: DefaultTheme) => css`
  font-size: 19px;
  color: ${theme.colors.pink[100]};
  cursor: pointer;
`;

type IconProp = {
  canGo?: boolean;
};

export const ArrowLeft = styled(BsChevronLeft)<IconProp>`
  ${({ theme, canGo }) => css`
    ${iconStyle(theme)}
    ${iconVariant(theme, canGo)}
  `}
`;

export const ArrowRight = styled(BsChevronRight)<IconProp>`
  ${({ theme, canGo }) => css`
    ${iconStyle(theme)}
    ${iconVariant(theme, canGo)}
  `}
`;

export const FirstPageArrow = styled(BsChevronDoubleLeft)`
  ${({ theme }) => css`
    ${iconStyle(theme)}
  `}
`;

export const LastPageArrow = styled(BsChevronDoubleRight)`
  ${({ theme }) => css`
    ${iconStyle(theme)}
  `}
`;