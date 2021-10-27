import styled, { css, DefaultTheme } from '@neon-district/system';

import * as RadioGroupBase from '@radix-ui/react-radio-group';

import { RadioGroupProps } from '.';

export const RadioInputItem = styled(RadioGroupBase.Item)`
  ${({ theme }) => css`
    all: unset;
    background-color: ${theme.colors.white};
    width: ${theme.spaces[5]};
    height: ${theme.spaces[5]};
    border-radius: ${theme.radii.full};
    box-shadow: 0 0 0 1px ${theme.colors.grey2};
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 0 1px ${theme.colors.pink2};
    }

    &:focus {
      box-shadow: 0 0 0 2px ${theme.colors.grey1};
    }

    &:active {
      box-shadow: 0 0 0 1px ${theme.colors.teal1};
    }

    &[aria-checked='true'] {
      box-shadow: 0 0 0 1px ${theme.colors.pink1};
    }
  `}
`;

export const RadioIndicator = styled(RadioGroupBase.Indicator)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${theme.sizes.full};
    height: ${theme.sizes.full};
    position: relative;

    &:after {
      content: '';
      display: block;
      width: 14px;
      height: 14px;
      border-radius: ${theme.radii.full};
      background-color: ${theme.colors.pink1};
    }
  `}
`;

const radioGroupModifiers = {
  rowDirection: (theme: DefaultTheme) => css`
    display: flex;

    & > :not(:last-child) {
      margin-right: ${theme.spaces[4]};
    }
  `
};

export const RadioInputGroup = styled(RadioGroupBase.Root)<RadioGroupProps>`
  ${({ theme, direction }) => css`
    color: ${theme.colors.white};

    ${direction === 'row' && radioGroupModifiers.rowDirection(theme)};
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin: ${theme.spaces[3]} 0;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.grey1};
    font-size: ${theme.fontSizes.md};
    padding-left: ${theme.spaces[1]};
    line-height: 1;
    user-select: none;
    cursor: pointer;
  `}
`;
