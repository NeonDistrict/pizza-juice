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
      table: { disable: true },
    },
  },
} as Meta;

// current date + 1min30
const endDate = new Date(new Date().getTime() + 100000).getTime();

export const Default: Story<CountdownProps> = (args) => <Countdown {...args} />;

Default.args = {
  size: 'md',
  endDate,
};
