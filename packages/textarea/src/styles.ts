import styled, { DefaultTheme } from '@neon-district/system';

import ResizeTextarea from 'react-textarea-autosize';

import * as LabelBase from '@radix-ui/react-label';

import { TextareaProps } from '.';

export const Wrapper = styled('div')(({ theme }) => ({
  color: theme.colors.white
}));

export const Label = styled(LabelBase.Root)(({ theme }) => ({
  display: 'block',
  marginBottom: theme.spaces[1],
  textTransform: 'uppercase',
  fontWeight: theme.fontWeights.medium
}));

const variants = (theme: DefaultTheme) => ({
  error: {
    background: theme.colors.red1
  }
});

type TextareaStylesProps = {
  hasError: boolean;
} & Pick<TextareaProps, 'color' | 'disabled' | 'error'>;

export const TextAreaInput = styled(ResizeTextarea)<TextareaStylesProps>(
  ({ theme, disabled, error }) => ({
    width: theme.sizes.full,
    padding: theme.spaces[2],
    fontSize: theme.fontSizes.md,
    outline: 'none',
    background: theme.colors.black,
    color: theme.colors.white,
    border: '1px solid',
    borderColor: theme.colors.grey3,

    '&:hover': {
      borderColor: theme.colors.pink2
    },

    '&:focus': {
      borderColor: theme.colors.teal1
    },

    '&:disabled': {
      background: theme.colors.grey1,
      cursor: 'not-allowed'
    },

    // conditional styles
    ...(error && variants(theme).error)
  })
);

export const Message = styled('small')(({ theme }) => ({
  marginTop: theme.spaces[1],
  color: theme.colors.grey1,
  display: 'block'
}));

export const Error = styled('div')(({ theme }) => ({
  color: theme.colors.red1
}));
