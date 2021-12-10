import React from 'react';

import type * as CheckboxBase from '@radix-ui/react-checkbox';

import { CSS } from '../../system';

import { forwardRef } from '../../utils/forwardRef';

import { CheckIcon } from './icon';

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
  const { size, children, ...rest } = props;

  return (
    <S.Wrapper>
      <S.CheckboxInput ref={ref} size={size} {...rest}>
        <S.CheckboxIndicator>
          <CheckIcon />
        </S.CheckboxIndicator>
      </S.CheckboxInput>

      <S.Label size={size}>{children}</S.Label>
    </S.Wrapper>
  );
});
