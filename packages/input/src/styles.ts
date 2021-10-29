import styled, { DefaultTheme } from '@neon-district/system';

import { InputProps } from '.';

export const Wrapper = styled('div')(({ theme }) => ({
  color: theme.colors.white
}));

export const Label = styled('label')(({ theme }) => ({
  display: 'block',
  marginBottom: theme.spaces[1],
  textTransform: 'uppercase',
  fontWeight: theme.fontWeights.medium
}));

const variants = (theme: DefaultTheme) => ({
  color: {
    default: {
      background: theme.colors.white,
      color: theme.colors.black,
      borderBottomStyle: 'solid',
      borderBottomWidth: '1px',
      borderBottomColor: theme.colors.grey3
    },
    line: {
      border: '1px solid',
      borderColor: theme.colors.grey2
    }
  },
  size: {
    sm: {
      height: 31
    },
    md: {
      height: 40
    }
  },

  error: {
    background: theme.colors.red1
  }
});

type InputStylesProps = {
  hasError: boolean;
} & Pick<InputProps, 'color' | 'disabled' | 'error' | 'inputSize'>;

export const InputStyles = styled('input')<InputStylesProps>(
  ({ theme, color, inputSize, hasError }) => ({
    width: theme.sizes.full,
    padding: `0 ${theme.spaces[4]}`,
    fontSize: theme.fontSizes.md,
    outline: 0,
    background: theme.colors.black,
    color: theme.colors.white,
    border: 'none',
    transition: theme.durations.default,

    '&:hover': {
      borderColor: theme.colors.pink2
    },
    '&:focus': {
      borderColor: theme.colors.teal1,
      borderBottomWidth: '1px'
    },
    '&:disabled': {
      background: '#ccc'
    },

    // conditional styles
    ...(hasError && variants(theme).error),

    // variant styles
    // ...variants(theme).color[color!],
    ...variants(theme).size[inputSize!]
  })
);

export const Message = styled('small')(({ theme }) => ({
  color: theme.colors.grey1,
  marginTop: theme.spaces[1],
  display: 'block'
}));

export const Error = styled('div')(({ theme }) => ({
  color: theme.colors.red1
}));
