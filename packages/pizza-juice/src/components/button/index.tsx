import React from 'react';

import { VariantProps, CSS } from '../../system';

import { cx, forwardRef } from '../../utils';

import * as S from './styles';

export type ButtonProps = {
  /**
   * Variant color of the button
   * @default "primary"
   */
  color?: VariantProps<typeof S.Button>['color'];
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
   * Can be `solid`, `outlined`, `naked` or `unstyled`
   * @default "solid"
   */
  variant?: VariantProps<typeof S.Button>['variant'];
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
    className,
    children,
    ...rest
  } = props;

  return (
    <S.Button
      ref={ref}
      className={cx('button', className)}
      type={type}
      onlyIcon={!!icon && !children}
      loading={loading}
      {...rest}
    >
      {icon && iconPosition === 'left' && (
        <>
          {React.cloneElement(icon as React.ReactElement, {
            className: 'button-icon__left',
          })}
        </>
      )}

      {children && <span>{children}</span>}

      {loading && <S.Spinner />}

      {icon && iconPosition === 'right' && (
        <>
          {React.cloneElement(icon as React.ReactElement, {
            className: 'button-icon__right',
          })}
        </>
      )}
    </S.Button>
  );
});
