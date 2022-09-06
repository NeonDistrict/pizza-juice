import React, { HTMLAttributes } from 'react';

import { VariantProps, CSS } from '../../system';
import { cx, forwardRef } from '../../utils';

import * as S from './styles';

export type ContainerProps = {
  /**
   * Container size
   * @default "2xl"
   */
  maxWidth?: VariantProps<typeof S.Wrapper>['maxWidth'];
  css?: CSS;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Container component
 *
 * @description A container component that can be used to wrap other components.
 */
export const Container = forwardRef<ContainerProps, 'div'>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <S.Wrapper ref={ref} className={cx('container', className)} {...rest}>
      {children}
    </S.Wrapper>
  );
});
