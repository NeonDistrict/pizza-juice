import React, { InputHTMLAttributes } from 'react';

import { Wrapper, Label, InputStyles, Message, Error } from './styles';

export type InputProps = {
  label?: string;
  size?: 'small' | 'medium';
  hint?: string | string[];
  error?: string | string[];
} & InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, hint, error }, ref) => {
    return (
      <Wrapper>
        {label && <Label>{label}</Label>}
        <InputStyles ref={ref} />

        <Message>{hint}</Message>
        <Error>{error}</Error>
      </Wrapper>
    );
  }
);

export default Input;
