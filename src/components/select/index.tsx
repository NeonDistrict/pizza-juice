import React, { SelectHTMLAttributes } from 'react';

import { VariantProps, CSS } from '../../system';

import { ChevronDownIcon } from './icon';

import * as S from './styles';

export type SelectProps = {
  /**
   * Style of the select
   *
   * @default 'solid'
   */
  variant?: VariantProps<typeof S.SelectStyled>['variant'];
  /**
   * Size of the select
   *
   * @default 'md'
   */
  size?: VariantProps<typeof S.SelectStyled>['size'];
  /**
   * Show label text
   */
  label?: string;
  /**
   * Show hint text
   */
  hint?: string;
  /**
   * If `true` apply error style
   */
  error?: string | string[];
  /**
   *
   */
  children?: React.ReactNode;
  /**
   * CSS properties
   */
  css?: CSS;
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'>;

/**
 * Select component
 *
 * @description is a component that allows users pick a value from predefined options. Ideally, it should be used when there are more than 5 options, otherwise you might consider using a radio group instead.
 */
export const Select = ({
  label,
  name,
  hint,
  disabled = false,
  defaultValue = '',
  error,
  placeholder,
  children,
  ...props
}: SelectProps) => {
  return (
    <S.Wrapper>
      {label && <S.Label htmlFor={`select-${name}`}>{label}</S.Label>}

      <S.SelectStyled
        defaultValue={defaultValue}
        id={`select-${name}`}
        disabled={disabled}
        {...props}
      >
        <option value="" hidden>
          {placeholder}
        </option>

        {children}
      </S.SelectStyled>

      <ChevronDownIcon />

      <S.Message>{hint}</S.Message>

      <S.Error>{error}</S.Error>
    </S.Wrapper>
  );
};
