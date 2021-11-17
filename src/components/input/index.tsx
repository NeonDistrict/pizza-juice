import React, { InputHTMLAttributes } from 'react';

import { CSS } from '../../system';

import * as S from './styles';

export type InputProps = {
  /**
   * Input label
   */
  label?: string;
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
  variant?: 'default' | 'line';
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
  ({ label, hint, error, css, disabled, ...props }, ref) => {
    return (
      <S.Wrapper css={css}>
        {label && <S.Label disabled={disabled}>{label}</S.Label>}

        <S.Input ref={ref} disabled={disabled} error={!!error} {...props} />

        <S.Error>{error}</S.Error>

        <S.Message disabled={disabled}>{hint}</S.Message>
      </S.Wrapper>
    );
  },
);

Input.displayName = 'Input';
