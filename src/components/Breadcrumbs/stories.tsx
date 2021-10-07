import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Breadcrumb, { BreadcrumbProps } from '.';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumb
} as Meta;

export const ActiveWithIcon: Story<BreadcrumbProps> = args => (
  <Breadcrumb>
    <Breadcrumb.Item active icon="home">
      Breadcrumb
    </Breadcrumb.Item>
    <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>
  </Breadcrumb>
);

export const ActiveSecond: Story<BreadcrumbProps> = args => (
  <Breadcrumb>
    <Breadcrumb.Item icon="home">Breadcrumb</Breadcrumb.Item>
    <Breadcrumb.Item active>Breadcrumb</Breadcrumb.Item>
  </Breadcrumb>
);
