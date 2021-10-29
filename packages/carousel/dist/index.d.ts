import { BaseCarouselSettings } from '@neon-district/base-carousel';

declare type CarouselProps = {
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
declare const Carousel: ({ items, settings }: CarouselProps) => JSX.Element;
/**
 * CarouselItem component
 *
 * @description Used to display an item in the carousel
 */
declare type CarouselItemProps = {
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

export { Carousel, CarouselProps };
