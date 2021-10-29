import styled, { DefaultTheme } from '@neon-district/system';

import * as CheckboxBase from '@radix-ui/react-checkbox';

import { CheckboxProps } from '.';

const checkboxInputVariants = {
  size: {
    sm: {
      width: 12,
      height: 12
    },
    md: {
      width: 16,
      height: 16
    },
    lg: {
      width: 20,
      height: 20
    }
  }
};

export const CheckboxInput = styled(CheckboxBase.Root)<CheckboxProps>(
  ({ theme, size }) => ({
    all: 'unset',
    background: theme.colors.black,
    color: theme.colors.pink1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid',
    borderColor: theme.colors.grey1,

    '&:hover': {
      borderColor: theme.colors.pink1
    },
    '&:active': {
      borderColor: theme.colors.teal1
    },
    '&:disabled': {
      background: theme.colors.grey1,
      color: theme.colors.grey3
    },

    ...checkboxInputVariants.size[size!]
  })
);

export const CheckboxIndicator = styled(CheckboxBase.Indicator)({
  color: 'currentColor'
});

export const Wrapper = styled('div')({
  display: 'flex',
  alignItems: 'center'
});

const labelVariants = (theme: DefaultTheme) => ({
  size: {
    sm: {
      fontSize: theme.fontSizes.xs
    },
    md: {
      fontSize: theme.fontSizes.sm
    },
    lg: {
      fontSize: theme.fontSizes.md
    }
  }
});

export const Label = styled('label')<CheckboxProps>(({ theme, size }) => ({
  color: theme.colors.grey1,
  paddingLeft: theme.spaces[1],
  lineHeight: 1,
  userSelect: 'none',

  ...labelVariants(theme).size[size!]
}));
