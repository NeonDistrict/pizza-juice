import React from 'react';

import { Story } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from '.';

import { AiOutlineClose } from 'react-icons/ai';

export default {
  title: 'Components/Forms/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'destructive', 'outline', 'naked'],
    },
    shape: {
      options: ['squared', 'rounded'],
    },
    size: {
      options: ['sm', 'md'],
    },
    icon: {
      table: { disable: true },
    },
    css: {
      table: { disable: true },
    },
  },
};

type ButtonStory = Story<ButtonProps>;

export const Default: ButtonStory = (args) => <Button {...args} />;

Default.args = {
  variant: 'secondary',
  children: 'Awesome Button',
  shape: 'squared',
  size: 'md',
  disabled: false,
};

export const WithIcon: ButtonStory = (args) => <Button {...args} />;

WithIcon.args = {
  variant: 'primary',
  children: 'Label',
  size: 'sm',
  icon: <AiOutlineClose />,
  iconPosition: 'left',
  disabled: false,
};
