import styled, { css } from 'styled-components';

import { ItemProps, TabTitleProps } from '.';

export const ItemContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div<ItemProps>`
  position: relative;
`;

export const List = styled.ul`
  ${({ theme }) => css`
    display: flex;
    list-style: none;
    border-bottom: 1px solid ${theme.colors.white};
    margin: 0;
    padding: 0;
  `}
`;

type ListItemProps = Pick<TabTitleProps, 'selectedTab' | 'index'>;

export const ListItem = styled.li<ListItemProps>`
  ${({ theme, selectedTab, index }) => css`
    cursor: pointer;
    text-transform: uppercase;
    color: ${theme.colors.grey['300']};
    padding: 7px 45px;
    font-weight: 600;

    ${index === selectedTab &&
    css`
      border: 1px solid ${theme.colors.white};
      margin-bottom: -1px;
      border-bottom: 1px solid ${theme.colors.black};
      color: ${theme.colors.white};
      font-weight: 700;
    `}
  `}
`;
