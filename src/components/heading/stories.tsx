import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Heading, HeadingProps } from '.';

export default {
  title: 'Components/Typography/Heading',
  component: Heading,
} as Meta;

export const Default: Story<HeadingProps> = (args) => (
  <>
    <Heading {...args} level={1} size="4xl">
      Awesome typography Heading as `h1`.
    </Heading>

    <Heading {...args} level={2}>
      Awesome typography Heading as `h2`.
    </Heading>

    <Heading {...args} level={3}>
      Awesome typography Heading as `h3`.
    </Heading>

    <Heading {...args} level={4}>
      Awesome typography Heading as `h4`.
    </Heading>

    <Heading {...args} level={5}>
      Awesome typography Heading as `h5`.
    </Heading>

    <Heading {...args} level={6}>
      Awesome typography Heading as `h6`.
    </Heading>
  </>
);
