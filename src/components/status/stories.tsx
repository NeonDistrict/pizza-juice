import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Status, StatusProps } from '.';

export default {
  title: 'Components/Data Display/Status',
  component: Status,
  argTypes: {
    as: {
      table: { disable: true },
    },
    css: {
      table: { disable: true },
    },
    variant: {
      options: ['white', 'teal', 'green', 'pink', 'yellow'],
      control: { type: 'select' },
    },
  },
} as Meta;

export const Default: Story<StatusProps> = (args) => <Status {...args} />;

Default.args = {
  variant: 'green',
};
