import React from 'react';

import { Story } from '@storybook/react';

import Button, { ButtonProps } from '../src';
import { AiOutlineClose } from 'react-icons/ai';

export default {
  title: 'Components/Button',
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
    rounded: {
      control: { type: 'boolean' }
    },
    disabled: {
      control: { type: 'boolean' }
    },
    children: {
      table: { disable: true }
    }
  }
};

type ButtonStory = Story<ButtonProps>;

export const Default: ButtonStory = args => <Button {...args} />;

Default.args = {
  children: 'Default Button',
  size: 'md'
};

export const WithLeftIcon: ButtonStory = args => <Button {...args} />;

WithLeftIcon.args = {
  children: (
    <>
      <AiOutlineClose />
      Left Icon Button
    </>
  ),
  size: 'md'
};

export const WithRightIcon: ButtonStory = args => <Button {...args} />;

WithRightIcon.args = {
  children: (
    <>
      Right Icon Button
      <AiOutlineClose />
    </>
  ),
  size: 'md'
};
