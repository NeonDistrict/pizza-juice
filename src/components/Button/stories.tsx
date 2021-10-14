import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

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
      options: ['primary', 'secondary', 'destructive', 'outline', 'naked'],
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

    label: {
      table: { disable: true }
    }
  }
} as Meta;

export const Default: Story<ButtonProps> = args => (
  <Button {...args}>{args.children}</Button>
);

Default.args = {
  children: 'Label',
  size: 'md',
  fluid: false,
  disabled: false,
  rounded: false,
  squared: false,
  variant: 'primary'
};

export const WithIcon: Story<ButtonProps> = args => (
  <Button {...args}>
    <AiOutlineClose />
    {args.children}
  </Button>
);
WithIcon.args = {
  children: 'Label',
  size: 'md',
  fluid: false,
  disabled: false,
  rounded: false,
  squared: false,
  variant: 'secondary'
};

export const WithIconAfter: Story<ButtonProps> = args => (
  <Button {...args}>
    {args.children}
    <AiOutlineClose />
  </Button>
);

WithIconAfter.args = {
  children: 'Label',
  size: 'md',
  fluid: false,
  disabled: false,
  rounded: false,
  squared: false,
  variant: 'destructive'
};
