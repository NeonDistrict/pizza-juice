import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Toggle, ToggleProps } from '.';

export default {
  title: 'Components/Forms/Toggle',
  component: Toggle,
  argTypes: {
    asChild: {
      table: { disable: true },
    },
    css: {
      table: { disable: true },
    },
    size: {
      options: ['sm', 'md'],
    },
    onCheckedChange: {
      action: 'toggled',
      table: { disable: true },
    },
  },
} as Meta;

export const Default: Story<ToggleProps> = (args) => <Toggle {...args} />;

Default.args = {
  disabled: false,
  size: 'md',
};
