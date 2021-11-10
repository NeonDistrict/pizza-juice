import React from 'react';

import { useId, useBreakpoint } from '../../hooks';

import { CustomSelect, CustomSelectItem } from './custom-select';

import { NativeSelect, NativeSelectItem } from './native-select';

export type SelectProps = {
  items: {
    value: string;
    label: string;
  }[];
  /**
   * id of the select
   */
  id?: string;
  /**
   * Style of the select
   *
   * @default 'outline'
   */
  variant?: 'outline' | 'solid';
  /**
   * Size of the select
   *
   * @default 'default'
   */
  size?: 'tiny' | 'small' | 'default';
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
};

export type SelectItemProps = {
  /**
   * Value of the select item
   */
  value: string;
  /**
   * Option item to be shown in the select
   */
  children?: React.ReactNode;
};

/**
 * Select component
 *
 * @description is a component that allows users pick a value from predefined options. Ideally, it should be used when there are more than 5 options, otherwise you might consider using a radio group instead.
 */
const Select = ({ items, ...props }: SelectProps) => {
  const selectId = useId('select');
  const isMobile = useBreakpoint('sm');

  return (
    <>
      {isMobile ? (
        <CustomSelect id={selectId} {...props}>
          {items?.map((item) => (
            <CustomSelectItem key={item.value} value={item.value}>
              {item.label}
            </CustomSelectItem>
          ))}
        </CustomSelect>
      ) : (
        <NativeSelect id={selectId} {...props}>
          {items?.map((item) => (
            <NativeSelectItem key={item.value} value={item.value}>
              {item.label}
            </NativeSelectItem>
          ))}
        </NativeSelect>
      )}
    </>
  );
};

export { Select };
