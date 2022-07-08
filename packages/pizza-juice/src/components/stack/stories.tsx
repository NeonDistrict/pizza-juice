import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Stack, StackProps } from '.';

import { Box } from '../box';

export default {
  title: 'Components/Layout/Stack',
  component: Stack,
  argTypes: {
    direction: {
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
      control: { type: 'radio' },
    },
  },
} as Meta;

export const Default: Story<StackProps> = (args) => (
  <Stack {...args}>
    <Box css={{ size: 30, bg: '$red-500' }} />
    <Box css={{ size: 30, bg: '$yellow-500' }} />
    <Box css={{ size: 30, bg: '$green-500' }} />
  </Stack>
);

Default.args = {
  direction: 'column',
};
