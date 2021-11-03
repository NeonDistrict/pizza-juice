import React, { InputHTMLAttributes } from 'react';

import { VariantProps, CSS } from '../../system';

import * as S from './styles';

export type InputProps = {
  /**
   * Input label
   */
  label?: string;
  /**
   * Input size
   *
   * @default "md"
   */
  size?: VariantProps<typeof S.InputStyles>['size'];
  /**
   * Show input message
   */
  hint?: string | string[];
  /**
   * Show input error
   */
  error?: string | string[];
  /**
   *
   * @default "default"
   */
  color?: 'default' | 'line';
  /**
   * CSS properties
   */
  css?: CSS;
} & InputHTMLAttributes<HTMLInputElement>;

/**
 * Input component
 *
 * @description is a component that is used to get user input in a text field.
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, hint, error, ...props }, ref) => {
    return (
      <S.Wrapper>
        {label && <S.Label>{label}</S.Label>}

        <S.InputStyles ref={ref} error={!!error} {...props} />

        <S.Message>{hint}</S.Message>

        <S.Error>{error}</S.Error>
      </S.Wrapper>
    );
  }
);
