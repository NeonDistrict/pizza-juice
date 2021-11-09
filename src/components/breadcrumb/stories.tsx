import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Breadcrumb, BreadcrumbProps } from '.';

export default {
  title: 'Components/Navigation/Breadcrumb',
  component: Breadcrumb,
} as Meta;

const items = [
  {
    href: '#',
    label: 'Home',
  },
  {
    href: '#',
    label: 'About',
  },
  {
    href: '#',
    label: 'Contact',
  },
];

export const Default: Story<BreadcrumbProps> = (args) => (
  <Breadcrumb {...args} items={items} />
);
