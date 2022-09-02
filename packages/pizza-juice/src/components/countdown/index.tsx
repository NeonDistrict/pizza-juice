import React, { HTMLAttributes } from 'react';

import { VariantProps, CSS } from '../../system';

import { cx, forwardRef } from '../../utils';

import { useCountdown } from '../../hooks/use-countdown';

import * as S from './styles';

export type CountdownProps = {
  /**
   * Countdown size
   *
   * @default 'md'
   */
  size?: VariantProps<typeof S.Wrapper>['size'];
  /**
   * Variant small or normal
   *
   * @default 'normal'
   */
  variant?: 'small' | 'normal';
  /**
   * time in unix timestamp
   *
   * @example 1637680036
   */
  endDate: number;
  /**
   * CSS properties
   */
  css?: CSS;
  /**
   * The time in milliseconds to count down from.
   *
   * @example HH:mm:ss
   */
  onFinish?: () => void;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Countdown component
 *
 * @description Used to display the remaining time
 */
export const Countdown = forwardRef<CountdownProps, 'div'>((props, ref) => {
  const { endDate, onFinish, variant = 'normal', className, ...rest } = props;

  const countdown = useCountdown(endDate);

  // emit event when countdown is finished
  if (countdown.isTimerDone) {
    !!onFinish && onFinish();
  }

  const variants = {
    small: `${countdown.seconds}`,
    normal: `${countdown.hours}:${countdown.minutes}:${countdown.seconds}`,
  };

  return (
    <S.Wrapper
      ref={ref}
      className={cx('countdown', className)}
      role="timer"
      aria-atomic="true"
      variant={variant}
      {...rest}
    >
      {variants[variant]}
    </S.Wrapper>
  );
});
