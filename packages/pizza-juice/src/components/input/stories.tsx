import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Input, InputProps } from '.';

import { BsEyeFill } from 'react-icons/bs';

export default {
  title: 'Components/Forms/Input',
  component: Input,
  argTypes: {
    css: {
      table: { disable: true },
    },
    rightIcon: {
      table: { disable: true },
    },
    leftIcon: {
      table: { disable: true },
    },
  },
} as Meta;

export const Default: Story<InputProps> = (args) => <Input {...args} />;

Default.args = {
  label: 'Label',
  hint: 'Input hints',
  variant: 'default',
  disabled: false,
  error: '',
  placeholder: 'Optional placeholder',
};

export const LeftIcon: Story<InputProps> = (args) => <Input {...args} />;

LeftIcon.args = {
  label: 'Label',
  hint: 'Input hints',
  variant: 'default',
  disabled: false,
  error: '',
  placeholder: 'Optional placeholder',
  leftIcon: <BsEyeFill />,
};

export const RightIcon: Story<InputProps> = (args) => <Input {...args} />;

RightIcon.args = {
  label: 'Label',
  hint: 'Input hints',
  variant: 'default',
  disabled: false,
  error: '',
  placeholder: 'Optional placeholder',
  rightIcon: <BsEyeFill />,
};

export const Cleanable: Story<InputProps> = (args) => <Input {...args} />;

Cleanable.args = {
  label: 'Label',
  hint: 'Input hints',
  variant: 'default',
  disabled: false,
  error: '',
  placeholder: 'Optional placeholder',
  cleanable: true,
};
