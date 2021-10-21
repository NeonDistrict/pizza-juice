import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Textarea, { TextareaProps } from '.';

export default {
  title: 'Components/Forms/Textarea',
  component: Textarea
} as Meta;

export const Default: Story<TextareaProps> = args => (
  <Textarea placeholder="Optional placeholder" {...args} />
);

Default.args = {
  label: 'Label',
  placeholder: 'PLACE HOLDER FOR TEXT AREA',
  hint: 'Optional tooltip or example to help',
  disabled: false,
  minRows: 3,
  error: ''
};
