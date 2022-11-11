import React from 'react';

import type * as RadioProps from '@radix-ui/react-radio-group';

import { cx, forwardRef } from '../../utils';

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
} & RadioProps.RadioGroupProps;

/**
 * Radio group component
 *
 * @description are used when only one choice may be selected in a series of options.
 *
 * @see https://www.radix-ui.com/docs/primitives/components/radio-group
 */
const RadioGroup = forwardRef<RadioGroupProps, 'div'>((props, ref) => {
  const { label, className, children, ...rest } = props;

  return (
    <S.RadioGroup
      ref={ref}
      className={cx('radio', className)}
      aria-label={label}
      {...rest}
    >
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
   * Radio item
   */
  children?: React.ReactNode;
  /**
   * CSS properties
   */
  css?: CSS;
} & RadioProps.RadioGroupItemProps;

/**
 * Radio item component
 *
 * @description used in radio group to display a single option.
 */
const RadioItem = forwardRef<RadioItemProps, 'input'>((props, ref) => {
  const { error, css, className, disabled, children, ...rest } = props;

  return (
    <S.Label disabled={disabled} error={error} css={css}>
      <S.RadioInputItem
        ref={ref}
        className={cx('radio-item', className)}
        error={error}
        disabled={disabled}
        {...rest}
      >
        <S.RadioIndicator />
      </S.RadioInputItem>

      {children}
    </S.Label>
  );
});

export { RadioGroup, RadioItem };
