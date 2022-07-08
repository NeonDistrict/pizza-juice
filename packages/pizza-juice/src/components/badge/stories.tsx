import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Badge, BadgeProps } from '.';

export default {
  title: 'Components/Data Display/Badge',
  component: Badge,
  argTypes: {
    rarity: {
      control: {
        type: 'select',
        options: ['common', 'uncommon', 'rare', 'ultraRare', 'legendary'],
      },
    },
  },
} as Meta;

export const Default: Story<BadgeProps> = (args) => <Badge {...args} />;

Default.args = {
  rarity: 'legendary',
};
