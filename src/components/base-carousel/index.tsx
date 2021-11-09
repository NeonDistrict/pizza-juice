import React, { forwardRef } from 'react';

import SlickSlider, { Settings } from 'react-slick';

import { NextArrow, PrevArrow } from './icon';

import * as S from './styles';

export type BaseCarouselSettings = Settings;

export type BaseCarouselProps = {
  /**
   *
   */
  settings: BaseCarouselSettings;
  /**
   *
   */
  children: React.ReactNode;
};

const Carousel: React.ForwardRefRenderFunction<SlickSlider, BaseCarouselProps> =
  ({ children, settings }, ref) => {
    const defaultSettings: BaseCarouselSettings = {
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      ...settings,
    };

    return (
      <S.Wrapper>
        <SlickSlider ref={ref} {...defaultSettings}>
          {children}
        </SlickSlider>
      </S.Wrapper>
    );
  };

export const BaseCarousel = forwardRef(Carousel);
