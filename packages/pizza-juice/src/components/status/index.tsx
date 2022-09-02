import React, { HTMLAttributes } from 'react';

import { CSS, VariantProps } from '../../system';

import { forwardRef, cx } from '../../utils';

import * as S from './styles';

export type StatusProps = {
  /**
   * Status color
   * @default 'white'
   */
  variant?: VariantProps<typeof S.Wrapper>['variant'];
  /**
   * CSS properties
   */
  css?: CSS;
} & HTMLAttributes<HTMLSpanElement>;

/**
 * Tag component
 *
 * @description used for items that need to be labeled, categorized, or organized using keywords that describe them.
 */
export const Status = forwardRef<StatusProps, 'span'>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <S.Wrapper
      ref={ref}
      className={cx('status', className)}
      aria-hidden={true}
      {...rest}
    />
  );
});
