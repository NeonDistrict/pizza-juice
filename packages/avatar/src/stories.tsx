import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Avatar, { AvatarProps } from '.';

export default {
  title: 'Components/Presentation/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      options: [24, 32, 48, 64, 80, 88, 160, 192, 240],
      control: { type: 'select' }
    }
  }
} as Meta;

export const Default: Story<AvatarProps> = args => <Avatar {...args} />;

Default.args = {
  size: 80
};
