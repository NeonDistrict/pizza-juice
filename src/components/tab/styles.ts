import { styled } from '../../system';
import * as Tabs from '@radix-ui/react-tabs';

export const TabRoot = styled(Tabs.Root, {
  color: '$white',
  display: 'flex',
  flexDirection: 'column',
});

export const Container = styled('div', {
  position: 'relative',
});

export const List = styled(Tabs.List, {
  display: 'flex',
  listStyle: 'none',
  borderBottom: '1px solid $grey1',
  margin: 0,
  padding: 0,
});

export const Item = styled(Tabs.Trigger, {
  cursor: 'pointer',
  textTransform: 'uppercase',
  padding: '$1 $6',
  fontWeight: '$medium',
  fontSize: '$md',
  lineHeight: '150%',

  '&[data-state="active"]': {
    border: '1px solid $grey1',
    marginBottom: -1,
    borderBottom: '1px solid $black',
  },
});

export const Content = styled(Tabs.Content, {});
