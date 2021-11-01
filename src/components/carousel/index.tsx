import React from 'react';

import { BaseCarousel, BaseCarouselSettings } from '../base-carousel';

import { Button } from '../button';

import * as S from './styles';

export type CarouselProps = {
  /**
   * Items to be displayed in the carousel
   */
  items?: CarouselItemProps[];
  /**
   * Settings for the carousel
   */
  settings?: BaseCarouselSettings;
};

/**
 * Carousel component
 *
 * @description wrapper of the carousel component
 */
export const Carousel = ({ items, settings, ...props }: CarouselProps) => {
  const defaultSettings: BaseCarouselSettings = {
    dots: true,
    slidesToShow: 4,
    arrows: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1375,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1.1
        }
      }
    ]
  };

  return (
    <S.Wrapper {...props}>
      <BaseCarousel settings={settings || defaultSettings}>
        {items?.map(item => (
          <CarouselItem key={item.label} {...item} />
        ))}
      </BaseCarousel>
    </S.Wrapper>
  );
};

/**
 * CarouselItem component
 *
 * @description Used to display an item in the carousel
 */
type CarouselItemProps = {
  /**
   * Image source
   */
  src?: string;
  /**
   * Description of the image
   */
  alt?: string;
  /**
   * Label for the item
   */
  label?: string;
};

const CarouselItem = ({ src, alt, label }: CarouselItemProps) => {
  return (
    <S.Item>
      <img src={src} alt={alt} />

      <Button>{label}</Button>
    </S.Item>
  );
};
