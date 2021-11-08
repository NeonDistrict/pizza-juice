import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Tag, TagProps } from '.';

export default {
  title: 'Components/Data Display/Tag',
  component: Tag,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    label: {
      table: { disable: true },
    },
  },
} as Meta;

export const Default: Story<TagProps> = (args) => <Tag {...args} />;

Default.args = {
  label: 'Favorites',
  removable: true,
};

export const WithImage: Story<TagProps> = (args) => <Tag {...args} />;
WithImage.args = {
  label: 'Favorites',
  removable: true,
  image: 'https://i.pinimg.com/originals/e4/fd/08/e4fd08f4e67d93ba3e0828b79b18e6ac.jpg'
};
