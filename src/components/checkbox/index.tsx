import React from 'react';

import type * as CheckboxBase from '@radix-ui/react-checkbox';

import { CSS } from '../../system';

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
  /**
   * Checkbox text
   */
  children: React.ReactNode;
} & CheckboxBase.CheckboxProps;

/**
 * Checkbox component
 *
 * @description used in forms when a user needs to select multiple values from several options.
 *
 * @see https://www.radix-ui.com/docs/primitives/components/checkbox
 */
export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ size, children, ...props }, ref) => {
    return (
      <S.Wrapper>
        <S.CheckboxInput ref={ref} size={size} {...props}>
          <S.CheckboxIndicator>
            <CheckIcon />
          </S.CheckboxIndicator>
        </S.CheckboxInput>

        <S.Label size={size}>{children}</S.Label>
      </S.Wrapper>
    );
  }
);
