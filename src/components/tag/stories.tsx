import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Tag, TagProps } from '.';

export default {
  title: 'Components/Data Display/Tag',
  component: Tag,
  argTypes: {
    onClose: {
      action: 'Close clicked',
      table: { disable: true },
    },
    as: {
      table: { disable: true },
    },
    variant: {
      options: ['outline', 'solid'],
      control: { type: 'select' },
    },
  },
} as Meta;

export const Default: Story<TagProps> = (args) => <Tag {...args} />;

Default.args = {
  variant: 'outlined',
  children: 'Outlined tag',
  removable: false,
  removableLabel: '',
};

export const Removable: Story<TagProps> = (args) => <Tag {...args} />;

Removable.args = {
  variant: 'solid',
  children: 'Solid tag',
  removable: true,
  removableLabel: 'Remove item',
};
