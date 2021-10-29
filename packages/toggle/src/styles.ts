import styled, { DefaultTheme } from '@neon-district/system';

import * as Label from '@radix-ui/react-label';
import * as Toggle from '@radix-ui/react-toggle';

const toggleModifiers = (theme: DefaultTheme) => ({
  size: {
    xs: {},
    sm: {},
    md: {},
    lg: {}
  },
  disabled: {
    '&[data-state="on"] + span': {
      background: theme.colors.grey1
    },

    '+ span': {
      cursor: 'not-allowed'
    }
  }
});

export const Wrapper = styled(Label.Root)(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  width: 60,
  height: 34
}));

export const ToggleInput = styled(Toggle.Root)(({ theme, disabled }) => ({
  opacity: 0,
  width: 0,
  height: 0,

  '&[data-state="on"] + span': {
    background: theme.colors.green1
  },

  '&[data-state="on"] + span:before': {
    transform: 'translateX(26px)'
  },

  ...(disabled && toggleModifiers(theme).disabled)
}));

export const ToggleSlider = styled('span')(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  background: theme.colors.grey3,
  transition: theme.durations.fast,
  borderRadius: theme.radii.full,
  cursor: 'pointer',

  '&:before': {
    position: 'absolute',
    content: '',
    height: 26,
    width: 26,
    left: 4,
    bottom: 4,
    background: theme.colors.white,
    transition: theme.durations.fast,
    borderRadius: theme.radii.half
  }
}));
