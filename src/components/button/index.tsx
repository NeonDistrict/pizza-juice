import React from 'react';

import { VariantProps, CSS } from '../../system';

import { forwardRef } from '../../utils/forwardRef';

import * as S from './styles';

export type ButtonProps = {
  /**
   * Variant style of the button
   * @default "primary"
   */
  variant?: VariantProps<typeof S.Button>['variant'];
  /**
   * Shape of the button
   * @default "squared"
   */
  shape?: VariantProps<typeof S.Button>['shape'];
  /**
   * If `true` button should be full width
   * @default "false"
   */
  fluid?: VariantProps<typeof S.Button>['fluid'];
  /**
   * If `true`, the button will show a spinner.
   * @default "false"
   */
  loading?: boolean;
  /**
   * The style of button
   * Can be `solid`, `outlined` or `naked`
   * @default "solid"
   */
  style?: VariantProps<typeof S.Button>['style'];
  /**
   * Add an icon beside text
   */
  icon?: React.ReactNode;
  /**
   * Position of the icon
   * @default "left"
   */
  iconPosition?: 'left' | 'right';
  /**
   * CSS properties
   */
  css?: CSS;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Button component
 *
 * @description used to trigger an action or event.
 */
export const Button = forwardRef<ButtonProps, 'button'>((props, ref) => {
  const {
    type = 'button',
    icon,
    iconPosition = 'left',
    loading,
    children,
    ...rest
  } = props;

  return (
    <S.Button
      ref={ref}
      type={type}
      onlyIcon={!!icon && !children}
      loading={loading}
      {...rest}
    >
      {icon && iconPosition === 'left' && icon}

      {children && <span>{children}</span>}

      {loading && <S.Spinner />}

      {icon && iconPosition === 'right' && icon}
    </S.Button>
  );
});
