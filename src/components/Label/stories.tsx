import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Label, { LabelProps } from '.';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    size: {
      options: ['sm', 'lg', 'md'],
      control: { type: 'select' }
    }
  }
} as Meta;

export const Default: Story<LabelProps> = args => <Label {...args} />;

Default.args = {
  children: 'New',
  size: 'md'
};
