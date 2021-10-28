import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Select, SelectProps } from '.';

export default {
  title: 'Components/Forms/Select',
  component: Select,
  argTypes: {
    name: {
      table: { disable: true }
    }
  }
} as Meta;

export const Default: Story<SelectProps> = args => (
  <Select {...args}>
    <option value="brazil">Brazil</option>
    <option value="eua">EUA</option>
    <option value="india">India</option>
  </Select>
);

Default.args = {
  label: 'Label',
  placeholder: 'Please select',
  hint: 'Optional tooltip or example to help',
  error: 'Error message',
  size: 'md',
  disabled: false,
  variant: 'solid'
};
