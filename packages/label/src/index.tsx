import React from 'react';

import { LabelStyles, Text } from './styles';

export type LabelProps = {
  /**
   *
   */
  children: React.ReactNode;
  /**
   *
   *
   * @default "success"
   */
  variant?: 'success' | 'danger' | 'warning';
  /**
   *
   *
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
