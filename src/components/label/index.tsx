import React from 'react';
import { LabelStyles, Text } from './styles';

export type LabelProps = {
  /**
   *
   */
  children: React.ReactNode;
  /**
   *
   */
  variant?: 'success' | 'danger' | 'warning';
  /**
   *
   * @default "success"
   */
  icon?: React.ReactNode;
};

export const Label = ({ children, icon, variant = 'success' }: LabelProps) => {
  return (
    <LabelStyles variant={variant}>
      {icon && icon}
      <Text>{children}</Text>
    </LabelStyles>
  );
};
