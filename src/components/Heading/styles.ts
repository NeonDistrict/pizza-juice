import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    text-transform: uppercase;
    font-weight: ${theme.fontWeights.medium};
  `}
`;

export const HeadingStyled = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes['2xl']};
    display: flex;
    justify-content: space-between;
    position: relative;
  `}
`;

export const Line = styled.div`
  ${({ theme }) => css`
    height: 2px;
    background: red;
    width: 160px;
    position: absolute;
    bottom: -2px;
    background: ${theme.colors.grey[400]};
  `}
`;

export const Description = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.grey[300]};
    border-left: 2px solid;
    border-color: ${theme.colors.grey[400]};
    padding-left: ${theme.spaces[2]};
    margin-top: ${theme.spaces[2]};
  `}
`;

export const FullLine = styled.hr`
  ${({ theme }) => css`
    border-width: 0px 0px 1px;
    border-color: ${theme.colors.grey[400]};
    border-style: solid;
    width: 100%;
    margin: 0;
  `}
`;
