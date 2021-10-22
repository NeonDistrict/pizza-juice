import React, { forwardRef } from 'react';

import SlickSlider, { Settings } from 'react-slick';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import { Wrapper, Arrow } from './styles';

export type BaseCarouselSettings = Settings;

export type BaseCarouselProps = {
  children: React.ReactNode;
  settings: BaseCarouselSettings;
};

const NextArrow = ({ ...props }) => {
  return (
    <Arrow {...props} style={{ color: 'white' }}>
      <BsChevronRight />
    </Arrow>
  );
};

const PrevArrow = ({ ...props }) => {
  return (
    <Arrow {...props}>
      <BsChevronLeft />
    </Arrow>
  );
};

const BaseCarousel: React.ForwardRefRenderFunction<
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

export default forwardRef(BaseCarousel);
