import React, { forwardRef } from 'react';

import SlickSlider, { Settings } from 'react-slick';

import { Wrapper, Arrow } from './styles';

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

const BaseIcon = ({ d }) => (
  <svg width="1rem" height="1rem" focusable="false" aria-hidden="true">
    <path fill="currentColor" d={d} />
  </svg>
);

const PrevArrow = ({ ...props }) => (
  <Arrow {...props}>
    <BaseIcon d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
  </Arrow>
);

const NextArrow = ({ ...props }) => (
  <Arrow {...props}>
    <BaseIcon d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
  </Arrow>
);

const Carousel: React.ForwardRefRenderFunction<
  SlickSlider,
  BaseCarouselProps
> = ({ children, settings }, ref) => {
  const defaultSettings: BaseCarouselSettings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    ...settings
  };

  return (
    <Wrapper>
      <SlickSlider ref={ref} {...defaultSettings}>
        {children}
      </SlickSlider>
    </Wrapper>
  );
};

export const BaseCarousel = forwardRef(Carousel);
