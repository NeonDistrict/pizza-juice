import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Tab } from '../../components/Tabs';

export default {
  title: 'Components/Tabs',
  component: Tab
} as ComponentMeta<typeof Tab>;

export const Default = () => (
  <Tab>
    <Tab.Item label="A">a</Tab.Item>
    <Tab.Item label="B">b</Tab.Item>
    <Tab.Item label="C">c</Tab.Item>
  </Tab>
);
