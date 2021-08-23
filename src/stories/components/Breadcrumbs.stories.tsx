import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Breadcrumb } from '../../components/Breadcrumbs';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumb,
  argTypes: {
    size: {
      control: { type: 'select' }
    }
  }
} as ComponentMeta<typeof Breadcrumb>;

const FirstTemplate: ComponentStory<typeof Breadcrumb> = args => (
  <Breadcrumb {...args}>
    <Breadcrumb.Item active>Home</Breadcrumb.Item>
    <Breadcrumb.Item>Team Management</Breadcrumb.Item>
  </Breadcrumb>
);

const SecondTemplate: ComponentStory<typeof Breadcrumb> = args => (
  <Breadcrumb {...args}>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item active>Team Management</Breadcrumb.Item>
  </Breadcrumb>
);

export const ActiveFirst = FirstTemplate.bind({});
export const ActiveSecond = SecondTemplate.bind({});

ActiveFirst.args = {
  size: 'medium'
}

ActiveSecond.args = {
  size: 'medium'
}