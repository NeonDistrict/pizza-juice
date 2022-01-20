import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { ResourceBar, ResourceBarProps } from '.';

export default {
  title: 'Components/Presentation/ResourceBar',
  component: ResourceBar,
} as Meta;

export const Default: Story<ResourceBarProps> = (args) => (
  <ResourceBar {...args} />
);

Default.args = {
  neon: -30,
  juice: 120,
  parts: 130,
  hasText: true,
  inline: false,
};
