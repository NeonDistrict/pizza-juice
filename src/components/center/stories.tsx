import React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { Center } from '.';

export default {
  title: 'Components/Layout/Center',
  component: Center,
} as Meta;

export const Default = (args) => (
  <Center {...args} css={{ size: 100, bg: '$pink-500' }}>
    Center
  </Center>
);

Default.args = {};
