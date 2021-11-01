import React from 'react';

import type { TextareaAutosizeProps } from 'react-textarea-autosize';

import { Wrapper, Label, TextAreaInput, Message, Error } from './styles';

export type TextareaProps = {
  /**
   *
   */
  label?: string;
  /**
   *
   */
  hint?: string | string[];
  /**
   *
   */
  error?: string | string[];
} & TextareaAutosizeProps;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, hint, name, error, minRows = 3, ...props }, ref) => {
    return (
      <Wrapper>
        {label && <Label htmlFor={`textarea-${name}`}>{label}</Label>}

        <TextAreaInput
          ref={ref}
          id={`textarea-${name}`}
          minRows={minRows}
          hasError={!!error}
          {...props}
        />

        <Message>{hint}</Message>

        <Error>{error}</Error>
      </Wrapper>
    );
  }
);
