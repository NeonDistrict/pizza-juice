import React, { HTMLAttributes } from 'react';
import { ButtonStyles } from './styles';

export type Size = 'medium' | 'large';
export type Variant =
  | 'primary'
  | 'basic'
  | 'standard'
  | 'secondary'
  | 'negative'
  | 'positive'
  | 'negative-basic'
  | 'positive-basic';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  size?: Size;
  fullWidth?: boolean;
  variant?: Variant;
  disabled?: boolean;
}

export const Button = ({
  label,
  variant = 'primary',
  size = 'medium',
  ...other
}: ButtonProps) => {
  return (
    <ButtonStyles type="button" variant={variant} size={size} {...other}>
      {label}
    </ButtonStyles>
  );
};
