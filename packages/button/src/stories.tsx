import React from 'react';

import { Story } from '@storybook/react';

import { Button, ButtonProps } from '.';

import { AiOutlineClose } from 'react-icons/ai';

export default {
  title: 'Components/Forms/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'destructive', 'outline', 'naked'],
      control: { type: 'radio' }
    },
    size: {
      options: ['sm', 'md'],
      control: { type: 'radio' }
    },
    shape: {
      options: ['squared', 'rounded'],
      control: { type: 'radio' }
    },
    icon: {
      table: { disable: true }
    },
    iconPosition: {
      options: ['left', 'right'],
      control: { type: 'radio' }
    }
  }
};

type ButtonStory = Story<ButtonProps>;

export const Default: ButtonStory = args => <Button {...args} />;

Default.args = {
  variant: 'secondary',
  children: 'Awesome Button',
  shape: 'squared',
  size: 'md',
  disabled: false,
  fluid: false
};

export const WithIcon: ButtonStory = args => <Button {...args} />;

WithIcon.args = {
  variant: 'primary',
  children: 'Label',
  size: 'sm',
  icon: <AiOutlineClose />,
  iconPosition: 'left',
  disabled: false,
  fluid: false
};
