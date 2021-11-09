import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Carousel, CarouselProps } from '.';

import { Box } from '../box';

export default {
  title: 'Components/Presentation/Carousel',
  component: Carousel,
} as Meta;

const items = [
  {
    src: 'https://i.imgur.com/DNysFaY.png',
    alt: '1',
    label: 'Label 1',
  },
  {
    src: 'https://i.imgur.com/DNysFaY.png',
    alt: '2',
    label: 'Label 2',
  },
  {
    src: 'https://i.imgur.com/DNysFaY.png',
    alt: '3',
    label: 'Label 3',
  },
  {
    src: 'https://i.imgur.com/DNysFaY.png',
    alt: '4',
    label: 'Label 4',
  },
  {
    src: 'https://i.imgur.com/DNysFaY.png',
    alt: '5',
    label: 'Label 5',
  },
  {
    src: 'https://i.imgur.com/DNysFaY.png',
    alt: '6',
    label: 'Label 6',
  },
];

export const Default: Story<CarouselProps> = (...args) => {
  return <Carousel {...args} items={items} />;
};

Default.args = {};

export const SingleItem: Story<CarouselProps> = (...args) => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    arrows: true,
    infinite: true,
  };

  return (
    <Box css={{ maxW: 214 }}>
      <Carousel {...args} items={items} settings={settings} />
    </Box>
  );
};

SingleItem.args = {};
