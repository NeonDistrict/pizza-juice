import { styled } from '../../system';

import { Root, Track, Range, Thumb } from '@radix-ui/react-slider';

export const StyledSlider = styled(Root, {
  position: 'relative',
  d: 'flex',
  w: '$full',
  align: 'center',
  userSelect: 'none',
  touchAction: 'none',

  '&[data-orientation="horizontal"]': {
    height: 20,
  },

  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    width: 20,
  },
});

export const StyledTrack = styled(Track, {
  bg: '$grey-600',
  position: 'relative',
  flexGrow: 1,
  br: '$full',

  '&[data-orientation="horizontal"]': {
    h: 1,
  },
  '&[data-orientation="vertical"]': {
    w: 1,
  },
});

export const StyledRange = styled(Range, {
  position: 'absolute',
  bg: '$white',
  br: '$full',
  h: '$full',
});

export const StyledThumb = styled(Thumb, {
  d: 'block',
  size: 16,
  bg: 'white',
  bs: `0 2px 10px black`,
  br: '$full',

  '&:hover': {
    bg: 'white',
  },

  '&:focus': {
    bs: '0 0 0 5px $colors$grey-800',
  },
});
