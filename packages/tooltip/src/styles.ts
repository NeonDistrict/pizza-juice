import styled, { css } from '@nd-ui/system';

import {
  Content as BaseContent,
  Arrow as BaseArrow
} from '@radix-ui/react-tooltip';

export const slideUpAndFade = css`
  @keyframes identifier {
    0% {
      opacity: 0;
      transform: translateY(2px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const slideRightAndFade = css`
  @keyframes identifier {
    0% {
      opacity: 0;
      transform: translateX(-2px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const slideDownAndFade = css`
  @keyframes identifier {
    0% {
      opacity: 0;
      transform: translateY(-2px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const slideLeftAndFade = css`
  @keyframes identifier {
    0% {
      opacity: 0;
      transform: translateX(2px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const Content = styled(BaseContent)`
  ${({ theme }) => css`
    padding: ${theme.spaces[2]};
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.white};
    background: ${theme.colors.black};
    border: 1px solid;
    border-color: ${theme.colors.grey[400]};

    &[data-state='delayed-open'] {
      &[data-side='top'] {
        animation-name: ${slideDownAndFade};
      }

      &[data-side='right'] {
        animation-name: ${slideLeftAndFade};
      }

      &[data-side='bottom'] {
        animation-name: ${slideUpAndFade};
      }

      &[data-side='left'] {
        animation-name: ${slideRightAndFade};
      }
    }
  `}
`;

export const Arrow = styled(BaseArrow)`
  ${({ theme }) => css`
    fill: ${theme.colors.grey[400]};
  `}
`;
