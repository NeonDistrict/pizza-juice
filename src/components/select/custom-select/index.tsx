import React from 'react';

import { ListboxInputProps, ListboxOptionProps } from '@reach/listbox';

import { VariantProps } from '../../../system';

import { useId } from '../../../hooks';

import { ChevronDownIcon } from '../icon';

import * as S from './styles';

export type CustomSelectProps = {
  /**
   * Style of the select
   *
   * @default 'solid'
   */
  variant?: VariantProps<typeof S.Button>['variant'];
  /**
   * Size of the select
   *
   * @default 'md'
   */
  size?: VariantProps<typeof S.Button>['size'];
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
   * Options to be shown in the select
   */
  children?: React.ReactNode;
} & ListboxInputProps;

/**
 * Custom Select component
 *
 * @description used in desktop version
 */
const CustomSelect = ({
  label,
  hint,
  error,
  variant,
  size,
  disabled,
  onChange,
  children,
}: CustomSelectProps) => {
  const selectId = useId('select');

  return (
    <S.Wrapper>
      {label && (
        <S.Label id={selectId} size={size}>
          {label}
        </S.Label>
      )}

      <S.SelectWrapper
        aria-labelledby={selectId}
        disabled={disabled}
        onChange={onChange}
      >
        <S.Button size={size} variant={variant} arrow={<ChevronDownIcon />} />

        <S.Popover>
          <S.List>{children}</S.List>
        </S.Popover>
      </S.SelectWrapper>

      {hint && <S.Hint disabled={disabled}>{hint}</S.Hint>}

      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
};

export type CustomSelectItemProps = {
  /**
   * Option item to be shown in the select
   */
  children?: React.ReactNode;
} & Omit<ListboxOptionProps, 'label'>;

const CustomSelectItem = ({ children, ...props }: CustomSelectItemProps) => {
  return <S.Option {...props}>{children}</S.Option>;
};

export { CustomSelect, CustomSelectItem };
