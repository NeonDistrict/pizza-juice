import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Select, SelectProps } from '.';

export default {
  title: 'Components/Forms/Select',
  component: Select,
  argTypes: {
    variant: {
      options: ['solid', 'outline'],
    },
    size: {
      options: ['tiny', 'small', 'default'],
    },
    id: {
      table: { disable: true },
    },
    children: {
      table: { disable: true },
    },
    items: {
      table: { disable: true },
    },
    css: {
      table: { disable: true },
    },
  },
} as Meta;

const options = [
  { value: '1', label: 'One' },
  { value: '2', label: 'Two' },
  { value: '3', label: 'Three' },
  { value: '4', label: 'Four' },
  { value: '5', label: 'Five' },
];

export const Default: Story<SelectProps> = (args) => (
  <Select {...args} options={options} />
);

Default.args = {
  variant: 'solid',
  label: 'Label',
  placeholder: 'Selet an option',
  hint: 'Optional tooltip or example to help',
  error: 'Error message',
  disabled: false,
  required: true,
};
