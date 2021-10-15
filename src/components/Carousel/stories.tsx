import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Carousel, { CarouselProps } from '.';

export default {
  title: 'Components/In Progress/Carousel',
  component: Carousel
} as Meta;

export const Default: Story = () => <Carousel />;

Default.args = {};
