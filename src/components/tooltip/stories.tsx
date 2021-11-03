import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Tooltip, TooltipProps } from '.';

import { Flex } from '../flex';
import { Button } from '../button';

export default {
  title: 'Components/Overlay/Tooltip',
  component: Tooltip,
  argTypes: {
    children: {
      table: { disable: true }
    },
    position: {
      items: ['top', 'bottom', 'left', 'right'],
      control: { type: 'select' }
    }
  }
} as Meta;

export const Default: Story<TooltipProps> = args => (
  <Flex
    css={{
      h: 200,
      justify: 'center',
      align: 'center'
    }}
  >
    <Tooltip {...args} />
  </Flex>
);

Default.args = {
  text: 'What is this?',
  position: 'right',
  children: <Button>Hover me</Button>
};
