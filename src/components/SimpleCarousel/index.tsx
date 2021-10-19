import React from 'react';

import BaseCarousel, { BaseCarouselSettings } from '../BaseCarousel';

import Button from '../Button';

import { Item, Wrapper } from './styles';

export type SimpleCarouselProps = {
  items?: SimpleCarouselItemProps[];
  settings?: BaseCarouselSettings;
};

const SimpleCarousel = ({ items, settings }: SimpleCarouselProps) => {
  const defaultSettings: BaseCarouselSettings = {
    dots: true,
    slidesToShow: 1,
    arrows: true,
    infinite: true,
    ...settings
  };

  return (
    <Wrapper>
      <BaseCarousel settings={defaultSettings}>
        {items?.map(item => (
          <SimpleCarouselItem key={item.label} {...item} />
        ))}
      </BaseCarousel>
    </Wrapper>
  );
};

const SimpleCarouselItem = ({ src, alt, label }: SimpleCarouselItemProps) => {
  return (
    <Item>
      <img src={src} alt={alt} />

      <Button>{label}</Button>
    </Item>
  );
};

type SimpleCarouselItemProps = {
  src?: string;
  alt?: string;
  label?: string;
};

export default SimpleCarousel;
