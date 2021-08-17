import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Breadcrumb } from '../../components/Breadcrumbs';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumb
} as ComponentMeta<typeof Breadcrumb>;

export const Default = () => (
  <Breadcrumb>
    <Breadcrumb.Item active>Home</Breadcrumb.Item>
    <Breadcrumb.Item>Team Management</Breadcrumb.Item>
  </Breadcrumb>
);
