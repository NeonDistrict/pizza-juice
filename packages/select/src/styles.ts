import styled, { DefaultTheme } from '@neon-district/system';

import * as LabelBase from '@radix-ui/react-label';

import { SelectProps } from '.';

export const Wrapper = styled('div')(({ theme }) => ({
  color: theme.colors.white
}));

export const Label = styled(LabelBase.Root)(({ theme }) => ({
  display: 'block',
  marginBottom: theme.spaces[1],
  textTransform: 'uppercase',
  fontWeight: theme.fontWeights.medium
}));

const selectModifiers = (theme: DefaultTheme) => ({
  size: {
    xs: {
      padding: `${theme.spaces[1]} ${theme.spaces[2]}`,
      fontSize: theme.fontSizes['3xs']
    },
    sm: {
      padding: `${theme.spaces[3]} ${theme.spaces[4]}`,
      fontSize: theme.fontSizes['2xs']
    },
    md: {
      padding: `${theme.spaces[3]} ${theme.spaces[4]}`,
      fontSize: theme.fontSizes.xs
    },
    lg: {
      padding: `${theme.spaces[3]} ${theme.spaces[4]}`,
      fontSize: theme.fontSizes.md
    }
  },
  variant: {
    solid: {
      background: theme.colors.black
    },
    outline: {
      background: theme.colors.grey5
    }
  },
  disabled: {
    opacity: 0.5,
    cursor: 'not-allowed'
  }
});

type SelectStyledProps = {
  selectSize?: SelectProps['size'];
} & Pick<SelectProps, 'disabled' | 'variant'>;

export const WrapperSelect = styled('div')<SelectStyledProps>(
  ({ theme, disabled, variant }) => ({
    display: 'flex',
    alignItems: 'center',
    border: '1px solid',
    borderColor: theme.colors.grey1,
    paddingRight: theme.spaces[2],

    '&:hover': {
      borderColor: theme.colors.pink2
    },

    '&:active': {
      borderColor: theme.colors.teal1
    },

    // conditional styles
    ...(disabled && selectModifiers(theme).disabled),

    // variant styles
    ...selectModifiers(theme).variant[variant!]
  })
);

export const SelectStyled = styled.select<SelectStyledProps>(
  ({ theme, variant, selectSize }) => ({
    width: theme.sizes.full,
    color: theme.colors.white,
    fontFamily: 'inherit',
    appearance: 'none',
    border: 'none',
    transition: '0.2s',

    // variant styles
    ...selectModifiers(theme).variant[variant!],
    ...selectModifiers(theme).size[selectSize!]
  })
);

export const Message = styled('small')(({ theme }) => ({
  color: theme.colors.grey1,
  fontSize: theme.fontSizes.xs,
  marginTop: '5px',
  display: 'block'
}));

export const Error = styled('div')(({ theme }) => ({
  color: theme.colors.red1,
  fontSize: theme.fontSizes.xs
}));
