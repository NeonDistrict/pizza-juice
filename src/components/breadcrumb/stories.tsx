import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Breadcrumb, BreadcrumbProps } from '.';

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
  },
} as Meta;

export const Default: Story<BreadcrumbProps> = (args) => (
  <Breadcrumb {...args} />
);

Default.args = {
  items: [
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
  ],
};
