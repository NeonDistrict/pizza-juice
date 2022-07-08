import React from 'react';

import { Story } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from '.';

import { AiOutlineClose } from 'react-icons/ai';

export default {
  title: 'Components/Forms/Button',
  component: Button,
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'destructive', 'warning', 'success'],
    },
    variant: {
      options: ['solid', 'outlined', 'naked', 'unstyled'],
    },
    shape: {
      options: ['squared', 'rounded'],
    },
    icon: {
      table: { disable: true },
    },
    children: {
      control: {
        type: 'text',
      },
    },
    fluid: {
      control: {
        type: 'boolean',
      },
    },
    css: {
      table: { disable: true },
    },
  },
};

type ButtonStory = Story<ButtonProps>;

export const Default: ButtonStory = (args) => <Button {...args} />;

Default.args = {
  color: 'primary',
  children: 'Awesome Button',
  variant: 'solid',
  shape: 'squared',
  disabled: false,
  loading: false,
  fluid: false,
};

export const WithIcon: ButtonStory = (args) => <Button {...args} />;

WithIcon.args = {
  color: 'primary',
  children: 'Awesome Button',
  variant: 'solid',
  shape: 'squared',
  disabled: false,
  loading: false,
  icon: <AiOutlineClose />,
  iconPosition: 'left',
  fluid: false,
};

export const Loading: ButtonStory = (args) => <Button {...args} />;

Loading.args = {
  children: 'Label',
  loading: true,
};
