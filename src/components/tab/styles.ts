import { styled } from '../../system';
import * as Tabs from '@radix-ui/react-tabs';

export const TabRoot = styled(Tabs.Root, {
  color: '$white',
  d: 'flex',
  flexDirection: 'column',
});

export const Container = styled('div', {
  position: 'relative',
});

export const List = styled(Tabs.List, {
  d: 'flex',
  listStyle: 'none',
  borderBottom: '1px solid $grey1',
  m: 0,
  p: 0,
  overflowX: 'scroll',

  '@md': {
    overflowX: 'initial',
  },
});

export const Item = styled(Tabs.Trigger, {
  cursor: 'pointer',
  textTransform: 'uppercase',
  p: '$1 $6',
  fontWeight: '$medium',
  fontSize: '$md',
  lineHeight: '150%',

  '&:hover': {
    color: '$pink1',
    borderBottom: '1px solid $pink1',
    mb: '-1px',
  },
  '&[data-state="active"]': {
    border: '1px solid $grey1',
    marginBottom: -1,
    borderBottom: '1px solid $black',
  },
});

export const Content = styled(Tabs.Content, {});
