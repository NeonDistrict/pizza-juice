import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Badge, { BadgeProps } from '.';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    size: {
      options: ['sm', 'lg', 'md'],
      control: { type: 'select' }
    }
  }
} as Meta;

export const Default: Story<BadgeProps> = args => <Badge {...args} />;

Default.args = {
  children: 'New',
  size: 'md'
};
