import React from 'react';

import { ButtonStyled } from './styles';

export type ButtonProps = {
  /**
   * Variant style of the button
   * @default "primary"
   */
  variant?: 'primary' | 'secondary' | 'destructive' | 'outline' | 'naked';
  /**
   * Size of the button
   * @default "md"
   */
  size?: 'sm' | 'md';
  /**
   * if `true` add "width:100%" to button
   * @default "false"
   */
  fluid?: boolean;
  /**
   * Shape of the button
   * @default "squared"
   */
  shape?: 'squared' | 'rounded';
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
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Button component
 *
 * @description used to trigger an action or event.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      variant = 'primary',
      size = 'md',
      shape = 'squared',
      icon,
      iconPosition = 'left',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <ButtonStyled
        ref={ref}
        type={type}
        variant={variant}
        size={size}
        shape={shape}
        {...props}
      >
        {icon && iconPosition === 'left' && icon}

        {children && <span>{children}</span>}

        {icon && iconPosition === 'right' && icon}
      </ButtonStyled>
    );
  }
);
