import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Input, { InputProps } from '.';

export default {
  title: 'Components/Done/Form/Input',
  component: Input,
  argTypes: {
    disabled: {
      control: { type: 'boolean' }
    },
    label: {
      table: { disable: true }
    }
  }
} as Meta;

export const Default: Story<InputProps> = args => (
  <Input placeholder="Optional placeholder" {...args} />
);

Default.args = {
  label: 'Label',
  hint: 'Input hints',
  color: 'black',
  disabled: false,
  error: ''
};
