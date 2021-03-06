import React from 'react';

import { VariantProps } from '../../system';

import { forwardRef, isUndefined } from '../../utils';

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
  size?: VariantProps<typeof S.Shape>['size'];
  /**
   * The size variant
   *
   * @default `md`
   */
  color?: VariantProps<typeof S.Shape>['color'];
  /**
   * The thickness variant
   *
   * @default `md`
   */
  thickness?: VariantProps<typeof S.Circle>['thickness'];
};

/**
 * Progress component
 *
 * @description is used to display the progress status for a task that takes a long time or consists of several steps.
 */
export const CircularProgress = forwardRef<ProgressProps, 'div'>(
  (props, ref) => {
    const { value, max, min, size, color, thickness, ...rest } = props;

    const progress = getProgressProps({ min, max, value });

    const determinant = (progress.percent ?? 0) * 2.64;

    const strokeDasharray = isUndefined(determinant)
      ? undefined
      : `${determinant} ${264 - determinant}`;

    return (
      <S.Circular
        ref={ref}
        className="pizza-progress"
        {...progress.bind}
        {...rest}
      >
        <S.Shape viewBox="0 0 100 100" size={size} color={color}>
          <S.Circle
            className="pizza-progress__track"
            cx={50}
            cy={50}
            r={42}
            thickness={thickness}
          />

          <S.Circle
            className="pizza-progress__indicator"
            cx={50}
            cy={50}
            r={42}
            // Fix issue in Safari where indicator still shows when value is 0
            opacity={progress.value === 0 ? 0 : undefined}
            thickness={thickness}
            css={{
              transitionProperty: 'stroke-dasharray, stroke',
              transitionDuration: '0.6s',
              transitionTimingFunction: 'ease',
              strokeDasharray,
              strokeDashoffset: 66,
            }}
          />
        </S.Shape>
      </S.Circular>
    );
  },
);
