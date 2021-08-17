import React from 'react';
import { StyledSection, StyledDivider, StyledGroup } from './styles';

export const Breadcrumb = ({ children }) => (
  <StyledGroup>{children}</StyledGroup>
);

interface BreadcrumbProps {
  active?: boolean;
  children: string;
}

const Item = ({ children, active }: BreadcrumbProps) => {
  return (
    <>
      <StyledSection active={active}>{children}</StyledSection>
      <StyledDivider active={active}>|</StyledDivider>
    </>
  );
};

Breadcrumb.Item = Item;
