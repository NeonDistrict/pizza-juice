import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Input, { InputProps } from '.';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    size: {
      options: ['medium', 'large'],
      control: { type: 'select' }
    },
    disabled: {
      control: { type: 'boolean' }
    },
    label: {
      table: { disable: true }
    }
  }
} as Meta;

export const Default: Story<InputProps> = args => <Input {...args} />;

Default.args = {
  label: 'Label',
  hint: 'Input hints',
  error: 'Input error'
};
