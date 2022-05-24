import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Center, CenterProps } from '.';

export default {
  title: 'Components/Layout/Center',
  component: Center,
  argTypes: {
    as: {
      table: { disable: true },
    },
  },
} as Meta;

export const Default: Story<CenterProps> = (args) => (
  <Center {...args} css={{ w: '$full', h: 500 }}>
    <Center css={{ size: 100, bg: '$pink-500' }}>Center</Center>
  </Center>
);

Default.args = {};
