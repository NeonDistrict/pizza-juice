import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import VStack, { VStackProps } from '.';

import Box from '@district-ui/box';

export default {
  title: 'Components/Layout/VStack',
  component: VStack
} as Meta;

export const Default: Story<VStackProps> = args => (
  <VStack {...args} spacing={5}>
    <Box>123</Box>

    <Box>123</Box>

    <Box>123</Box>
  </VStack>
);

Default.args = {};
