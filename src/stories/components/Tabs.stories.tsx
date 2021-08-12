import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Tab } from '../../components/Tabs';

export default {
  title: 'Components/Tabs',
  component: Tab
} as ComponentMeta<typeof Tab>;

const panes = [
  {
    menuItem: 'Head',
    render: () => <></>
  },
  { menuItem: 'Body' },
  { menuItem: 'Arms' },
  { menuItem: 'Legs' },
  { menuItem: 'Weapons' }
];

export const Default = () => <Tab panes={panes} />;
