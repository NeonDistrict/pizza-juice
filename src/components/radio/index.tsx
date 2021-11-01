import React from 'react';

import type * as RadioGroupBase from '@radix-ui/react-radio-group';

import {
  RadioInputGroup,
  RadioIndicator,
  RadioInputItem,
  Wrapper,
  Label
} from './styles';

export type RadioGroupProps = {
  /**
   *
   */
  direction?: 'row' | 'column';
  /**
   *
   */
  label?: string;
  /**
   *
   */
  children?: React.ReactNode;
} & RadioGroupBase.RadioGroupProps;

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    { direction = 'column', label, children, ...props }: RadioGroupProps,
    ref
  ) => {
    return (
      <RadioInputGroup
        ref={ref}
        aria-label={label}
        direction={direction}
        {...props}
      >
        {children}
      </RadioInputGroup>
    );
  }
);

export type RadioItemProps = {
  children?: React.ReactNode;
} & RadioGroupBase.RadioGroupItemProps;

const RadioItem = ({ value, children, ...props }: RadioItemProps) => {
  return (
    <Wrapper>
      <RadioInputItem value={value} id={`radio-${value}`} {...props}>
        <RadioIndicator />
      </RadioInputItem>

      <Label htmlFor={`radio-${value}`}>{children}</Label>
    </Wrapper>
  );
};

export const Radio = () => {};

Radio.Group = RadioGroup;

Radio.Item = RadioItem;
