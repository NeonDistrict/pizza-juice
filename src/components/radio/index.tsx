import React from 'react';

import type * as RadioProps from '@radix-ui/react-radio-group';

import { VariantProps, CSS } from '../../system';

import * as S from './styles';

export type RadioGroupProps = {
  /**
   * Radio group direction
   *
   * @default "column"
   */
  direction?: VariantProps<typeof S.RadioInputGroup>['direction'];
  /**
   * Show radio group label
   */
  label?: string;
  /**
   * Item of radio group
   */
  children?: React.ReactNode;
  /**
   * CSS properties
   */
  css?: CSS;
} & RadioProps.RadioGroupProps;

/**
 * Radio group component
 *
 * @description are used when only one choice may be selected in a series of options.
 */
const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ label, children, ...props }: RadioGroupProps, ref) => {
    return (
      <S.RadioInputGroup ref={ref} aria-label={label} {...props}>
        {children}
      </S.RadioInputGroup>
    );
  }
);

export type RadioItemProps = {
  /**
   * Radio item
   */
  children?: React.ReactNode;
  /**
   * CSS properties
   */
  css?: CSS;
} & RadioProps.RadioGroupItemProps;

const RadioItem = ({ children, ...props }: RadioItemProps) => {
  return (
    <S.Wrapper>
      <S.RadioInputItem {...props}>
        <S.RadioIndicator />
      </S.RadioInputItem>

      <S.Label>{children}</S.Label>
    </S.Wrapper>
  );
};

export { RadioGroup, RadioItem };
