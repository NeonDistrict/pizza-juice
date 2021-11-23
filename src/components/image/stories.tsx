import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Image, ImageProps } from '.';

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
  },
} as Meta;

export const Default: Story<ImageProps> = (args) => <Image {...args} />;

Default.args = {
  src: 'https://picsum.photos/200/200',
  alt: 'Random image',
  objectFit: true,
  cover: true,
  css: {
    size: 200,
  },
};

export const WithError: Story<ImageProps> = (args) => <Image {...args} />;

WithError.args = {
  src: 'https://wrong-path.com',
  fallbackSrc: 'https://via.placeholder.com/150',
  alt: 'Random image',
  objectFit: true,
  cover: true,
  css: {
    size: 200,
  },
};
