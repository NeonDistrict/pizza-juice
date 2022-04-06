import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Image, ImageProps } from '.';

import { Box } from '../box';

export default {
  title: 'Components/Data Display/Image',
  component: Image,
  argTypes: {
    css: {
      table: { disable: true },
    },
    objectFit: {
      control: { type: 'boolean' },
    },
    cover: {
      control: { type: 'boolean' },
    },
    as: {
      table: { disable: true },
    },
  },
} as Meta;

export const Default: Story<ImageProps> = (args) => (
  <Box css={{ maxW: 500 }}>
    <Image {...args} />
  </Box>
);

Default.args = {
  src: 'https://neon-district-season-one.s3.amazonaws.com/images/blissmanipulatorp-legendary-legs-female-thumb.png',
  alt: 'Random image',
  ratio: 1,
  objectFit: true,
  cover: true,
};

export const WithError: Story<ImageProps> = (args) => <Image {...args} />;

WithError.args = {
  src: 'https://wrong-path.com',
  fallbackSrc: 'https://via.placeholder.com/150',
  alt: 'Random image',
  ratio: 16 / 9,
  objectFit: true,
  cover: true,
};
