import { styled } from '../../system';

import * as Label from '@radix-ui/react-label';
import * as Toggle from '@radix-ui/react-toggle';

export const Wrapper = styled(Label.Root, {
  position: 'relative',
  d: 'inline-block',
  w: 60,
  h: 34,
});

export const ToggleInput = styled(Toggle.Root, {
  opacity: 0,
  size: 0,

  '&[data-state="on"] + span': {
    bg: '$green-500',
  },

  '&[data-state="on"] + span:before': {
    transform: 'translateX(26px)',
  },

  '&:disabled': {
    '&[data-state="on"] + span': {
      bg: '$grey-400',
    },

    '+ span': {
      cursor: 'not-allowed',
    },
  },
});

export const ToggleSlider = styled('span', {
  position: 'absolute',
  inset: 0,
  bg: '$grey-600',
  transition: '$fast',
  br: '$full',
  cursor: 'pointer',

  '&:before': {
    position: 'absolute',
    content: '',
    size: 26,
    left: 4,
    bottom: 4,
    bg: '$white',
    transition: '$fast',
    br: '$half',
  },
});
