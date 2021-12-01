import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Breadcrumb, BreadcrumbItem, BreadcrumbProps } from '.';

import { HomeIcon } from './icon';

export default {
  title: 'Components/Navigation/Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    css: {
      table: { disable: true },
    },
    as: {
      table: { disable: true },
    },
    children: {
      table: { disable: true },
    },
  },
} as Meta;

export const Default: Story<BreadcrumbProps> = (args) => (
  <Breadcrumb {...args}>
    <BreadcrumbItem href="#" icon={<HomeIcon />}>
      Home
    </BreadcrumbItem>

    <BreadcrumbItem href="#">asdasds</BreadcrumbItem>

    <BreadcrumbItem href="#">asdasds</BreadcrumbItem>

    <BreadcrumbItem href="#" isCurrentPage>
      asdasds
    </BreadcrumbItem>
  </Breadcrumb>
);
