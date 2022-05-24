import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Rate, RateProps } from '.';

export default {
  title: 'Components/Data Display/Rate',
  component: Rate,
  argTypes: {
    as: {
      table: { disable: true },
    },
  },
} as Meta;

export const Default: Story<RateProps> = (args) => <Rate {...args} />;

Default.args = {
  value: 3,
};
