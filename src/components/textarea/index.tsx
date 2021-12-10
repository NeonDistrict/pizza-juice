import React from 'react';

import type { TextareaAutosizeProps } from 'react-textarea-autosize';

import { CSS } from '../../system';

import { forwardRef } from '../../utils/forwardRef';

import { useId } from '../../hooks';

import { Wrapper, Label, TextAreaInput, Message, Error } from './styles';

export type TextareaProps = {
  /**
   * Label for the textarea
   */
  label?: string;
  /**
   * Hint of the textarea
   */
  hint?: string | string[];
  /**
   * Error message
   */
  error?: string | string[];
  /**
   * CSS properties
   */
  css?: CSS;
} & TextareaAutosizeProps;

/**
 * Textarea component
 *
 * @description The Textarea component allows you to easily create multi-line text inputs.
 */
export const Textarea = forwardRef<TextareaProps, 'textarea'>((props, ref) => {
  const { label, hint, error, minRows = 3, ...rest } = props;

  const id = useId('textarea');

  return (
    <Wrapper>
      {label && <Label htmlFor={id}>{label}</Label>}

      <TextAreaInput ref={ref} id={id} minRows={minRows} {...rest} />

      <Message>{hint}</Message>

      <Error>{error}</Error>
    </Wrapper>
  );
});
