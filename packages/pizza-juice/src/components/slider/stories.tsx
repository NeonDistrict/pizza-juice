import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Slider, SliderProps } from './';

export default {
  title: 'Components/Forms/Slider',
  component: Slider,
  argTypes: {
    css: {
      table: { disable: true },
    },
    'aria-label': {
      table: { disable: true },
    },
    as: {
      table: { disable: true },
    },
    asChild: {
      table: { disable: true },
    },
    onValueChange: {
      action: 'onValueChange',
      table: { disable: true },
    },
  },
} as Meta;

export const Horizontal: Story<SliderProps> = (args) => <Slider {...args} />;

Horizontal.args = {
  defaultValue: [50],
};

export const Vertical: Story<SliderProps> = (args) => (
  <Slider {...args} css={{ minH: 200 }} />
);

Vertical.args = {
  defaultValue: [50],
  orientation: 'vertical',
};

export const Multiple: Story<SliderProps> = (args) => <Slider {...args} />;

Multiple.args = {
  defaultValue: [20, 80],
};
