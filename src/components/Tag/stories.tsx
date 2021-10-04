import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Tag, { TagProps } from '.';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    disabled: {
      control: { type: 'boolean' }
    },
    label: {
      table: { disable: true }
    }
  }
} as Meta;

export const Default: Story<TagProps> = args => <Tag {...args} />;

Default.args = {
  active: true,
  size: 'md',
  label: 'Favorites',
  removable: true,
  icon: 'archive'
};
