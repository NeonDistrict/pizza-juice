import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Avatar, AvatarProps } from '.';

export default {
  title: 'Components/Presentation/Avatar',
  component: Avatar,
  args: {
    // random src
    src: 'https://picsum.photos/200/200'
  },
  argTypes: {
    size: {
      options: ['24', '32', '40', '64', '80', '88', '160', '192', '240'],
      control: { type: 'select' }
    },
    objectFit: {
      control: { type: 'boolean' }
    },
    cover: {
      control: { type: 'boolean' }
    },
    css: {
      table: { disable: true }
    }
  }
} as Meta;

export const Default: Story<AvatarProps> = args => <Avatar {...args} />;

Default.args = {
  size: '80',
  alt: 'Avatar description',
  objectFit: true,
  cover: true
};
