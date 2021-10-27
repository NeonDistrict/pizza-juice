import React, { SelectHTMLAttributes } from 'react';

import {
  Wrapper,
  SelectStyled,
  Label,
  Message,
  Error,
  WrapperSelect
} from './styles';

const ChevronDownIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="1.5rem"
    height="1.5rem"
    focusable="false"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
    />
  </svg>
);

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

        <ChevronDownIcon />
      </WrapperSelect>

      <Message>{hint}</Message>

      <Error>{error}</Error>
    </Wrapper>
  );
};

export default Select;
