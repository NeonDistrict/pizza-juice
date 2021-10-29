import styled, { DefaultTheme } from '@neon-district/system';

import * as RadioGroupBase from '@radix-ui/react-radio-group';

import { RadioGroupProps } from '.';

export const RadioInputItem = styled(RadioGroupBase.Item)(({ theme }) => ({
  all: 'unset',
  background: theme.colors.white,
  width: theme.spaces[5],
  height: theme.spaces[5],
  borderRadius: theme.radii.full,
  boxShadow: `0 0 0 1px ${theme.colors.grey2}`,
  cursor: 'pointer',

  '&:hover': {
    boxshadow: `0 0 0 1px ${theme.colors.pink2}`
  },

  '&:focus': {
    boxshadow: `0 0 0 2px ${theme.colors.grey1}`
  },

  '&:active': {
    boxshadow: `0 0 0 1px ${theme.colors.teal1}`
  },

  '&[aria-checked="true"]': {
    boxshadow: `0 0 0 1px ${theme.colors.pink1}`
  }
}));

export const RadioIndicator = styled(RadioGroupBase.Indicator)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifycontent: 'center',
  width: theme.sizes.full,
  height: theme.sizes.full,
  position: 'relative',

  '&:after': {
    content: '',
    display: 'block',
    width: '14px',
    height: '14px',
    borderradius: theme.radii.full,
    background: theme.colors.pink1
  }
}));

const radioGroupModifiers = (theme: DefaultTheme) => ({
  rowDirection: {
    display: 'flex',

    '& > :not(:last-child)': {
      marginRight: theme.spaces[4]
    }
  }
});

export const RadioInputGroup = styled(RadioGroupBase.Root)<RadioGroupProps>(
  ({ theme, direction }) => ({
    color: theme.colors.white,

    ...(direction === 'row' && radioGroupModifiers(theme).rowDirection)
  })
);

export const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  margin: `${theme.spaces[3]} 0`
}));

export const Label = styled('label')(({ theme }) => ({
  color: theme.colors.grey1,
  fontSize: theme.fontSizes.md,
  paddingLeft: theme.spaces[1],
  lineHeight: 1,
  userSelect: 'none',
  cursor: 'pointer'
}));
