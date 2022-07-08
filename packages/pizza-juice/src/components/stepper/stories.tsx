import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Stepper, StepperProps } from '.';

export default {
  title: 'Components/Disclosure/Stepper',
  component: Stepper,
  argTypes: {
    css: {
      table: { disable: true },
    },
  },
} as Meta;

const items = ['Item 1', 'Item 2', 'Item 3'];

export const Default: Story<StepperProps> = (args) => <Stepper {...args} />;

Default.args = {
  activeItem: 1,
  items,
};
