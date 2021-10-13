import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Avatar, { AvatarProps } from '.';

export default {
  title: 'Components/Done/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      options: ['xxl', 'xl', 'md', 'sm', 'xs', 'xss'],
      control: { type: 'select' }
    }
  }
} as Meta;

export const Default: Story<AvatarProps> = args => <Avatar {...args} />;

Default.args = {
  size: 'xxl'
};
