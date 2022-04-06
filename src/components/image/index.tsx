import React, { ImgHTMLAttributes } from 'react';

import { CSS, VariantProps } from '../../system';

import { forwardRef } from '../../utils';

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
   */
  fallbackSrc?: string;
  /**
   * The aspect ratio of the image.
   *
   * Common values are: `21/9`, `16/9`, `9/16`, `4/3`, `1/1`
   *
   * @default "1 / 1"
   *
   */
  ratio?: number;
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
  const { fallbackSrc, ratio = 1, onLoad, onError, ...rest } = props;

  const [isLoading, setIsLoading] = React.useState(true);

  const onImageLoaded = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoading(false);

    !!onLoad && onLoad(e);
  };

  // If image is loading or fails, show fallback image
  const onImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = fallbackSrc || '';

    !!onError && onError(e);
  };

  return (
    <S.Wrapper
      css={{
        '&::before': {
          height: 0,
          content: '',
          display: 'block',
          pb: `${(1 / ratio) * 100}%`,
        },
      }}
    >
      {isLoading && <S.Loading />}

      <S.Image
        ref={ref}
        loading="lazy"
        isLoading={isLoading}
        onError={onImageError}
        onLoad={onImageLoaded}
        {...rest}
      />
    </S.Wrapper>
  );
});
