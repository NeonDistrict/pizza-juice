import React, { forwardRef, HTMLAttributes } from 'react';

import SlickSlider, { Settings } from 'react-slick';

import { CSS } from '../../system';

import { NextArrow, PrevArrow } from './icon';

import * as S from './styles';

export type BaseCarouselSettings = Settings;

export type BaseCarouselProps = {
  /**
   * Settings for the carousel
   */
  settings: BaseCarouselSettings;
  /**
   * Items to be displayed in the carousel
   */
  children: React.ReactNode;
  /**
   * CSS properties
   */
  css?: CSS;
} & HTMLAttributes<HTMLDivElement>;

const Carousel: React.ForwardRefRenderFunction<
  SlickSlider,
  BaseCarouselProps
> = ({ children, settings, ...props }, ref) => {
  const defaultSettings: BaseCarouselSettings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    ...settings,
  };

  return (
    <S.Wrapper {...props}>
      <SlickSlider ref={ref} {...defaultSettings}>
        {children}
      </SlickSlider>
    </S.Wrapper>
  );
};

export const BaseCarousel = forwardRef(Carousel);
