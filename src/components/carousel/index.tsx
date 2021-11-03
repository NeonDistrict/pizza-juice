import React from 'react';

import { BaseCarousel, BaseCarouselSettings } from '../base-carousel';

import { Image } from '../image';

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
    slidesToShow: 5,
    arrows: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1375,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
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
          slidesToShow: 1
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
   * Src of the image
   */
  src: string;
  /**
   * Alt description of the image
   */
  alt: string;
  /**
   * Label for the item
   */
  label?: string;
};

const CarouselItem = ({ src, alt, label }: CarouselItemProps) => {
  return (
    <S.Item>
      <Image
        src={src}
        alt={alt}
        cover={false}
        css={{ width: 150, height: 112 }}
      />

      <Button>{label}</Button>
    </S.Item>
  );
};
