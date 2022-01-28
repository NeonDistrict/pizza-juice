import React, { HTMLAttributes } from 'react';

import { VariantProps, CSS } from '../../system';

import { forwardRef } from '../../utils/forwardRef';

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
  const { endDate, onFinish, ...rest } = props;

  const countdown = useCountdown(endDate);

  // emit event when countdown is finished
  if (countdown.isTimerDone) {
    !!onFinish && onFinish();
  }

  return (
    <S.Wrapper
      ref={ref}
      role="timer"
      aria-atomic="true"
      {...rest}
    >{`${countdown.hours}:${countdown.minutes}:${countdown.seconds}`}</S.Wrapper>
  );
});
