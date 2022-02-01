import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { FadeIn, FadeInProps } from '.';

import { Box } from '../../box';

export default {
  title: 'Components/Transitions/FadeIn',
  component: FadeIn,
  argTypes: {
    ref: {
      table: { disable: true },
    },
    as: {
      table: { disable: true },
    },
    children: {
      table: { disable: true },
    },
  },
} as Meta;

export const Default: Story<FadeInProps> = (args) => {
  return (
    <Box css={{ size: 300 }}>
      <FadeIn {...args}>
        <Box css={{ size: 50, bg: '$pink-500' }} />
      </FadeIn>
    </Box>
  );
};

Default.args = {
  delay: 1000,
  duration: 450,
};
