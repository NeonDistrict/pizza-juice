import React, { ButtonHTMLAttributes } from 'react';

import { ButtonStyles } from './styles';

export type ButtonProps = {
  variant?: 'solid' | 'outline' | 'icon';
  size?: 'md' | 'lg';
  color?: 'primary' | 'success' | 'error' | 'warning';
  fluid?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      variant = 'solid',
      size = 'md',
      color = 'primary',
      children,
      ...other
    },
    ref
  ) => {
    return (
      <ButtonStyles
        ref={ref}
        type={type}
        variant={variant}
        color={color}
        size={size}
        {...other}
      >
        {children}
      </ButtonStyles>
    );
  }
);

export default Button;
