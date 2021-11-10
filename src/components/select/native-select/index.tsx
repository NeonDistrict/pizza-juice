import React, { HTMLAttributes } from 'react';

import { SelectItemProps, SelectProps } from '..';

import * as S from './styles';

type NativeSelectProps = Omit<SelectProps, 'items'> &
  HTMLAttributes<HTMLSelectElement>;

/**
 * Native Select component
 *
 * @description used in mobile version
 */
const NativeSelect = ({
  id,
  label,
  hint,
  error,
  variant,
  size,
  disabled,
  onChange,
  children,
}: NativeSelectProps) => {
  return (
    <S.Wrapper>
      {label && (
        <S.Label htmlFor={id} size={size}>
          {label}
        </S.Label>
      )}

      <S.SelectWrapper>
        <S.Select
          id={id}
          variant={variant}
          size={size}
          disabled={disabled}
          onChange={onChange}
        >
          {children}
        </S.Select>

        <S.ArrowIcon />
      </S.SelectWrapper>

      {hint && <S.Hint disabled={disabled}>{hint}</S.Hint>}

      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
};

type NativeSelectItemProps = SelectItemProps;

const NativeSelectItem = ({ children, ...props }: NativeSelectItemProps) => {
  return <S.Option {...props}>{children}</S.Option>;
};

export { NativeSelect, NativeSelectItem };
