import React from 'react';
import { VscHome } from 'react-icons/vsc';

import { Section, Divider, Main, Text } from './styles';

export const iconVariant = {
  home: VscHome
};

export type ItemProps = {
  active?: boolean;
  icon?: keyof typeof iconVariant;
  children: React.ReactNode;
};

export type BreadcrumbProps = {
  children: React.ReactNode;
};

const Breadcrumb = ({ children }: BreadcrumbProps) => <Main>{children}</Main>;

const Item = ({ children, active, icon }: ItemProps) => {
  return (
    <>
      <Section active={active}>
        {icon && React.createElement(iconVariant[icon])}
        <Text active={active}>{children}</Text>
      </Section>
      <Divider>|</Divider>
    </>
  );
};

Breadcrumb.Item = Item;

export default Breadcrumb;
