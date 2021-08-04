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
}

export const Button = ({ label, ...other }: ButtonProps) => {
  return <ButtonStyles {...other}>{label}</ButtonStyles>;
};
