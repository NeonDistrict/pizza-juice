import React, { HTMLAttributes } from 'react';

import type { SwitchProps as TogglePropsBase } from '@radix-ui/react-switch';

import type { VariantProps, CSS } from '../../system';
import { cx, forwardRef } from '../../utils';

import * as S from './styles';

export type ToggleProps = {
  /**
   * Size of the toggle.
   *
   * @default "md"
   */
  size?: VariantProps<typeof S.Switch>['size'];
  /**
   * CSS properties
   */
  css?: CSS;
} & TogglePropsBase &
  HTMLAttributes<HTMLDivElement>;

/**
 * Toggle component
 *
 * @description can switch between enabled or disabled states.
 */
export const Toggle = forwardRef<ToggleProps, 'button'>((props, ref) => {
  const { size, className, ...rest } = props;

  return (
    <S.Switch
      ref={ref}
      className={cx('toggle', className)}
      size={size}
      {...rest}
    >
      <S.Thumb size={size} />
    </S.Switch>
  );
});
