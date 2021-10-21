import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Tab, { TabProps } from '.';

export default {
  title: 'Components/Disclosure/Tab',
  component: Tab
} as Meta;

export const Default: Story<TabProps> = args => (
  <Tab {...args}>
    <Tab.Item label="Head">a</Tab.Item>
    <Tab.Item label="Body">b</Tab.Item>
    <Tab.Item label="Arms">c</Tab.Item>
    <Tab.Item label="Legs">d</Tab.Item>
    <Tab.Item label="Weapons">e</Tab.Item>
  </Tab>
);
