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
      control: { type: 'select' }
    },
    size: {
      options: ['md', 'sm'],
      control: { type: 'select' }
    },
    shape: {
      options: ['rounded', 'squared'],
      control: { type: 'select' }
    },
    disabled: {
      control: { type: 'boolean' }
    },
    children: {
      table: { disable: true }
    },
    iconPosition: {
      options: ['left', 'right'],
      control: { type: 'select' }
    }
  }
};

type ButtonStory = Story<ButtonProps>;

export const Default: ButtonStory = args => <Button {...args} />;

Default.args = {
  children: 'Label',
  size: 'md'
};

export const WithIcon: ButtonStory = args => <Button {...args} />;

WithIcon.args = {
  children: 'Label',
  size: 'md',
  icon: <AiOutlineClose />,
  iconPosition: 'left'
};
