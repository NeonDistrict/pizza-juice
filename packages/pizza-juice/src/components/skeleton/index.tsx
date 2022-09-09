import React from 'react';

import { FadeIn } from '../../animations';
import { ComponentProps, CSS } from '../../system';
import { forwardRef } from '../../utils';

import * as S from './styles';

export type SkeletonProps = {
  /**
   *
   */
  isLoaded?: boolean;
  /**
   * Shimmer effect
   *
   * @default `true
   */
  isAnimated?: ComponentProps<typeof S.Wrapper>['isAnimated'];
  /**
   *
   */
  css?: CSS;
};

/**
 * Skeleton component
 *
 * @description used to display the loading state of some component.
 */
export const Skeleton = forwardRef<SkeletonProps, 'div'>((props, ref) => {
  const { isLoaded, children, ...rest } = props;

  if (isLoaded) {
    return <FadeIn>{children}</FadeIn>;
  }

  return (
    <S.Wrapper ref={ref} {...rest}>
      {children}
    </S.Wrapper>
  );
});