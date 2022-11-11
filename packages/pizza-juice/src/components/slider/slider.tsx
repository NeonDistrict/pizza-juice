import React from 'react';

import type * as BaseSliderProps from '@radix-ui/react-slider';

import { cx, forwardRef } from '../../utils';
import { CSS } from '../../system';

import * as S from './styles';

export type SliderProps = {
  /**
   * a11y label for the slider
   *
   * @default `Volume`
   */
  'aria-label'?: string;
  /**
   * CSS properties
   */
  css?: CSS;
} & BaseSliderProps.SliderProps;

/**
 * Slider component
 *
 * @description is used to allow users to make selections from a range of values.
 */
export const Slider = forwardRef<SliderProps, 'div'>((props, ref) => {
  const {
    'aria-label': ariaLabel = 'Volume',
    min = 0,
    max = 100,
    className,
    ...rest
  } = props;

  const totalThumbs = props.value?.length || props.defaultValue?.length;

  return (
    <S.StyledSlider
      ref={ref}
      min={min}
      max={max}
      aria-label={ariaLabel}
      className={cx('slider', className)}
      {...rest}
    >
      <S.StyledTrack className="slider-track">
        <S.StyledRange className="slider-range" />
      </S.StyledTrack>

      {[...Array(totalThumbs)].map((_, i) => (
        <S.StyledThumb key={i} className="slider-thumb" />
      ))}
    </S.StyledSlider>
  );
});
