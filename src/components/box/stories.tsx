import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Box, BoxProps } from '.';

export default {
  title: 'Components/Layout/Box',
  component: Box,
} as Meta;

export const Default: Story<BoxProps> = (args) => (
  <Box {...args} bg="white" my={1} css={{ size: 200 }} />
);

Default.args = {};
