import React, { ButtonHTMLAttributes } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { ButtonStyles } from './styles';

export const iconVariants = {
  close: AiOutlineClose
};

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'destructive' | 'outline';
  size?: 'md' | 'lg';
  fluid?: boolean;
  rounded?: boolean;
  squared?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  icon?: keyof typeof iconVariants;
  iconPosition?: 'left' | 'right';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      variant = 'primary',
      size = 'md',
      children,
      icon,
      iconPosition = 'left',
      ...other
    },
    ref
  ) => {
    return (
      <ButtonStyles
        ref={ref}
        type={type}
        variant={variant}
        iconPosition={iconPosition}
        size={size}
        {...other}
      >
        {icon &&
          iconPosition == 'left' &&
          React.createElement(iconVariants[icon])}
        {children}
        {icon &&
          iconPosition == 'right' &&
          React.createElement(iconVariants[icon])}
      </ButtonStyles>
    );
  }
);

export default Button;
