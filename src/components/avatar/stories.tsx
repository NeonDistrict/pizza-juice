import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Avatar, AvatarProps } from '.';

export default {
  title: 'Components/Presentation/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      options: ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      control: { type: 'radio' }
    },
    css: {
      table: { disable: true }
    }
  }
} as Meta;

export const Default: Story<AvatarProps> = args => <Avatar {...args} />;

Default.args = {
  size: '3xl',
  src: 'https://avatarfiles.alphacoders.com/188/thumb-1920-188870.jpg',
  alt: 'Avatar description'
};
