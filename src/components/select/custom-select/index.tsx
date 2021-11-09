import React from 'react';

import { ListboxInputProps } from '@reach/listbox';

import { SelectItemProps, SelectProps } from '..';

import { Flex } from '../../flex';

import { ChevronDownIcon } from '../icon';

import { HiBadgeCheck } from 'react-icons/hi';

import * as S from './styles';

type CustomSelectProps = Omit<SelectProps, 'items'> & ListboxInputProps;

/**
 * Custom Select component
 *
 * @description used in desktop version
 */
const CustomSelect = ({
  id,
  label,
  hint,
  error,
  variant,
  size,
  disabled,
  onChange,
  children,
}: CustomSelectProps) => {
  return (
    <S.Wrapper>
      {label && (
        <S.Label htmlFor={id} size={size}>
          {label}
        </S.Label>
      )}

      <S.SelectWrapper
        aria-labelledby={id}
        disabled={disabled}
        onChange={onChange}
      >
        <S.Select size={size} variant={variant} arrow={<ChevronDownIcon />} />

        <S.Popover>
          <S.List>{children}</S.List>
        </S.Popover>
      </S.SelectWrapper>

      {hint && <S.Hint disabled={disabled}>{hint}</S.Hint>}

      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
};

type CustomSelectItemProps = SelectItemProps;

const CustomSelectItem = ({ children, ...props }: CustomSelectItemProps) => {
  return (
    <S.Option {...props}>
      <Flex css={{ align: 'center' }}>
        <Flex css={{ mr: '$3' }}>
          <HiBadgeCheck />
        </Flex>

        {children}
      </Flex>
    </S.Option>
  );
};

export { CustomSelect, CustomSelectItem };
