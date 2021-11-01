import styled from 'styled-components';

import { BreadcrumbProps, BreadcrumbItemProps } from '.';

export const Main = styled('div')<BreadcrumbProps>({
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none'
});

export const Section = styled('div')<BreadcrumbItemProps>(
  ({ theme, active }) => ({
    color: active ? theme.colors.pink1 : theme.colors.grey1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: theme.fontSizes.xs,
    gap: theme.spaces[1],
    fontWeight: 600
  })
);

export const Divider = styled('div')<BreadcrumbItemProps>(({ theme }) => ({
  padding: `0 ${theme.spaces[2]}`,
  height: theme.spaces.full,
  color: theme.colors.white
}));

export const Text = styled('h1')<BreadcrumbItemProps>(({ theme }) => ({
  margin: 0,
  fontSize: theme.fontSizes.sm,
  fontWeight: 600,
  textTransform: 'uppercase',
  color: theme.colors.pink1
}));
