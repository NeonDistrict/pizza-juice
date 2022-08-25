import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Checkbox, CheckboxProps } from '.';

import { Stack } from '../stack';

export default {
  title: 'Components/Forms/Checkbox',
  component: Checkbox,
  argTypes: {
    asChild: {
      table: { disable: true },
    },
    as: {
      table: { disable: true },
    },
    css: {
      table: { disable: true },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
  },
} as Meta;

export const Default: Story<CheckboxProps> = (args) => (
  <Stack direction="column">
    <Checkbox {...args} />

    <Checkbox {...args} />
  </Stack>
);

Default.args = {
  children: 'Accept terms and conditions.',
  size: 'md',
  defaultChecked: false,
  disabled: false,
};
