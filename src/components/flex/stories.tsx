import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Flex, FlexProps } from '.';

export default {
  title: 'Components/Layout/Flex',
  component: Flex
} as Meta;

export const Default: Story<FlexProps> = args => (
  <Flex {...args} css={{ size: 50, bg: '$pink1' }} />
);

Default.args = {};
