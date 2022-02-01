import React, { HTMLAttributes } from 'react';

import { CSS } from '../../../system';

import { forwardRef } from '../../../utils/forwardRef';

import * as S from './styles';

export type FadeInProps = {
  /**
   * Duration in milliseconds
   *
   * @default 300ms
   */
  duration?: number;
  /**
   * Delay in milliseconds
   *
   * @default 0ms
   */
  delay?: number;
  /**
   * CSS properties and values
   */
  css?: CSS;
  /**
   * Children elements
   */
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Fade In transition
 *
 * @description is a utility component to quickly add a fade-in animation for an element (or group of elements).
 *
 */
export const FadeIn = forwardRef<FadeInProps, 'div'>((props, ref) => {
  const { duration = 300, delay = 0, children, ...rest } = props;

  return (
    <S.Wrapper
      ref={ref}
      css={{
        animationDuration: duration + 'ms',
        animationDelay: delay + 'ms',
      }}
      {...rest}
    >
      {children}
    </S.Wrapper>
  );
});
