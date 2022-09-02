import React, { ImgHTMLAttributes } from 'react';

import { CSS, VariantProps } from '../../system';
import { forwardRef, cx } from '../../utils';

import * as S from './styles';

export type ImageProps = {
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
export const Image = forwardRef<ImageProps, 'img'>((props, ref) => {
  const { fallbackSrc, className, ...rest } = props;

  // if image is loading or fails, show fallback image
  const onError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = fallbackSrc || '';
  };

  return (
    <S.Image
      ref={ref}
      className={cx('image', className)}
      loading="lazy"
      onError={onError}
      {...rest}
    />
  );
});
