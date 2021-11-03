import React from 'react';

import type { ToggleProps as TogglePropsBase } from '@radix-ui/react-toggle';

import * as S from './styles';

export type ToggleProps = {
  /**
   * Size of the toggle.
   *
   * @default "md"
   */
  // size?: 'xs' | 'sm' | 'md' | 'lg';
} & TogglePropsBase;

export const Toggle = ({ name }: ToggleProps) => {
  return (
    <S.Wrapper htmlFor={`toggle-${name}`}>
      <S.ToggleInput id={`toggle-${name}`} name={name} />
      <S.ToggleSlider />
    </S.Wrapper>
  );
};
