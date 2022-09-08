import React from 'react';

import { CSS } from '../../system';
import { Grid } from '../grid';

import { A11y, Lazy, Navigation, Pagination, Swiper } from 'swiper';
import { SwiperProps, SwiperSlide } from 'swiper/react/swiper-react';

import { Children, HTMLAttributes } from 'react';

import * as S from './styles';

export type SwiperType = Swiper;

export type CarouselSettings = SwiperProps;

type CarouselProps = {
  /**
   * Extend the Swiper's default settings.
   */
  settings?: CarouselSettings;
  /**
   * The settings for the carousel.
   */
  hasPagination?: boolean;
  /**
   *
   */
  hasNavigation?: boolean;
  /**
   * CSS properties
   */
  css?: CSS;
  /**
   * Change tag type
   */
  as?: React.ElementType;
  /**
   * Carousel item childs
   */
  children: React.ReactNode;
} & SwiperProps &
  HTMLAttributes<HTMLDivElement>;

/**
 * Carousel component
 *
 * @description Custom carousel made with Swiper.js
 *
 * @see https://swiperjs.com/react
 */
export const Carousel = (props: CarouselProps) => {
  const { settings, hasPagination, hasNavigation, children, as, css, ...rest } =
    props;

  const defaultSettings: SwiperProps = {
    modules: [
      A11y,
      Lazy,
      ...(hasPagination ? [Pagination] : []),
      ...(hasNavigation ? [Navigation] : []),
    ],
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: true,
    lazy: true,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
    },
    ...settings,
  };

  return (
    <Grid as={as} css={css}>
      <S.Swiper
        {...defaultSettings}
        {...rest}
        hasPagination={hasPagination}
        hasNavigation={hasNavigation}
      >
        {Children.map(children, (child) => (
          <SwiperSlide>{child}</SwiperSlide>
        ))}
      </S.Swiper>
    </Grid>
  );
};
