import React from 'react';
import { LabelStyles } from './styles';

export type LabelProps = {
  children: React.ReactNode;
  size: 'sm' | 'md' | 'lg';
};

const Label = ({ children, size = 'md' }: LabelProps) => {
  return <LabelStyles size={size}>{children}</LabelStyles>;
};

export default Label;
