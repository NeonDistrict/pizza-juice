import styled, { css, DefaultTheme } from '@district-ui/system';

import * as Label from '@radix-ui/react-label';
import * as Toggle from '@radix-ui/react-toggle';

const toggleModifiers = (theme: DefaultTheme) => ({
  size: {
    xs: css``,
    sm: css``,
    md: css``,
    lg: css``
  },
  disabled: css`
    &[data-state='on'] + span {
      background: ${theme.colors.grey1};
    }

    + span {
      cursor: not-allowed;
    }
  `
});

export const Wrapper = styled(Label.Root)`
  ${({ theme }) => css`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  `}
`;

export const ToggleInput = styled(Toggle.Root)`
  ${({ theme, disabled }) => css`
    opacity: 0;
    width: 0;
    height: 0;

    &[data-state='on'] + span {
      background: ${theme.colors.green1};
    }

    &[data-state='on'] + span:before {
      transform: translateX(26px);
    }

    ${disabled && toggleModifiers(theme).disabled}
  `}
`;

export const ToggleSlider = styled.span`
  ${({ theme }) => css`
    position: absolute;
    inset: 0;
    background: ${theme.colors.grey3};
    transition: ${theme.durations.fast};
    border-radius: ${theme.radii.full};
    cursor: pointer;

    &:before {
      position: absolute;
      content: '';
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background: ${theme.colors.white};
      transition: ${theme.durations.fast};
      border-radius: ${theme.radii.half};
    }
  `}
`;
