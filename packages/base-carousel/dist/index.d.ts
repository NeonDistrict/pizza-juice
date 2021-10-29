import React from 'react';
import { Settings } from 'react-slick';

declare type BaseCarouselSettings = Settings;
declare type BaseCarouselProps = {
    /**
     *
     */
    settings: BaseCarouselSettings;
    /**
     *
     */
    children: React.ReactNode;
};
declare const BaseCarousel: React.ForwardRefExoticComponent<BaseCarouselProps & React.RefAttributes<any>>;

export { BaseCarousel, BaseCarouselProps, BaseCarouselSettings };
