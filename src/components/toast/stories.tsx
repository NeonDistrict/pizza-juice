import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { ToastContainer, ToastMethodProps, toast } from '.';

import { Button } from '../button';

export default {
  title: 'Components/Feedback/Toast',
  component: ToastContainer,
  argTypes: {
    asChild: {
      table: { disable: true },
    },
    css: {
      table: { disable: true },
    },
    as: {
      table: { disable: true },
    },
    type: {
      control: {
        type: 'select',
        options: ['default', 'success', 'error', 'warning', 'info'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['minimal', 'actions'],
      },
    },
  },
} as Meta;

export const Default: Story<ToastMethodProps> = (args) => {
  return (
    <>
      <ToastContainer />

      <Button color="secondary" onClick={() => toast(args)}>
        Default Toast
      </Button>
    </>
  );
};

Default.args = {
  title: 'Default title',
  message: 'Default Message',
  type: 'default',
  variant: 'minimal',
  autoClose: 3000,
  closable: true,
};
