import { styled } from '../../system';

import * as RTabs from '@radix-ui/react-tabs';

export const TabRoot = styled(RTabs.Root, {
  color: '$white',
  d: 'flex',
  flexDirection: 'column',
});

export const List = styled(RTabs.List, {
  d: 'flex',
  listStyle: 'none',
  borderBottom: '1px solid $grey-400',
  m: 0,
  p: 0,
  overflowX: 'scroll',
  overflowY: 'hidden',

  '@md': {
    overflowY: 'initial',
    overflowX: 'initial',
  },
});

export const Item = styled(RTabs.Trigger, {
  // reset
  all: 'unset',

  p: '$1 $6',
  fontSize: '$md',
  fontWeight: '$medium',
  textTransform: 'uppercase',
  lineHeight: '150%',
  cursor: 'pointer',

  '&:hover': {
    color: '$pink-500',
    borderBottom: '1px solid $pink-500',
    mb: '-1px',
  },

  '&[tabindex="0"]': {
    color: '$pink-500',
    borderBottom: '1px solid $pink-500',
    mb: '-1px',
  },

  '&[data-state="active"]': {
    py: '3px',
    mb: -1,
    border: '1px solid $grey-400',
    borderBottom: '1px solid $black',
  },
});

export const Content = styled(RTabs.Content, {});
