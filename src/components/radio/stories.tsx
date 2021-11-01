import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Radio, RadioGroupProps } from '.';

export default {
  title: 'Components/Forms/Form/Radio',
  component: Radio.Item,
  argTypes: {
    direction: {
      options: ['column', 'row'],
      control: { type: 'radio' }
    }
  }
} as Meta;

export const Default: Story<RadioGroupProps> = args => (
  <Radio.Group {...args}>
    <Radio.Item value="1">Test 1</Radio.Item>
    <Radio.Item value="2">Test 2</Radio.Item>
    <Radio.Item value="3">Test 3</Radio.Item>
  </Radio.Group>
);

Default.args = {
  direction: 'column'
};
