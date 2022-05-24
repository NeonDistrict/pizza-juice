import React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { Stack } from '.';

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

export const Default = (args) => (
  <Stack {...args}>
    {[...Array(3)].map((_, i) => (
      <Box key={i} css={{ size: 30, bg: '$pink-500' }} />
    ))}
  </Stack>
);

Default.args = {
  direction: 'row',
};
