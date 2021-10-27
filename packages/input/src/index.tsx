import React, { InputHTMLAttributes } from 'react';

import { Wrapper, Label, InputStyles, Message, Error } from './styles';

export type InputProps = {
  /**
   *
   */
  label?: string;
  /**
   *
   */
  inputSize?: 'sm' | 'md';
  /**
   *
   */
  hint?: string | string[];
  /**
   *
   */
  error?: string | string[];
  /**
   *
   */
  color?: 'white' | 'black' | 'primary';
  /**
   *
   */
  disabled?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      inputSize = 'md',
      hint,
      error,
      color = 'white',
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
