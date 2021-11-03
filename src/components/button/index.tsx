import React from 'react';

import { VariantProps, CSS } from '../../system';

import * as S from './styles';

export type ButtonProps = {
  /**
   * Variant style of the button
   * @default "primary"
   */
  variant?: VariantProps<typeof S.Button>['variant'];
  /**
   * Size of the button
   * @default "md"
   */
  size?: VariantProps<typeof S.Button>['size'];
  /**
   * Shape of the button
   * @default "squared"
   */
  shape?: VariantProps<typeof S.Button>['shape'];
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
   * Button text
   */
  children?: React.ReactNode;
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
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { type = 'button', icon, iconPosition = 'left', children, ...props },
    ref
  ) => {
    return (
      <S.Button ref={ref} type={type} {...props}>
        {icon && iconPosition === 'left' && icon}

        {children && <span>{children}</span>}

        {icon && iconPosition === 'right' && icon}
      </S.Button>
    );
  }
);
