import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { RadioGroup, RadioItem, RadioGroupProps } from '.';

export default {
  title: 'Components/Forms/Radio',
  component: RadioItem,
  argTypes: {
    direction: {
      options: ['column', 'row'],
      control: { type: 'radio' }
    }
  }
} as Meta;

export const Default: Story<RadioGroupProps> = args => (
  <RadioGroup {...args}>
    <RadioItem value="1">Test 1</RadioItem>
    <RadioItem value="2">Test 2</RadioItem>
    <RadioItem value="3">Test 3</RadioItem>
  </RadioGroup>
);
