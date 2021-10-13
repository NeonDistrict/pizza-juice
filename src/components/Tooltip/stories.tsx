import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Tooltip, { TooltipProps } from '.';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: { type: 'radio' }
    },
    children: {
      control: { type: 'disabled' }
    }
  }
} as Meta;

export const Default: Story<TooltipProps> = args => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '200px'
    }}
  >
    <Tooltip {...args} />
  </div>
);

Default.args = {
  text: 'What is this?',
  position: 'right',
  children: <small style={{ color: 'white' }}>Hover me</small>
};
