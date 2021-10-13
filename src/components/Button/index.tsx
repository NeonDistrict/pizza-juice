import React, { ButtonHTMLAttributes } from 'react';

import theme from 'styles/theme';

import { ButtonStyles } from './styles';

export type ButtonProps = {
  variant?: 'solid' | 'outline' | 'icon';
  color?: keyof typeof theme.colors;
  size?: 'medium' | 'large';
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
      color = 'darkPink',
      size = 'medium',
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
