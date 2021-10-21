import React, { ButtonHTMLAttributes } from 'react';

import { ButtonStyled } from './styles';

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'destructive' | 'outline' | 'naked';
  size?: 'md' | 'lg';
  fluid?: boolean;
  shape?: 'rounded' | 'squared';
  disabled?: boolean;
  children?: React.ReactNode;
  icon?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      variant = 'primary',
      size = 'md',
      children,
      shape,
      icon,
      ...other
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
        {...other}
      >
        {!shape && !icon && children}
      </ButtonStyled>
    );
  }
);

export default Button;
