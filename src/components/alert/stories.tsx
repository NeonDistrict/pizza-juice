import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Alert, AlertProps } from '.';
import { Button } from '../button';

export default {
  title: 'Components/Feedback/Alert',
  component: Alert,
  argTypes: {
    title: {
      control: 'text',
    },
    subtitle: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'destructive', 'success', 'warning'],
      },
    },
  },
} as Meta;

export const Default: Story<AlertProps> = (args) => {
  return (
    <Alert {...args}>
      <Button color="primary" variant="naked">
        Label
      </Button>
      <Button color="primary" variant="outlined">
        Label
      </Button>
    </Alert>
  );
};

Default.args = {
  title: 'Alert title',
  variant: 'primary',
  subtitle: 'Subtitle',
  description: 'Description',
};

export const Destructive: Story<AlertProps> = (args) => {
  return (
    <Alert {...args}>
      <Button color="destructive" variant="naked">
        Label
      </Button>
      <Button color="destructive" variant="outlined">
        Label
      </Button>
    </Alert>
  );
};

Destructive.args = {
  title: 'Alert title',
  variant: 'destructive',
  subtitle: 'Subtitle',
  description: 'Description',
};

export const Warning: Story<AlertProps> = (args) => {
  return (
    <Alert {...args}>
      <Button color="warning" variant="naked">
        Label
      </Button>
      <Button color="warning" variant="outlined">
        Label
      </Button>
    </Alert>
  );
};

Warning.args = {
  title: 'Alert title',
  variant: 'warning',
  subtitle: 'Subtitle',
  description: 'Description',
};

export const Success: Story<AlertProps> = (args) => {
  return (
    <Alert {...args}>
      <Button color="success" variant="naked">
        Label
      </Button>
      <Button color="success" variant="outlined">
        Label
      </Button>
    </Alert>
  );
};

Success.args = {
  title: 'Alert title',
  variant: 'success',
  subtitle: 'Subtitle',
  description: 'Description',
};
