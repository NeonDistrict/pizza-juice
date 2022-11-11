import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Tooltip, TooltipProps } from '.';

import { Center } from '../center';
import { Button } from '../button';

export default {
  title: 'Components/Overlay/Tooltip',
  component: Tooltip,
  argTypes: {
    delayDuration: {
      control: {
        type: 'number',
        min: 0,
      },
    },
    sideOffset: {
      control: {
        type: 'number',
        min: 0,
      },
    },
    children: {
      table: { disable: true },
    },
    as: {
      table: { disable: true },
    },
    css: {
      table: { disable: true },
    },
    position: {
      items: ['top', 'bottom', 'left', 'right'],
      control: { type: 'select' },
    },
  },
} as Meta;

export const Default: Story<TooltipProps> = (args) => (
  <Center css={{ h: 200 }}>
    <Tooltip {...args}>
      <Button>Hover me</Button>
    </Tooltip>
  </Center>
);

Default.args = {
  text: 'What is this?',
  position: 'right',
  defaultOpen: false,
  sideOffset: 5,
  delayDuration: 700,
};
