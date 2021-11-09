import React from 'react';

import { useBreakpoint } from '../../hooks';

import {
  CustomSelect,
  CustomSelectProps,
  CustomSelectItem,
  CustomSelectItemProps,
} from './custom-select';

export type SelectProps = CustomSelectProps;

/**
 * Select component
 *
 * @description is a component that allows users pick a value from predefined options. Ideally, it should be used when there are more than 5 options, otherwise you might consider using a radio group instead.
 */
const Select = ({ children, ...props }: SelectProps) => {
  const isMobile = useBreakpoint('sm');

  return (
    <>
      {isMobile ? <CustomSelect {...props}>{children}</CustomSelect> : 'mobile'}
    </>
  );
};

type ItemProps = CustomSelectItemProps;

const SelectItem = ({ children, ...props }: ItemProps) => {
  const isMobile = useBreakpoint('sm');

  return (
    <>
      {isMobile ? (
        <CustomSelectItem {...props}>{children}</CustomSelectItem>
      ) : (
        'mobile'
      )}
    </>
  );
};

export { Select, SelectItem };
