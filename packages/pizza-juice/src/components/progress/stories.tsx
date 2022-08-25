/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Progress, ProgressProps } from './progress';

import { CircularProgress } from './circular-progress';

export default {
  title: 'Components/Feedback/Progress',
  component: Progress,
  argTypes: {
    value: {
      control: { type: 'number' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    color: {
      options: ['pink', 'green', 'red'],
      control: { type: 'select' },
    },
    thickness: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    css: {
      table: { disable: true },
    },
    as: {
      table: { disable: true },
    },
  },
} as Meta;

export const Linear: Story<ProgressProps> = (args) => <Progress {...args} />;

Linear.args = {
  value: 50,
  size: 'md',
  min: 0,
  max: 100,
  color: 'pink',
};

export const Circular: Story<ProgressProps> = (args) => (
  <CircularProgress {...args} />
);

Circular.args = {
  value: 50,
  size: 'md',
  min: 0,
  max: 100,
  color: 'pink',
  // @ts-ignore
  thickness: 'md',
};
