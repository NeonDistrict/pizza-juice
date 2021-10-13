import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Toggle, { ToggleProps } from '.';

export default {
  title: 'Components/Done/Form/Toggle',
  component: Toggle,
  argTypes: {
    name: {
      table: { disable: true }
    },
    asChild: {
      table: { disable: true }
    },
    onPressedChange: {
      action: 'toggled',
      table: { disable: true }
    }
  }
} as Meta;

export const Default: Story<ToggleProps> = args => <Toggle {...args} />;

Default.args = {
  disabled: false,
  defaultPressed: true
};
