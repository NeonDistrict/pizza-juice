import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from '.';

export default {
  title: 'Components/In Progress/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['md', 'sm'],
      control: { type: 'select' }
    },
    variant: {
      options: ['primary', 'secondary', 'destructive', 'outline'],
      control: { type: 'select' }
    },
    rounded: {
      control: { type: 'boolean' }
    },
    squared: {
      control: { type: 'boolean' }
    },
    disabled: {
      control: { type: 'boolean' }
    },
    icon: {
      options: ['', 'close'],
      control: { type: 'select' }
    },
    label: {
      table: { disable: true }
    }
  }
} as Meta;

export const Default: Story<ButtonProps> = args => <Button {...args} />;

Default.args = {
  children: 'Label',
  size: 'md',
  fluid: false,
  disabled: false,
  rounded: false,
  squared: false,
  variant: 'primary'
};
