import React, { HTMLAttributes } from 'react';

import { VariantProps, CSS } from '../../system';

import { useCountdown } from './useCountdown';

import * as S from './styles';

export type CountdownProps = {
  /**
   * Countdown size
   *
   * @default 'md'
   */
  size?: VariantProps<typeof S.Wrapper>['size'];
  /**
   * The time in milliseconds to count down from.
   *
   * @example HH:mm:ss
   */
  endDate: Date;
  /**
   * CSS properties
   */
  css?: CSS;
  /**
   * The time in milliseconds to count down from.
   *
   * @example HH:mm:ss
   */
  onFinish: () => void;
} & HTMLAttributes<HTMLDivElement>;

export const Countdown = ({ endDate, onFinish, ...props }: CountdownProps) => {
  const { hours, minutes, seconds } = useCountdown(endDate);

  if (!hours && !minutes && !seconds) {
    !!onFinish && onFinish();
  }

  return (
    <S.Wrapper
      role="timer"
      aria-atomic="true"
      {...props}
    >{`${hours}:${minutes}:${seconds}`}</S.Wrapper>
  );
};
