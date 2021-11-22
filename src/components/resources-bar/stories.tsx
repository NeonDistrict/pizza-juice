import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Resources, ResourcesProps } from '.';

export default {
  title: 'Components/Forms/Resources Bar',
  component: Resources,
} as Meta;

export const Default: Story<ResourcesProps> = (args) => <Resources {...args} />;

Default.args = {
  neon: 13234,
  juice: 540,
  parts: 1000,
  hasIcon: true,
  hasText: true,
};
