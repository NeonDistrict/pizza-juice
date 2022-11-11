import React from 'react';

import type * as CheckboxBase from '@radix-ui/react-checkbox';

import { cx, forwardRef } from '../../utils';
import { CSS } from '../../system';

import { Check } from '../../icons';

import * as S from './styles';

export type CheckboxProps = {
  /**
   * Checkbox size
   *
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * CSS properties
   */
  css?: CSS;
} & CheckboxBase.CheckboxProps;

/**
 * Checkbox component
 *
 * @description used in forms when a user needs to select multiple values from several options.
 *
 * @see https://www.radix-ui.com/docs/primitives/components/checkbox
 */
export const Checkbox = forwardRef<CheckboxProps, 'input'>((props, ref) => {
  const { size, className, children, ...rest } = props;

  return (
    <S.Label size={size}>
      <S.CheckboxInput
        ref={ref}
        className={cx('checkbox', className)}
        size={size}
        {...rest}
      >
        <S.CheckboxIndicator>
          <Check />
        </S.CheckboxIndicator>
      </S.CheckboxInput>

      {children}
    </S.Label>
  );
});
