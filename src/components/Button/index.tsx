import React, { ButtonHTMLAttributes } from 'react';
import { ButtonStyles } from './styles';

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'destructive' | 'outline' | 'naked';
  size?: 'md' | 'lg';
  fluid?: boolean;
  rounded?: boolean;
  squared?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { type = 'button', variant = 'primary', size = 'md', children, ...other },
    ref
  ) => {
    return (
      <ButtonStyles
        ref={ref}
        type={type}
        variant={variant}
        size={size}
        {...other}
      >
        {children}
      </ButtonStyles>
    );
  }
);

export default Button;
