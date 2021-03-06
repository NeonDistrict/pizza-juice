import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Select, SelectProps } from '.';

import { Box } from '../box';

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
  <Box css={{ maxW: 300 }}>
    <Select {...args} options={options} />
  </Box>
);

Default.args = {
  variant: 'solid',
  label: 'Label',
  placeholder: 'Selet option',
  hint: 'Optional tooltip or example to help',
  error: 'Error message',
  disabled: false,
};
