import React, { InputHTMLAttributes } from 'react';

import { Wrapper, Label, InputStyles, Message, Error } from './styles';

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
  inputSize?: 'sm' | 'md';
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
} & InputHTMLAttributes<HTMLInputElement>;

/**
 * Input component
 *
 * @description is a component that is used to get user input in a text field.
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      inputSize = 'md',
      hint,
      error,
      color = 'default',
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <Wrapper>
        {label && <Label>{label}</Label>}

        <InputStyles
          ref={ref}
          inputSize={inputSize}
          color={color}
          hasError={!!error}
          disabled={disabled}
          {...props}
        />

        <Message>{hint}</Message>

        <Error>{error}</Error>
      </Wrapper>
    );
  }
);
