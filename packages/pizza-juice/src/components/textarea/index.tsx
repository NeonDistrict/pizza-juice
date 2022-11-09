import React from 'react';

import type { TextareaAutosizeProps } from 'react-textarea-autosize';

import { CSS } from '../../system';
import { cx, forwardRef } from '../../utils';
import { useId } from '../../hooks';

import * as S from './styles';

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
  const {
    label,
    hint,
    error,
    minRows = 3,
    className,
    disabled,
    ...rest
  } = props;

  const id = useId('textarea');

  return (
    <S.Wrapper>
      {label && (
        <S.Label htmlFor={id} disabled={disabled}>
          {label}
        </S.Label>
      )}

      <S.Textarea
        ref={ref}
        className={cx('textarea', className)}
        id={id}
        minRows={minRows}
        disabled={disabled}
        {...rest}
      />

      {hint && <S.Message>{hint}</S.Message>}

      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
});
