import React, { SelectHTMLAttributes } from 'react';
import { IoChevronDown } from 'react-icons/io5';

import {
  Wrapper,
  SelectStyled,
  Label,
  Message,
  Error,
  WrapperSelect
} from './styles';

export type SelectProps = {
  label?: string;
  name?: string;
  hint?: string;
  variant?: 'solid' | 'outline';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  error?: string | string[];
  placeholder?: string;
  children?: React.ReactNode;
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'>;

const Select = ({
  label,
  name,
  hint,
  size = 'md',
  disabled = false,
  variant = 'solid',
  defaultValue = '',
  error,
  placeholder,
  children,
  ...props
}: SelectProps) => {
  return (
    <Wrapper>
      {label && <Label htmlFor={`select-${name}`}>{label}</Label>}

      <WrapperSelect disabled={disabled} variant={variant}>
        <SelectStyled
          defaultValue={defaultValue}
          selectSize={size}
          variant={variant}
          id={`select-${name}`}
          disabled={disabled}
          {...props}
        >
          <option value="" hidden>
            {placeholder}
          </option>

          {children}
        </SelectStyled>

        <IoChevronDown />
      </WrapperSelect>

      <Message>{hint}</Message>

      <Error>{error}</Error>
    </Wrapper>
  );
};

export default Select;
