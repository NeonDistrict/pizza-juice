import styled, { css } from '@district-ui/system';

import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    text-transform: uppercase;
    font-weight: ${theme.fontWeights.medium};
  `}
`;

export const HeadingStyled = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes['2xl']};
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: relative;
    margin-bottom: 5px;
  `}
`;

export const Title = styled.h1<{ haveButton?: boolean }>`
  ${({ theme, haveButton }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    color: ${theme.colors.white};
    font-size: 18px;
    font-weight: ${theme.fontWeights.medium};
    margin: 0;
    line-height: 24px;
    letter-spacing: 0.1em;

    ${haveButton &&
    media.lessThan('medium')`
        justify-content: center;
    `}
  `}
`;

export const FlexEnd = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spaces[1]};
  align-items: center;
`;

export const Line = styled.div<{
  haveButton?: boolean;
  haveDescription?: boolean;
}>`
  ${({ theme, haveButton, haveDescription }) => css`
    height: 2px;
    background: red;
    width: 160px;
    position: absolute;
    bottom: -8px;

    background: ${theme.colors.grey4};

    ${haveButton &&
    !haveDescription &&
    media.lessThan('medium')`
      display: none;
    `}
  `}
`;

export const Description = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.grey3};
    border-left: 2px solid;
    border-color: ${theme.colors.grey4};
    padding-left: ${theme.spaces[2]};
    margin-top: ${theme.spaces[2]};

    ${media.lessThan('medium')`
      border: none;
    `}
  `}
`;

export const FullLine = styled.hr<{
  haveButton?: boolean;
  haveDescription?: boolean;
}>`
  ${({ theme, haveButton, haveDescription }) => css`
    border-width: 0px 0px 1px;
    border-color: ${theme.colors.grey4};
    border-style: solid;
    width: 100%;
    margin: 0;

    ${haveButton &&
    !haveDescription &&
    media.lessThan('medium')`
      border: none;
    `}
  `}
`;

export const Bottom = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spaces[4]};
  `}
`;
