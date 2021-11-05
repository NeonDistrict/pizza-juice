import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Tab, TabItem, TabProps } from '.';

export default {
  title: 'Components/Disclosure/Tab',
  component: Tab,
} as Meta;

export const Default: Story<TabProps> = (args) => (
  <Tab {...args}>
    <TabItem label="Head">a</TabItem>
    <TabItem label="Body">b</TabItem>
    <TabItem label="Arms">c</TabItem>
    <TabItem label="Legs">d</TabItem>
    <TabItem label="Weapons">e</TabItem>
  </Tab>
);
