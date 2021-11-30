import React from 'react';

import { Stack } from '../stack';

import * as S from './styles';

export type ListProps = {
  children: React.ReactNode;
};

export const List = ({ children }: ListProps) => {
  return <Stack>{children}</Stack>;
};

export type ListItemProps = {
  children: React.ReactNode;
  active: boolean;
};

export const ListItem = ({ children, ...others }: ListItemProps) => {
  return <S.Wrapper {...others}>{children}</S.Wrapper>;
};
