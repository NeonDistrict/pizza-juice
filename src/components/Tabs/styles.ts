import styled from 'styled-components';
import { ItemProp } from '.';

export const ItemContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div<ItemProp>`
  display: flex;
`;

export const TabButton = styled.button``;

export const List = styled.ul`
  display: flex;
  list-style: none;
  border-bottom: 1px solid ${p => p.theme.white};

  margin: 0;
`;

export const ListItem = styled.li``;
