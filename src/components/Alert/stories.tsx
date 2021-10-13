import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Alert, { AlertProps } from '.';

import Button from '../Button';

export default {
  title: 'Components/In Progress/Alert',
  component: Alert,
  argTypes: {
    button: {
      table: { disable: true }
    }
  }
} as Meta;

export const Default: Story<AlertProps> = args => <Alert {...args} />;

Default.args = {
  title: 'Success',
  message: 'Lorem ipsun dolor sit amet',
  button: <Button>Hello</Button>
};
