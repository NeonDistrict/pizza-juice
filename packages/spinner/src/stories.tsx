import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Spinner, SpinnerProps } from '.';

export default {
  title: 'Components/Feedback/Spinner',
  component: Spinner,
  argTypes: {
    css: {
      table: { disable: true },
    },
  },
} as Meta;

export const Default: Story<SpinnerProps> = (args) => (
  <Spinner {...args} css={{ $$color: '$colors$white' }} />
);
