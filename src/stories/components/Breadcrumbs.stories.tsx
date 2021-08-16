import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Breadcrumb } from '../../components/Breadcrumbs';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumb
} as ComponentMeta<typeof Breadcrumb>;

export const Default = () => (
  <Breadcrumb.Group>
    <Breadcrumb active>Home</Breadcrumb>
    <Breadcrumb>Team Management</Breadcrumb>
  </Breadcrumb.Group>
);
