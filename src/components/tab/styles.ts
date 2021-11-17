import { styled } from '../../system';

import * as Tabs from '@radix-ui/react-tabs';

export const TabRoot = styled(Tabs.Root, {
  color: '$white',
  d: 'flex',
  flexDirection: 'column',
});

export const List = styled(Tabs.List, {
  d: 'flex',
  listStyle: 'none',
  borderBottom: '1px solid $grey1',
  m: 0,
  p: 0,
  overflowX: 'scroll',
  overflowY: 'hidden',

  '@md': {
    overflowY: 'initial',
    overflowX: 'initial',
  },
});

export const Item = styled(Tabs.Trigger, {
  p: '$1 $6',
  fontSize: '$md',
  fontWeight: '$medium',
  textTransform: 'uppercase',
  lineHeight: '150%',
  cursor: 'pointer',

  '&:hover': {
    color: '$pink1',
    borderBottom: '1px solid $pink1',
    mb: '-1px',
  },

  '&[tabindex="0"]': {
    color: '$pink1',
    borderBottom: '1px solid $pink1',
    mb: '-1px',
  },

  '&[data-state="active"]': {
    py: '3px',
    mb: -1,
    border: '1px solid $grey1',
    borderBottom: '1px solid $black',
  },
});

export const Content = styled(Tabs.Content, {});
