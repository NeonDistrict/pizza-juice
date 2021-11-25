import React, { forwardRef, SelectHTMLAttributes } from 'react';

import { CSS, VariantProps } from '../../system';

import { useId } from '../../hooks';

import * as S from './styles';

export type SelectProps = {
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
 * Native Select component
 *
 * @description used in mobile version
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    const { label, css, options, hint, error, size, disabled, ...rest } = props;

    const selectId = useId('select');

    return (
      <S.Wrapper css={css}>
        {label && (
          <S.Label htmlFor={selectId} size={size}>
            {label}
          </S.Label>
        )}

        <S.SelectWrapper>
          <S.Select
            ref={ref}
            id={selectId}
            aria-labelledby={selectId}
            size={size}
            disabled={disabled}
            {...rest}
          >
            {options?.map(({ value, label }) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </S.Select>

          <S.ArrowIcon />
        </S.SelectWrapper>

        {hint && <S.Hint disabled={disabled}>{hint}</S.Hint>}

        {error && <S.Error>{error}</S.Error>}
      </S.Wrapper>
    );
  },
);

Select.displayName = 'Select';

type SelectItemProps = {
  /**
   * Value of the select item
   */
  value: string;
  /**
   * Option item to be shown in the select
   */
  children?: React.ReactNode;
};

const SelectItem = ({ children, ...props }: SelectItemProps) => {
  return <S.Option {...props}>{children}</S.Option>;
};
