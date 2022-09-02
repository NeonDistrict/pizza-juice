import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { ToastContainer, ToastProps, toast } from '.';

import { Button } from '../button';

export default {
  title: 'Components/Feedback/New-Toast',
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
        options: ['default', 'warning', 'error', 'success', 'primary'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['image', 'icon', 'timer'],
      },
    },
    message: {
      control: 'text',
    },
    dismissible: {
      control: 'boolean',
    },
    stacked: {
      control: 'boolean',
    },

    position: {
      control: {
        type: 'select',
        options: [
          'top-left',
          'top-right',
          'top-center',
          'bottom-left',
          'bottom-right',
          'bottom-center',
        ],
      },
    },
  },
} as Meta;

type Position = {
  position:
    | 'top-right'
    | 'top-center'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-center'
    | 'bottom-left';
};

export const Default: Story<ToastProps & Position> = (args) => {
  return (
    <>
      <ToastContainer />

      <Button
        color="secondary"
        onClick={() => toast(args, { position: args.position })}
      >
        Default Toast
      </Button>
    </>
  );
};

Default.args = {
  variant: 'icon',
  type: 'success',
  title: 'Title',

  position: 'bottom-right',

  button1: <Button>Primary</Button>,
  button2: <Button>Secondary</Button>,
};
