import React from 'react';

import type * as CheckboxBase from '@radix-ui/react-checkbox';

import { AiOutlineCheck } from 'react-icons/ai';

import { Wrapper, Label, CheckboxInput, CheckboxIndicator } from './styles';

export type CheckboxProps = {
  /**
   * Checkbox size, default value `md`
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Checkbox text
   */
  children: React.ReactNode;
} & CheckboxBase.CheckboxProps;

/**
 * Checkbox component made with Radix-UI
 *
 * To check all props
 * @see https://www.radix-ui.com/docs/primitives/components/checkbox
 */
const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ defaultChecked, value, size = 'md', children, ...props }, ref) => {
    const iconSizes = {
      sm: '10',
      md: '12',
      lg: '15'
    };

    return (
      <Wrapper>
        <CheckboxInput
          ref={ref}
          id={`checkbox-${value}`}
          value={value}
          size={size}
          defaultChecked={defaultChecked}
          {...props}
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
  }
);

export default Checkbox;
