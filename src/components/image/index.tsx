import React, { forwardRef, ImgHTMLAttributes } from 'react';

import { CSS, VariantProps } from '../../system';

import * as S from './styles';

export type ImageProps = {
  /**
   * Src of the image
   */
  src: string;
  /**
   * Alt text of the image
   *
   */
  alt: string;
  /**
   * if `true`, add objectFit "cover" to image
   *
   * @default "true"
   */
  objectFit?: VariantProps<typeof S.Image>['objectFit'];
  /**
   * if `true`, add backgroundSize "cover" to image
   *
   * @default "true"
   */
  cover?: VariantProps<typeof S.Image>['cover'];
  /**
   * Fallback image `src` to show if image is loading or image fails.
   *
   * Note 🚨: We recommend you use a local image
   *
   */
  fallbackSrc?: string;
  /**
   * CSS properties
   */
  css?: CSS;
} & ImgHTMLAttributes<HTMLImageElement>;

/**
 * Image component
 *
 * @description used to display images.
 */
export const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ fallbackSrc, ...props }, ref) => {
    const onError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      e.currentTarget.onerror = null;
      e.currentTarget.src = fallbackSrc || '';
    };

    return <S.Image ref={ref} loading="lazy" onError={onError} {...props} />;
  },
);

Image.displayName = 'Image';
