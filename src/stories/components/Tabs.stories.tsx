import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tabs } from '../../components/Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = () => (
  <Tabs>
    <Tabs.Tab label="a">aaa</Tabs.Tab>
    <Tabs.Tab label="b">bbb</Tabs.Tab>
    <Tabs.Tab label="c">ccc</Tabs.Tab>
    <Tabs.Panel label="a">
      <h1>Hello World</h1>
    </Tabs.Panel>
  </Tabs>
);
export const Default = Template.bind({});
