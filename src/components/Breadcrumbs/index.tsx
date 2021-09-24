import React from 'react';

import { Section, Divider, Main } from './styles';

export type ItemProps = {
  active?: boolean;
  children: React.ReactNode;
};
export type BreadcrumbProps = {
  size?: 'medium' | 'large';
  children: React.ReactNode;
};

const Breadcrumb = ({ children, size = 'medium' }: BreadcrumbProps) => (
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

export default Breadcrumb;
