import React, { SelectHTMLAttributes } from 'react';

import { CSS, VariantProps } from '../../system';

import { forwardRef, cx } from '../../utils';

import { ChevronDown } from '../../icons';

import * as S from './styles';

export type SelectProps = {
  /**
   * Options to display on the select
   */
  options: {
    value: string;
    label: string;
  }[];
  /**
   * Style of the select
   *
   * @default 'outline'
   */
  variant?: VariantProps<typeof S.Select>['variant'];
  /**
   * Show label text
   */
  label?: string;
  /**
   * Show hint text
   */
  placeholder?: string;
  /**
   * Show hint text
   */
  hint?: string;
  /**
   * If `true` apply error style
   */
  error?: string | string[];
  /**
   * If `true` disable select
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * CSS properties
   */
  css?: CSS;
} & SelectHTMLAttributes<HTMLSelectElement>;

/**
 *  Select component
 *
 * @description Component that allows users pick a value from predefined options.
 */
export const Select = forwardRef<SelectProps, 'select'>((props, ref) => {
  const {
    id,
    options,
    label,
    placeholder,
    hint,
    error,
    disabled,
    className,
    required,
    ...rest
  } = props;

  return (
    <S.Wrapper>
      {label && (
        <S.Label htmlFor={id} disabled={disabled}>
          {label}
        </S.Label>
      )}

      <S.SelectWrapper>
        <S.Select
          ref={ref}
          className={cx('select', className)}
          id={id}
          disabled={disabled}
          {...rest}
        >
          {placeholder && (
            <option
              value=""
              {...(required
                ? { hidden: true }
                : { disabled: true, selected: true })}
            >
              {placeholder}
            </option>
          )}

          {options?.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </S.Select>

        <ChevronDown
          css={{
            size: 16,
            position: 'absolute',
            right: '$4',
          }}
        />
      </S.SelectWrapper>

      {hint && <S.Hint disabled={disabled}>{hint}</S.Hint>}

      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
});
