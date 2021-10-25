import styled, { css } from '@district-ui/system';

import media from 'styled-media-query';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    font-family: 'Titillium Web';
    font-weight: ${theme.fontWeights.medium};
    font-size: ${theme.fontSizes.lg};
    line-height: 24px;
    margin: 0;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${theme.colors.white};

    ${media.lessThan('medium')`
      font-size: ${theme.fontSizes.md};
      line-height: 20px;
      letter-spacing: 0.1em;
    `}
  `};
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-family: 'Titillium Web';
    font-size: ${theme.fontSizes.md};
    font-weight: ${theme.fontWeights.medium};

    line-height: 24px;
    color: ${theme.colors.grey3};
    text-transform: uppercase;
    letter-spacing: 0.03em;
    margin: 0;

    padding-left: 1rem;
    border-left: 2px solid ${theme.colors.white};

    ${media.lessThan('medium')`
      font-size: ${theme.fontSizes.sm};
      line-height: 20px;
      font-weight: ${theme.fontWeights.normal};
      letter-spacing: 0;
    `}
  `};
`;
