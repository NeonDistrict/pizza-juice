import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Countdown, CountdownProps } from '.';

export default {
  title: 'Components/Presentation/Countdown',
  component: Countdown,
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: { type: 'select' },
    },
    css: {
      table: { disable: true },
    },
    onFinish: {
      action: 'Finished',
    },
  },
} as Meta;

const endDate = new Date(new Date().getTime() + 5000);

export const Default: Story<CountdownProps> = (args) => <Countdown {...args} />;

Default.args = {
  size: 'md',
  endDate,
};
