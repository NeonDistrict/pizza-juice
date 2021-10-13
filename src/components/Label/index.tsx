import React from 'react';
import { LabelStyles, Text } from './styles';

export type LabelProps = {
  children: React.ReactNode;
  variant?: 'success' | 'danger' | 'warning';
};

const Label = ({ children, variant = 'success' }: LabelProps) => {
  return (
    <LabelStyles variant={variant}>
      <Text>{children}</Text>
    </LabelStyles>
  );
};

export default Label;
