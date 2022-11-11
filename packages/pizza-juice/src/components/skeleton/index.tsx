import React, { HTMLAttributes } from 'react';

import { FadeIn } from '../../animations';
import { ComponentProps, CSS } from '../../system';
import { cx, forwardRef } from '../../utils';

import * as S from './styles';

export type SkeletonProps = {
  /**
   * If true, it'll render its children with a nice fade transition
   *
   * @default `false`
   */
  isLoaded?: boolean;
  /**
   * Shimmer effect
   *
   * @default `true`
   */
  isAnimated?: ComponentProps<typeof S.Wrapper>['isAnimated'];
  /**
   * CSS properties
   */
  css?: CSS;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Skeleton component
 *
 * @description used to display the loading state of some component.
 */
export const Skeleton = forwardRef<SkeletonProps, 'div'>((props, ref) => {
  const { isLoaded, className, children, ...rest } = props;

  if (isLoaded) {
    return <FadeIn>{children}</FadeIn>;
  }

  return (
    <S.Wrapper ref={ref} className={cx('skeleton', className)} {...rest}>
      {children}
    </S.Wrapper>
  );
});
