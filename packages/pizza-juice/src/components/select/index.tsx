import React, { SelectHTMLAttributes } from 'react';

import { CSS, VariantProps } from '../../system';

import { forwardRef } from '../../utils';

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
   * Size of the select
   *
   * @default 'default'
   */
  size?: VariantProps<typeof S.Select>['size'];
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
 * @description used in mobile version
 */
export const Select = forwardRef<SelectProps, 'select'>((props, ref) => {
  const {
    id,
    options,
    label,
    placeholder,
    hint,
    error,
    size,
    disabled,
    onChange,
    ...rest
  } = props;

  return (
    <S.Wrapper>
      {label && (
        <S.Label htmlFor={id} size={size}>
          {label}
        </S.Label>
      )}

      <S.SelectWrapper>
        <S.Select
          ref={ref}
          id={id}
          size={size}
          disabled={disabled}
          onChange={onChange}
          {...rest}
        >
          {placeholder && <option value="">{placeholder}</option>}

          {options?.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </S.Select>

        <S.ArrowIcon />
      </S.SelectWrapper>

      {hint && <S.Hint disabled={disabled}>{hint}</S.Hint>}

      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
});
