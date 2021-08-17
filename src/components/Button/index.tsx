import React from 'react';
import { ButtonStyles } from './styles';

export type Size = 'medium' | 'large';
export type ButtonType =
  | 'primary'
  | 'basic'
  | 'standard'
  | 'secondary'
  | 'negative'
  | 'positive'
  | 'negative-basic'
  | 'positive-basic';

export interface ButtonProps {
  label?: string;
  size: Size;
  fullWidth?: boolean;
  buttonType: ButtonType;
  onClick?: any;
  className?: string;
}

export const Button = ({ label, className, ...other }: ButtonProps) => {
  return (
    <ButtonStyles className={className} {...other}>
      {label}
    </ButtonStyles>
  );
};
