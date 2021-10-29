import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Breadcrumb, BreadcrumbItem, BreadcrumbProps } from '.';

export default {
  title: 'Components/Navigation/Breadcrumb',
  component: Breadcrumb
} as Meta;

export const Default: Story<BreadcrumbProps> = args => (
  <Breadcrumb {...args}>
    <BreadcrumbItem active isHome>
      Breadcrumb
    </BreadcrumbItem>

    <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
  </Breadcrumb>
);
