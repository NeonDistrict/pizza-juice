import React from 'react';

import type { ToggleProps as TogglePropsBase } from '@radix-ui/react-toggle';

import { Wrapper, ToggleInput, ToggleSlider } from './styles';

export type ToggleProps = {
  /**
   *
   */
  name?: string;
  /**
   *
   * @default "md"
   */
  size?: 'xs' | 'sm' | 'md' | 'lg';
} & TogglePropsBase;

export const Toggle = ({ name, ...props }: ToggleProps) => {
  return (
    <Wrapper htmlFor={`toggle-${name}`}>
      <ToggleInput id={`toggle-${name}`} name={name} {...props} />
      <ToggleSlider />
    </Wrapper>
  );
};
