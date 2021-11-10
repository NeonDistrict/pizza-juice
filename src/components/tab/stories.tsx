import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Tab, TabContent, TabItem, TabList, TabProps } from '.';

export default {
  title: 'Components/Disclosure/Tab',
  component: Tab,
} as Meta;

export const Default: Story<TabProps> = (args) => (
  <Tab {...args}>
    <TabList>
      <TabItem value="tab1">Active</TabItem>
      <TabItem value="tab2">Inactive</TabItem>
      <TabItem value="tab3">Inactive</TabItem>
      <TabItem value="tab4">Inactive</TabItem>
      <TabItem value="tab5">Inactive</TabItem>
    </TabList>
    <TabContent value="tab1">Tab 1 content</TabContent>
    <TabContent value="tab2">Tab 2 content</TabContent>
  </Tab>
);
