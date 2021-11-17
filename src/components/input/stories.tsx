import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Input, InputProps } from '.';
import { Box } from '../box';

export default {
  title: 'Components/Forms/Input',
  component: Input,
  argTypes: {
    css: {
      table: { disable: true },
    },
  },
} as Meta;

export const Default: Story<InputProps> = (args) => (
  <Box css={{ d: 'flex' }}>
    <Input {...args} />
  </Box>
);

Default.args = {
  label: 'Label',
  hint: 'Input hints',
  variant: 'default',
  disabled: false,
  error: '',
  placeholder: 'Optional placeholder',
};
