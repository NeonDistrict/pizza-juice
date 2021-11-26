import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Divider, DividerProps } from '.';

import { Box } from '../box';

export default {
  title: 'Components/Data Display/Divider',
  component: Divider,
  argTypes: {
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'select' },
    },
    ref: {
      table: { disable: true },
    },
    as: {
      table: { disable: true },
    },
    css: {
      table: { disable: true },
    },
  },
} as Meta;

export const Horizontal: Story<DividerProps> = (args) => <Divider {...args} />;

Horizontal.args = {
  orientation: 'horizontal',
};

export const Vertical: Story<DividerProps> = (args) => (
  <Box css={{ h: 50 }}>
    <Divider {...args} />
  </Box>
);

Vertical.args = {
  orientation: 'vertical',
};
