import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Tab } from '../../components/Tabs';

export default {
  title: 'Components/Tabs',
  component: Tab
} as ComponentMeta<typeof Tab>;

export const Default = () => (
  <Tab>
    <Tab.Item label="Head">a</Tab.Item>
    <Tab.Item label="Body">b</Tab.Item>
    <Tab.Item label="Arms">c</Tab.Item>
    <Tab.Item label="Legs">d</Tab.Item>
    <Tab.Item label="Weapons">e</Tab.Item>
  </Tab>
);
