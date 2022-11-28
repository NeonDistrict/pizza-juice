import React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { Stack } from '../components/stack';

import * as Icons from '.';
import { IconProps } from '../components/icon';

export default {
  title: 'Icons',
  argTypes: {},
} as Meta;

export const Default = (args: IconProps) => {
  return (
    <Stack wrap="wrap">
      {Object.entries(Icons).map(([name, Icon]) => (
        <Stack key={name} direction="column" gap={1} align="center">
          <Icon {...args} css={{ size: 50 }} />

          <div>{name}</div>
        </Stack>
      ))}
    </Stack>
  );
};
