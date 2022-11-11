import React from 'react';

import { VariantProps, CSS } from '../../system';
import { cx, forwardRef } from '../../utils';

import * as S from './styles';

export type DividerProps = {
  /**
   * Orientation of the divider.
   *
   * @default 'horizontal'
   */
  orientation?: VariantProps<typeof S.Wrapper>['orientation'];
  /**
   * CSS properties
   */
  css?: CSS;
} & React.HTMLAttributes<HTMLHRElement>;

/**
 * Divider component
 *
 * @description used to visually separate content in a list or group.
 *
 * @example
 * ```jsx
 * <Divider css={{
 *    $$color: '$colors$white',
 *    $$thickness: '3px',
 * }}
 * ```
 */
export const Divider = forwardRef<DividerProps, 'hr'>((props, ref) => {
  const { className, ...rest } = props;

  return <S.Wrapper ref={ref} className={cx('divider', className)} {...rest} />;
});
