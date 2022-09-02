import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Container, ContainerProps } from '.';

export default {
  title: 'Components/Layout/Container',
  component: Container,
  argTypes: {
    asChild: {
      table: { disable: true },
    },
    as: {
      table: { disable: true },
    },
    css: {
      table: { disable: true },
    },
    maxWidth: {
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      control: { type: 'select' },
    },
  },
} as Meta;

export const Default: Story<ContainerProps> = (args) => (
  <Container {...args} css={{ bg: '$pink-500', py: '$10' }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit
    libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu
  </Container>
);
