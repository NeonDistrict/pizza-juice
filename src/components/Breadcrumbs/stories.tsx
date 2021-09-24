import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Breadcrumb, { BreadcrumbProps } from '.';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumb,
  argTypes: {
    size: {
      control: { type: 'select' }
    }
  }
} as Meta;

export const ActiveFirst: Story<BreadcrumbProps> = args => (
  <Breadcrumb {...args}>
    <Breadcrumb.Item active>Home</Breadcrumb.Item>
    <Breadcrumb.Item>Team Management</Breadcrumb.Item>
  </Breadcrumb>
);

ActiveFirst.args = {
  size: 'medium'
};

export const ActiveSecond: Story<BreadcrumbProps> = args => (
  <Breadcrumb {...args}>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item active>Team Management</Breadcrumb.Item>
  </Breadcrumb>
);

ActiveSecond.args = {
  size: 'medium'
};
