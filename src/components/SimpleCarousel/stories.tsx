import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import SimpleCarousel, { SimpleCarouselProps } from '.';

export default {
  title: 'Components/In Progress/SimpleCarousel',
  component: SimpleCarousel,
  argTypes: {
    items: {
      control: { type: 'disabled' }
    }
  }
} as Meta;

export const Default: Story<SimpleCarouselProps> = (...args) => {
  const items = [
    {
      src: 'https://i.redd.it/rfh766xpjrj21.jpg',
      alt: '1',
      label: 'Label 1'
    },
    {
      src: 'https://i.redd.it/rfh766xpjrj21.jpg',
      alt: '2',
      label: 'Label 2'
    },
    {
      src: 'https://i.redd.it/rfh766xpjrj21.jpg',
      alt: '3',
      label: 'Label 3'
    },
    {
      src: 'https://i.redd.it/rfh766xpjrj21.jpg',
      alt: '4',
      label: 'Label 4'
    },
    {
      src: 'https://i.redd.it/rfh766xpjrj21.jpg',
      alt: '5',
      label: 'Label 5'
    }
  ];

  return <SimpleCarousel {...args} items={items} />;
};

Default.args = {};
