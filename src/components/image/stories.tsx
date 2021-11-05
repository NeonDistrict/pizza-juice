import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Image, ImageProps } from '.';

export default {
  title: 'Components/Data Display/Image',
  component: Image,
  args: {
    // random src
    src: 'https://picsum.photos/200/200',
  },
} as Meta;

export const Default: Story<ImageProps> = (args) => <Image {...args} />;

Default.args = {
  alt: 'Random image',
  css: {
    size: 200,
  },
};
