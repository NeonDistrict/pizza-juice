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
  label: string;
  size?: Size;
  fullWidth?: boolean;
  buttonType?: ButtonType;
  onClick?: any;
  disabled?: boolean
}

export const Button = ({ label, buttonType = 'primary', size = 'medium', ...other }: ButtonProps) => {
  return (
    <ButtonStyles buttonType={buttonType} size={size} {...other}>
      {label}
    </ButtonStyles>
  );
};
