import React from 'react';
import { Section, Divider, Main } from './styles';

export type Size = 'medium' | 'large';
export interface ItemProps {
  active?: boolean;
  children: JSX.Element | JSX.Element[] | string | number;
}
export interface BreadcrumbProps {
  size?: Size
  children: JSX.Element | JSX.Element[] | string | number;
}

export const Breadcrumb = ({ children, size = 'medium' }: BreadcrumbProps) => (
  <Main size={size}>{children}</Main>
);

const Item = ({ children, active }: ItemProps) => {
  return (
    <>
      <Section active={active}>{children}</Section>
      <Divider active={active}>|</Divider>
    </>
  );
};

Breadcrumb.Item = Item;
