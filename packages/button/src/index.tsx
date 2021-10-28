import React from 'react';

import { ButtonStyled } from './styles';

export type ButtonProps = {
  /**
   *
   * @default "primary"
   */
  variant?: 'primary' | 'secondary' | 'destructive' | 'outline' | 'naked';
  /**
   *
   * @default "md"
   */
  size?: 'sm' | 'md';
  /**
   *
   * @default "false"
   */
  fluid?: boolean;
  /**
   *
   * @default "squared"
   */
  shape?: 'squared' | 'rounded';
  /**
   *
   * @default "false"
   */
  disabled?: boolean;
  /**
   *
   */
  icon?: React.ReactNode;
  /**
   *
   * @default "left"
   */
  iconPosition?: 'left' | 'right';
  /**
   *
   */
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      type = 'button',
      variant = 'primary',
      size = 'md',
      shape = 'squared',
      icon,
      iconPosition = 'left',
      children
    } = props;

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
