import React, { HTMLAttributes } from 'react';

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
   * CSS properties
   */
  css?: CSS;
} & HTMLAttributes<HTMLImageElement>;

/**
 * Image component
 *
 * @description used to display images.
 */
export const Image = ({ ...props }: ImageProps) => {
  return <S.Image loading="lazy" {...props} />;
};
