import React from 'react';

import type * as CheckboxBase from '@radix-ui/react-checkbox';

import { AiOutlineCheck } from 'react-icons/ai';

import { Wrapper, Label, CheckboxInput, CheckboxIndicator } from './styles';

export type CheckboxProps = {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
} & CheckboxBase.CheckboxProps;

const Checkbox = ({
  defaultChecked,
  value,
  size = 'md',
  children
}: CheckboxProps) => {
  const iconSizes = {
    sm: '10',
    md: '12',
    lg: '15'
  };

  return (
    <Wrapper>
      <CheckboxInput
        id={`checkbox-${value}`}
        value={value}
        size={size}
        defaultChecked={defaultChecked}
      >
        <CheckboxIndicator>
          <AiOutlineCheck size={iconSizes[size]} />
        </CheckboxIndicator>
      </CheckboxInput>

      <Label htmlFor={`checkbox-${value}`} size={size}>
        {children}
      </Label>
    </Wrapper>
  );
};

export default Checkbox;
