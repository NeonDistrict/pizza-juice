import React from 'react';

import type * as RadioProps from '@radix-ui/react-radio-group';

import { forwardRef } from '../../utils';

import { CSS } from '../../system';

import * as S from './styles';

export type RadioGroupProps = {
  /**
   * Description of the radio group
   */
  label: string;
  /**
   * CSS properties
   */
  css?: CSS;
  /**
   * Item of radio group
   */
  children?: React.ReactNode;
} & RadioProps.RadioGroupProps;

/**
 * Radio group component
 *
 * @description are used when only one choice may be selected in a series of options.
 *
 * @see https://www.radix-ui.com/docs/primitives/components/radio-group
 */
const RadioGroup = forwardRef<RadioGroupProps, 'div'>((props, ref) => {
  const { label, children, ...rest } = props;

  return (
    <S.RadioGroup ref={ref} aria-label={label} {...rest}>
      {children}
    </S.RadioGroup>
  );
});

export type RadioItemProps = {
  /**
   * Contains a error
   */
  error?: boolean;
  /**
   * CSS properties
   */
  css?: CSS;
  /**
   * Radio item
   */
  children?: React.ReactNode;
} & RadioProps.RadioGroupItemProps;

/**
 * Radio item component
 *
 * @description used in radio group to display a single option.
 */
const RadioItem = forwardRef<RadioItemProps, 'input'>((props, ref) => {
  const { error, css, children, disabled, ...rest } = props;

  return (
    <S.Label disabled={disabled} error={error} css={css}>
      <S.RadioInputItem ref={ref} error={error} disabled={disabled} {...rest}>
        <S.RadioIndicator />
      </S.RadioInputItem>

      {children}
    </S.Label>
  );
});

export { RadioGroup, RadioItem };
