import React from 'react';
import { VscHome } from 'react-icons/vsc';
import { useTheme } from 'styled-components';

import { Section, Divider, Main } from './styles';

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
  const theme = useTheme();
  return (
    <>
      <Section active={active}>
        {icon &&
          React.createElement(iconVariant[icon], {
            size: 12,
            color: active ? theme.colors.pink[100] : theme.colors.grey[100]
          })}
        {children}
      </Section>
      <Divider>|</Divider>
    </>
  );
};

Breadcrumb.Item = Item;

export default Breadcrumb;
