import React from 'react';
import { StyledSection, StyledDivider, StyledGroup } from './styles';

const Group = ({ children }) => <StyledGroup>{children}</StyledGroup>;

interface BreadcrumbProps {
  active?: boolean;
  children: string;
}

export const Breadcrumb = ({ children, active }: BreadcrumbProps) => {
  return (
    <>
      <StyledSection active={active}>{children}</StyledSection>
      <StyledDivider active={active}>|</StyledDivider>
    </>
  );
};

Breadcrumb.Group = Group;
