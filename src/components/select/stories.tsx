import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Select, SelectItem, SelectProps } from '.';

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
    css: {
      table: { disable: true },
    },
  },
} as Meta;

const items = [
  { value: '1', label: 'One' },
  { value: '2', label: 'Two' },
  { value: '3', label: 'Three' },
  { value: '4', label: 'Four' },
  { value: '5', label: 'Five' },
];

export const Default: Story<SelectProps> = (args) => (
  <Box css={{ maxW: 300 }}>
    <Select {...args}>
      {items?.map((item) => (
        <SelectItem key={item.value} value={item.value}>
          {item.label}
        </SelectItem>
      ))}
    </Select>
  </Box>
);

Default.args = {
  label: 'Label',
  hint: 'Optional tooltip or example to help',
  error: 'Error message',
  disabled: false,
};
