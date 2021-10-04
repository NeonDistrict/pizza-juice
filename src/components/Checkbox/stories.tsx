import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Checkbox, { CheckboxProps } from '.';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    asChild: {
      table: { disable: true }
    }
  }
} as Meta;

export const Default: Story<CheckboxProps> = args => <Checkbox {...args} />;

Default.args = {
  children: 'Accept terms and conditions.',
  size: 'md',
  defaultChecked: false
};
