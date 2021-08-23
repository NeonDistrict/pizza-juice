import styled, { css } from 'styled-components';
import { ItemProp, TabTitleProps } from '.';

export const ItemContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div<ItemProp>`
  display: flex;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  border-bottom: 1px solid ${p => p.theme.white};

  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li<Pick<TabTitleProps, 'selectedTab' | 'index'>>`
  text-transform: uppercase;
  color: ${p => p.theme.mediumGray};
  padding: 7px 45px;
  font-weight: 600;

  ${p =>
    p.index === p.selectedTab &&
    css`
      border: 1px solid ${p => p.theme.white};
      border-bottom: none;
      color: ${p => p.theme.white};
      font-weight: 700;
    `}
`;
