import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Input, InputProps } from '.';

import { BsEyeFill } from 'react-icons/bs';

import { Box } from '../box';

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

export const Default: Story<InputProps> = (args) => (
  <Box css={{ maxW: 300 }}>
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

export const LeftIcon: Story<InputProps> = (args) => (
  <Box css={{ maxW: 300 }}>
    <Input {...args} />
  </Box>
);

LeftIcon.args = {
  label: 'Label',
  hint: 'Input hints',
  variant: 'default',
  disabled: false,
  error: '',
  placeholder: 'Optional placeholder',
  leftIcon: <BsEyeFill />,
};

export const RightIcon: Story<InputProps> = (args) => (
  <Box css={{ maxW: 300 }}>
    <Input {...args} />
  </Box>
);

RightIcon.args = {
  label: 'Label',
  hint: 'Input hints',
  variant: 'default',
  disabled: false,
  error: '',
  placeholder: 'Optional placeholder',
  rightIcon: <BsEyeFill />,
};
