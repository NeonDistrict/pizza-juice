import React from 'react';
import { StyledTab } from './styles';

interface TabProp {
  panes: { menuItem: string; render?: () => JSX.Element }[];
}
export const Tab = ({ panes }: TabProp) => <StyledTab panes={panes} />;
