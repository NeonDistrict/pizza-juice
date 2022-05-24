import React from 'react';

import { VariantProps } from '../../system';

import { forwardRef } from '../../utils';

import { getProgressProps } from './progress.utils';

import * as S from './styles';

export type ProgressProps = {
  /**
   * The value of the progress
   */
  value?: number;
  /**
   *  The maximum value
   *
   * @default `100`
   */
  max?: number;
  /**
   *  The minimun value
   *
   * @default `0`
   */
  min?: number;
  /**
   * The size variant
   *
   * @default `md`
   */
  size?: VariantProps<typeof S.Linear>['size'];
  /**
   * The color variant
   *
   * @default `pink`
   */
  color?: VariantProps<typeof S.Linear>['color'];
};

/**
 * Progress component
 *
 * @description is used to display the progress status for a task that takes a long time or consists of several steps.
 */
export const Progress = forwardRef<ProgressProps, 'div'>((props, ref) => {
  const { value, max, min, ...rest } = props;

  const progress = getProgressProps({ min, max, value });

  return (
    <S.Linear ref={ref} className="pizza-progress" {...progress.bind} {...rest}>
      <S.Indicator
        className="pizza-progress__indicator"
        style={{ transform: `translateX(-${100 - progress.value}%)` }}
      />
    </S.Linear>
  );
});
