import React from 'react';

import { Story } from '@storybook/react/types-6-0';

import { IconButton, IconButtonProps } from '.';

import { AiOutlineClose } from 'react-icons/ai';

export default {
  title: 'Components/Forms/IconButton',
  component: IconButton,
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
    css: {
      table: { disable: true },
    },
    as: {
      table: { disable: true },
    },
  },
};

type IconButtonStory = Story<IconButtonProps>;

export const Default: IconButtonStory = (args) => (
  <IconButton {...args}>
    <AiOutlineClose />
  </IconButton>
);

Default.args = {
  'aria-label': 'Close',
};
