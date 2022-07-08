import { valueToPercent } from '../../utils';

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
};

/**
 * Get the common `aria-*` attributes for both the linear and circular
 * progress components.
 */
export const getProgressProps = (options: ProgressProps) => {
  const { value = 0, max = 100, min = 0 } = options;

  const percent = valueToPercent(value, min, max);

  return {
    bind: {
      'aria-valuemax': max,
      'aria-valuemin': min,
      'aria-valuenow': value,
      'aria-valuetext': `${value}%`,
      'data-max': max,
      'data-min': min,
      'data-value': value,
      role: 'progressbar',
    },
    value,
    percent,
  };
};
