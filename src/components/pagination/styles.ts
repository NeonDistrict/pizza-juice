import styled, { css, DefaultTheme } from 'styled-components';

export const PaginationContainer = styled.div`
  ${({ theme }) => css`
    border: 1px dashed ${theme.colors.pink1};
    border-radius: ${theme.radii.sm};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${theme.spaces[2]};
    padding: 16px 24px;
  `}
`;

interface NumberProp {
  active?: boolean;
}

export const NumberContainer = styled.div<NumberProp>`
  ${({ theme, active }) => css`
    padding: 8px 16px;
    color: ${active ? theme.colors.pink1 : theme.colors.white};
    display: flex;

    &:hover {
      cursor: pointer;
      color: ${theme.colors.pink2};
    }
  `}
`;

export const Number = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.sm};
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
  color: ${canGo ? theme.colors.pink1 : theme.colors.grey4};
  cursor: ${canGo ? 'pointer' : 'default'};
`;

const iconStyle = (theme: DefaultTheme) => css`
  font-size: 19px;
  color: ${theme.colors.pink1};
  cursor: pointer;
`;

type IconProp = {
  canGo?: boolean;
};

const resetButton = css`
  appearance: none;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const ArrowLeft = styled.button<IconProp>`
  ${({ theme, canGo }) => css`
    ${resetButton}

    svg {
      ${iconStyle(theme)}
      ${iconVariant(theme, canGo)}
    }
  `}
`;

export const ArrowRight = styled.button<IconProp>`
  ${({ theme, canGo }) => css`
    ${resetButton}

    svg {
      ${iconStyle(theme)}
      ${iconVariant(theme, canGo)}
    }
  `}
`;

export const FirstPageArrow = styled.button`
  ${({ theme }) => css`
    ${resetButton}

    svg {
      ${iconStyle(theme)}
    }
  `}
`;

export const LastPageArrow = styled.button`
  ${({ theme }) => css`
    ${resetButton}

    svg {
      ${iconStyle(theme)}
    }
  `}
`;
