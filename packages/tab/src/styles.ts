import styled from '@neon-district/system';

import { TabTitleProps } from '.';

export const ItemContainer = styled('div')(({ theme }) => ({
  color: theme.colors.white,
  display: 'flex',
  flexDirection: 'column'
}));

export const Container = styled('div')({
  position: 'relative'
});

export const List = styled('ul')(({ theme }) => ({
  display: 'flex',
  listStyle: 'none',
  borderBottom: `1px solid ${theme.colors.white}`,
  margin: 0,
  padding: 0
}));

type ListItemProps = Pick<TabTitleProps, 'selectedTab' | 'index'>;

export const ListItem = styled('li')<ListItemProps>(
  ({ theme, selectedTab, index }) => ({
    cursor: 'pointer',
    textTransform: 'uppercase',
    color: theme.colors.grey3,
    padding: `${theme.space[2]} 45px`,
    fontWeight: 600,

    ...(index === selectedTab && {
      border: `1px solid ${theme.colors.white}`,
      marginBottom: -1,
      borderBottom: `1px solid ${theme.colors.black}`,
      color: theme.colors.white,
      fontWeight: 700
    })
  })
);
