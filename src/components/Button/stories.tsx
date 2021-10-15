import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from '.';

export default {
  title: 'Components/Done/Button',
  component: Button,
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

export const Default: Story<ButtonProps> = args => <Button {...args} />;

Default.args = {
  children: 'ND Button',
  size: 'md',
  fluid: false,
  disabled: false,
  rounded: false
};
