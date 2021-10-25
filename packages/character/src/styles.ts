import styled, { css } from '@district-ui/system';

import { CharacterProps } from '.';

const sizes = {
  sm: css`
    width: 80px;
    height: 80px;
  `,
  lg: css`
    width: 160px;
    height: 160px;
  `
};

export const Container = styled.div<
  Pick<CharacterProps, 'active'> & { size: 'lg' | 'sm' }
>`
  ${({ theme, active, size }) => css`
    position: relative;

    ${size && sizes[size]}
    ${active &&
    css`
      border: 1px solid ${theme.colors.pink1};
    `}
  `}
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Top = styled.div<{ size: 'lg' | 'sm' }>`
  ${({ size }) => css`
    padding: ${size == 'lg' ? '12px' : '4px'};
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
  `}
`;

export const Bottom = styled.div<{ size: 'lg' | 'sm' }>`
  ${({ size }) => css`
    padding: ${size == 'lg' ? '12px' : '4px'};
    padding-top: 0;

    display: flex;
    justify-content: flex-end;
  `}
`;

export const Typename = styled.div<{ empty: boolean; size: 'lg' | 'sm' }>`
  ${({ theme, empty, size }) => css`
    font-size: ${theme.fontSizes.md};
    font-weight: ${theme.fontWeights.medium};
    color: ${empty ? theme.colors.white : theme.colors.pink1};
    line-height: 24px;
    letter-spacing: 0.05em;
    text-transform: uppercase;

    ${size === 'sm' &&
    css`
      font-size: ${theme.fontSizes.sm};
      line-height: 20px;
    `}
  `}
`;

export const Info = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.sm};
    font-weight: ${theme.fontWeights.medium};
    color: ${theme.colors.white};
    line-height: 24px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  `}
`;

export const Index = styled.div<{ size: 'lg' | 'sm' }>`
  ${({ theme, size }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 32px;
    height: 32px;
    background: ${theme.colors.pink1};
    color: ${theme.colors.white};

    font-weight: ${theme.fontWeights.medium};
    font-size: ${theme.fontSizes.md};
    line-height: 24px;

    ${size === 'sm' &&
    css`
      font-size: ${theme.fontSizes.sm};
      line-height: 20px;

      width: 20px;
      height: 20px;
    `}
  `}
`;
