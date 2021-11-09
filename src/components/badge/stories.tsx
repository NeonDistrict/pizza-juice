import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Badge, BadgeProps } from '.';

export default {
  title: 'Components/Data Display/Badge',
  component: Badge,
  argTypes: {
    type: {
      control: { type: 'radio' },
    },
  },
} as Meta;

export const Default: Story<BadgeProps> = (args) => <Badge {...args} />;

Default.args = {
  children: 'New',
};
