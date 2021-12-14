import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Drawer, DrawerProps } from '.';

export default {
  title: 'Components/Navigation/Drawer',
  component: Drawer,
  argTypes: {
    css: {
      table: { disable: true },
    },
    children: {
      table: { disable: true },
    },
    as: {
      table: { disable: true },
    },
  },
} as Meta;

export const Default: Story<DrawerProps> = (args) => (
  <Drawer {...args}>a</Drawer>
);
