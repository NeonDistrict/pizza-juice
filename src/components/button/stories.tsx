import React from 'react';

import { Story } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from '.';

import { AiOutlineClose } from 'react-icons/ai';

export default {
  title: 'Components/Forms/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'destructive', 'warning', 'success'],
    },
    shape: {
      options: ['squared', 'rounded'],
    },
    style: {
      options: ['solid', 'outlined', 'naked'],
    },
    icon: {
      table: { disable: true },
    },
    children: {
      control: {
        type: 'text',
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
  variant: 'primary',
  children: 'Awesome Button',
  style: 'solid',
  shape: 'squared',
  disabled: false,
  loading: false,
};

export const WithIcon: ButtonStory = (args) => <Button {...args} />;

WithIcon.args = {
  variant: 'primary',
  children: 'Awesome Button',
  style: 'solid',
  shape: 'squared',
  disabled: false,
  loading: false,
  icon: <AiOutlineClose />,
  iconPosition: 'left',
};

export const Loading: ButtonStory = (args) => <Button {...args} />;

Loading.args = {
  children: 'Label',
  loading: true,
};
