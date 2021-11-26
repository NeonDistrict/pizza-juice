import React, { HTMLAttributes } from 'react';
import SlickSlider, { Settings } from 'react-slick';
import { C as CSS } from '../index-a9773ec4';
import '@stitches/react/types/config';
import '@stitches/react';

declare type BaseCarouselSettings = Settings;
declare type BaseCarouselProps = {
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
declare const BaseCarousel: React.ForwardRefExoticComponent<{
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
    css?: CSS | undefined;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<SlickSlider>>;

export { BaseCarousel, BaseCarouselProps, BaseCarouselSettings };
