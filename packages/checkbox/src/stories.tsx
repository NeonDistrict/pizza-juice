import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Checkbox, { CheckboxProps } from '.';

export default {
  title: 'Components/Forms/Checkbox',
  component: Checkbox,
  argTypes: {
    asChild: {
      table: { disable: true }
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' }
    }
  }
} as Meta;

export const Default: Story<CheckboxProps> = args => <Checkbox {...args} />;

Default.args = {
  children: 'Accept terms and conditions.',
  size: 'md',
  defaultChecked: false,
  disabled: false
};
